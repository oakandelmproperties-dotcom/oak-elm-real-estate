import Image from "next/image";
import Badge from "./Badge";

export default function PropertyCard({ p }) {
  return (
    <article className="group overflow-hidden rounded-2xl border shadow-sm transition hover:shadow-md focus-within:shadow-md">
      <a href={p.link} className="block relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.image}
          alt={p.title}
          className="h-52 w-full object-cover transition group-hover:scale-[1.02]"
          loading="lazy"
        />
      </a>
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-base font-semibold leading-tight">
            <a href={p.link} className="outline-none focus:ring-2 focus:ring-offset-2 rounded-md">
              {p.title}
            </a>
          </h3>
          <div className="text-right">
            <div className="text-lg font-bold">${p.price.toLocaleString()}/mo</div>
            <div className="text-sm text-gray-500">{p.city}</div>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tags?.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <a
            href={p.link}
            className="rounded-xl px-3 py-2 text-sm font-medium border hover:bg-gray-50"
          >
            View Details
          </a>
          <a
            href={p.link}
            className="rounded-xl px-3 py-2 text-sm font-medium border hover:bg-gray-50"
          >
            Schedule Tour
          </a>
        </div>
      </div>
    </article>
  );
}
