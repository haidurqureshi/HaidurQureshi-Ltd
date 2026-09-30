const services = [
  {
    title: "Custom websites",
    text: "Fast, accessible sites built around how your customers actually use them.",
  },
  {
    title: "Mobile apps",
    text: "Apps that feel native on every screen size, from phones to tablets.",
  },
  {
    title: "Software systems",
    text: "Larger platforms and internal tools, designed to grow with your business.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-stone-50 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Top bar */}
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
        <span className="text-base font-semibold tracking-tight sm:text-lg">
          HaidurQureshi Ltd
        </span>
        <a
          href="mailto:Enquires@haidurqureshi.com"
          className="rounded-full text-sm font-medium text-zinc-600 underline-offset-4 transition-colors hover:text-zinc-900 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-zinc-400 dark:hover:text-zinc-50"
        >
          Email us
        </a>
      </header>

      {/* Hero */}
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-24">
        <h1 className="max-w-3xl text-[clamp(2.25rem,6vw+0.5rem,4.5rem)] font-semibold leading-[1.05] tracking-tight text-balance">
          Software that works well and looks good.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-zinc-600 sm:mt-8 sm:text-lg sm:leading-8 dark:text-zinc-400">
          At HaidurQureshi Ltd, we believe in the power of technology to
          transform businesses and improve lives. We are passionate about
          creating software that is not only functional but also user-friendly
          and visually appealing. Whether you&apos;re looking for a custom
          website, a mobile app, or a complex software system, we have the
          expertise to bring your vision to life.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
          <a
            href="mailto:Enquires@haidurqureshi.com"
            className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-7 text-base font-medium text-white transition-colors hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:min-w-40 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            Contact us
          </a>
          <a
            href="https://chat.haidurqureshi.com"
            className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 px-7 text-base font-medium transition-colors hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:min-w-40 dark:border-zinc-700 dark:hover:bg-zinc-900"
          >
            Chat with our bot
          </a>
        </div>

        {/* What we build */}
        <ul className="mt-16 grid gap-x-10 gap-y-8 border-t border-zinc-200 pt-10 sm:mt-20 sm:grid-cols-3 dark:border-zinc-800">
          {services.map((service) => (
            <li key={service.title}>
              <h2 className="text-base font-semibold tracking-tight">
                {service.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {service.text}
              </p>
            </li>
          ))}
        </ul>
      </main>

      {/* Footer <footer className="mx-auto w-full max-w-5xl px-5 py-6 text-sm text-zinc-500 sm:px-8 lg:px-12 dark:text-zinc-500">
        © {new Date().getFullYear()} HaidurQureshi Ltd
      </footer> */}
      
    </div>
  );
}
