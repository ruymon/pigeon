import { Logo } from "@/components/Logo";

export default function NotFound() {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-8">
      <Logo />
      <h1 className="text-4xl font-semibold text-zinc-50">404</h1>
      <span className="text-zinc-400">Page not found</span>
    </section>
  );
};
