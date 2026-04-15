import type { DestinationEvent } from "../types";

interface UpcomingEventsSectionProps {
  events: DestinationEvent[];
}

export function UpcomingEventsSection({ events }: UpcomingEventsSectionProps) {
  if (events.length === 0) {
    return null;
  }

  return (
    <section className="bg-surface-container-low py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-on-surface font-headline">
            Upcoming Events
          </h2>
          <p className="text-on-surface-variant mt-2">
            Join upcoming community celebrations and workshops.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <article
              key={event.id}
              className="bg-surface-container-lowest rounded-2xl p-6 flex gap-5 items-start"
            >
              <div className="bg-primary-container rounded-xl px-4 py-3 min-w-[80px] text-center">
                <span className="block text-2xl font-black text-on-primary-container">
                  {event.day}
                </span>
                <span className="block text-[10px] uppercase tracking-wider font-bold text-on-primary-container/80">
                  {event.month}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-on-surface font-headline mb-1">
                  {event.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {event.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
