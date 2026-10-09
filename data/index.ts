import siteData from "./site.json";

// All the content of the website lives in data/site.json.
// This file only gives each section a short name and builds a few helpers.

const sec = siteData.Advertising.sections;

export const site = {
  siteMeta: sec.SiteMeta.variants.AdvertisingSiteMeta1,
  navbar: sec.Header.variants.AdvertisingHeader1,
  footer: sec.Footer.variants.AdvertisingFooter1,
  hero: sec.Banner.variants.AdvertisingBanner1,
  about: sec.About.variants.AdvertisingAbout1,
  impact: sec.Impact.variants.AdvertisingImpact1,
  services: sec.Services.variants.AdvertisingServices1,
  process: sec.Process.variants.AdvertisingProcess1,
  testimonial: sec.Testimonial.variants.AdvertisingTestimonial1,
  blog: sec.Blog.variants.AdvertisingBlog1,
  pageBanner: sec.PageBanner.variants.AdvertisingPageBanner1,
  aboutPage: sec.AboutPage.variants.AdvertisingAboutPage1,
  whyChooseUs: sec.WhyChooseUs.variants.AdvertisingWhyChooseUs1,
  servicesPage: sec.ServicesPage.variants.AdvertisingServicesPage1,
  serviceDetail: sec.ServiceDetail.variants.AdvertisingServiceDetail1,
  portfolio: sec.Portfolio.variants.AdvertisingPortfolio1,
  blogPage: sec.BlogPage.variants.AdvertisingBlogPage1,
  blogDetail: sec.BlogDetail.variants.AdvertisingBlogDetail1,
  quote: sec.Quote.variants.AdvertisingQuote1,
  contactPage: sec.Contact.variants.AdvertisingContact1,
  howItWorks: sec.HowItWorks.variants.AdvertisingHowItWorks1,
  career: sec.Career.variants.AdvertisingCareer1,
  faq: sec.FAQ.variants.AdvertisingFAQ1,
  policies: sec.Policies.variants.AdvertisingPolicies1,
  sitemap: sec.Sitemap.variants.AdvertisingSitemap1,
};

export type SiteData = typeof site;
export type HeadingLine = { text: string; highlight: boolean };
export type ServiceItem = (typeof site.services.services)[number];
export type BlogPost = (typeof site.blog.posts)[number];

/** Fill the {placeholders} of a text from site.json, e.g. fill("Slide {n}", { n: 2 }). */
export function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key) => (key in values ? String(values[key]) : match));
}

// Contact details are written once in site.json (SiteMeta > contact).
const contactData = site.siteMeta.contact;
const tel = (phone: string) => `tel:${phone.replace(/[^+\d]/g, "")}`;

export const contact = {
  phone: contactData.phone,
  phoneHref: tel(contactData.phone),
  footerPhone: contactData.footerPhone,
  footerPhoneHref: tel(contactData.footerPhone),
  altPhone: contactData.altPhone,
  email: contactData.email,
  emailHref: `mailto:${contactData.email}`,
  supportEmail: contactData.supportEmail,
  addressLines: contactData.addressLines,
  directionsHref: contactData.directionsHref,
  map: contactData.map,
  hoursLines: contactData.hoursLines,
};

export default siteData;
