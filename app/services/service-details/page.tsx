import type { Metadata } from "next";
import rawData from "@/data/templates.json";
import type { AdvertisingTemplateData } from "@/types/templates.types";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { ServiceContent } from "@/components/sections/ServiceContent";

const templateData: AdvertisingTemplateData = rawData;
const sectionData = templateData.categories.Advertising.sections;
const commonData = templateData.common;

// One common detail page for every service: all service links point here.
export const metadata: Metadata = commonData.serviceDetailBreadcrumb.meta;

export default function ServiceDetailPage() {
  return (
    <main className="flex-1">
      <Breadcrumb data={commonData.serviceDetailBreadcrumb} ui={commonData.globalUI} />
      <ServiceContent data={sectionData.ServiceDetail?.variants?.AdvertisingServiceDetail1} />
    </main>
  );
}
