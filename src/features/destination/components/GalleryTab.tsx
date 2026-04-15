import Image from "next/image";

interface GalleryTabProps {
  images: string[];
  title: string;
}

export function GalleryTab({ images, title }: GalleryTabProps) {
  const gallery = images.slice(0, 5);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-on-surface font-headline">
          Galeri Desa
        </h2>
        <p className="text-sm text-on-surface-variant mt-1">
          Capturing the soul of {title} through village moments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[560px]">
        <div className="rounded-2xl overflow-hidden">
          <Image
            src={gallery[0] ?? ""}
            alt={`${title} gallery image 1`}
            width={900}
            height={1200}
            className="w-full h-full min-h-[260px] object-cover"
            unoptimized
          />
        </div>

        <div className="grid grid-rows-2 gap-4">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src={gallery[1] ?? gallery[0] ?? ""}
              alt={`${title} gallery image 2`}
              width={900}
              height={600}
              className="w-full h-full min-h-[180px] object-cover"
              unoptimized
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={gallery[2] ?? gallery[0] ?? ""}
                alt={`${title} gallery image 3`}
                width={450}
                height={450}
                className="w-full h-full min-h-[140px] object-cover"
                unoptimized
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={gallery[3] ?? gallery[1] ?? gallery[0] ?? ""}
                alt={`${title} gallery image 4`}
                width={450}
                height={450}
                className="w-full h-full min-h-[140px] object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
