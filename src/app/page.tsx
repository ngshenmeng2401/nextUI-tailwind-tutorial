"use client";
import HomeSearchBar from "@/components/HomeSearchBar";
import NavBarComponent from "@/components/Navbar";

// import { Input } from "@nextui-org/react";

export default function Home() {

  

  return (
    <div className="container mx-auto">
      <NavBarComponent />
      <HomeSearchBar/>
    </div>
  );
}
