import Link from "next/link";

export default function PremiumNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl justify-between px-8 py-5">
        <div className="text-xl font-bold">AmirMotefaker</div>
        <div className="flex gap-6 text-sm">
          <Link href="/fa/about">About</Link>
          <Link href="/fa/products">Products</Link>
          <Link href="/fa/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
