"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Menu, Mail, Phone, Linkedin, Twitter,
  Briefcase, Store, Code, ChevronRight, Users,
  MapIcon
} from "lucide-react";


const Logo: React.FC = () => (
  <Link href="/" className="flex items-center gap-3">
    <div>
      <div className="text-lg font-semibold text-gray-900">Ulisha Limited</div>
      <div className="text-xs text-gray-500">Tech & Commerce</div>
    </div>
  </Link>
);

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit" | "reset"; 

};

const Button: React.FC<ButtonProps> = ({ children, href, onClick, ariaLabel, variant = "primary", className = "", type = "button" }) => {
  const baseClasses = "relative inline-flex items-center justify-center gap-2 px-6 py-2.5 text-base font-medium rounded-lg overflow-hidden group shadow-lg transition duration-300 ease-in-out whitespace-nowrap";

  const primaryClasses = "bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:shadow-orange-400/50";
  const secondaryClasses = "bg-white text-blue-600 border border-gray-300 hover:bg-gray-50";

  const buttonClasses = variant === "primary" ? primaryClasses : secondaryClasses;

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className={`${baseClasses} ${buttonClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} aria-label={ariaLabel} className={`${baseClasses} ${buttonClasses} ${className}`}>
      {children}
    </button>
  );
};

type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
};

const Card: React.FC<CardProps> = ({ icon, title, description, href }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -5 }}
    transition={{ type: "spring", stiffness: 200 }}
    className="group p-6 h-full rounded-xl border border-gray-200 bg-white/70 backdrop-blur-md shadow-lg hover:shadow-2xl hover:border-orange-400 transition-all duration-500"
  >
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-orange-400 text-white shadow-md group-hover:scale-110 transition">
      {icon}
    </div>
    <h3 className="font-bold text-xl mt-4 text-gray-900">{title}</h3>
    <p className="text-gray-600 mt-2 text-sm">{description}</p>
    {href && (
      <Link href={href} className="mt-4 inline-flex items-center text-blue-600 font-semibold text-sm group-hover:text-orange-500 transition">
        Explore <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
      </Link>
    )}
  </motion.div>
);


const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Solutions" },
  { href: "#store", label: "Ulisha Store" },
  { href: "#ushops", label: "Ushops" },
  { href: "#tech", label: "Technology" },
];

function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Logo />
        <div className="hidden lg:flex items-center gap-6 font-medium text-gray-700">
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-orange-500 transition">
              {item.label}
            </a>
          ))}
          <Button href="#contact">Contact Sales</Button>
        </div>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-600 hover:text-orange-500"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden px-4 pt-2 pb-4 bg-white shadow-xl border-t border-gray-100"
        >
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href} className="block py-2 text-gray-700 hover:bg-orange-50 rounded-lg px-3 transition">
              {item.label}
            </a>
          ))}
          <div className="mt-4">
            <Button href="#contact" className="w-full">Contact Sales</Button>
          </div>
        </motion.div>
      )}
    </>
  );
}


function Hero() {
  return (
    <section className="pt-20 pb-28 bg-gradient-to-b from-blue-50 via-white to-orange-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-blue-600 bg-blue-100 px-3 py-1 rounded-full shadow-sm">RC: 8644622</span>
          <h1 className="mt-4 text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            The Engine for <span className="bg-gradient-to-r from-blue-500 to-orange-400 bg-clip-text text-transparent">Nigerian Commerce</span>
          </h1>
          <p className="mt-6 text-gray-600 text-xl max-w-xl">
            We build the digital backbone for market efficiency, connecting households to cost-effective products and empowering local businesses with proprietary tech.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button href="#services" variant="primary">View Solutions</Button>
            <Button href="#tech" variant="secondary">See Our Tech Stack</Button>
          </div>
        </motion.div>

        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }} className="hidden lg:block">
          <div className="relative p-10 bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl shadow-blue-200/50 border border-gray-100">
            <div className="space-y-6">
              <div className="p-5 bg-blue-50 rounded-xl flex items-center gap-4 hover:scale-105 transition">
                <Store className="w-6 h-6 text-blue-600" />
                <div>
                  <span className="font-semibold text-gray-900">Retail & Sourcing</span>
                  <p className="text-sm text-gray-600">Direct-to-consumer cost efficiency.</p>
                </div>
              </div>
              <div className="p-5 bg-orange-50 rounded-xl flex items-center gap-4 hover:scale-105 transition">
                <Briefcase className="w-6 h-6 text-orange-600" />
                <div>
                  <span className="font-semibold text-gray-900">SME Enablement</span>
                  <p className="text-sm text-gray-600">Digital presence with Ushops.</p>
                </div>
              </div>
              <div className="p-5 bg-blue-50 rounded-xl flex items-center gap-4 hover:scale-105 transition">
                <Code className="w-6 h-6 text-blue-600" />
                <div>
                  <span className="font-semibold text-gray-900">Bespoke Software</span>
                  <p className="text-sm text-gray-600">APIs and custom tech solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ------------------- SECTIONS -------------------
function SectionDivider() {
  return (
    <div className="relative w-full overflow-hidden">
      <svg className="absolute -top-1 w-full h-12 text-gray-50" preserveAspectRatio="none" viewBox="0 0 1440 100" fill="currentColor">
        <path d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"></path>
      </svg>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 className="text-3xl font-bold text-gray-900 mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>About Ulisha Limited</motion.h2>
        <motion.p className="text-gray-600 max-w-2xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Ulisha Limited drives efficiency in Nigerian commerce by sourcing products directly from manufacturers, empowering SMEs, and delivering tech-driven solutions for modern businesses.
        </motion.p>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 className="text-3xl font-bold text-gray-900 text-center mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Our Solutions</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card icon={<Store />} title="Ulisha Store" description="Direct-to-consumer products at lower costs." href="#store" />
          <Card icon={<Briefcase />} title="Ushops" description="Enable SMEs with digital presence and sales tools." href="#ushops" />
          <Card icon={<Code />} title="Tech Solutions" description="Custom software and APIs for business growth." href="#tech" />
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 className="text-3xl font-bold text-gray-900 mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>What People Say</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div className="p-6 border rounded-xl shadow-md" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Users className="mx-auto w-10 h-10 text-blue-600 mb-4" />
            <p className="text-gray-600">"Ulisha Store saved us time and money sourcing quality products." – Amina K.</p>
          </motion.div>
          <motion.div className="p-6 border rounded-xl shadow-md" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Users className="mx-auto w-10 h-10 text-orange-600 mb-4" />
            <p className="text-gray-600">"Ushops helped my small business reach more customers digitally." – Emeka T.</p>
          </motion.div>
          <motion.div className="p-6 border rounded-xl shadow-md" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Users className="mx-auto w-10 h-10 text-blue-600 mb-4" />
            <p className="text-gray-600">"Their custom tech solutions streamlined our operations." – Chidera O.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 className="text-3xl font-bold text-gray-900 mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Get in Touch</motion.h2>
        <motion.p className="text-gray-600 mb-12" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          Reach us for partnerships, inquiries, or custom solutions.
        </motion.p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button href="mailto:support@ulisha.com" variant="primary">Email Us <Mail className="w-4 h-4 ml-1" /></Button>
          <Button href="tel:+2347060438205" variant="secondary">Call Us <Phone className="w-4 h-4 ml-1" /></Button>
        </div>
      </div>
    </section>
  );
}

// ------------------- FOOTER -------------------
function Footer() {
  return (
     <footer className="bg-gradient-to-r from-blue-50 via-white to-orange-50 text-gray-700 py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <Logo />
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            Ulisha Limited (RC: 8644622) is building modern solutions in 
            e-commerce, technology, and digital innovation. We connect 
            people with reliable products and services across Nigeria and beyond.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-orange-500 transition">About Us</a></li>
            <li><a href="#services" className="hover:text-orange-500 transition">Solutions</a></li>
            <li><a href="#store" className="hover:text-orange-500 transition">Ulisha Store</a></li>
            <li><a href="#ushops" className="hover:text-orange-500 transition">Ushops</a></li>
            <li><a href="#tech" className="hover:text-orange-500 transition">Technology</a></li>
            <li><a href="#contact" className="hover:text-orange-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Get in Touch</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-orange-500" /> +234 70 6043 8205</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-orange-500" /> support@ulisha.com</li>
            <li className="flex items-center gap-2"><MapIcon className="w-4 h-4 text-orange-500" /> Delta state, Nigeria</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Stay Updated</h3>
          <p className="text-sm text-gray-600 mb-3">Subscribe to get the latest updates, offers, and news.</p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-2 rounded-lg bg-white text-gray-900 w-full shadow focus:ring-2 focus:ring-orange-400 border border-gray-200"
            />
            <button 
              type="submit" 
              className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-5 py-2 rounded-lg hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Ulisha Limited — RC: 8644622. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" aria-label="LinkedIn" className="hover:text-orange-500 transition"><Linkedin className="w-5 h-5" /></a>
          <a href="#" aria-label="Twitter" className="hover:text-orange-500 transition"><Twitter className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
}

// ------------------- PAGE -------------------
export default function UlishaLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-100">
        <Nav />
      </header>

      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
