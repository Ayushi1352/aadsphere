// Types for data/templates.json. Generated from the JSON shape; keep them in step when the JSON changes.

export interface SeoData {
  title: string;
  description: string;
}

export interface LinkItem {
  label: string;
  href: string;
}

/** One step of the breadcrumb trail; the last step is the current page (empty url). */
export interface BreadcrumbPath {
  id: string;
  label: string;
  url: string;
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

export interface SiteMetadataData {
  title: string;
  siteName: string;
  description: string;
  icon: string;
  lang: string;
}

export interface GlobalUIData {
  breadcrumbLabel: string;
  breadcrumbSeparator: string;
  previousLabel: string;
  nextLabel: string;
  goToSlideLabel: string;
}

export interface CompanyMap {
  title: string;
  src: string;
}

export interface CompanyData {
  phone: string;
  phoneHref: string;
  footerPhone: string;
  footerPhoneHref: string;
  altPhone: string;
  email: string;
  emailHref: string;
  supportEmail: string;
  addressLines: string[];
  directionsHref: string;
  map: CompanyMap;
  hoursLines: string[];
}

export interface FooterCta {
  eyebrow: string;
  heading: string;
  headingHighlight: string;
  descriptionLines: string[];
  button: LinkItem;
}

export interface FooterImages {
  logo: string;
}

export interface FooterText {
  logoAlt: string;
  homeLabel: string;
  descriptionLines: string[];
  contactHeading: string;
  copyright: string;
}

export interface FooterLinks {
  home: string;
}

export interface FooterSocial {
  name: string;
  icon: string;
  href: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface FooterColumn {
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
  cta: FooterCta;
  images: FooterImages;
  text: FooterText;
  links: FooterLinks;
  socials: FooterSocial[];
  columns: FooterColumn[];
  contactIcons: FooterContactIcons;
  bottomLinks: NavLink[];
}

export interface HeaderNavLink {
  name: string;
  href: string;
  children: NavLink[];
}

export interface HeaderText {
  logoAlt: string;
  homeLabel: string;
  needHelp: string;
  getAQuote: string;
  openMenu: string;
  closeMenu: string;
  mainNavLabel: string;
  mobileNavLabel: string;
}

export interface HeaderImages {
  logo: string;
}

export interface HeaderLinks {
  home: string;
  getAQuote: string;
}

export interface HeaderData {
  navLinks: HeaderNavLink[];
  text: HeaderText;
  images: HeaderImages;
  links: HeaderLinks;
}

export interface HeroHeadingLine {
  text: string;
  indent: boolean;
}

export interface ImageData {
  src: string;
  alt: string;
}

export interface HeroData {
  headingLines: HeroHeadingLine[];
  descriptionLines: string[];
  button: LinkItem;
  image: ImageData;
}

export interface HeadingPart {
  text: string;
  highlight: boolean;
}

export interface AboutUsImages {
  primary: ImageData;
  secondary: ImageData;
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
  images: AboutUsImages;
  experience: AboutUsExperience;
}

export interface ImpactStat {
  value: string;
  labelLines: string[];
  icon: string;
}

export interface ImpactData {
  label: string;
  headingLines: HeadingPart[][];
  descriptionLines: string[];
  image: ImageData;
  stats: ImpactStat[];
}

export interface ServicesService {
  number: string;
  category: string;
  titleLines: string[];
  href: string;
  image: ImageData;
}

export interface ServicesData {
  label: string;
  headingLines: HeadingPart[];
  descriptionLines: string[];
  services: ServicesService[];
}

export interface ProcessStep {
  number: string;
  title: string;
  descriptionLines: string[];
  icon: string;
  image: ImageData;
}

export interface ProcessData {
  label: string;
  headingLines: HeadingPart[];
  descriptionLines: string[];
  steps: ProcessStep[];
}

export interface TestimonialsBadge {
  stars: number;
  text: string;
}

export interface TestimonialsTestimonial {
  quoteLines: string[];
  name: string;
  role: string;
  avatar: string;
  image: ImageData;
}

export interface TestimonialsData {
  label: string;
  headingLines: HeadingPart[];
  descriptionLines: string[];
  badge: TestimonialsBadge;
  testimonials: TestimonialsTestimonial[];
}

export interface BlogsPost {
  day: string;
  month: string;
  year: string;
  categories: string[];
  titleLines: string[];
  excerptLines: string[];
  href: string;
  image: ImageData;
}

export interface BlogsData {
  label: string;
  headingLines: HeadingPart[];
  descriptionLines: string[];
  posts: BlogsPost[];
}

export interface AboutStoryData {
  storyParagraphs: string[][];
}

export interface WhyChooseUsReason {
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

export interface ServicesGridPagination {
  label: string;
  goToPageN: string;
}

export interface ServicesGridService {
  number: string;
  category: string;
  titleLines: string[];
  href: string;
  image: ImageData;
}

export interface ServicesGridData {
  pagination: ServicesGridPagination;
  label: string;
  headingLines: HeadingPart[];
  descriptionLines: string[];
  services: ServicesGridService[];
  pageSize: number;
}

export interface ServiceDetailSection {
  title: string;
  lines: string[];
}

export interface ServiceDetailFeature {
  icon: string;
  title: string;
  lines: string[];
}

export interface ServiceDetailClosingSection {
  title: string;
  lines: string[];
}

export interface ServiceDetailData {
  label: string;
  heading: HeadingPart[];
  image: ImageData;
  introLines: string[];
  sections: ServiceDetailSection[];
  features: ServiceDetailFeature[];
  closingSections: ServiceDetailClosingSection[];
}

export interface PortfolioPagination {
  label: string;
  goToPageN: string;
}

export interface PortfolioProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface PortfolioProject {
  title: string;
  tags: string[];
  image: PortfolioProjectImage;
}

export interface PortfolioData {
  pagination: PortfolioPagination;
  label: string;
  headingLines: HeadingPart[][];
  descriptionLines: string[];
  projects: PortfolioProject[];
  pageSize: number;
}

export interface BlogGridPagination {
  label: string;
  goToPageN: string;
}

export interface BlogGridPost {
  day: string;
  month: string;
  year: string;
  categories: string[];
  titleLines: string[];
  excerptLines: string[];
  href: string;
  image: ImageData;
}

export interface BlogGridData {
  pagination: BlogGridPagination;
  label: string;
  headingLines: HeadingPart[];
  descriptionLines: string[];
  posts: BlogGridPost[];
  pageSize: number;
}

export interface BlogDetailSection {
  title: string;
  lines: string[];
}

export interface BlogDetailSidebarCategory {
  name: string;
  count: number;
  href: string;
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
  image: ImageData;
  date: string;
  category: string;
  author: string;
  headingLines: HeadingPart[][];
  paragraphs: string[][];
  quoteLines: string[];
  sections: BlogDetailSection[];
  sidebar: BlogDetailSidebar;
}

export interface QuoteFeature {
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

export interface ContactCard {
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
  form: ContactForm;
}

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
  points: string[];
  image: ImageData;
}

export interface CtaData {
  heading: string;
  description: string;
  button: LinkItem;
}

export interface HowItWorksData {
  label: string;
  headingLines: HeadingPart[];
  descriptionLines: string[];
  steps: HowItWorksStep[];
  cta: CtaData;
}

export interface CareerPerk {
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

export interface FaqFaq {
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

export interface PolicyPagesItemSection {
  title: string;
  paragraphs: string[];
  points: string[];
}

export interface PolicyPagesItem {
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
  items: PolicyPagesItem[];
}

export interface SitemapPageGroup {
  heading: string;
  links: NavLink[];
}

export interface SitemapPageData {
  label: string;
  headingLines: HeadingPart[];
  descriptionLines: string[];
  groups: SitemapPageGroup[];
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
  "about-us": TemplatePage;
  services: TemplatePage;
  "service-details": TemplatePage;
  portfolio: TemplatePage;
  blog: TemplatePage;
  "blog-details": TemplatePage;
  "get-a-quote": TemplatePage;
  contact: TemplatePage;
  "how-it-works": TemplatePage;
  career: TemplatePage;
  faqs: TemplatePage;
  "privacy-policy": TemplatePage;
  "terms-and-conditions": TemplatePage;
  "cookie-policy": TemplatePage;
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
  company: CompanyData;
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
