import type { Metadata } from "next";
import { ServicePage } from "../../components/service-page";
import { getService } from "../../components/services";

const service = getService("mobile-app-development");

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: `/services/${service.slug}` },
};

export default function Page() {
  return <ServicePage service={service} />;
}
