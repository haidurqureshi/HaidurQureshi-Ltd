import type { Metadata } from "next";
import { A, COMPANY_NUMBER, EmailLink, PageShell, Section } from "../components/page-shell";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "HaidurQureshi Ltd is a UK software company building custom websites, mobile apps and software systems, and the team behind the Ekonos budgeting app.",
  alternates: { canonical: "/about-us" },
};

export default function AboutUs() {
  return (
    <PageShell
      title="About us"
      intro="We build software that is useful, easy to use and pleasant to look at, for businesses and for people."
    >
      <Section heading="Who we are">
        <p>
          HaidurQureshi Ltd is a software development company registered in
          England and Wales (company number {COMPANY_NUMBER}). We design and
          build custom websites, mobile apps and larger software systems,
          from the first conversation through to launch and beyond.
        </p>
      </Section>

      <Section heading="What we do">
        <p>
          Every project starts with understanding what you are trying to
          achieve and who will be using the result. From there we build
          something that works reliably, loads quickly and feels natural on
          every screen size.
        </p>
      </Section>

      <Section heading="Our own products">
        <p>
          As well as client work, we build and run our own software. Our
          personal budgeting app,{" "}
          <A href="https://ekonos.co.uk">Ekonos</A>, helps people track their
          income and spending and see how their spending lines up with ethical
          and environmental considerations. It is a good example of how we
          like to work: clear about what it does, careful with people’s data,
          and honest about its limits.
        </p>
      </Section>

      <Section heading="How we work">
        <p>
          We care about plain communication, sensible privacy practices and
          doing the job properly. You can read more about the values behind
          our work on our{" "}
          <A href="/our-ethical-principles">Ethical Principles</A> page.
        </p>
      </Section>

      <Section heading="Get in touch">
        <p>
          Have a project in mind, or just want to ask a question? Email us at{" "}
          <EmailLink />, or try our{" "}
          <A href="https://chat.haidurqureshi.com">chat assistant</A>.
        </p>
      </Section>
    </PageShell>
  );
}
