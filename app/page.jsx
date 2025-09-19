"use client";

import { useMemo, useState } from "react";
import PropertyCard from "../components/PropertyCard";

const properties = [
  {
    id: "ZEV-5403",
    title: "5403 Zev Way · 3 Bed · 2 Bath",
    price: 1750,
    city: "Louisville, KY",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1600&auto=format&fit=crop",
    link: "#rently-link-5403",
    tags: ["Available Now", "No HOA"],
  },
  {
    id: "RNR-6502",
    title: "6502 Rod N Reel Ct · 3 Bed · 2 Bath",
    price: 1550,
    city: "Louisville, KY",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=1600&auto=format&fit=crop",
    link: "#rently-link-6502",
    tags: ["Pet Friendly"],
  },
  {
    id: "JLC-9008",
    title: "9008 Jessica Leigh Ct · 3 Bed · 2 Bath",
    price: 1750,
    city: "Louisville, KY",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1600&auto=format&fit=crop",
    link: "#rently-link-9008",
    tags: ["Garage", "Fenced Yard"],
  },
  {
    id: "BRN-4008",
    title: "4008 Brownlee Rd · 4 Bed · 3 Bath",
    price: 2500,
    city: "Louisville, KY",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1600&auto=format&fit=crop",
    link: "#rently-link-4008",
    tags: ["High-Demand Area"],
  },
];

export default function HomePage() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return properties;
    return properties.filter((p) => `${p.title} ${p.city}`.toLowerCase().includes(q));
  }, [query]);

  return (
    <main className="min-h-screen text-gray-900 antialiased">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-black" />
            <span className="font-semibold">Oak & Elm Properties</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#rentals" className="hover:opacity-80">Rentals</a>
            <a href="#services" className="hover:opacity-80">Services</a>
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
          <a href="#contact" className="rounded-xl border px-3 py-1.5 text-sm font-medium hover:bg-gray-50">Get in touch</a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative isolate">
        <div className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2400&auto=format&fit=crop"
            alt="Louisville skyline"
            className="h-[60vh] w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="mx-auto max-w-5xl px-4 py-24 text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.1]">
            Quality single‑family rentals in Greater Louisville
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Local, responsive, and fair. Browse available homes, schedule tours through Rently, and apply securely.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by street, city, or feature…"
              className="w-full rounded-xl border bg-white/95 px-4 py-3 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/60"
            />
            <a href="#rentals" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100 text-center">
              See Rentals
            </a>
          </div>
          <div className="mt-4 text-xs text-white/80">
            Equal Housing Opportunity · Fair Housing Compliant
          </div>
        </div>
      </section>

      {/* Rentals */}
      <section id="rentals" className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Available Rentals</h2>
            <p className="text-sm text-gray-600">Instant self‑tours and online applications via Rently.</p>
          </div>
          <a href="#contact" className="rounded-xl border px-3 py-1.5 text-sm font-medium hover:bg-gray-50">Owner Services</a>
        </div>

        {/* Option A: demo cards (replace with live data or keep) */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <PropertyCard key={p.id} p={p} />
          ))}
        </div>

        {/* Option B: Replace with your Rently embed (swap this div) */}
        {/* <div className="mt-8">
          <iframe
            title="Rently Listings"
            src="https://YOUR-RENTLY-LISTINGS-URL"
            className="w-full h-[1200px] rounded-2xl border"
            loading="lazy"
          />
        </div> */}
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-2xl font-bold">Services</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Property Management",
              desc: "Tenant placement, maintenance coordination, on‑time owner statements.",
            },
            {
              title: "Leasing & Marketing",
              desc: "Syndication to major portals, Rently self‑tours, fair‑housing compliant screening.",
            },
            {
              title: "Buyer & Seller Representation (post‑license)",
              desc: "Single‑family investment acquisitions, listing prep, pricing strategy.",
            },
          ].map((s) => (
            <div key={s.title} className="rounded-2xl border p-5 shadow-sm">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold">About Oak & Elm Properties</h2>
            <p className="mt-3 text-gray-700">
              We’re a Louisville‑based, family‑run company focused on clean, safe, well‑maintained single‑family homes. 
              Tours and applications are handled through Rently for speed and security. We respond quickly to maintenance and respect tenants and neighbors alike.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>• Louisville & surrounding counties</li>
              <li>• Transparent criteria & fair‑housing compliance</li>
              <li>• Online payments & resident portal (via your preferred system)</li>
            </ul>
          </div>
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c1f9?q=80&w=1800&auto=format&fit=crop"
              alt="Front porch of a home"
              className="w-full rounded-2xl object-cover shadow-md"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-3xl px-4 py-12">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="mt-2 text-sm text-gray-600">Have a question about a property or looking for management? Send a message.</p>

        {/* Replace the action with your Formspree ID or embed a Google Form */}
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="mt-6 grid grid-cols-1 gap-4"
        >
          <input name="name" required placeholder="Your name" className="w-full rounded-xl border px-4 py-3" />
          <input name="email" required type="email" placeholder="Email" className="w-full rounded-xl border px-4 py-3" />
          <input name="phone" placeholder="Phone (optional)" className="w-full rounded-xl border px-4 py-3" />
          <textarea name="message" required placeholder="How can we help?" rows={5} className="w-full rounded-xl border px-4 py-3" />
          <button type="submit" className="rounded-xl bg-black px-5 py-3 text-white font-semibold hover:opacity-90">Send</button>
        </form>

        <div className="mt-6 text-sm text-gray-600">
          Or email <a href="mailto:stanton.jacob@gmail.com" className="underline">stanton.jacob@gmail.com</a>
        </div>
      </section>

      <footer className="border-t bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="font-semibold">Oak & Elm Properties</div>
            <p className="mt-2 text-gray-600">Quality single‑family rentals in Greater Louisville.</p>
          </div>
          <div>
            <div className="font-semibold">Links</div>
            <ul className="mt-2 space-y-2">
              <li><a href="#rentals" className="hover:underline">Available Rentals</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Compliance</div>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li>Equal Housing Opportunity</li>
              <li>Fair Housing Act</li>
              <li>ADA‑friendly website practices</li>
              <li><a className="hover:underline" href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Get Updates</div>
            <p className="mt-2 text-gray-600">Join our list for new listings.</p>
            <form action="https://formspree.io/f/your-form-id" method="POST" className="mt-2 flex gap-2">
              <input name="email" type="email" placeholder="you@email.com" className="flex-1 rounded-xl border px-3 py-2" />
              <button className="rounded-xl border px-3 py-2 font-medium hover:bg-gray-100">Join</button>
            </form>
          </div>
        </div>
        <div className="border-t py-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Oak & Elm Properties · All rights reserved.
        </div>
      </footer>
    </main>
  );
}
