import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import siteLogo from "../../public/images/pump_tube_logo_white.png";
import { Image } from "@nextui-org/react";
import { navbarItemList } from "@/config/navbar";

export default function NavBarComponent() {
  return (
    <Navbar>
      <NavbarBrand>
        <Image
          width={100}
          height={80}
          alt="NextUI hero Image"
          src={siteLogo.src}
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navbarItemList.map((item) => (
          <NavbarItem key={item.key} className="hidden lg:flex">
            <Link href={item.url}>{item.label}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
