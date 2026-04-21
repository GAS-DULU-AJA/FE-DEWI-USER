"use client";

import Link from "next/link";
import { Home, RefreshCcw } from "lucide-react";
import { StatusPageShell } from "@/components/feedback/StatusPageShell";
import { Button, buttonVariants } from "@/components/ui/button";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html lang="en">
      <body>
        <StatusPageShell
          badge="Application Error"
          title="The experience slipped out of step."
          description={
            error.digest
              ? `Something unexpected interrupted this page. You can retry now or return to the homepage. Reference: ${error.digest}.`
              : "Something unexpected interrupted this page. You can retry now or return to the homepage."
          }
          tone="error"
          actions={
            <>
              <Button
                onClick={reset}
                className="h-12 rounded-full bg-[linear-gradient(180deg,#2d6a4f_0%,#1f5e44_100%)] px-6 text-on-primary shadow-[0_12px_30px_rgba(45,106,79,0.16)] hover:opacity-90"
              >
                <RefreshCcw className="size-4" />
                Try again
              </Button>

              <Link
                href="/"
                className={buttonVariants({
                  variant: "secondary",
                  className:
                    "h-12 rounded-full bg-secondary-container px-6 text-on-secondary-container hover:bg-secondary-container/85",
                })}
              >
                <Home className="size-4" />
                Go home
              </Link>
            </>
          }
        />
      </body>
    </html>
  );
}
