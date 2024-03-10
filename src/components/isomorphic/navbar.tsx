"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";

interface Link {
  label: string;
  href: {
    pathname: string;
    id: string;
  };
}

const links = [
  {
    label: "About",
    href: {
      pathname: "/about",
      id: "#",
    },
  },
  {
    label: "Programs",
    href: {
      pathname: "/programs",
      id: "#programs",
    },
  },
  {
    label: "Business",
    href: {
      pathname: "/business",
      id: "#business",
    },
  },
  {
    label: "Blog",
    href: {
      pathname: "/blog",
      id: "#blog",
    },
  },
  {
    label: "Event",
    href: {
      pathname: "/events",
      id: "",
    },
  },
];

function pathCheck(pathname: string, obj: Link) {
  return pathname === obj.href.pathname ? obj.href.id : obj.href.pathname + obj.href.id;
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className={`min-w-screen sticky top-0 z-20 backdrop-blur-lg backdrop-filter`}>
      <div className="container mx-auto max-w-7xl grid grid-cols-2 lg:grid-cols-3 items-center py-6 px-4">
        <Logo />
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {links.map((link, idx) => (
              <NavigationMenuItem key={idx}>
                <NavigationMenuLink
                  href={pathCheck(pathname, link)}
                  className={navigationMenuTriggerStyle()}
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-1 justify-self-end">
          <MobileNav />
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <Link href="/">
      <div className="font-black hover:text-primary text-2xl transition-colors ease-linear duration-300">
        partnatech
      </div>
    </Link>
  );
}

function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant={"ghost"} size={"icon"} onClick={() => setOpen(true)}>
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-48 pt-10">
        <div className="flex flex-col gap-1">
          {links.map((link, idx) => (
            <Button
              variant={"ghost"}
              size={"lg"}
              key={idx}
              className={cn("justify-start px-0 font-bold")}
              onClick={() => setOpen(false)}
              asChild
            >
              <Link href={pathCheck(pathname, link)}>{link.label}</Link>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
