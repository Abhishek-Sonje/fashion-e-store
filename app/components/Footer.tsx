import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { name: "Traditional", href: "/traditional" },
  { name: "Western", href: "/western" },
  { name: "Accessories", href: "/accessories" },
  { name: "Rentals", href: "/rentals" },
  { name: "Ready To Ship", href: "/ready-to-ship" },
];

const services = [
  { name: "Custom Design", href: "/services/custom-design" },
  { name: "Outfit & Jewelry Rental", href: "/rentals" },
  { name: "Accessories", href: "/accessories" },
  { name: "Personal Styling", href: "/services/styling" },
  { name: "Ready To Ship", href: "/ready-to-ship" },
];

const socialLinks = [
  { icon: "/insta.png", alt: "Instagram", href: "https://instagram.com" },
  { icon: "/wp.png", alt: "WhatsApp", href: "https://wa.me/919420087800" },
  { icon: "/fb.png", alt: "Facebook", href: "https://facebook.com" },
];

export default function Footer() {
  return (
    <div className="bg-black text-white w-full">
      <div className="mx-auto max-w-6xl px-6 pt-14 pb-10 border-b border-[#3b3b3b]">
        <div className="flex flex-col md:flex-row justify-between gap-16">

          <div>
            <div className="flex flex-col gap-2">
              <div className="uppercase text-4xl md:text-5xl font-bold leading-tight">
                <span className="font-cinzeld">N</span>
                <span className="font-serif">eha Rajput</span>
              </div>
              <div className="text-sm tracking-[0.35em] text-[#b3b3b3] font-serif">
                FASHION DESIGNER
              </div>
            </div>

            <p className="mt-8 max-w-md text-sm leading-relaxed text-[#d4d4d4] font-serif">
              Creating Timeless Fashion Pieces That Celebrate The Beauty Of
              Traditional Craftsmanship And Modern Elegance.
            </p>

            <div className="mt-10 flex gap-8">
              {socialLinks.map((social) => (
                <Link
                  key={social.alt}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded hover:opacity-80 transition-opacity"
                >
                  <Image src={social.icon} alt={social.alt} width={44} height={44} />
                </Link>
              ))}
            </div>
          </div>

          <div className="text-sm">
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-[#e5e5e5]">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-sm">
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-[#e5e5e5]">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-sm">
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-[#e5e5e5]">
              <li className="flex items-center gap-3">
                <Image src="/mail.png" alt="Email" width={20} height={20} />
                <Link href="mailto:neharajput@gmail.com" className="hover:text-white transition-colors">
                  neharajput@gmail.com
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Image src="/call.png" alt="Phone" width={20} height={20} />
                <Link href="tel:+919420087800" className="hover:text-white transition-colors">
                  9420087800
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Image src="/location.png" alt="Location" width={20} height={20} />
                <span>Nashik, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-6">
        <p className="text-xs md:text-sm text-[#d4d4d4]">
          © 2025 Neha Rajput. All rights reserved.
        </p>
      </div>
    </div>
  );
}

