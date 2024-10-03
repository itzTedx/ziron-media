import { NavigationMenuLink } from "../ui/navigation-menu";

export default async function ServicesDropdown() {
  return (
    <li className="row-span-3">
      <NavigationMenuLink asChild>
        <a
          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
          href="/"
        >
          <div className="mb-2 mt-4 text-lg font-medium">Ziron Media</div>
          <p className="text-sm leading-tight text-muted-foreground">
            We specialize in brand identities, scalable websites, and expert
            social media management
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
