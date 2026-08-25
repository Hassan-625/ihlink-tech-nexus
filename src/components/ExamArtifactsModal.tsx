import { useState } from "react";
import {
  X,
  Copy,
  Check,
  FileText,
  FileCode,
  DownloadSimple,
  Eye,
  CheckCircle,
} from "@phosphor-icons/react";
import { EXAM_FILES } from "../examFiles";
import { BRAND_NAME } from "../constants";

function downloadFile(name: string, content: string) {
  const mimeType = name.endsWith(".css")
    ? "text/css;charset=utf-8"
    : name.endsWith(".json")
    ? "application/json;charset=utf-8"
    : name.endsWith(".xml")
    ? "application/xml;charset=utf-8"
    : name.endsWith(".md")
    ? "text/markdown;charset=utf-8"
    : "text/html;charset=utf-8";

  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
}

interface ExamArtifactsModalProps {
  onClose: () => void;
}

export default function ExamArtifactsModal({ onClose }: ExamArtifactsModalProps) {
  const [active, setActive] = useState("index.html");
  const [copied, setCopied] = useState(false);
  const [preview, setPreview] = useState(false);

  const file = EXAM_FILES.find((f) => f.name === active) ?? EXAM_FILES[0];

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(file.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard fallback */
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex h-[88vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display text-lg font-bold text-slate-900">
                COEN 554 Web Programming Deliverables
              </h3>
              <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                100% JS-Free Artifacts
              </span>
            </div>
            <p className="text-sm text-slate-500">
              {BRAND_NAME} · Pure HTML5, CSS3, Flexbox, CSS Grid & JSON-LD Structured Data
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-slate-50/70 px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-slate-600">Active File:</span>
            <span className="rounded bg-slate-200 px-2 py-0.5 font-mono text-xs font-bold text-slate-800">
              {file.name}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {file.name.endsWith(".html") && (
              <button
                onClick={() => setPreview((v) => !v)}
                className="inline-flex items-center gap-1.5 rounded-lg border border-blue-500/40 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 transition hover:bg-blue-100"
              >
                <Eye size={15} weight="duotone" />
                {preview ? "View Code" : "Render Preview"}
              </button>
            )}
            <button
              onClick={copyCode}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-slate-800"
            >
              {copied ? <Check size={14} weight="bold" /> : <Copy size={14} weight="duotone" />}
              {copied ? "Copied!" : "Copy Code"}
            </button>
            <button
              onClick={() => downloadFile(file.name, file.content)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800 transition hover:bg-emerald-100"
            >
              <DownloadSimple size={14} weight="duotone" />
              Download File
            </button>
          </div>
        </div>

        <div className="flex flex-1 flex-col overflow-hidden sm:flex-row">
          <div className="border-b border-slate-200 bg-slate-50 sm:w-64 sm:border-b-0 sm:border-r">
            <p className="px-4 pt-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Deliverable Files
            </p>
            <ul className="max-h-40 overflow-y-auto px-2 pb-3 sm:max-h-[calc(88vh-190px)]">
              {EXAM_FILES.map((f) => (
                <li key={f.name}>
                  <button
                    onClick={() => {
                      setActive(f.name);
                      setPreview(false);
                    }}
                    className={`mb-1 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-medium transition ${
                      active === f.name
                        ? "bg-slate-900 text-white shadow-sm"
                        : "text-slate-600 hover:bg-slate-200/70 hover:text-slate-900"
                    }`}
                  >
                    {f.name.endsWith(".css") ? (
                      <FileCode size={15} weight="duotone" />
                    ) : f.name.endsWith(".json") || f.name.endsWith(".xml") ? (
                      <FileCode size={15} weight="duotone" />
                    ) : (
                      <FileText size={15} weight="duotone" />
                    )}
                    <span className="truncate">{f.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 overflow-auto bg-slate-950 p-4 text-xs text-slate-200">
            {preview && file.name.endsWith(".html") ? (
              <iframe
                title={`${file.name} live preview`}
                srcDoc={file.content}
                className="h-full w-full min-h-[400px] rounded-lg border border-slate-800 bg-white"
              />
            ) : (
              <pre className="overflow-x-auto whitespace-pre font-mono text-[12px] leading-relaxed text-emerald-300">
                {file.content}
              </pre>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-5 py-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <CheckCircle size={15} weight="duotone" className="text-emerald-600" />
            <span>Strict compliance with COEN 554 exam instructions. Zero JavaScript utilized.</span>
          </div>
          <span className="hidden font-mono text-[11px] text-slate-500 sm:inline">
            Ahmadu Bello University, Zaria
          </span>
        </div>
      </div>
    </div>
  );
}
