import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent-700">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">Page not found</h1>
        <p className="mt-4 max-w-xl text-base text-slate-600">
          The page you are looking for does not exist or has moved.
        </p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white">
          Return Home
        </Link>
      </div>
    </div>
  );
}
