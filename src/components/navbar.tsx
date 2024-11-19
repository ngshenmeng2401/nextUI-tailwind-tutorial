import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import siteLogo from "../../public/images/pump_tube_logo_white.png";
import { navbarItemList } from "@/config/navbar";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";

export default function NavBarComponent() {
  const lang = useTranslations();
  
  return (
    <Navbar>
      <NavbarBrand>
        <Image
          width={100}
          height={80}
          alt="logo"
          src={siteLogo}
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navbarItemList.map((item) => (
          <NavbarItem key={item.key} className="hidden lg:flex">
            <Link href={item.url} style={{color: "white"}}>{lang(item.label)}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <LanguageSwitcher/>
      </NavbarContent>
    </Navbar>
  );
}
