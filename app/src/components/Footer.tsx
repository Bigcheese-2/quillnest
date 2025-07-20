import React from "react";

const menuLinks = [
  "Home",
  "About",
  "Services",
  "Gallery",
  "Products",
  "Contact Us",
];

const services = [
  "Custom Bedding",
  "Sleep Consultation",
  "Corporate & Hospitality Orders",
  "Monogramming",
  "Home Styling Assistance",
  "Nationwide Delivery",
];

const offices = [
  "Kaduna, NG",
  "Abuja, NG",
  "Lagos, NG",
];

export default function Footer() {
  return (
    <footer className="bg-background text-white dark:text-foreground w-full flex flex-col gap-20 md:pt-28 pb-16 md:px-8  lg:px-20 mt-10">
      <div className=" mx-auto w-full lg:w-5/6 flex flex-col md:flex-row justify-between gap-10 ">
        {/* Menu Links */}
        <div className="footer-section flex-1 text-white py-8 text-center md:text-left w-full" style={{ background: 'var(--footer-altbackground)' }}>
          <h4 className="font-semibold text-lg mb-2">Menu Links</h4>
          <div className="w-16 h-1 bg-[#ffffff]  mb-4 mx-auto md:mx-0" />
          <ul className="flex flex-col gap-3">
            {menuLinks.map((link) => (
              <li key={link} className="text-sm hover:underline cursor-pointer">{link}</li>
            ))}
          </ul>
        </div>
        {/* Our Services */}
        <div className="footer-section services-section flex-1 text-center md:text-left py-8 md:py-0" style={{ background: 'var(--footer-background)' }}>
          <h4 className="font-semibold text-lg mb-2">Our Services</h4>
          <div className="w-16 h-1  bg-[#000000] md:bg-[#ffffff]  mb-4 mx-auto md:mx-0" />
          <ul className="flex flex-col gap-3">
            {services.map((service) => (
              <li key={service} className="text-sm hover:underline cursor-pointer">{service}</li>
            ))}
          </ul>
        </div>
        {/* Our Offices */}
        <div className="footer-section flex-1 text-white py-8 text-center md:text-left" style={{ background: 'var(--footer-altbackground)' }}>
          <h4 className="font-semibold text-lg mb-2">Our Offices</h4>
          <div className="w-16 h-1 bg-[#ffffff]  mb-4 mx-auto md:mx-0" />
          <ul className="flex flex-col gap-3">
            {offices.map((office) => (
              <li key={office} className="text-sm">{office}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-white flex justify-center items-center">
      © 2025 Quill Nest
      </div>
    </footer>
  );
}
