"use client";

import Link from "next/link";
import Applogo from "./Applogo";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { BsMenuApp } from "react-icons/bs";

const Navbar = () => { 
    const [isOpen,setIsOpen] = useState(false)

  const pathName = usePathname();  
  return (  
    <nav className="w-full md:px-20 px-4 flex justify-between items-center flex-wrap py-2">
      <Applogo />
      <div className="flex flex-wrap gap-5 justify-center items-center">
        <NavigationMenu className="md:block hidden" >
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href={'/'} legacyBehavior passHref title="Toko DiJokiin">
                <NavigationMenuLink
                  active={pathName === "/"}
                  
                  className={navigationMenuTriggerStyle()}
                >
                  Home
                </NavigationMenuLink> 
              </Link> 
            </NavigationMenuItem>
            <NavigationMenuItem>
            <Link  href="/store" legacyBehavior passHref title="Toko DiJokiin">
                <NavigationMenuLink
               
                  active={pathName === "/store"}
                  className={navigationMenuTriggerStyle()}
                >
                  Store
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu> 
        <div className="md:hidden block">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger onClick={()=>setIsOpen(!isOpen)} className="text-black bg-neutral-400/20 p-2 rounded-md"><BsMenuApp/></SheetTrigger>
          <SheetContent >
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-2 w-full h-full py-4"> 
                <Link onClick={()=>setIsOpen(!isOpen)} href={'/'} className={`p-2 text-xs font-semibold rounded-md ${pathName === "/" ? 'bg-neutral-600/20' : ''}`}>Home</Link>
                <Link onClick={()=>setIsOpen(!isOpen)} href={'/store'} className={`p-2 text-xs font-semibold rounded-md ${pathName === "/store" ? 'bg-neutral-600/20' : ''}`}>Store</Link>
            </div>
          </SheetContent>
        </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
