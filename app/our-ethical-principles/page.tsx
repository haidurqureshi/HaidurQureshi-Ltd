import type { Metadata } from "next";
import { A, EmailLink, List, PageShell, Section } from "../components/page-shell";

export const metadata: Metadata = {
  title: "Our Ethical Principles",
  description:
    "The principles HaidurQureshi Ltd works by: respect for your data, honesty about what our software can and can’t do, and building technology that serves people.",
  alternates: { canonical: "/our-ethical-principles" },
};

export default function EthicalPrinciples() {
  return (
    <PageShell
      title="Our ethical principles"
      intro="Technology should serve the people who use it. These are the principles we aim to hold ourselves to."
    >
      <Section heading="Respect your data">
        <List>
          <li>We collect only the information we need to provide a service.</li>
          <li>We do not sell personal data and we do not share it with advertisers.</li>
          <li>
            We explain in plain language what we collect and why. See our{" "}
            <A href="/privacy-policy">Privacy Policy</A>.
          </li>
          <li>You can ask us to access, correct or delete your data at any time.</li>
        </List>
      </Section>

      <Section heading="Be honest about our limits">
        <List>
          <li>
            We say clearly when something is a general guide and not
            professional advice. Our products do not replace a qualified
            financial, legal or tax adviser.
          </li>
          <li>
            Where we use automated or AI-generated responses, such as our
            chat assistant, we tell you, and we make clear that they can be
            wrong.
          </li>
          <li>
            Where we make an assessment, for example the ethical scores in
            Ekonos, we explain that it is our own view based on publicly
            available information.
          </li>
        </List>
      </Section>

      <Section heading="Build things that are fair and usable">
        <List>
          <li>We aim to make our websites and apps accessible to as many people as possible.</li>
          <li>We avoid manipulative design, such as hidden costs or confusing opt-outs.</li>
          <li>If we ever introduce charges or change how a service works, we tell users in advance.</li>
        </List>
      </Section>

      <Section heading="Keep things secure">
        <List>
          <li>We protect data in transit and at rest, and store passwords only in hashed form.</li>
          <li>We use trusted infrastructure providers and keep third parties to a minimum.</li>
          <li>If something goes wrong, we will be open about it and fix it.</li>
        </List>
      </Section>

      <Section heading="Think about the wider impact">
        <p>
          We try to consider the environmental and social effects of the
          software we build, and we are glad to talk about this with clients
          at the start of a project.
        </p>
      </Section>

      <Section heading="Tell us if we fall short">
        <p>
          If you think we are not living up to these principles, we want to
          know. Email <EmailLink />.
        </p>
      </Section>
    </PageShell>
  );
}
