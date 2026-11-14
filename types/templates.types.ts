import type { CSSProperties } from 'react';

// Types for data/templates.json. Generated from the JSON shape; keep them in step when the JSON changes.

export interface SeoData {
  title: string;
  description: string;
}

export interface LinkItem {
  label: string;
  url: string;
}

/** One step of the breadcrumb trail; the last step is the current page (no url). */
export interface BreadcrumbPath {
  id: string;
  label: string;
  url?: string;
}

export interface BreadcrumbData {
  title: string;
  seo: SeoData;
  paths: BreadcrumbPath[];
}

export interface ThemeFonts {
  primary: string;
  text: string;
  ui: string;
  article: string;
  hero: string;
  alt: string;
}

export interface ThemeData {
  fonts: ThemeFonts;
}

/** CSS variables layout.tsx sets on <html> from common.theme.fonts. */
export type ThemeFontVariables = CSSProperties & {
  '--font-primary': string;
  '--font-text': string;
  '--font-ui': string;
  '--font-article': string;
  '--font-hero': string;
  '--font-alt': string;
};

export interface SiteMetadataData {
  title: string;
  siteName: string;
  description: string;
  icon: string;
  lang: string;
}

/** Only the breadcrumb reads these; every section keeps its own labels in its data. */
export interface GlobalUIData {
  breadcrumbLabel: string;
  breadcrumbSeparator: string;
}

export interface BreadcrumbProps {
  data?: BreadcrumbData;
  ui?: GlobalUIData;
}

/** Screen-reader labels of a slider's arrows and dots; "{n}" is the slide number. */
export interface SliderLabels {
  previousLabel: string;
  nextLabel: string;
  goToSlideLabel: string;
}

/** Labels of the page numbers under a paged grid; "{n}" is the page number. */
export interface PaginationLabels {
  label: string;
  goToPageN: string;
  previousLabel: string;
  nextLabel: string;
}

export interface FooterCta {
  eyebrow: string;
  heading: string;
  headingHighlight: string;
  descriptionLines: string[];
  button: LinkItem;
}

export interface SocialLink {
  id: string;
  label: string;
  icon: string;
  url: string;
}

export interface NavLink {
  id: string;
  label: string;
  url: string;
}

export interface FooterColumn {
  id: string;
  heading: string;
  links: NavLink[];
}

export interface FooterContactIcons {
  address: string;
  phone: string;
  email: string;
  hours: string;
}

export interface FooterData {
  logo: string;
  logoAlt: string;
  logoUrl: string;
  logoLabel: string;
  descriptionLines: string[];
  cta: FooterCta;
  socialLinks: SocialLink[];
  columns: FooterColumn[];
  contactTitle: string;
  contactIcons: FooterContactIcons;
  addressLines: string[];
  phone: string;
  phoneUrl: string;
  email: string;
  emailUrl: string;
  hoursLines: string[];
  bottomLinks: NavLink[];
  copyrightText: string;
}

export interface FooterProps {
  data?: FooterData;
}

export interface HeaderNavLink extends NavLink {
  children: NavLink[];
}

export interface HeaderData {
  logo: string;
  logoAlt: string;
  logoUrl: string;
  logoLabel: string;
  navLinks: HeaderNavLink[];
  menuLabel: string;
  mobileMenuLabel: string;
  openMenuLabel: string;
  closeMenuLabel: string;
  phoneLabel: string;
  phone: string;
  phoneUrl: string;
  buttonText: string;
  buttonUrl: string;
}

export interface HeaderProps {
  data?: HeaderData;
}

export interface HeroHeadingLine {
  text: string;
  indent: boolean;
}

export interface HeroData {
  headingLines: HeroHeadingLine[];
  descriptionLines: string[];
  button: LinkItem;
  image: string;
  imageAlt: string;
}

export interface HeroSectionProps {
  data?: HeroData;
}

export interface HeadingPart {
  text: string;
  highlight: boolean;
}

export interface AboutUsExperience {
  number: string;
  labelLines: string[];
  title: string;
  descriptionLines: string[];
  link: LinkItem;
}

export interface AboutUsData {
  tagline: string[];
  headingLines: HeadingPart[][];
  descriptionLines: string[];
  primaryImage: string;
  primaryImageAlt: string;
  secondaryImage: string;
  secondaryImageAlt: string;
  experience: AboutUsExperience;
}

export interface AboutUsProps {
  data?: AboutUsData;
  /** The About Us page version: no experience badge (see AboutUs). */
  compact?: boolean;
}

export interface ImpactStat {
  id: string;
  value: string;
  labelLines: string[];
  icon: string;
}

export interface ImpactData {
  label: string;
  headingLines: HeadingPart[][];
  descriptionLines: string[];
  image: string;
  imageAlt: string;
  stats: ImpactStat[];
}

export interface ImpactProps {
  data?: ImpactData;
}

export interface ServicesService {
  id: string;
  number: string;
  category: string;
  titleLines: string[];
  url: string;
  image: string;
  imageAlt: string;
}

export interface ServicesData extends SliderLabels {
  label: string;
  headingLines: HeadingPart[];
  descriptionLines: string[];
  services: ServicesService[];
}

export interface ServicesProps {
  data?: ServicesData;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  descriptionLines: string[];
  icon: string;
  image: string;
  imageAlt: string;
}

export interface ProcessData {
  label: string;
  headingLines: HeadingPart[];
  descriptionLines: string[];
  steps: ProcessStep[];
}

export interface ProcessProps {
  data?: ProcessData;
}

export interface TestimonialsBadge {
  stars: number;
  text: string;
}

export interface TestimonialsTestimonial {
  id: string;
  quoteLines: string[];
  name: string;
  role: string;
  avatar: string;
  image: string;
  imageAlt: string;
}

export interface TestimonialsData extends SliderLabels {
  label: string;
  headingLines: HeadingPart[];
  descriptionLines: string[];
  badge: TestimonialsBadge;
  testimonials: TestimonialsTestimonial[];
}

export interface TestimonialsProps {
  data?: TestimonialsData;
}

export interface BlogsPost {
  id: string;
  day: string;
  month: string;
  year: string;
  categories: string[];
  titleLines: string[];
  excerptLines: string[];
  url: string;
  image: string;
  imageAlt: string;
}

export interface BlogCardProps {
  post: BlogsPost;
}

export interface BlogsData extends SliderLabels {
  label: string;
  headingLines: HeadingPart[];
  descriptionLines: string[];
  posts: BlogsPost[];
}

export interface BlogsProps {
  data?: BlogsData;
}

export interface AboutStoryData {
  storyParagraphs: string[][];
}

export interface AboutStoryProps {
  data?: AboutStoryData;
}

export interface WhyChooseUsReason {
  id: string;
  number: string;
  title: string;
  descriptionLines: string[];
  icon: string;
  featured: boolean;
}

export interface WhyChooseUsData {
  label: string;
  headingLines: HeadingPart[][];
  descriptionLines: string[];
  reasons: WhyChooseUsReason[];
}

export interface WhyChooseUsProps {
  data?: WhyChooseUsData;
}

export interface ServicesGridService {
  id: string;
  number: string;
  category: string;
  titleLines: string[];
  url: string;
  image: string;
  imageAlt: string;
}

export interface ServiceCardProps {
  service: ServicesGridService;
  className?: string;
}

export interface ServicesGridData {
  pagination: PaginationLabels;
  label: string;
  headingLines: HeadingPart[];
  descriptionLines: string[];
  services: ServicesGridService[];
  pageSize: number;
}

export interface ServicesGridProps {
  data?: ServicesGridData;
}

export interface ServiceDetailSection {
  id: string;
  title: string;
  lines: string[];
}

export interface ServiceDetailFeature {
  id: string;
  icon: string;
  title: string;
  lines: string[];
}

export interface ServiceDetailClosingSection {
  id: string;
  title: string;
  lines: string[];
}

export interface ServiceDetailData {
  label: string;
  heading: HeadingPart[];
  image: string;
  imageAlt: string;
  introLines: string[];
  sections: ServiceDetailSection[];
  features: ServiceDetailFeature[];
  closingSections: ServiceDetailClosingSection[];
}

export interface ServiceDetailProps {
  data?: ServiceDetailData;
}

export interface PortfolioProject {
  id: string;
  title: string;
  tags: string[];
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

export interface PortfolioData {
  pagination: PaginationLabels;
  label: string;
  headingLines: HeadingPart[][];
  descriptionLines: string[];
  projects: PortfolioProject[];
  pageSize: number;
}

export interface PortfolioProps {
  data?: PortfolioData;
}

export interface BlogGridPost {
  id: string;
  day: string;
  month: string;
  year: string;
  categories: string[];
  titleLines: string[];
  excerptLines: string[];
  url: string;
  image: string;
  imageAlt: string;
}

export interface BlogGridData {
  pagination: PaginationLabels;
  label: string;
  headingLines: HeadingPart[];
  descriptionLines: string[];
  posts: BlogGridPost[];
  pageSize: number;
}

export interface BlogGridProps {
  data?: BlogGridData;
}

export interface BlogDetailSection {
  id: string;
  title: string;
  lines: string[];
}

export interface BlogDetailSidebarCategory {
  id: string;
  label: string;
  count: number;
  url: string;
}

export interface BlogDetailSidebar {
  categoriesHeading: string;
  categories: BlogDetailSidebarCategory[];
  recentHeading: string;
  recentCount: number;
  tagsHeading: string;
  tags: NavLink[];
}

export interface BlogDetailData {
  image: string;
  imageAlt: string;
  date: string;
  category: string;
  author: string;
  headingLines: HeadingPart[][];
  paragraphs: string[][];
  quoteLines: string[];
  sections: BlogDetailSection[];
  sidebar: BlogDetailSidebar;
}

export interface BlogDetailProps {
  data?: BlogDetailData;
  posts?: BlogGridPost[];
}

export interface QuoteFeature {
  id: string;
  icon: string;
  title: string;
  lines: string[];
}

export interface FormField {
  label: string;
  placeholder: string;
}

export interface FormSelectField {
  label: string;
  placeholder: string;
  options: string[];
}

export interface QuoteForm {
  heading: string;
  headingHighlight: string;
  description: string;
  fullName: FormField;
  email: FormField;
  phone: FormField;
  company: FormField;
  service: FormSelectField;
  details: FormField;
  budget: FormSelectField;
  timeline: FormSelectField;
  submit: string;
  success: string;
}

export interface QuoteData {
  label: string;
  headingLines: HeadingPart[];
  descriptionLines: string[];
  features: QuoteFeature[];
  form: QuoteForm;
}

export interface QuoteProps {
  data?: QuoteData;
}

export interface ContactCard {
  id: string;
  icon: string;
  title: string;
  lines: string[];
  link: LinkItem;
}

export interface ContactForm {
  headingLines: string[];
  descriptionLines: string[];
  fullName: string;
  email: string;
  website: string;
  message: string;
  submit: string;
  success: string;
}

export interface ContactData {
  cards: ContactCard[];
  mapTitle: string;
  mapUrl: string;
  form: ContactForm;
}

export interface ContactProps {
  data?: ContactData;
}

export interface HowItWorksStep {
  id: string;
  number: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
}

export interface CtaData {
  heading: string;
  description: string;
  button: LinkItem;
}

export interface CtaStripProps {
  cta?: CtaData;
}

export interface HowItWorksData {
  label: string;
  headingLines: HeadingPart[];
  descriptionLines: string[];
  steps: HowItWorksStep[];
  cta: CtaData;
}

export interface HowItWorksProps {
  data?: HowItWorksData;
}

export interface CareerPerk {
  id: string;
  icon: string;
  title: string;
  lines: string[];
}

export interface CareerApplicationForm {
  heading: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
  fullName: string;
  emailLabel: string;
  phoneLabel: string;
  positionLabel: string;
  positions: string[];
  resumeLabel: string;
  coverNote: string;
  submit: string;
  successHeading: string;
  successMessage: string;
  removeResume: string;
}

export interface CareerData {
  label: string;
  headingLines: HeadingPart[];
  descriptionLines: string[];
  perks: CareerPerk[];
  cta: CtaData;
  applicationForm: CareerApplicationForm;
}

export interface CareerProps {
  data?: CareerData;
}

export interface FaqFaq {
  id: string;
  question: string;
  answer: string;
}

export interface FaqData {
  label: string;
  headingLines: HeadingPart[];
  descriptionLines: string[];
  faqs: FaqFaq[];
  cta: CtaData;
}

export interface FaqProps {
  data?: FaqData;
}

export interface PolicyPagesItemSection {
  id: string;
  title: string;
  paragraphs: string[];
  points: string[];
}

export interface PolicyPagesItem {
  id: string;
  slug: string;
  title: string;
  updated: string;
  intro: string;
  sections: PolicyPagesItemSection[];
}

export interface PolicyPagesData {
  updatedLabel: string;
  otherHeading: string;
  contactHeading: string;
  contactText: string;
  contactEmail: string;
  contactEmailUrl: string;
  items: PolicyPagesItem[];
}

export interface PolicyPagesProps {
  data?: PolicyPagesData;
  /** Which policy of data.items to show. */
  slug: string;
}

export interface SitemapPageGroup {
  id: string;
  heading: string;
  links: NavLink[];
}

export interface SitemapPageData {
  label: string;
  headingLines: HeadingPart[];
  descriptionLines: string[];
  groups: SitemapPageGroup[];
}

export interface SitemapPageProps {
  data?: SitemapPageData;
}

export interface TemplateComponentsShared {
  Header: string;
  Footer: string;
}

export interface TemplateComponentItem {
  key: string;
  component: string;
}

export interface TemplatePage {
  components: TemplateComponentItem[];
}

export interface TemplateComponentsPages {
  home: TemplatePage;
  'about-us': TemplatePage;
  services: TemplatePage;
  'service-details': TemplatePage;
  portfolio: TemplatePage;
  blog: TemplatePage;
  'blog-details': TemplatePage;
  'get-a-quote': TemplatePage;
  contact: TemplatePage;
  'how-it-works': TemplatePage;
  career: TemplatePage;
  faqs: TemplatePage;
  'privacy-policy': TemplatePage;
  'terms-and-conditions': TemplatePage;
  'cookie-policy': TemplatePage;
  sitemap: TemplatePage;
}

export interface TemplateComponentsData {
  shared: TemplateComponentsShared;
  pages: TemplateComponentsPages;
}

export interface CommonData {
  theme: ThemeData;
  metadata: SiteMetadataData;
  globalUI: GlobalUIData;
  aboutBreadcrumb: BreadcrumbData;
  servicesBreadcrumb: BreadcrumbData;
  serviceDetailBreadcrumb: BreadcrumbData;
  portfolioBreadcrumb: BreadcrumbData;
  blogsBreadcrumb: BreadcrumbData;
  blogDetailBreadcrumb: BreadcrumbData;
  quoteBreadcrumb: BreadcrumbData;
  contactBreadcrumb: BreadcrumbData;
  howItWorksBreadcrumb: BreadcrumbData;
  careerBreadcrumb: BreadcrumbData;
  faqsBreadcrumb: BreadcrumbData;
  privacyBreadcrumb: BreadcrumbData;
  termsBreadcrumb: BreadcrumbData;
  cookieBreadcrumb: BreadcrumbData;
  sitemapBreadcrumb: BreadcrumbData;
  Footer: FooterData;
}

export interface AdvertisingSections {
  Header?: { variants?: { AdvertisingHeader1?: HeaderData } };
  Hero?: { variants?: { AdvertisingHero1?: HeroData } };
  AboutUs?: { variants?: { AdvertisingAboutUs1?: AboutUsData } };
  Impact?: { variants?: { AdvertisingImpact1?: ImpactData } };
  Services?: { variants?: { AdvertisingServices1?: ServicesData } };
  Process?: { variants?: { AdvertisingProcess1?: ProcessData } };
  Testimonials?: { variants?: { AdvertisingTestimonials1?: TestimonialsData } };
  Blogs?: { variants?: { AdvertisingBlogs1?: BlogsData } };
  AboutStory?: { variants?: { AdvertisingAboutStory1?: AboutStoryData } };
  WhyChooseUs?: { variants?: { AdvertisingWhyChooseUs1?: WhyChooseUsData } };
  ServicesGrid?: { variants?: { AdvertisingServicesGrid1?: ServicesGridData } };
  ServiceDetail?: { variants?: { AdvertisingServiceDetail1?: ServiceDetailData } };
  Portfolio?: { variants?: { AdvertisingPortfolio1?: PortfolioData } };
  BlogGrid?: { variants?: { AdvertisingBlogGrid1?: BlogGridData } };
  BlogDetail?: { variants?: { AdvertisingBlogDetail1?: BlogDetailData } };
  Quote?: { variants?: { AdvertisingQuote1?: QuoteData } };
  Contact?: { variants?: { AdvertisingContact1?: ContactData } };
  HowItWorks?: { variants?: { AdvertisingHowItWorks1?: HowItWorksData } };
  Career?: { variants?: { AdvertisingCareer1?: CareerData } };
  Faq?: { variants?: { AdvertisingFaq1?: FaqData } };
  PolicyPages?: { variants?: { AdvertisingPolicyPages1?: PolicyPagesData } };
  SitemapPage?: { variants?: { AdvertisingSitemapPage1?: SitemapPageData } };
}

export interface AdvertisingTemplateData {
  common: CommonData;
  categories: {
    Advertising: {
      sections: AdvertisingSections;
      templateComponents: TemplateComponentsData;
    };
  };
}
