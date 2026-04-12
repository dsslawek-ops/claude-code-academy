import {
  BookOpen,
  ExternalLink,
  GraduationCap,
  Home,
  Keyboard,
  LifeBuoy,
  Newspaper,
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Start", icon: Home },
  { href: "/baza-wiedzy", label: "Baza wiedzy", icon: BookOpen },
  { href: "/szkolenia", label: "Szkolenia", icon: GraduationCap },
  { href: "/kursy-anthropic", label: "Kursy Anthropic", icon: ExternalLink },
  { href: "/sciagawka", label: "Ściągawka", icon: Keyboard },
  { href: "/troubleshooter", label: "Rozwiąż problem", icon: LifeBuoy },
  { href: "/co-nowego", label: "Co nowego", icon: Newspaper },
] as const;
