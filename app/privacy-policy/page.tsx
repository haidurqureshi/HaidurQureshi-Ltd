import type { Metadata } from "next";
import { A, COMPANY_NUMBER, EmailLink, List, PageShell, Section } from "../components/page-shell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How HaidurQureshi Ltd collects, uses and protects personal data on haidurqureshi.com and the chat assistant, and your rights under UK data protection law.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <PageShell
      title="Privacy Policy"
      updated="3 October 2026"
      intro="This notice explains what personal information we collect through haidurqureshi.com and our chat assistant, how we use it, and your rights under UK data protection law."
    >
      <Section heading="Who we are">
        <p>
          HaidurQureshi Ltd is a company registered in England and Wales
          (company number {COMPANY_NUMBER}). We are the controller of the
          personal data described in this notice. You can contact us about it
          at <EmailLink />.
        </p>
        <p>
          We also operate Ekonos (ekonos.co.uk), a separate budgeting service.
          Data you give us through Ekonos is covered by the{" "}
          <A href="https://ekonos.co.uk/privacy-policy">Ekonos Privacy Policy</A>,
          not this one.
        </p>
      </Section>

      <Section heading="What information we collect and why">
        <p>
          <strong>Enquiries.</strong> If you email us or use our contact form,
          we collect your name, email address and whatever you include in your
          message. We use this to reply to you and to discuss any work you ask
          us about.
        </p>
        <p>
          <strong>Chat assistant.</strong> If you use our chat assistant, we
          process the messages you type so the assistant can reply. Please do
          not share sensitive personal or financial information in the chat.
        </p>
        {/* CONFIRM: whether chat conversations are stored or logged anywhere, and for how long. Update this paragraph if they are. */}
        <p>
          <strong>Technical data.</strong> Like most websites, our hosting and
          security provider automatically processes technical information such
          as your IP address, browser type and the pages requested. We use this
          to deliver the site, keep it secure and fix problems.
        </p>
        <p>
          We do not ask for payment card details or bank account numbers
          through this website, and we do not collect information you have not
          chosen to give us, apart from the technical data above.
        </p>
      </Section>

      <Section heading="Lawful bases for processing">
        <p>Under UK GDPR we rely on:</p>
        <List>
          <li>
            <strong>Legitimate interests</strong> to respond to enquiries,
            provide the chat assistant, and keep our website secure and
            working.
          </li>
          <li>
            <strong>Contract</strong>, where you ask us to take steps before
            entering into a contract with you or we are delivering work for
            you.
          </li>
          <li>
            <strong>Legal obligation</strong>, where we must keep records, for
            example for tax or accounting.
          </li>
        </List>
      </Section>

      <Section heading="Where we get your information from">
        <p>
          Almost everything we hold comes directly from you. Technical data is
          collected automatically when you visit the site. We do not buy
          personal data from third parties.
        </p>
      </Section>

      <Section heading="Who we share your data with">
        <p>
          We share data only with providers who help us run the website and
          our services:
        </p>
        <List>
          <li>
            <strong>Cloudflare, Inc.</strong> for hosting, content delivery,
            security and running our chat service.
          </li>
          <li>
            <strong>Google</strong>, if you use our contact form, which is
            provided through Google Forms.
          </li>
          <li>
            <strong>Our email provider</strong>, which handles messages sent to
            and from our email address.
          </li>
        </List>
        {/* CONFIRM: that the chat assistant's AI model runs on Cloudflare. If you use another AI provider, name it here. */}
        <p>
          These providers act on our behalf or as independent controllers under
          their own terms. We do not sell your data and we do not share it with
          advertisers.
        </p>
      </Section>

      <Section heading="International transfers">
        <p>
          Some of our providers process data outside the UK, including in the
          United States and the European Union. Where this happens, we rely on
          safeguards such as UK adequacy regulations, or standard contractual
          clauses approved for use in the UK.
        </p>
      </Section>

      <Section heading="How long we keep your information">
        <p>
          We keep enquiries for as long as we need them to respond and, if we
          work together, for the duration of the project plus the period
          required for our legal and accounting records. If nothing comes of an
          enquiry, we delete it within 24 months of the last contact. You can
          ask us to delete it sooner.
        </p>
        {/* CONFIRM: the 24-month period matches what you will actually do. */}
      </Section>

      <Section heading="Cookies">
        <p>
          We do not set our own cookies on this website and we do not use
          analytics, advertising or tracking cookies. Our security provider,
          Cloudflare, may set strictly necessary cookies to protect the site
          from abuse and malicious traffic. These are not used to track you
          across other sites.
        </p>
        {/* CONFIRM: no analytics tools (e.g. Google Analytics, Cloudflare Web Analytics with cookies) are enabled. */}
      </Section>

      <Section heading="Your data protection rights">
        <List>
          <li><strong>Access:</strong> ask for a copy of the personal data we hold about you.</li>
          <li><strong>Rectification:</strong> ask us to correct inaccurate data.</li>
          <li><strong>Erasure:</strong> ask us to delete your data.</li>
          <li><strong>Restriction:</strong> ask us to limit how we use your data.</li>
          <li><strong>Objection:</strong> object to us processing your data based on legitimate interests.</li>
          <li><strong>Portability:</strong> ask us to provide your data in a portable format where it applies.</li>
        </List>
        <p>
          To use any of these rights, email <EmailLink />. We will respond
          within one month.
        </p>
      </Section>

      <Section heading="Complaints">
        <p>
          If you have concerns about how we handle your data, please contact us
          first. If you remain unhappy, you can complain to the Information
          Commissioner’s Office (ICO):
        </p>
        <address className="not-italic leading-7">
          Information Commissioner’s Office
          <br />
          Wycliffe House, Water Lane
          <br />
          Wilmslow, Cheshire, SK9 5AF
          <br />
          Helpline: 0303 123 1113
          <br />
          <A href="https://ico.org.uk/make-a-complaint">ico.org.uk/make-a-complaint</A>
        </address>
      </Section>

      <Section heading="Changes to this notice">
        <p>
          We may update this notice from time to time. The date at the top of
          the page shows when it was last changed.
        </p>
      </Section>
    </PageShell>
  );
}
