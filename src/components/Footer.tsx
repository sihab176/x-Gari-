// import { Zap, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiZap } from "react-icons/fi";
import Image from "next/image";

const cols = [
  {
    title: "Marketplace",
    links: ["Verified Cars", "Sell Your Car", "Trade-in", "Financing"],
  },
  {
    title: "Service",
    title2: true,
    links: [
      "Service Centers",
      "Book Inspection",
      "Roadside Assist",
      "Warranty",
    ],
  },
  { title: "Company", links: ["About", "Press", "Careers", "Contact"] },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-5">
            <a href="#home" className="">
              <div className="h-12 w-32 overflow-hidden  flex items-start">
                <Image
                  src="/logo.png"
                  alt="XGari Logo"
                  width={120}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
            <p className="text-sm text-gray-400 max-w-sm">
              Bangladesh's trusted automotive ecosystem — verified cars,
              nationwide service, transparent ownership.
            </p>
            <div className="flex gap-3">
              {[FaInstagram, FaFacebook, FaTwitter, FaYoutube].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="border border-white  h-9 w-9 inline-flex items-center justify-center rounded-full hover:bg-[#ffbb00]/20 transition-colors"
                  >
                    <Icon className="h-4 w-4 text-white" />
                  </a>
                ),
              )}
            </div>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-xs uppercase tracking-widest text-gray-400 mb-4">
                  {c.title}
                </div>
                <ul className="space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-gray-400 font-semibold hover:text-[#ffbb00] transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} XGari Bangladesh. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">
              Privacy
            </a>
            <a href="#" className="hover:text-primary">
              Terms
            </a>
            <a href="#" className="hover:text-primary">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
