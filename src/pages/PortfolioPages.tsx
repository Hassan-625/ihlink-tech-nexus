import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  DownloadSimple,
  MapPin,
  Phone,
  EnvelopeSimple,
  PaperPlaneTilt,
  Cpu,
  Cloud,
  ShareNetwork,
  Code,
  Wrench,
  Megaphone,
  SoccerBall,
  BookOpenText,
  PenNib,
  Lightbulb,
  FilmSlate,
  BookOpen,
  PlayCircle,
  GraduationCap,
  SealCheck,
  CheckCircle,
  Users,
  Buildings,
  CaretRight,
} from "@phosphor-icons/react";
import {
  BRAND_NAME,
  PROFILE_HOME,
  PROFILE_ABOUT,
  PROJECTS,
  CATEGORIES,
  SKILL_CATEGORIES,
  TIMELINE,
  CERTIFICATIONS,
  LEADERSHIP,
  HOBBIES,
  VISION,
  HIGHLIGHTS,
  EMAIL,
  EMAIL_ABU,
  PHONE,
  LOCATION,
} from "../constants";
import type { ProjectItem } from "../types";

export { HIGHLIGHTS };

interface Props {
  page: string;
  onOpenExam: () => void;
}

const skillIcon = (name: string) => {
  switch (name) {
    case "Cpu": return <Cpu size={22} weight="duotone" />;
    case "Cloud": return <Cloud size={22} weight="duotone" />;
    case "ShareNetwork": return <ShareNetwork size={22} weight="duotone" />;
    case "Code": return <Code size={22} weight="duotone" />;
    case "Wrench": return <Wrench size={22} weight="duotone" />;
    default: return <Megaphone size={22} weight="duotone" />;
  }
};

const hobbyIcon = (name: string) => {
  switch (name) {
    case "SoccerBall": return <SoccerBall size={20} weight="duotone" />;
    case "BookOpenText": return <BookOpenText size={20} weight="duotone" />;
    case "PenNib": return <PenNib size={20} weight="duotone" />;
    case "Lightbulb": return <Lightbulb size={20} weight="duotone" />;
    case "FilmSlate": return <FilmSlate size={20} weight="duotone" />;
    case "BookOpen": return <BookOpen size={20} weight="duotone" />;
    case "PlayCircle": return <PlayCircle size={20} weight="duotone" />;
    default: return <GraduationCap size={20} weight="duotone" />;
  }
};

const colorMap: Record<string, string> = {
  emerald: "border-emerald-200 bg-emerald-50 text-emerald-700",
  blue: "border-blue-200 bg-blue-50 text-blue-700",
  navy: "border-slate-200 bg-slate-100 text-slate-800",
};

export default function PortfolioPages({ page, onOpenExam }: Props) {
  const [filter, setFilter] = useState("All");
  const [sent, setSent] = useState(false);

  const filteredProject: ProjectItem[] = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <main>
      {page === "home" && (
        <>
          <section className="relative overflow-hidden bg-slate-900 text-white">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
            <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
            <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.2fr_0.8fr] md:py-20">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  <GraduationCap size={14} weight="duotone" />
                  Final Year · B.Eng Computer Engineering
                </span>
                <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
                  Hi, I&apos;m{" "}
                  <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                    {BRAND_NAME}
                  </span>
                </h1>
                <p className="mt-5 max-w-[54ch] text-base leading-relaxed text-slate-300">
                  Control engineering enthusiast, AWS Cloud Foundations graduate, COESA Secretary General,
                  Cisco learner, and future founder of IHLINK Co. Ltd connecting entrepreneurs, students, and SMEs.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent("navigate", { detail: "projects" }))}
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 shadow-md"
                  >
                    View Projects
                    <ArrowRight size={16} weight="bold" />
                  </button>
                  <button
                    onClick={onOpenExam}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    <SealCheck size={16} weight="duotone" />
                    COEN 554 Exam Specs
                  </button>
                </div>
              </div>
              <div>
                <div className="mx-auto max-w-xs overflow-hidden rounded-2xl border-2 border-white/10 shadow-2xl md:ml-auto">
                  <img src={PROFILE_HOME} alt={BRAND_NAME} className="aspect-[4/5] w-full object-cover" />
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">Snapshot</p>
                <h2 className="mt-1 font-display text-2xl font-bold text-slate-900 sm:text-3xl">Profile Highlights</h2>
              </div>
              <span className="hidden text-sm text-slate-500 sm:block">Engineering today, building tomorrow</span>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {HIGHLIGHTS.map((h) => (
                <div key={h.title} className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">
                    <CheckCircle size={12} weight="duotone" />
                    {h.tag}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">{h.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{h.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white">
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-400">Future Vision</p>
                  <h2 className="mt-1 font-display text-3xl font-bold text-white">IHLINK Co. Ltd</h2>
                  <p className="mt-1 text-emerald-300 font-medium">{VISION.tagline}</p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
                  <Buildings size={14} weight="duotone" />
                  Enterprise of the Future
                </span>
              </div>
              <p className="mt-6 max-w-3xl text-slate-300 leading-relaxed">{VISION.blurb}</p>
              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                {VISION.pillars.map((p, i) => (
                  <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                    <span className="font-display text-sm font-bold text-emerald-400">0{i + 1}</span>
                    <h3 className="mt-2 font-display text-lg font-semibold text-white">{p.title}</h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">{p.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {page === "about" && (
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid items-start gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div className="sticky top-24 overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
              <img src={PROFILE_ABOUT} alt={`About ${BRAND_NAME}`} className="aspect-[4/5] w-full object-cover" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">About Me</p>
              <h2 className="mt-1 font-display text-3xl font-bold text-slate-900">Engineer, Leader, Future Builder</h2>
              <p className="mt-5 text-slate-600 leading-relaxed">
                I&apos;m {BRAND_NAME}, a Computer Engineering student at Ahmadu Bello University, Zaria,
                originally from {LOCATION}. My academic path spans control engineering,
                IoT, cloud computing, networking, programming, and digital marketing, driven by a passion for
                building intelligent systems that solve real-world problems.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Beyond the classroom, I serve as the Secretary General of COESA and class representative of
                U19CO_Engrs, mentoring junior students and coordinating bootcamps. I am an AWS Academy graduate,
                a Cisco learner, and the founder-architect behind the IHLINK Co. Ltd enterprise vision.
              </p>
              <div className="mt-8">
                <h3 className="font-display text-lg font-bold text-slate-900">Leadership & Experience</h3>
                <div className="mt-4 space-y-3">
                  {LEADERSHIP.map((l) => (
                    <div key={l.role} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                        <Users size={18} weight="duotone" />
                      </span>
                      <div>
                        <h4 className="font-semibold text-slate-900">{l.role}</h4>
                        <p className="text-xs font-semibold text-blue-700">{l.org}</p>
                        <p className="mt-1 text-sm text-slate-500 leading-relaxed">{l.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-display text-lg font-bold text-slate-900">Certifications</h3>
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  {CERTIFICATIONS.map((c) => (
                    <div key={c.title} className="flex items-start gap-2 rounded-xl border border-slate-200 bg-white p-3">
                      <SealCheck size={18} weight="duotone" className="mt-0.5 shrink-0 text-emerald-600" />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{c.title}</p>
                        <p className="text-xs text-slate-500">{c.issuer} · {c.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {page === "education" && (
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">Education</p>
          <h2 className="mt-1 font-display text-3xl font-bold text-slate-900">Academic Journey</h2>
          <div className="mt-10 border-l-2 border-blue-600 pl-6 sm:ml-4">
            {TIMELINE.map((t) => (
              <div key={t.title} className="relative mb-10">
                <span className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-emerald-500 ring-4 ring-emerald-100" />
                <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                  {t.year}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold text-slate-900">{t.title}</h3>
                <p className="text-sm font-semibold text-emerald-700">{t.org}</p>
                <p className="mt-2 text-slate-600 leading-relaxed">{t.detail}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {page === "skills" && (
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">Expertise</p>
          <h2 className="mt-1 font-display text-3xl font-bold text-slate-900">Technical Skills</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SKILL_CATEGORIES.map((s) => (
              <div key={s.id} className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
                <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border ${colorMap[s.color]}`}>
                  {skillIcon(s.icon)}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">{s.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.skills.map((sk) => (
                    <span key={sk} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {page === "projects" && (
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" id="projects">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">Portfolio</p>
              <h2 className="mt-1 font-display text-3xl font-bold text-slate-900">Projects Gallery</h2>
            </div>
            <button
              onClick={onOpenExam}
              className="inline-flex items-center gap-2 self-start rounded-lg border border-blue-500/40 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
            >
              <DownloadSimple size={16} weight="duotone" />
              Exam Deliverables Bundle
            </button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                  filter === c
                    ? "bg-slate-900 text-white shadow-sm"
                    : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProject.map((p) => (
              <article key={p.id} className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
                    {p.tag}
                  </span>
                  <ArrowUpRight size={18} weight="duotone" className="text-slate-300 transition group-hover:text-emerald-600" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-500 leading-relaxed">{p.description}</p>
                <p className="mt-3 text-xs font-semibold text-blue-700">{p.category} · {p.year}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {page === "hobbies" && (
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">Personal</p>
          <h2 className="mt-1 font-display text-3xl font-bold text-slate-900">Hobbies & Interests</h2>
          <p className="mt-3 max-w-2xl text-slate-600 leading-relaxed">
            A balanced life fuels curiosity and engineering excellence. These pursuits keep me grounded and continuous in learning.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HOBBIES.map((h) => (
              <div key={h.title} className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-blue-700">
                  {hobbyIcon(h.icon)}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-slate-900">{h.title}</h3>
                <p className="mt-1 text-sm text-slate-500 leading-relaxed">{h.detail}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {page === "cv" && (
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">Curriculum Vitae</p>
              <h2 className="mt-1 font-display text-3xl font-bold text-slate-900">{BRAND_NAME}</h2>
            </div>
            <button
              onClick={() => {
                const text = `CURRICULUM VITAE - ${BRAND_NAME}
Email: ${EMAIL} | ${EMAIL_ABU}
Phone: ${PHONE}
Location: ${LOCATION}
ABU Zaria Computer Engineering`;
                const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = `CV_${BRAND_NAME.replace(/\\s+/g, "_")}.txt`;
                a.click();
                URL.revokeObjectURL(url);
              }}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 shadow-sm"
            >
              <DownloadSimple size={16} weight="duotone" />
              Download CV (Text/PDF)
            </button>
          </div>
          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-display text-lg font-bold text-slate-900">Professional Summary</h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                Final year Computer Engineering student at Ahmadu Bello University, Zaria, skilled in control
                engineering, cloud computing, networking, programming, and digital marketing, with an entrepreneurial
                drive to advance industry through the IHLINK Co. Ltd vision.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="font-display text-lg font-bold text-slate-900">Certifications & Accreditations</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {CERTIFICATIONS.map((c) => (
                  <li key={c.title} className="flex items-center gap-2 text-slate-600">
                    <CheckCircle size={16} weight="duotone" className="text-emerald-600 shrink-0" />
                    <span>{c.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-display text-lg font-bold text-slate-900">Education History</h3>
                <ul className="mt-3 space-y-2 text-slate-600">
                  {TIMELINE.slice(-2).map((t) => (
                    <li key={t.title} className="flex items-start gap-2">
                      <CaretRight size={16} weight="bold" className="mt-1 shrink-0 text-blue-600" />
                      <span><strong className="text-slate-900">{t.title}</strong> ({t.year})</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-display text-lg font-bold text-slate-900">Leadership Positions</h3>
                <ul className="mt-3 space-y-2 text-slate-600">
                  {LEADERSHIP.map((l) => (
                    <li key={l.role} className="flex items-start gap-2">
                      <CaretRight size={16} weight="bold" className="mt-1 shrink-0 text-blue-600" />
                      <span><strong className="text-slate-900">{l.role}</strong> · {l.org}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {page === "contact" && (
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">Contact</p>
          <h2 className="mt-1 font-display text-3xl font-bold text-slate-900">Let&apos;s Connect</h2>
          <p className="mt-3 max-w-2xl text-slate-600 leading-relaxed">
            I am open to technical collaborations, engineering internships, leadership dialogue, and research inquiries.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-3">
              {[
                { icon: <EnvelopeSimple size={18} weight="duotone" />, label: "Personal Email", value: EMAIL, key: EMAIL },
                { icon: <EnvelopeSimple size={18} weight="duotone" />, label: "University Email", value: EMAIL_ABU, key: EMAIL_ABU },
                { icon: <Phone size={18} weight="duotone" />, label: "Phone", value: PHONE, key: PHONE },
                { icon: <MapPin size={18} weight="duotone" />, label: "Location", value: LOCATION, key: LOCATION },
              ].map((c) => (
                <div key={c.key} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    {c.icon}
                  </span>
                  <div>
                    <p className="text-xs text-slate-400">{c.label}</p>
                    <p className="text-sm font-semibold text-slate-900">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              {sent ? (
                <div className="flex h-full min-h-56 flex-col items-center justify-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle size={28} weight="duotone" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-slate-900">Message Ready</h3>
                  <p className="mt-1 max-w-xs text-sm text-slate-500">
                    This is a display form formatted for the COEN 554 examination specification.
                  </p>
                  <button onClick={() => setSent(false)} className="mt-4 text-sm font-semibold text-blue-700 hover:underline">
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-semibold text-slate-900" htmlFor="name">Full Name</label>
                      <input id="name" required className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-blue-600" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-semibold text-slate-900" htmlFor="email">Email Address</label>
                      <input id="email" type="email" required className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-blue-600" placeholder="you@email.com" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="mb-1 block text-sm font-semibold text-slate-900" htmlFor="subject">Subject</label>
                    <input id="subject" className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-blue-600" placeholder="Inquiry / Opportunity" />
                  </div>
                  <div className="mt-4">
                    <label className="mb-1 block text-sm font-semibold text-slate-900" htmlFor="message">Message</label>
                    <textarea id="message" rows={5} required className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-blue-600" placeholder="Write your message here..." />
                  </div>
                  <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 shadow-sm">
                    <PaperPlaneTilt size={16} weight="duotone" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
