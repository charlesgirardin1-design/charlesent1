const blobs = [
  { top: "2%", left: "4%", size: 560, color: "bg-accent-blue/45", duration: "22s", delay: "0s" },
  { top: "16%", right: "6%", size: 480, color: "bg-accent-violet/45", duration: "26s", delay: "-4s" },
  { top: "32%", left: "8%", size: 500, color: "bg-accent-cyan/35", duration: "24s", delay: "-8s" },
  { top: "48%", right: "4%", size: 560, color: "bg-accent-blue/35", duration: "28s", delay: "-2s" },
  { top: "64%", left: "6%", size: 480, color: "bg-accent-violet/35", duration: "23s", delay: "-10s" },
  { top: "80%", right: "8%", size: 520, color: "bg-accent-cyan/35", duration: "27s", delay: "-6s" },
  { top: "94%", left: "30%", size: 460, color: "bg-accent-blue/35", duration: "25s", delay: "-14s" },
];

export function AmbientBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {blobs.map((b, i) => (
        <span
          key={i}
          className={`absolute rounded-full blur-[130px] ambient-blob ${b.color}`}
          style={{
            top: b.top,
            left: b.left,
            right: b.right,
            width: b.size,
            height: b.size,
            animationDuration: b.duration,
            animationDelay: b.delay,
          }}
        />
      ))}
    </div>
  );
}
