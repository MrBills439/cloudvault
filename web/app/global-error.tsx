"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // TODO(Azure): Send production errors to the monitoring architecture.
    console.error(error);
  }, [error]);

  return <html lang="en"><body style={{ margin: 0, background: "#f7f7f4", color: "#151515", fontFamily: "Arial, Helvetica, sans-serif" }}><main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: "24px" }}><section style={{ maxWidth: "560px", border: "2px solid #151515", background: "#fff", padding: "28px" }} role="alert" aria-labelledby="global-error-title"><p style={{ margin: 0, font: "700 11px monospace", letterSpacing: ".08em" }}>CLOUDVAULT / SYSTEM NOTICE</p><h1 id="global-error-title" style={{ fontSize: "32px", letterSpacing: "-.05em", margin: "12px 0" }}>Something went wrong.</h1><p style={{ lineHeight: 1.5 }}>The application could not complete this request. Try again to recover.</p>{error.digest && <p style={{ font: "700 11px monospace" }}>REFERENCE: {error.digest}</p>}<button type="button" onClick={reset} style={{ border: "2px solid #151515", background: "#1557ff", color: "#fff", padding: "10px 14px", fontWeight: 800 }}>TRY AGAIN</button></section></main></body></html>;
}
