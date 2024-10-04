import Header from "../../_components/header";
import { Payment, columns } from "./data/columns";
import { DataTable } from "./data/data-table";

export default async function ServiceAdminPage() {
  const data = await getData();

  return (
    <section className="container">
      <Header
        title="Services"
        description="Manage all services"
        btnLink="/studio/services/new"
      />
      <div className="">
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      title: "Branding",
      description:
        "Tailored digital strategies combine SEO, PPC, and content marketing to enhance visibility and attract targeted traffic. Expert social media management builds brand presence and engages audiences, while data-driven optimization ensures campaigns maximize conversions and achieve goals.",
      image: "/images/featured/post-1.jpg",
      createdAt: Date.now(),
    },
    {
      id: "2",
      title: "Digital Marketing",
      description:
        "Strategic Social Media Campaigns: Crafting and executing tailored social media strategies to enhance brand visibility, engagement, and audience growth across platforms.Content Creation and Community Engagement: Developing compelling content and fostering meaningful interactions to build brand loyalty and drive business objectives.",
      image: "/images/featured/post-2.jpg",
      createdAt: Date.now(),
    },
    {
      id: "3",
      title: "Growth Hacking",
      description:
        "Tailored digital strategies combine SEO, PPC, and content marketing to enhance visibility and attract targeted traffic. Expert social media management builds brand presence and engages audiences, while data-driven optimization ensures campaigns maximize conversions and achieve goals.",
      image: "/images/featured/post-3.jpg",
      createdAt: Date.now(),
    },
    {
      id: "4",
      title: "ERP",
      description:
        "Tailored digital strategies combine SEO, PPC, and content marketing to enhance visibility and attract targeted traffic. Expert social media management builds brand presence and engages audiences, while data-driven optimization ensures campaigns maximize conversions and achieve goals.",
      image: "/images/featured/post-4.jpg",
      createdAt: Date.now(),
    },
  ];
}
