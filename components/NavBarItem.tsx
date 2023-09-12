import Link from "next/link"

import {
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu"

interface NavBarItemProps {
  href: string
  label: string
}

export default function NavBarItem(props: NavBarItemProps) {
  return (
    <NavigationMenuItem>
      <Link href={props.href} legacyBehavior passHref>
        <NavigationMenuLink className="md:text-lg nav-link">
          {props.label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
}