import { useState } from "react";
import {
  House,
  User,
  GraduationCap,
  FolderOpen,
  Heart,
  FileText,
  Envelope,
  List,
  X,
  SealCheck,
} from "@phosphor-icons/react";
import { NAV_ITEMS, BRAND_NAME } from "../constants";
import type { PageKey } from "../types";

interface HeaderProps {
  active: PageKey;
  onNavigate: (key: PageKey) => void;
  onOpenExam: () => void;
}

export default function Header({ active, onNavigate, onOpenExam }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const iconFor = (key: string) => {
    switch (key) {
      case "home":
        return <House size={16} weight="duotone" />;
      case "about":
        return <User size={16} weight="duotone" />;
      case "education":
        return <GraduationCap size={16} weight="duotone" />;
      case "skills":
        return <FolderOpen size={16} weight="duotone" />;
      case "projects":
        return <FileText size={16} weight="duotone" />;
      case "hobbies":
        return <Heart size={16} weight="duotone" />;
      case "cv":
        return <FileText size={16} weight="duotone" />;
      default:
        return <Envelope size={16} weight="duotone" />;
    }
  };

  const go = (key: PageKey) => {
    onNavigate(key);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <button
          onClick={() => go("home")}
          className="flex items-center gap-3 text-left transition hover:opacity-90"
          aria-label="Go to home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white font-bold text-sm shadow-sm">
            IH
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-sm font-bold text-slate-900">{BRAND_NAME}</span>
            <span className="text-[11px] font-medium text-slate-500">Computer Engineering · ABU Zaria</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              onClick={() => go(item.key)}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition ${
                active === item.key
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenExam}
            className="hidden items-center gap-1.5 rounded-lg border border-emerald-600/30 bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-100 sm:inline-flex"
          >
            <SealCheck size={16} weight="duotone" className="text-emerald-600" />
            Exam Deliverables
          </button>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-900 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden" aria-label="Mobile">
          <div className="grid grid-cols-2 gap-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.key}
                onClick={() => go(item.key)}
                className={`inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                  active === item.key
                    ? "bg-slate-900 text-white"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {iconFor(item.key)}
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                onOpenExam();
              }}
              className="col-span-2 inline-flex items-center justify-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-50 px-3 py-2.5 text-sm font-semibold text-emerald-800"
            >
              <SealCheck size={16} weight="duotone" className="text-emerald-600" />
              View Pure HTML/CSS Exam Deliverables
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
