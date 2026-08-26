"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useTheme } from "next-themes";
import * as THREE from "three";
import { createNoise2D } from "simplex-noise";

// Dimensions du plan terrain (unités monde) et densité de la grille fil de fer.
// Un compromis densité/perf : assez fin pour un relief lisible, assez léger
// pour recalculer le bruit sur chaque sommet à 60fps sans re-render React.
const WIDTH = 140;
const DEPTH = 260;
const SEGMENTS_X = 70;
const SEGMENTS_Z = 110;

function Terrain({
  scrollBoost,
  color,
}: {
  scrollBoost: React.MutableRefObject<number>;
  color: string;
}) {
  const noise2D = useMemo(() => createNoise2D(), []);
  const offsetZ = useRef(0);

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(WIDTH, DEPTH, SEGMENTS_X, SEGMENTS_Z);
    geo.rotateX(-Math.PI / 2);
    return geo;
  }, []);

  useEffect(() => () => geometry.dispose(), [geometry]);

  useFrame((_, delta) => {
    const positions = geometry.attributes.position as THREE.BufferAttribute;
    // Vitesse de base + accélération temporaire proportionnelle au scroll,
    // qui se dissipe naturellement (decay) une fois le défilement arrêté.
    const speed = 5 + scrollBoost.current * 55;
    offsetZ.current += delta * speed;

    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const z = positions.getZ(i);
      const nx = x * 0.05;
      const nz = (z + offsetZ.current) * 0.05;
      const height =
        noise2D(nx, nz) * 4.2 + noise2D(nx * 2.4, nz * 2.4) * 1.4;
      positions.setY(i, height);
    }
    positions.needsUpdate = true;
    geometry.computeVertexNormals();

    scrollBoost.current *= 0.92;
  });

  return (
    <mesh geometry={geometry} position={[0, -3.5, -20]}>
      <meshBasicMaterial color={color} wireframe transparent opacity={0.5} />
    </mesh>
  );
}

function CameraRig() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    function handlePointerMove(e: PointerEvent) {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    }
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  useFrame(() => {
    camera.position.x += (mouse.current.x * 3 - camera.position.x) * 0.02;
    camera.position.y += (5 - mouse.current.y * 1.5 - camera.position.y) * 0.02;
    camera.lookAt(0, -3, -40);
  });

  return null;
}

export function ScrollTerrain({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) {
  const scrollBoost = useRef(0);
  const lastScrollY = useRef(0);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    function handleScroll() {
      const y = window.scrollY;
      const delta = Math.abs(y - lastScrollY.current);
      scrollBoost.current = Math.min(scrollBoost.current + delta * 0.015, 3);
      lastScrollY.current = y;
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Le fond du canvas est transparent (alpha:true) et laisse voir le fond CSS
  // du conteneur (déjà thémé). Le fog doit tout de même correspondre à ce
  // fond pour que les lignes lointaines s'y fondent proprement.
  const isLight = mounted && resolvedTheme === "light";
  const fogColor = isLight ? "#f7f7f8" : "#050505";
  const lineColor = color ?? (isLight ? "#2f5fd6" : "#4f7dff");

  return (
    <div className={className} aria-hidden="true">
      <Canvas
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <PerspectiveCamera makeDefault position={[0, 5, 12]} fov={55} near={0.1} far={160} />
        <fog attach="fog" args={[fogColor, 18, 75]} />
        <Terrain scrollBoost={scrollBoost} color={lineColor} />
        <CameraRig />
      </Canvas>
    </div>
  );
}
