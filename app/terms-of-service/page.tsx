import type { Metadata } from "next";
import { A, COMPANY_NUMBER, EmailLink, List, PageShell, Section } from "../components/page-shell";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms for using haidurqureshi.com and the HaidurQureshi Ltd chat assistant, including limits on advice, acceptable use and liability.",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfService() {
  return (
    <PageShell
      title="Terms of Service"
      updated="3 October 2026"
      intro="By using this website or our chat assistant, you agree to these terms. If you do not agree, please do not use them."
    >
      <Section heading="Who we are">
        <p>
          This website is operated by HaidurQureshi Ltd, a company registered
          in England and Wales (company number {COMPANY_NUMBER}). You can
          contact us at <EmailLink />.
        </p>
        <p>
          Our budgeting service, Ekonos, has its own{" "}
          <A href="https://ekonos.co.uk/terms-of-service">terms of service</A>,
          which apply when you use that service.
        </p>
      </Section>

      <Section heading="What this website is">
        <p>
          This website describes the software development services we offer
          and lets you contact us, including through an AI-powered chat
          assistant. Nothing on the site is an offer capable of acceptance.
          Any work we do for you will be set out in a separate written
          agreement.
        </p>
      </Section>

      <Section heading="Chat assistant and AI-generated content">
        <p>
          Our chat assistant uses artificial intelligence to answer questions
          about us and our services. Its replies are for general information
          only. They may be incomplete or wrong, and they are not a quote,
          a commitment or professional advice.
        </p>
        <p>
          Please do not share sensitive personal or financial information in
          the chat. For anything important, email us at <EmailLink /> and we
          will confirm the details in writing. See our{" "}
          <A href="/privacy-policy">Privacy Policy</A> for how chat messages
          are handled.
        </p>
      </Section>

      <Section heading="Acceptable use">
        <p>You agree not to:</p>
        <List>
          <li>Use the website or chat assistant for any unlawful purpose.</li>
          <li>Attempt to gain unauthorised access to our systems or data.</li>
          <li>Disrupt, overload or interfere with the operation of the service.</li>
          <li>Use automated tools to scrape, copy or reverse engineer the site or chat assistant without our permission.</li>
          <li>Try to manipulate the chat assistant into producing harmful or misleading content.</li>
        </List>
        <p>We may block access if these terms are breached.</p>
      </Section>

      <Section heading="Intellectual property">
        <p>
          The content, design and code of this website belong to HaidurQureshi
          Ltd or its licensors. You may view and share links to the site, but
          you may not copy or reuse our content for commercial purposes
          without our written permission.
        </p>
      </Section>

      <Section heading="Third-party links and services">
        <p>
          The site links to other websites and uses third-party services, such
          as Google Forms for our contact form. We are not responsible for
          their content or practices, and your use of them is subject to their
          own terms.
        </p>
      </Section>

      <Section heading="Availability">
        <p>
          The website and chat assistant are provided on an “as is” and “as
          available” basis. We do not guarantee that they will be
          uninterrupted or error-free, and we may change or withdraw any part
          of them at any time.
        </p>
      </Section>

      <Section heading="Limitation of liability">
        <p>
          To the fullest extent permitted by law, HaidurQureshi Ltd is not
          liable for any indirect or consequential loss arising from your use
          of this website or chat assistant, including any decision made in
          reliance on information shown on them.
        </p>
        <p>
          Nothing in these terms limits liability for death or personal injury
          caused by negligence, for fraud or fraudulent misrepresentation, or
          for anything else that cannot lawfully be limited.
        </p>
      </Section>

      <Section heading="Changes to these terms">
        <p>
          We may update these terms from time to time. The date at the top of
          the page shows when they were last changed. Continuing to use the
          site after a change means you accept the updated terms.
        </p>
      </Section>

      <Section heading="Governing law">
        <p>
          These terms are governed by the laws of England and Wales, and any
          dispute is subject to the exclusive jurisdiction of the courts of
          England and Wales.
        </p>
      </Section>

      <Section heading="Contact">
        <p>
          Questions about these terms can be sent to <EmailLink />.
        </p>
      </Section>
    </PageShell>
  );
}
