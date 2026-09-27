"use client";

export function ConfirmButton({ children, message = "This is a mock action. Continue?", className = "" }: { children: React.ReactNode; message?: string; className?: string }) {
  return <button className={className} type="button" onClick={() => window.confirm(message)}>{children}</button>;
}
