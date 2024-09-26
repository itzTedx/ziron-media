import Link from "next/link";

export default function ContactButton() {
  return (
    <div className="hidden md:block">
      <Link
        href="/contact"
        aria-label="Call me now. Click to open Phone App"
        className="flex shrink-0 scale-100 gap-2 rounded-full px-2 py-2 uppercase transition hover:bg-foreground/50 active:scale-95"
      >
        Contact
      </Link>
    </div>
  );
}
