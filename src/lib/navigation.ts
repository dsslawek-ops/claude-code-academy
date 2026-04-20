import {
  BookOpen,
  ExternalLink,
  GraduationCap,
  Home,
  Keyboard,
  LifeBuoy,
  Newspaper,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

export interface NavGroup {
  label: string;
  items: readonly NavItem[];
}

export const navGroups: readonly NavGroup[] = [
  {
    label: "",
    items: [{ href: "/", label: "Start", icon: Home }],
  },
  {
    label: "Nauka",
    items: [
      { href: "/szkolenia", label: "Szkolenia", icon: GraduationCap },
      { href: "/kursy-anthropic", label: "Kursy Anthropic", icon: ExternalLink },
    ],
  },
  {
    label: "Referencja",
    items: [
      { href: "/baza-wiedzy", label: "Baza wiedzy", icon: BookOpen },
      { href: "/sciagawka", label: "Ściągawka", icon: Keyboard },
    ],
  },
  {
    label: "Pomoc",
    items: [
      { href: "/troubleshooter", label: "Rozwiąż problem", icon: LifeBuoy },
      { href: "/co-nowego", label: "Co nowego", icon: Newspaper },
    ],
  },
] as const;

export const navItems = navGroups.flatMap((g) => g.items);
