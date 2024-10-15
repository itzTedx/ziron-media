export interface NavItems {
  title: string;
  href: string;
  services?: Array<NavService>;
}

interface NavService {
  title: string;
  href: string;
  description: string;
}
