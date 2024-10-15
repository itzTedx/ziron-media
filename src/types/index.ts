export type SiteConfig = {
  name: string;
  shortName: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
  };
};

// export type Service = {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   content?: string | null;
//   slug: string;
//   createdAt?: Date | null;
// };

export type Service = {
  metadata: ServiceMetadata;
  content: string;
};

export type ServiceMetadata = {
  title?: string;
  description?: string;
  image?: string;
  isFeatured?: boolean;
  id?: number;
  slug: string;
};
