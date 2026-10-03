import {
  A,
  EmailLink,
  List,
  PageShell,
  Section,
  SITE_URL,
} from "./page-shell";
import { services, type Service } from "./services";

const steps = [
  {
    title: "A conversation",
    text: "We start by listening: what you want to achieve, who it is for, and what already exists.",
  },
  {
    title: "A clear plan and quote",
    text: "You get a written scope and estimate before any work begins, so there are no surprises.",
  },
  {
    title: "Design and build in stages",
    text: "We build in steps you can see and react to, rather than disappearing and returning with a finished product.",
  },
  {
    title: "Launch and support",
    text: "We help you go live and stay available afterwards for fixes, updates and what comes next.",
  },
];

export function ServicePage({ service }: { service: Service }) {
  const related = services.filter((s) => s.slug !== service.slug);

  const faq = [
    {
      q: "How much does it cost?",
      a: "It depends on what you need. After an initial conversation we give you a written estimate, so you know the cost before you commit to anything.",
    },
    {
      q: "How long does a project take?",
      a: "That depends on the scope. We agree a realistic timeline with you at the planning stage, and tell you early if anything changes.",
    },
    ...service.faq,
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.metaDescription,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: "HaidurQureshi Ltd",
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PageShell title={service.h1} intro={service.intro}>
        <Section heading="What we build">
          <ul className="grid gap-4 sm:grid-cols-2">
            {service.offers.map((offer) => (
              <li
                key={offer.title}
                className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <h3 className="font-semibold tracking-tight">{offer.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {offer.text}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section heading="Who it’s for">
          <List>
            {service.audience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </List>
        </Section>

        <Section heading="How we work">
          <dl className="space-y-5">
            {service.approach.map((item) => (
              <div key={item.title}>
                <dt className="font-semibold tracking-tight">{item.title}</dt>
                <dd className="mt-1 text-zinc-700 dark:text-zinc-300">
                  {item.text}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section heading="How a project runs">
          <ol className="space-y-5">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-blue-600 text-sm font-semibold text-white"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-1 text-zinc-700 dark:text-zinc-300">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section heading="Common questions">
          <dl className="space-y-5">
            {faq.map((item) => (
              <div key={item.q}>
                <dt className="font-semibold tracking-tight">{item.q}</dt>
                <dd className="mt-1 text-zinc-700 dark:text-zinc-300">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <section className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-xl font-semibold tracking-tight">
            Tell us about your project
          </h2>
          <p className="mt-3 leading-7 text-zinc-700 dark:text-zinc-300">
            A few lines on what you have in mind is plenty to start. Email us at{" "}
            <EmailLink />, or ask our{" "}
            <A href="https://chat.haidurqureshi.com">chat assistant</A> a
            question first.
          </p>
        </section>

        <Section heading="Our other services">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {related.map((s) => (
              <li key={s.slug}>
                <A href={`/services/${s.slug}`}>{s.name}</A>
              </li>
            ))}
          </ul>
        </Section>
      </PageShell>
    </>
  );
}
