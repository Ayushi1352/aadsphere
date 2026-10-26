import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ContactCards from "@/components/ContactCards";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data";

export const metadata: Metadata = site.contactPage.meta;

export default function ContactPage() {
  return (
    <main className="grow">
      <PageBanner title={site.contactPage.title} />
      <ContactCards />
      <ContactForm />
    </main>
  );
}
