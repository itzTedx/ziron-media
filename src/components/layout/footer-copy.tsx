import Link from "next/link";

export default function FooterCopy() {
  return (
    <section className="border-t px-9 py-3 text-violet-200">
      <div className="container flex justify-between max-sm:flex-col max-sm:gap-3">
        <p className="text-sm">
          © {new Date().getFullYear()}, Ziron Media. All rights reserved.
        </p>
        <ul className="flex gap-6 text-sm">
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
