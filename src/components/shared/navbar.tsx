"use client";
import * as React from "react";
import { Fragment, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface NavLink {
  label: string;
  href: string;
  submenu?: NavLink[];
}

const links: NavLink[] = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Programs",
    href: "/programs",
    submenu: [
      {
        label: "Full Program",
        href: "/programs",
      },
      {
        label: "Lite Program",
        href: "/programs/lite",
      },
    ],
  },
  {
    label: "Learn",
    href: "/learn",
  },
  {
    label: "Business",
    href: "/business",
  },
  {
    label: "Event",
    href: "/events",
  },
  {
    label: "Publications",
    href: "/publications",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className={`min-w-screen sticky top-0 z-20 backdrop-blur-lg backdrop-filter`}>
      <div className="container mx-auto grid max-w-7xl grid-cols-2 items-center px-4 py-6 lg:grid-cols-3">
        <Logo />
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {links.map((link, idx) => (
              <NavigationMenuItem key={idx}>
                {link.submenu ? (
                  <DropdownMenu label={link.label} submenu={link.submenu} />
                ) : (
                  <NavigationMenuLink
                    href={link.href}
                    className={`
                      ${
                        pathname.includes(link.href)
                          ? cn(navigationMenuTriggerStyle(), "opacity-100")
                          : navigationMenuTriggerStyle()
                      }
                    `}
                  >
                    {link.label}
                  </NavigationMenuLink>
                )}
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
      <div className="flex items-center gap-2 text-2xl font-black transition-colors duration-300 ease-linear">
        <Image className="h-7" src="/partnatech_1.png" alt="partnatech" width={30} height={120} />
        <p>partnatech</p>
      </div>
    </Link>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <Button variant={"ghost"} size={"icon"} onClick={() => setOpen(true)}>
          <Menu className="h-6 w-6" />
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
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface DropdownMenuProps {
  label: string;
  submenu: NavLink[];
}

function DropdownMenu({ label, submenu }: DropdownMenuProps) {
  return (
    <NavigationMenu>
      <NavigationMenuItem>
        <NavigationMenuTrigger>{label}</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="md:grid-cols-1lg:w-[600px] grid w-[400px] gap-3 bg-black p-4 md:w-[500px] ">
            {submenu.map((item) => (
              <ListItem key={item.label} title={item.label} href={item.href} />
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "hover:text-accent-foreground focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";
