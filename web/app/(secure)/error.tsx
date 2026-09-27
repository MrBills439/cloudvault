"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // TODO(Azure): Send production errors to the monitoring architecture.
    console.error(error);
  }, [error]);

  return <section className="error-state" role="alert" aria-labelledby="workspace-error-title"><p className="eyebrow">SYSTEM NOTICE / REQUEST FAILED</p><h1 id="workspace-error-title">Unable to load this workspace.</h1><p>Try again. If the issue continues, contact the IT service desk.</p>{error.digest && <p className="error-reference">REFERENCE: {error.digest}</p>}<div className="button-row"><button className="primary-button" type="button" onClick={reset}>TRY AGAIN</button></div></section>;
}
