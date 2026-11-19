import type { CSSProperties } from 'react';

// Types for data/templates.json. Generated from the JSON shape; keep them in step when the JSON changes.
// A text with "\n" in it shows one line per part (see lines() in components/ui/Text.tsx).

export interface SeoData {
  title: string;
  description: string;
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

/** A piece of a heading; `highlight` pieces are coloured. */
export interface HeadingPart {
  text: string;
  highlight: boolean;
}

/** One entry of a plain text list. */
export interface TextItem {
  id: string;
  text: string;
}

/** Screen-reader labels of a slider's arrows and dots; "{n}" is the slide number. */
export interface SliderLabels {
  previousLabel: string;
  nextLabel: string;
  goToSlideLabel: string;
}

/** Icons of a slider's previous / next arrows. */
export interface SliderIcons {
  previousIcon: string;
  nextIcon: string;
}

/** Labels of the page numbers under a paged grid; "{n}" is the page number. */
export interface PaginationLabels {
  label: string;
  pageLabel: string;
  previousLabel: string;
  nextLabel: string;
}

export interface PaginationProps {
  page: number;
  pageCount: number;
  onChange: (page: number) => void;
  labels: PaginationLabels;
  /** Colour of the current page and of hovered buttons. */
  tone?: 'primary' | 'accent';
}

export interface NavLink {
  id: string;
  label: string;
  url: string;
}

export interface SocialLink {
  id: string;
  label: string;
  icon: string;
  url: string;
}

export interface FooterCta {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  buttonIcon: string;
}

export interface FooterColumn {
  id: string;
  title: string;
  links: NavLink[];
}

/** One entry of the footer's contact column; an entry with a url is a link. */
export interface FooterContactItem {
  id: string;
  icon: string;
  value: string;
  url?: string;
}

export interface FooterData {
  logo: string;
  logoAlt: string;
  logoUrl: string;
  logoLabel: string;
  logoWidth: number;
  logoHeight: number;
  description: string;
  cta: FooterCta;
  socialLinks: SocialLink[];
  columns: FooterColumn[];
  linkIcon: string;
  contactTitle: string;
  contactItems: FooterContactItem[];
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
  logoWidth: number;
  logoHeight: number;
  navLinks: HeaderNavLink[];
  submenuIcon: string;
  menuLabel: string;
  mobileMenuLabel: string;
  openMenuLabel: string;
  closeMenuLabel: string;
  openMenuIcon: string;
  closeMenuIcon: string;
  phoneLabel: string;
  phone: string;
  phoneUrl: string;
  phoneIcon: string;
  buttonText: string;
  buttonUrl: string;
  buttonIcon: string;
}

export interface HeaderProps {
  data?: HeaderData;
}

export interface HeroData {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  image: string;
  imageAlt: string;
}

export interface HeroSectionProps {
  data?: HeroData;
}

export interface AboutUsExperience {
  number: string;
  label: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  linkIcon: string;
}

export interface AboutUsData {
  tagline: TextItem[];
  /** The heading reads title, then titleHighlight (coloured), then titleEnd. */
  title: string;
  titleHighlight: string;
  titleEnd: string;
  description: string;
  primaryImage: string;
  primaryImageAlt: string;
  secondaryImage: string;
  secondaryImageAlt: string;
  experience: AboutUsExperience;
}

export interface AboutUsProps {
  data?: AboutUsData;
  /** The About Us page version: no "Read More" link (see AboutUs). */
  compact?: boolean;
}

export interface ImpactStat {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export interface ImpactData {
  label: string;
  /** The heading reads title, then titleHighlight (coloured), then titleEnd. */
  title: string;
  titleHighlight: string;
  titleEnd: string;
  description: string;
  image: string;
  imageAlt: string;
  stats: ImpactStat[];
}

export interface ImpactProps {
  data?: ImpactData;
}

export interface ServicesService {
  id: string;
  category: string;
  title: string;
  url: string;
  image: string;
  imageAlt: string;
}

export interface ServiceCardProps {
  service: ServicesService;
  /** "01", "02", … : the card's place in its list. */
  number: string;
  icon: string;
  className?: string;
}

export interface ServiceDetailBlock {
  id: string;
  title: string;
  description: string;
}

export interface ServiceDetailFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

/** The common Service Detail page, shown for every service. */
export interface ServicesDetail {
  label: string;
  title: string;
  titleHighlight: string;
  image: string;
  imageAlt: string;
  description: string;
  sections: ServiceDetailBlock[];
  features: ServiceDetailFeature[];
  closingSections: ServiceDetailBlock[];
}

export interface ServicesData extends SliderLabels, SliderIcons {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  /** Services in the Home slider. */
  homeServiceIds: string[];
  /** Services in the Services page grid. */
  listingServiceIds: string[];
  services: ServicesService[];
  cardIcon: string;
  pagination: PaginationLabels;
  pageSize: number;
  detail: ServicesDetail;
}

export interface ServicesProps {
  data?: ServicesData;
  /** The Services page version: a paged grid of the listed services instead of the Home slider. */
  showAll?: boolean;
}

export interface ServiceDetailProps {
  data?: ServicesData;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  imageAlt: string;
}

export interface ProcessData {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  steps: ProcessStep[];
}

export interface ProcessProps {
  data?: ProcessData;
}

export interface TestimonialsBadge {
  stars: number;
  /** "{stars}" is the number of stars. */
  starsLabel: string;
  starIcon: string;
  text: string;
}

export interface TestimonialsTestimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  image: string;
  imageAlt: string;
}

export interface TestimonialsData extends SliderLabels, SliderIcons {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  badge: TestimonialsBadge;
  quoteIcon: string;
  avatarSize: number;
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
  categories: TextItem[];
  title: string;
  excerpt: string;
  url: string;
  image: string;
  imageAlt: string;
}

export interface BlogCardProps {
  post: BlogsPost;
  icon: string;
  categorySeparator: string;
}

export interface BlogDetailSection {
  id: string;
  title: string;
  description: string;
}

export interface BlogDetailCategory {
  id: string;
  label: string;
  count: number;
  url: string;
}

/** The common Blog Detail page (article and sidebar), shown for every post. */
export interface BlogsDetail {
  image: string;
  imageAlt: string;
  date: string;
  category: string;
  author: string;
  title: string;
  titleHighlight: string;
  paragraphs: TextItem[];
  quote: string;
  quoteIcon: string;
  sections: BlogDetailSection[];
  categoriesTitle: string;
  categories: BlogDetailCategory[];
  categoryIcon: string;
  recentTitle: string;
  recentPostIds: string[];
  /** Date of a recent post; "{month}", "{day}" and "{year}" come from the post. */
  recentDateFormat: string;
  recentImageWidth: number;
  recentImageHeight: number;
  tagsTitle: string;
  tags: NavLink[];
}

export interface BlogsData extends SliderLabels, SliderIcons {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  /** Posts in the Home slider. */
  homePostIds: string[];
  /** Posts in the Blog page grid. */
  listingPostIds: string[];
  posts: BlogsPost[];
  cardIcon: string;
  categorySeparator: string;
  pagination: PaginationLabels;
  pageSize: number;
  detail: BlogsDetail;
}

export interface BlogsProps {
  data?: BlogsData;
  /** The Blog page version: a paged grid of the listed posts instead of the Home slider. */
  showAll?: boolean;
}

export interface BlogDetailProps {
  data?: BlogsData;
}

export interface AboutStoryData {
  paragraphs: TextItem[];
}

export interface AboutStoryProps {
  data?: AboutStoryData;
}

export interface WhyChooseUsReason {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  featured: boolean;
}

export interface WhyChooseUsData {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  reasons: WhyChooseUsReason[];
}

export interface WhyChooseUsProps {
  data?: WhyChooseUsData;
}

export interface PortfolioProject {
  id: string;
  title: string;
  tags: TextItem[];
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

export interface PortfolioData {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  projects: PortfolioProject[];
  pagination: PaginationLabels;
  pageSize: number;
}

export interface PortfolioProps {
  data?: PortfolioData;
}

export interface QuoteFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
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
  title: string;
  titleHighlight: string;
  description: string;
  requiredMark: string;
  selectIcon: string;
  fullName: FormField;
  email: FormField;
  phone: FormField;
  company: FormField;
  service: FormSelectField;
  details: FormField;
  budget: FormSelectField;
  timeline: FormSelectField;
  buttonText: string;
  buttonIcon: string;
  success: string;
}

export interface QuoteData {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
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
  description: string;
  linkText: string;
  linkUrl: string;
}

export interface ContactForm {
  title: string;
  description: string;
  fullName: string;
  email: string;
  website: string;
  message: string;
  buttonText: string;
  success: string;
}

export interface ContactData {
  cards: ContactCard[];
  linkIcon: string;
  mapLabel: string;
  mapEmbedUrl: string;
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
  points: TextItem[];
  image: string;
  imageAlt: string;
}

export interface CtaData {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  buttonIcon: string;
}

export interface CtaStripProps {
  cta?: CtaData;
}

export interface HowItWorksData {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  steps: HowItWorksStep[];
  pointIcon: string;
  cta: CtaData;
}

export interface HowItWorksProps {
  data?: HowItWorksData;
}

export interface CareerPerk {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface CareerCta {
  title: string;
  description: string;
}

export interface CareerApplicationForm {
  title: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
  emailIcon: string;
  phoneIcon: string;
  fullName: string;
  emailLabel: string;
  phoneLabel: string;
  positionLabel: string;
  positions: string[];
  resumeLabel: string;
  resumeAccept: string;
  uploadIcon: string;
  removeIcon: string;
  removeResume: string;
  coverNote: string;
  buttonText: string;
  buttonIcon: string;
  successTitle: string;
  successMessage: string;
  successIcon: string;
}

export interface CareerData {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  perks: CareerPerk[];
  cta: CareerCta;
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
  title: string;
  titleHighlight: string;
  description: string;
  faqs: FaqFaq[];
  openIcon: string;
  cta: CtaData;
}

export interface FaqProps {
  data?: FaqData;
}

export interface PolicyPagesItemSection {
  id: string;
  title: string;
  paragraphs: TextItem[];
  points: TextItem[];
}

export interface PolicyPagesItem {
  id: string;
  url: string;
  title: string;
  updated: string;
  intro: string;
  sections: PolicyPagesItemSection[];
}

export interface PolicyPagesData {
  updatedLabel: string;
  otherTitle: string;
  contactTitle: string;
  contactText: string;
  contactEmail: string;
  contactEmailUrl: string;
  contactEmailIcon: string;
  pointIcon: string;
  linkIcon: string;
  items: PolicyPagesItem[];
}

export interface PolicyPagesProps {
  data?: PolicyPagesData;
  /** Which policy of data.items to show (its id). */
  policyId: string;
}

export interface SitemapPageGroup {
  id: string;
  title: string;
  links: NavLink[];
}

export interface SitemapPageData {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  groups: SitemapPageGroup[];
  linkIcon: string;
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
  Portfolio?: { variants?: { AdvertisingPortfolio1?: PortfolioData } };
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
