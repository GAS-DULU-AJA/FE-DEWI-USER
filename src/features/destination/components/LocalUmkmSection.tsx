import Image from "next/image";
import type { DestinationLocalProduct } from "../types";

interface LocalUmkmSectionProps {
  products: DestinationLocalProduct[];
}

export function LocalUmkmSection({ products }: LocalUmkmSectionProps) {
  if (products.length === 0) {
    return null;
  }

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
      <div className="flex items-center gap-3 mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-on-surface font-headline">
          Local UMKM Showcase
        </h2>
        <span className="rounded-full bg-primary/10 text-primary px-3 py-1 text-[10px] uppercase tracking-wider font-bold">
          Support Local
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <article key={product.id} className="space-y-3">
            <div className="aspect-square rounded-2xl overflow-hidden bg-surface-container-low">
              <Image
                src={product.image}
                alt={product.name}
                width={520}
                height={520}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
            <div>
              <h3 className="font-bold text-on-surface font-headline">
                {product.name}
              </h3>
              <p className="text-sm text-on-surface-variant mt-1">
                {product.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
