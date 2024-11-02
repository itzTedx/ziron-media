import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import { Badge } from "@/components/ui/badge";

export function Works() {
  const cards = data.map((card) => <Card key={card.src} card={card} />);

  return (
    <div className="py-12 md:py-24">
      <div className="container">
        <Badge>✦ Happy Customers</Badge>
        <h2 className="title-2 mt-5 max-w-xl">
          Here are some <span className="text-secondary">cases</span> we’re
          pretty proud of
        </h2>
      </div>

      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Social Media",
    title: "Aura Group",
    src: "/works/aura-group.jpg",
  },
  {
    category: "Social Media",
    title: "Bumbyy",
    src: "/works/bumbyy.jpg",
  },
  {
    category: "Social Media",
    title: "Mine Hive",
    src: "/works/mine-hive.jpg",
  },

  {
    category: "Social Media",
    title: "Simply KF",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Social Media",
    title: "Assets & Keys",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    category: "Social Media",
    title: "Saj Consultancy",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
