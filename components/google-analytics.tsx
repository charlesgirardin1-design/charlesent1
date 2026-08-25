"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import {
  CONSENT_CHANGE_EVENT,
  type ConsentChoice,
  getStoredConsent,
} from "@/lib/consent";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function GoogleAnalytics() {
  const [consent, setConsent] = useState<ConsentChoice | null>(null);

  useEffect(() => {
    setConsent(getStoredConsent());
    function handleChange(e: Event) {
      setConsent((e as CustomEvent<ConsentChoice>).detail);
    }
    window.addEventListener(CONSENT_CHANGE_EVENT, handleChange);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, handleChange);
  }, []);

  if (!GA_MEASUREMENT_ID || consent !== "accepted") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
