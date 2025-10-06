"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Moon,
  Sun,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Users,
  Code,
  Store,
  Briefcase,
  Code2,
  ShoppingBag,
  Building2,
} from "lucide-react";

// ---------------- LOGO ----------------
const Logo = () => (
  <Link href="/" className="flex items-center gap-2">
    <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-orange-500 to-blue-500 flex items-center justify-center text-white font-bold shadow-sm">
      U
    </div>
    <span className="text-lg font-semibold text-gray-900 dark:text-white">
      Ulisha Limited
    </span>
  </Link>
);

// ---------------- BUTTON ----------------
const Button = ({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-2.5 text-base font-medium rounded-lg shadow-sm transition whitespace-nowrap";
  const primary =
    "bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:opacity-90";
  const secondary =
    "bg-white text-blue-600 border border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700";
  const btnClass = variant === "primary" ? primary : secondary;

  if (href)
    return (
      <Link href={href} className={`${base} ${btnClass}`}>
        {children}
      </Link>
    );

  return <button className={`${base} ${btnClass}`}>{children}</button>;
};

// ---------------- CARD ----------------
const Card = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    transition={{ type: "spring", stiffness: 200 }}
    className="group p-6 rounded-xl border border-gray-200 bg-white/70 dark:bg-gray-800/80 backdrop-blur-md shadow-lg hover:shadow-2xl hover:border-orange-400 transition-all duration-500"
  >
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-orange-400 text-white shadow-md group-hover:scale-110 transition">
      {icon}
    </div>
    <h3 className="font-bold text-xl mt-4 text-gray-900 dark:text-white">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
      {description}
    </p>
  </motion.div>
);

// ---------------- NAVBAR ----------------
const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#services", label: "Solutions" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.theme = newTheme;
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="sticky top-3 z-50 flex justify-center">
      <div className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200 dark:border-gray-700 shadow-md rounded-full px-6 py-3 w-[95%] max-w-5xl flex items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500 font-medium transition"
            >
              {item.label}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-400" />
            )}
          </button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 w-[90%] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg md:hidden p-4 space-y-3"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-700 dark:text-gray-300 hover:text-orange-500"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-orange-500"
            >
              {theme === "light" ? (
                <>
                  <Moon className="w-5 h-5" /> Dark Mode
                </>
              ) : (
                <>
                  <Sun className="w-5 h-5 text-yellow-400" /> Light Mode
                </>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ---------------- HERO ----------------
const Hero = () => (
  <section className="relative pt-28 pb-24 bg-gradient-to-b from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      {/* Left Section (Text) */}
      <div className="text-center lg:text-left space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
          The Engine for <br />
          <span className="bg-gradient-to-r from-blue-500 to-orange-400 bg-clip-text text-transparent">
            Nigerian Commerce
          </span>
        </h1>

        <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0">
          We build the digital backbone for market efficiency, connecting households
          to cost-effective products and empowering local businesses with proprietary tech.
        </p>

        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
          <Button href="#products">Our Products</Button>
          <Button href="#contact" variant="secondary">
            Contact Us
          </Button>
        </div>
      </div>

      {/* Right Section (Service Cards) */}
      <div className="flex justify-center lg:justify-end">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 sm:p-8 w-full max-w-md space-y-5">
          <div className="flex items-start gap-4 p-5 bg-blue-50 dark:bg-blue-950/30 rounded-2xl">
            <Store className="w-8 h-8 text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Retail & Sourcing
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Direct-to-consumer cost efficiency.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-orange-50 dark:bg-orange-900/20 rounded-2xl">
            <Briefcase className="w-8 h-8 text-orange-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                SME Enablement
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Digital presence with Ushops.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 bg-blue-50 dark:bg-blue-950/30 rounded-2xl">
            <Code2 className="w-8 h-8 text-blue-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Bespoke Software
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                APIs and custom tech solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ---------------- ABOUT ----------------
const About = () => (
  <section id="about" className="py-20 bg-white dark:bg-gray-900 text-center">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
      About Us
    </h2>
    <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
      Ulisha Limited is a technology-driven company dedicated to building
      scalable solutions for businesses and individuals. We focus on
      high-quality user experiences, performance, and security.
    </p>
  </section>
);

// ---------------- PRODUCTS ----------------
const Products = () => (
  <section id="products" className="py-20 bg-gray-50 dark:bg-gray-950 text-center">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
      Our Products
    </h2>
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
      <Card
        icon={<ShoppingBag />}
        title="Ulisha Store"
        description="A fast-growing e-commerce platform sourcing affordable products directly from manufacturers."
      />
      <Card
        icon={<Briefcase />}
        title="Ushops"
        description="An SME enablement platform helping businesses get online with ease and grow digitally."
      />
      <Card
        icon={<Building2 />}
        title="Ulisha Technologies"
        description="Our innovation lab building websites, apps, and automation systems for modern enterprises."
      />
    </div>
  </section>
);

// ---------------- SERVICES ----------------
const Services = () => (
  <section id="services" className="py-20 bg-white dark:bg-gray-900 text-center">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
      Our Solutions
    </h2>
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
      <Card
        icon={<Users />}
        title="Web Development"
        description="We craft beautiful, responsive, and functional websites."
      />
      <Card
        icon={<Code />}
        title="Blockchain Integration"
        description="We bring businesses on-chain with secure smart contracts."
      />
      <Card
        icon={<Store />}
        title="E-Commerce Solutions"
        description="Seamless online stores with analytics and fast checkout."
      />
    </div>
  </section>
);

// ---------------- TESTIMONIALS ----------------
const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-950 text-center">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
      What Clients Say
    </h2>
    <div className="max-w-4xl mx-auto space-y-10">
      <p className="text-gray-700 dark:text-gray-300 italic text-lg">
        “Ulisha helped us scale faster with an SEO-optimized site and top-notch design.”
      </p>
      <p className="text-gray-700 dark:text-gray-300 italic text-lg">
        “Professional, creative, and efficient — they delivered more than we expected.”
      </p>
    </div>
  </section>
);

// ---------------- TEAM ----------------
const Team = () => {
  const members = [
    {
      name: "Okai Paul Elisha",
      role: "Founder & CEO",
      img: "https://avatars.githubusercontent.com/u/46462325?s=400",
      linkedin: "https://www.linkedin.com/in/elisha-okai-791b8223a",
      twitter: "https://x.com/NFTArts7",
    },
    {
      name: "Melvins Galano Jones",
      role: "CTO & Co-Founder",
      img: "https://avatars.githubusercontent.com/u/62317165?v=4",
      linkedin: "https://www.linkedin.com/in/mrepol742/",
      twitter: "#",
    },
    {
      name: "Paul Otene",
      role: "Business Dev & Co-Founder",
      img: "https://github.com/ulisha-limited/ulisha-limited/blob/main/paulotene.jpg",
      linkedin: "#",
      twitter: "#",
    },
  ];

  return (
    <section id="team" className="py-20 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
        Meet Our Team
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {members.map((m, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <img
              src={m.img}
              alt={m.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {m.name}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">{m.role}</p>
            <div className="flex justify-center gap-4">
              <Link href={m.linkedin} target="_blank" className="hover:text-blue-600">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href={m.twitter} target="_blank" className="hover:text-blue-400">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ---------------- CONTACT ----------------
const Contact = () => (
  <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-950 text-center">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
      Get in Touch
    </h2>
    <p className="text-gray-600 dark:text-gray-300 mb-6">
      Let's discuss your next big idea or collaboration.
    </p>
    <div className="flex justify-center gap-6">
      <Link
        href="mailto:info@ulishalimited.com"
        className="flex items-center gap-2 text-blue-600 hover:text-orange-500"
      >
        <Mail /> info@ulishalimited.com
      </Link>
      <Link
        href="tel:+2349034762178"
        className="flex items-center gap-2 text-blue-600 hover:text-orange-500"
      >
        <Phone /> +2349034762178
      </Link>
    </div>
  </section>
);

// ---------------- FOOTER ----------------
const Footer = () => (
  <footer className="border-t border-gray-200 py-8 bg-white dark:bg-gray-900 text-center">
    <p className="text-sm text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} Ulisha Limited — RC: 8644622. All rights reserved.
    </p>
  </footer>
);

// ---------------- MAIN EXPORT ----------------
export default function HomePage() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen text-gray-900 dark:text-white transition-colors duration-300">
      <Nav />
      <Hero />
      <About />
      <Products />
      <Services />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
