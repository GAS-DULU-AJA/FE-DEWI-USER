import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/utils";
import type { Destination } from "../types";

interface BookingCTAProps {
  destination: Destination;
}

export function BookingCTA({ destination }: BookingCTAProps) {
  const booking = destination.booking;

  return (
    <aside className="bg-surface-container-low rounded-[24px] p-6 md:p-8 md:sticky md:top-24 space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-2">
          Booking CTA
        </p>
        <h2 className="text-2xl font-bold text-on-surface font-headline mb-2">
          Plan Your Village Visit
        </h2>
        <p className="text-on-surface-variant">
          Reserve your guided experience with local hosts and curated
          activities.
        </p>
      </div>

      <div className="bg-surface-container-lowest rounded-2xl p-5 space-y-3">
        <div className="flex items-baseline justify-between gap-3">
          <span className="text-sm text-on-surface-variant">Starting from</span>
          <strong className="text-2xl text-primary font-headline">
            {formatCurrency(destination.price ?? 0)}
          </strong>
        </div>

        {booking ? (
          <>
            <p className="text-sm text-on-surface-variant">
              Duration:{" "}
              <span className="text-on-surface font-medium">
                {booking.duration}
              </span>
            </p>
            <p className="text-sm text-on-surface-variant">
              Group size:{" "}
              <span className="text-on-surface font-medium">
                {booking.groupSize}
              </span>
            </p>
            <ul className="space-y-1.5">
              {booking.includes.map((item) => (
                <li key={item} className="text-sm text-on-surface-variant">
                  • {item}
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </div>

      <Button className="w-full h-11 rounded-full bg-primary text-on-primary hover:opacity-90">
        Book Experience
      </Button>
    </aside>
  );
}
