import Link from "next/link";
import type { ReactNode } from "react";

// Change these once and every page updates.
export const CONTACT_EMAIL = "Enquires@haidurqureshi.com";
export const COMPANY_NUMBER = "16936643";
export const SITE_URL = "https://haidurqureshi.com"; // change if your main domain differs

const inlineLink =
  "font-medium text-blue-700 underline underline-offset-4 transition-colors hover:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-blue-400 dark:hover:text-blue-300";

export function PageShell({
  title,
  intro,
  updated,
  children,
}: {
  title: string;
  intro?: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col">
      <header className="mx-auto flex w-full max-w-3xl items-center justify-between px-5 py-6 sm:px-8">
        <Link
          href="/"
          className="rounded-sm text-base font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 sm:text-lg"
        >
          HaidurQureshi Ltd
        </Link>
        <Link
          href="/"
          className="text-sm font-medium text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          Home
        </Link>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-5 pb-16 pt-6 sm:px-8 sm:pt-12">
        <h1 className="text-[clamp(2rem,4vw+1rem,3.25rem)] font-semibold leading-tight tracking-tight text-balance">
          {title}
        </h1>
        {updated && (
          <p className="mt-3 text-sm text-zinc-500">Last updated: {updated}</p>
        )}
        {intro && (
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {intro}
          </p>
        )}
        <div className="mt-10 space-y-10 sm:mt-12">{children}</div>
      </main>
    </div>
  );
}

export function Section({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold tracking-tight">{heading}</h2>
      <div className="space-y-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">
        {children}
      </div>
    </section>
  );
}

export function List({ children }: { children: ReactNode }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-zinc-400">
      {children}
    </ul>
  );
}

export function A({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return external ? (
    <a href={href} className={inlineLink} rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <Link href={href} className={inlineLink}>
      {children}
    </Link>
  );
}

export function EmailLink() {
  return <a href={`mailto:${CONTACT_EMAIL}`} className={inlineLink}>{CONTACT_EMAIL}</a>;
}
