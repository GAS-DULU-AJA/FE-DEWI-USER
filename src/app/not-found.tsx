import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { StatusPageShell } from "@/components/feedback/StatusPageShell";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <StatusPageShell
      badge="404 / Not Found"
      title="This trail ends before the village begins."
      description="The page you requested is no longer here or may never have existed. Continue from the homepage or browse available destinations."
      actions={
        <>
          <Link
            href="/"
            className={buttonVariants({
              className:
                "h-12 rounded-full bg-[linear-gradient(180deg,#2d6a4f_0%,#1f5e44_100%)] px-6 text-on-primary shadow-[0_12px_30px_rgba(45,106,79,0.16)] hover:opacity-90",
            })}
          >
            <Home className="size-4" />
            Back to home
          </Link>

          <Link
            href="/destinations"
            className={buttonVariants({
              variant: "secondary",
              className:
                "h-12 rounded-full bg-secondary-container px-6 text-on-secondary-container hover:bg-secondary-container/85",
            })}
          >
            <ArrowLeft className="size-4" />
            Browse destinations
          </Link>
        </>
      }
    />
  );
}
