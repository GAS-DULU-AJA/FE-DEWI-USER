import { Navbar } from "@/features/destination/components/Navbar";

export const runtime = "edge";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
