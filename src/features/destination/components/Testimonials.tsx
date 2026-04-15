import type { Testimonial } from "../types";

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Mitchell",
    role: "Travel Photographer, Australia",
    avatar: "SM",
    content:
      "VilaVerde helped me discover villages I never would have found on my own. The Ubud trek was transformative — the people, the landscapes, the food. I've already booked my second trip.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Kenji Yamamoto",
    role: "Cultural Researcher, Japan",
    avatar: "KY",
    content:
      "The pottery masterclass in Sidemen was unlike any cultural experience I've had. The artisan's knowledge spanning generations was humbling. Truly sustainable tourism done right.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Amara Diallo",
    role: "Sustainable Tourism Advocate, France",
    avatar: "AD",
    content:
      "I was impressed by how VilaVerde ensures revenue stays in the local community. The Bamboo Haven was comfortable, authentic, and our host family made us feel like family.",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-yellow-500 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-on-surface mb-4 font-headline">
            Stories from Our Travelers
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Real experiences from people who discovered the soul of Indonesia
            through VilaVerde.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_12px_40px_rgba(45,51,53,0.06)]"
            >
              <StarRating rating={t.rating} />
              <p className="mt-6 text-on-surface leading-relaxed">
                &ldquo;{t.content}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold font-headline text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-on-surface">{t.name}</p>
                  <p className="text-sm text-on-surface-variant">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
