import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/utils";
import type { Destination } from "../types";

interface BookingCTAProps {
  destination: Destination;
}

export function BookingCTA({ destination }: BookingCTAProps) {
  const booking = destination.booking;
  const practicalInfo = destination.practicalInfo;

  return (
    <aside className="md:sticky md:top-24 space-y-6">
      <div className="bg-surface-container-low rounded-[24px] p-6 md:p-8 space-y-6">
        <h3 className="text-xl font-bold text-on-surface font-headline">
          Informasi Praktis
        </h3>

        {practicalInfo ? (
          <div className="space-y-5">
            <div className="flex gap-3">
              <span className="material-symbols-outlined text-primary">
                map
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-on-surface-variant mb-1">
                  Alamat
                </p>
                <p className="text-sm text-on-surface">
                  {practicalInfo.address}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="material-symbols-outlined text-primary">
                call
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-on-surface-variant mb-1">
                  Contact
                </p>
                <p className="text-sm text-on-surface">{practicalInfo.phone}</p>
              </div>
            </div>

            {practicalInfo.socials.length > 0 ? (
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary">
                  share
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-on-surface-variant mb-1">
                    Social Media
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {practicalInfo.socials.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-sm text-primary font-semibold"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ) : null}

        <Button className="w-full h-11 rounded-full bg-primary text-on-primary hover:opacity-90">
          Book a Guided Tour
        </Button>
      </div>

      <div className="bg-surface-container-low rounded-[24px] p-6 md:p-8 space-y-5">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-2">
            Booking CTA
          </p>
          <h3 className="text-xl font-bold text-on-surface font-headline">
            Plan Your Village Visit
          </h3>
        </div>

        {booking ? (
          <div className="bg-surface-container-lowest rounded-2xl p-5 space-y-3">
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-sm text-on-surface-variant">
                Starting from
              </span>
              <strong className="text-2xl text-primary font-headline">
                {formatCurrency(destination.price ?? 0)}
              </strong>
            </div>
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
          </div>
        ) : null}
      </div>
    </aside>
  );
}
