import type { IconType } from "react-icons";
import { FaQuoteLeft, FaRegCircle, FaUsers } from "react-icons/fa";
import {
  LuArrowLeft,
  LuArrowRight,
  LuArrowUpRight,
  LuBriefcase,
  LuChartNoAxesCombined,
  LuCheck,
  LuChevronDown,
  LuChevronLeft,
  LuChevronRight,
  LuClock,
  LuFilePen,
  LuHandshake,
  LuMenu,
  LuPhone,
  LuPhoneCall,
  LuPlus,
  LuSettings,
  LuThumbsUp,
  LuTrophy,
  LuUsers,
  LuX,
} from "react-icons/lu";
import { MdBarChart, MdBolt, MdChat, MdEmail, MdGroups, MdLocationOn, MdPhone, MdSettings, MdShield, MdStar } from "react-icons/md";
import { RiDoubleQuotesL, RiFacebookFill, RiInstagramLine, RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
import { TbBulb, TbTargetArrow } from "react-icons/tb";

// Every icon the site can use, by the name templates.json stores. A new icon is added here once.
const icons: Record<string, IconType> = {
  FaQuoteLeft,
  FaUsers,
  LuArrowLeft,
  LuArrowRight,
  LuArrowUpRight,
  LuBriefcase,
  LuChartNoAxesCombined,
  LuCheck,
  LuChevronDown,
  LuChevronLeft,
  LuChevronRight,
  LuClock,
  LuFilePen,
  LuHandshake,
  LuMenu,
  LuPhone,
  LuPhoneCall,
  LuPlus,
  LuSettings,
  LuThumbsUp,
  LuTrophy,
  LuUsers,
  LuX,
  MdBarChart,
  MdBolt,
  MdChat,
  MdEmail,
  MdGroups,
  MdLocationOn,
  MdPhone,
  MdSettings,
  MdShield,
  MdStar,
  RiDoubleQuotesL,
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiYoutubeFill,
  TbBulb,
  TbTargetArrow,
};

type Props = {
  name: string;
  className?: string;
};

export const Icon = ({ name, className }: Props) => {
  const Glyph = icons[name];
  if (!Glyph) {
    if (process.env.NODE_ENV !== "production") console.warn(`Icon "${name}" is not in components/ui/Icon.tsx`);
    return <FaRegCircle aria-hidden="true" className={className} />;
  }
  return <Glyph aria-hidden="true" focusable="false" className={className} />;
};
