"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import siteLogo from "../../public/images/pump_tube_logo_white.png";
import { navbarItemList } from "@/config/navbar";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";
import { useState } from "react";

export default function NavBarComponent() {
  const lang = useTranslations();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <Navbar
        maxWidth="xl"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>
        <NavbarContent className="pr-3" justify="center">
          <NavbarBrand hidden={true}>
            <Image width={100} height={80} alt="logo" src={siteLogo} />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="sm:flex gap-4" justify="start">
          {navbarItemList.map((item) => (
            <NavbarItem key={item.key} className="hidden lg:flex">
              <Link href={item.url} style={{ color: "white" }}>
                {lang(item.label)}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarMenu style={{ backgroundColor: "black" }}>
          {navbarItemList.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link href={item.url} style={{ color: "white" }}>
                {lang(item.label)}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
        <NavbarContent justify="end">
          <LanguageSwitcher />
        </NavbarContent>
      </Navbar>
    </div>
  );
}
