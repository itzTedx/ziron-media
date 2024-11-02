import Link from "next/link";

export default function FooterCopy() {
  return (
    <section className="relative z-50 border-t border-gray-800 px-4 py-3 text-violet-300 md:px-9">
      <div className="container flex justify-center max-md:flex-col max-md:items-center max-md:gap-3 md:justify-between">
        <p className="text-sm">
          © {new Date().getFullYear()}, Ziron Media. All rights reserved.
        </p>
        <ul className="flex gap-6 text-sm">
          <li>
            <Link href="/enquiry">Enquiry</Link>
          </li>
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/sitemap.xml">Sitemap</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
