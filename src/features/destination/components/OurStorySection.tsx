import Image from "next/image";

export function OurStorySection() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto bg-surface">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left: image + quote */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary-container rounded-xl -z-10" />
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS6w-K59zHOMCi0yjqHHqNKF2Yt9-aG4OI_w_zYL-pn7yZEXJ8YqEH7calst8UdZjJR-byUjTt0UHXmM3GMzaXnsXffmMP7bDmZSlXu2GnECnFxnwSrPBBRj_4VncU4mRzLqjZMGT87jsCvhdW27VQyn_tPdGiBVNVjIwXFYoPsVkszpvLGQlMy4ATAtOQ3EuxyKCdZxgIEC-p29zuqUUR3y5sZYS_8KN4HmBLAqz3SN5NQ-iQac2BDxNkt2HtKYbqpZZV2bz3KFA"
            alt="Local village elder sharing traditional weaving techniques with travelers"
            width={600}
            height={750}
            className="w-full aspect-4/5 object-cover rounded-xl shadow-[0_12px_40px_rgba(45,51,53,0.06)]"
            unoptimized
          />
          <div className="absolute -bottom-8 -right-8 p-8 bg-primary text-on-primary rounded-xl max-w-xs shadow-xl hidden lg:block">
            <p className="font-headline italic text-lg leading-relaxed">
              &ldquo;Preserving heritage while empowering the hearts of our
              local communities.&rdquo;
            </p>
          </div>
        </div>

        {/* Right: text + stats */}
        <div className="space-y-8">
          <div className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-sm font-semibold tracking-wide">
            OUR PHILOSOPHY
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface leading-tight font-headline">
            Our Story: Curating Village Sanctuaries
          </h2>

          <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
            VilaVerde was born from a desire to bridge the gap between global
            travelers and the untouched beauty of Indonesia&apos;s rural
            landscapes. We believe in sustainable tourism that fosters genuine
            connection.
          </p>

          <div className="grid grid-cols-2 gap-8 py-4">
            <div className="space-y-2">
              <h4 className="text-3xl font-bold text-primary font-headline">
                45+
              </h4>
              <p className="text-sm font-medium text-on-surface-variant uppercase tracking-widest">
                Active Villages
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-3xl font-bold text-primary font-headline">
                12k+
              </h4>
              <p className="text-sm font-medium text-on-surface-variant uppercase tracking-widest">
                Memories Made
              </p>
            </div>
          </div>

          <button className="flex items-center gap-2 text-primary font-bold group">
            Learn about our impact
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
