import type { ReactNode } from "react";
import Link from "next/link";
import { Compass, Home } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface StatusPageShellProps {
  badge: string;
  title: string;
  description: string;
  actions?: ReactNode;
  tone?: "default" | "error";
}

export function StatusPageShell({
  badge,
  title,
  description,
  actions,
  tone = "default",
}: StatusPageShellProps) {
  const isError = tone === "error";

  return (
    <main className="relative min-h-screen overflow-hidden bg-surface text-on-surface">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(177,240,206,0.55),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(218,232,190,0.75),_transparent_38%),linear-gradient(180deg,_#f8f9fa_0%,_#f1f4f5_100%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="font-headline text-2xl font-bold tracking-[-0.02em] text-primary"
          >
            Desa Wisata
          </Link>

          <Link
            href="/destinations"
            className={buttonVariants({
              variant: "ghost",
              className:
                "rounded-full px-5 text-on-surface hover:bg-surface-container-low",
            })}
          >
            <Compass className="size-4" />
            Explore destinations
          </Link>
        </header>

        <div className="flex flex-1 items-center py-12 sm:py-16">
          <section className="grid w-full gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,420px)] lg:gap-14">
            <div className="space-y-6">
              <span
                className={cn(
                  "inline-flex rounded-full px-4 py-2 font-body text-sm font-semibold tracking-[0.08em] uppercase",
                  isError
                    ? "bg-[rgba(250,116,111,0.18)] text-on-error-container"
                    : "bg-secondary-container text-on-secondary-container",
                )}
              >
                {badge}
              </span>

              <div className="max-w-3xl space-y-5">
                <h1 className="font-headline text-5xl leading-[1.02] font-semibold tracking-[-0.04em] text-on-surface sm:text-6xl lg:text-7xl">
                  {title}
                </h1>
                <p className="max-w-2xl font-body text-lg leading-8 text-on-surface-variant sm:text-xl">
                  {description}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">{actions}</div>
            </div>

            <aside className="relative overflow-hidden rounded-[32px] bg-surface-container-lowest p-8 shadow-[0_12px_40px_rgba(45,51,53,0.06)] sm:p-10">
              <div
                className={cn(
                  "absolute inset-x-0 top-0 h-32",
                  isError
                    ? "bg-[linear-gradient(180deg,rgba(250,116,111,0.22),rgba(250,116,111,0))]"
                    : "bg-[linear-gradient(180deg,rgba(177,240,206,0.28),rgba(177,240,206,0))]",
                )}
              />

              <div className="relative space-y-8">
                <div
                  className={cn(
                    "flex size-16 items-center justify-center rounded-full shadow-[0_12px_30px_rgba(45,51,53,0.08)]",
                    isError
                      ? "bg-[rgba(250,116,111,0.16)] text-on-error-container"
                      : "bg-primary text-on-primary",
                  )}
                >
                  {isError ? (
                    <span className="font-headline text-2xl font-semibold">!</span>
                  ) : (
                    <Home className="size-7" />
                  )}
                </div>

                <div className="space-y-4">
                  <h2 className="font-headline text-2xl font-semibold tracking-[-0.03em] text-on-surface">
                    A quieter path forward
                  </h2>
                  <p className="font-body leading-7 text-on-surface-variant">
                    We kept this state calm and clear so the experience still
                    feels intentional when a page is missing or something fails
                    unexpectedly.
                  </p>
                </div>

                <div className="grid gap-3 text-sm text-on-surface-variant sm:grid-cols-2">
                  <div className="rounded-2xl bg-surface-container-low p-4">
                    Return to the curated homepage and continue exploring.
                  </div>
                  <div className="rounded-2xl bg-surface-container-low p-4">
                    Visit destinations to jump back into the main journey.
                  </div>
                </div>
              </div>
            </aside>
          </section>
        </div>
      </div>
    </main>
  );
}
