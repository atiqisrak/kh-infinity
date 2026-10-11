"use client";

import { useRef, useState } from "react";
import { capture, track } from "@/lib/analytics";
import { fieldLabelLight, inputLight, submitCls, SubmitArrow } from "../blocks";

// Application form on /careers/apply/[id]. Posts multipart (with the CV file)
// to /api/send-job-application, which emails it with the CV attached.

/** Vercel rejects request bodies over 4.5 MB; the API checks the same limit */
const MAX_CV_BYTES = 4 * 1024 * 1024;

export default function CareersApplyForm({ jobId, jobTitle }: { jobId: string; jobTitle: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const cvRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cv = cvRef.current?.files?.[0];
    if (cv && cv.size > MAX_CV_BYTES) {
      setError("Your CV must be smaller than 4 MB.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/send-job-application", { method: "POST", body: new FormData(e.currentTarget) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Failed to submit application");
      track("job_application_submit", { job_id: jobId, job_title: jobTitle });
      setStatus("sent");
    } catch (err) {
      capture("form_submit_failed", { form: "job_application", job_id: jobId });
      setError(err instanceof Error ? err.message : "Failed to submit application");
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <p role="status" className="rounded-2xl bg-white p-6 text-[#0b2c3d] ring-1 ring-black/5">
        Thank you for applying for {jobTitle}. We review every application within two weeks and will contact you by email.
      </p>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} data-form="job_application">
      <input type="hidden" name="jobId" value={jobId} />
      <input type="hidden" name="jobTitle" value={jobTitle} />

      <div>
        <label htmlFor="fullName" className={fieldLabelLight}>
          Full name
        </label>
        <input id="fullName" name="name" type="text" required autoComplete="name" placeholder="Jane Smith" className={inputLight} />
      </div>

      <div>
        <label htmlFor="email" className={fieldLabelLight}>
          Email
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@example.com" className={inputLight} />
      </div>

      <div>
        <label htmlFor="phone" className={fieldLabelLight}>
          Phone
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+1 555 000 0000" className={inputLight} />
      </div>

      <div>
        <label htmlFor="linkedin" className={fieldLabelLight}>
          LinkedIn URL
        </label>
        <input id="linkedin" name="linkedin" type="url" placeholder="https://linkedin.com/in/yourprofile" className={inputLight} />
      </div>

      <div>
        <label htmlFor="coverLetter" className={fieldLabelLight}>
          Cover letter
        </label>
        <textarea
          id="coverLetter"
          name="coverLetter"
          rows={5}
          placeholder="Tell us why you're a great fit for this role…"
          className={inputLight}
        />
      </div>

      <div>
        <label htmlFor="cv" className={fieldLabelLight}>
          CV / Resume
        </label>
        <input
          ref={cvRef}
          id="cv"
          name="cv"
          type="file"
          accept=".pdf,.doc,.docx"
          required
          className={`${inputLight} file:mr-4 file:rounded-full file:border-0 file:bg-[#fa6a25] file:px-4 file:py-1 file:text-sm file:font-semibold file:text-white hover:file:bg-[#d9531a]`}
        />
        <p className="mt-1.5 text-xs text-[#06131d]/45">PDF, DOC or DOCX · Max 4 MB</p>
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-[#b42318]">
          {error} You can also email your CV to career@khi.com.bd.
        </p>
      )}

      <div className="pt-2">
        <button type="submit" disabled={status === "sending"} className={`${submitCls} disabled:opacity-60`}>
          {status === "sending" ? "Sending…" : "Submit application"}
          <SubmitArrow />
        </button>
      </div>
    </form>
  );
}
