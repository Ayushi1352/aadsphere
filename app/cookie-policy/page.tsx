import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { AdvertisingTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PolicyContent } from "@/components/sections/PolicyContent";

const templateData: AdvertisingTemplateData = rawData;
const sectionData = templateData.categories.Advertising.sections;
const commonData = templateData.common;

export const metadata: Metadata = commonData.cookieBreadcrumb.meta;

export default function CookiePolicyPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.cookieBreadcrumb} ui={commonData.globalUI} />
      <PolicyContent data={sectionData.PolicyPages?.variants?.AdvertisingPolicyPages1} slug="cookie-policy" company={commonData.company} />
    </main>
  );
}
