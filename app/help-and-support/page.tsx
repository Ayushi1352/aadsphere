import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import SupportChannels from "./SupportChannels";
import HelpTopics from "./HelpTopics";
import { site } from "@/data";

export const metadata: Metadata = site.help.meta;

export default function HelpAndSupportPage() {
  return (
    <main className="grow">
      <PageBanner title={site.help.title} />
      <SupportChannels />
      <HelpTopics />
    </main>
  );
}
