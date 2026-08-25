import {
  GithubLogo,
  LinkedinLogo,
  InstagramLogo,
  TelegramLogo,
  YoutubeLogo,
  EnvelopeSimple,
  Phone,
  MapPin,
  ArrowUpRight,
} from "@phosphor-icons/react";
import { BRAND_NAME, EMAIL, EMAIL_ABU, PHONE, LOCATION } from "../constants";
import type { PageKey } from "../types";

interface FooterProps {
  onNavigate: (key: PageKey) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const socials = [
    { label: "GitHub", icon: <GithubLogo size={18} weight="duotone" />, href: "https://github.com/hassanisahassan" },
    { label: "LinkedIn", icon: <LinkedinLogo size={18} weight="duotone" />, href: "https://linkedin.com/in/hassanisahassan" },
    { label: "Instagram", icon: <InstagramLogo size={18} weight="duotone" />, href: "https://instagram.com/hassanisahassan" },
    { label: "Telegram", icon: <TelegramLogo size={18} weight="duotone" />, href: "https://t.me/hassanisahassan" },
    { label: "YouTube", icon: <YoutubeLogo size={18} weight="duotone" />, href: "https://youtube.com/@hassanisahassan" },
  ];

  return (
    <footer className="border-t border-white/10 bg-navy text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <h3 className="font-display text-lg font-bold text-white">{BRAND_NAME}</h3>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
            B.Eng Computer Engineering student at Ahmadu Bello University, Zaria, focused on control
            engineering, cloud computing, IoT and building the future through technology.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
            <EnvelopeSimple size={15} weight="duotone" />
            <a href={`mailto:${EMAIL}`} className="hover:text-emerald-400">{EMAIL}</a>
          </div>
          <div className="mt-1 flex items-center gap-2 text-xs text-slate-400">
            <EnvelopeSimple size={15} weight="duotone" />
            <a href={`mailto:${EMAIL_ABU}`} className="hover:text-emerald-400">{EMAIL_ABU}</a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold text-white">Quick Links</h4>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {[
              ["About Me", "about"],
              ["Education", "education"],
              ["Skills", "skills"],
              ["Projects", "projects"],
              ["Hobbies", "hobbies"],
              ["CV", "cv"],
              ["Contact", "contact"],
            ].map(([label, key]) => (
              <li key={key as string}>
                <button
                  onClick={() => onNavigate(key as PageKey)}
                  className="inline-flex items-center gap-1 text-slate-400 transition hover:text-emerald-400"
                >
                  {label}
                  <ArrowUpRight size={12} weight="bold" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold text-white">Connect</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-emerald-400 hover:text-emerald-400"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <div className="mt-4 space-y-2 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Phone size={15} weight="duotone" />
              <span>{PHONE}</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin size={15} weight="duotone" className="mt-0.5" />
              <span>{LOCATION}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <span>© {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</span>
          <span>Ahmadu Bello University, Zaria · COEN 554 Web Programming Project</span>
        </div>
      </div>
    </footer>
  );
}