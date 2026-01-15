import Link from "next/link";

export default function MessageLink() {
  return (
    <Link href="/" className="custom-flex gap-2 px-2 py-2 rounded-[11px]">
      <div className="plain-flex gap-3">
        <div className="relative">
          <div className="w-8 h-8 rounded-full bg-linear-0 from-red-500 to-blue-500"></div>
          <div className="absolute -right-0.5 bottom-1 w-2.5 h-2.5 border-[0.1em] border-background rounded-full bg-secondary"></div>
        </div>
        <div>
          <h3 className="font-medium text-small">John Doe</h3>
          <p className="text-smaller text-gray-600!">
            Hello man, how is it going?
          </p>
        </div>
      </div>

      <div>
        <p className="text-smallest text-gray-500! mb-1">12:03PM</p>
        <div className="bg-primary w-5 h-5 grid ml-auto place-items-center rounded-full">
          <p className="text-white! text-smallest font-medium">6</p>
        </div>
      </div>
    </Link>
  );
}
