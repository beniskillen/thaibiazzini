import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ArrowUpRight, Check, AlertCircle } from "lucide-react";
import { applyStartOptions, audienceSources, validateApplication, applicationToSafeEventProps } from "@/lib/application";
import { submitApplication } from "@/lib/submitApplication";
import { track } from "@/lib/analytics";

export const ApplyForm = ({ className = "" }) => {
  const [searchParams] = useSearchParams();
  const startFromQuery = searchParams.get("start") || "";

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    profile: "",
    offer: "",
    audience: [],
    marketSize: "",
    result90: "",
    proof: "",
    owner: "",
    blocker: "",
    startingPoint: startFromQuery || "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (startFromQuery && !formData.startingPoint) {
      setFormData((prev) => ({ ...prev, startingPoint: startFromQuery }));
    }
  }, [startFromQuery]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (!hasStarted) {
      setHasStarted(true);
      track("application_start");
    }

    if (type === "checkbox" && name === "audience") {
      setFormData((prev) => {
        const nextAudience = checked
          ? [...prev.audience, value]
          : prev.audience.filter((item) => item !== value);
        return { ...prev, audience: nextAudience };
      });
      if (errors.audience) {
        setErrors((prev) => ({ ...prev, audience: undefined }));
      }
    } else if (type === "checkbox" && name === "consent") {
      setFormData((prev) => ({ ...prev, consent: checked }));
      if (errors.consent) {
        setErrors((prev) => ({ ...prev, consent: undefined }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    const validationErrors = validateApplication(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorKey = Object.keys(validationErrors)[0];
      const el = document.querySelector(`[data-field="${firstErrorKey}"]`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setSubmitting(true);
    try {
      await submitApplication(formData);
      track("application_submit", applicationToSafeEventProps(formData));
      setSuccess(true);
    } catch (err) {
      setServerError(err.message || "Failed to submit application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-[#0F1013] border border-white/15 p-8 md:p-14 text-white max-w-3xl mx-auto rounded-none">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
            <Check size={18} />
          </div>
          <span className="label text-white/50">Application Received</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl mt-6">
          Thanks. NARA Studio will review your market, proof and current constraint.
        </h2>
        <p className="mt-6 text-white/65 leading-relaxed text-base md:text-lg">
          If there is a clear commercial fit, you will receive the recommended starting point and a direct link to book the next strategy conversation.
        </p>
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-wrap gap-4 items-center justify-between">
          <span className="label text-white/40">Expected turnaround: within 48 business hours</span>
          <button
            type="button"
            onClick={() => {
              setSuccess(false);
              setFormData({
                name: "",
                company: "",
                email: "",
                profile: "",
                offer: "",
                audience: [],
                marketSize: "",
                result90: "",
                proof: "",
                owner: "",
                blocker: "",
                startingPoint: "",
                consent: false,
              });
            }}
            className="btn btn-ghost !h-10 !px-5"
          >
            Submit another application
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={`max-w-3xl mx-auto space-y-10 ${className}`}>
      {serverError && (
        <div className="bg-red-500/10 border border-red-500/30 p-4 text-red-200 text-sm flex items-center gap-3">
          <AlertCircle size={18} className="shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Basic info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div data-field="name" className="space-y-2">
          <label className="label text-white/60 block" htmlFor="app-name">
            Your name <span className="text-white/40">*</span>
          </label>
          <input
            id="app-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Alex Morgan"
            className="w-full bg-[#0F1013] border border-white/15 px-4 py-3 text-white placeholder:text-white/25 focus:border-white/60 focus:outline-none transition-colors text-sm"
          />
          {errors.name && <p className="label text-red-400 !normal-case !tracking-normal text-xs">{errors.name}</p>}
        </div>

        <div data-field="company" className="space-y-2">
          <label className="label text-white/60 block" htmlFor="app-company">
            Company / Brand <span className="text-white/40">*</span>
          </label>
          <input
            id="app-company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Acme Studio"
            className="w-full bg-[#0F1013] border border-white/15 px-4 py-3 text-white placeholder:text-white/25 focus:border-white/60 focus:outline-none transition-colors text-sm"
          />
          {errors.company && <p className="label text-red-400 !normal-case !tracking-normal text-xs">{errors.company}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div data-field="email" className="space-y-2">
          <label className="label text-white/60 block" htmlFor="app-email">
            Email address <span className="text-white/40">*</span>
          </label>
          <input
            id="app-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="alex@example.com"
            className="w-full bg-[#0F1013] border border-white/15 px-4 py-3 text-white placeholder:text-white/25 focus:border-white/60 focus:outline-none transition-colors text-sm"
          />
          {errors.email && <p className="label text-red-400 !normal-case !tracking-normal text-xs">{errors.email}</p>}
        </div>

        <div data-field="profile" className="space-y-2">
          <label className="label text-white/60 block" htmlFor="app-profile">
            Website or Primary Social URL <span className="text-white/40">*</span>
          </label>
          <input
            id="app-profile"
            name="profile"
            type="url"
            required
            value={formData.profile}
            onChange={handleChange}
            placeholder="https://linkedin.com/in/... or website"
            className="w-full bg-[#0F1013] border border-white/15 px-4 py-3 text-white placeholder:text-white/25 focus:border-white/60 focus:outline-none transition-colors text-sm"
          />
          {errors.profile && <p className="label text-red-400 !normal-case !tracking-normal text-xs">{errors.profile}</p>}
        </div>
      </div>

      {/* Offer description */}
      <div data-field="offer" className="space-y-2">
        <label className="label text-white/60 block" htmlFor="app-offer">
          What do you sell, to whom, and at what typical value? <span className="text-white/40">*</span>
        </label>
        <textarea
          id="app-offer"
          name="offer"
          rows={3}
          required
          value={formData.offer}
          onChange={handleChange}
          placeholder="e.g. B2B high-ticket advisory for Series A founders, average contract $25k."
          className="w-full bg-[#0F1013] border border-white/15 px-4 py-3 text-white placeholder:text-white/25 focus:border-white/60 focus:outline-none transition-colors text-sm leading-relaxed"
        />
        {errors.offer && <p className="label text-red-400 !normal-case !tracking-normal text-xs">{errors.offer}</p>}
      </div>

      {/* Existing audiences checkboxes */}
      <div data-field="audience" className="space-y-3">
        <span className="label text-white/60 block">
          Which audience do you already have? <span className="text-white/40">*</span>
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {audienceSources.map((source) => {
            const isChecked = formData.audience.includes(source.value);
            return (
              <label
                key={source.value}
                className={`flex items-center gap-3 p-3.5 border cursor-pointer transition-colors text-sm ${
                  isChecked
                    ? "bg-white text-ink border-white"
                    : "bg-[#0F1013] text-white/80 border-white/15 hover:border-white/40"
                }`}
              >
                <input
                  type="checkbox"
                  name="audience"
                  value={source.value}
                  checked={isChecked}
                  onChange={handleChange}
                  className="sr-only"
                />
                <span
                  className={`w-4 h-4 border flex items-center justify-center shrink-0 ${
                    isChecked ? "border-ink bg-ink text-white" : "border-white/30"
                  }`}
                >
                  {isChecked && <Check size={12} />}
                </span>
                <span>{source.label}</span>
              </label>
            );
          })}
        </div>
        {errors.audience && <p className="label text-red-400 !normal-case !tracking-normal text-xs">{errors.audience}</p>}
      </div>

      {/* Market size & 90-day result */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div data-field="marketSize" className="space-y-2">
          <label className="label text-white/60 block" htmlFor="app-marketSize">
            Immediate market size (approx. people/accounts) <span className="text-white/40">*</span>
          </label>
          <input
            id="app-marketSize"
            name="marketSize"
            type="text"
            required
            value={formData.marketSize}
            onChange={handleChange}
            placeholder="e.g. 500 contacts, 2k newsletter, 4k LinkedIn"
            className="w-full bg-[#0F1013] border border-white/15 px-4 py-3 text-white placeholder:text-white/25 focus:border-white/60 focus:outline-none transition-colors text-sm"
          />
          {errors.marketSize && <p className="label text-red-400 !normal-case !tracking-normal text-xs">{errors.marketSize}</p>}
        </div>

        <div data-field="owner" className="space-y-2">
          <label className="label text-white/60 block" htmlFor="app-owner">
            Who handles qualified replies and sales calls? <span className="text-white/40">*</span>
          </label>
          <input
            id="app-owner"
            name="owner"
            type="text"
            required
            value={formData.owner}
            onChange={handleChange}
            placeholder="e.g. Founder personally / Head of Sales"
            className="w-full bg-[#0F1013] border border-white/15 px-4 py-3 text-white placeholder:text-white/25 focus:border-white/60 focus:outline-none transition-colors text-sm"
          />
          {errors.owner && <p className="label text-red-400 !normal-case !tracking-normal text-xs">{errors.owner}</p>}
        </div>
      </div>

      {/* Commercial result & Proof */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div data-field="result90" className="space-y-2">
          <label className="label text-white/60 block" htmlFor="app-result90">
            What commercial result matters over the next 90 days? <span className="text-white/40">*</span>
          </label>
          <textarea
            id="app-result90"
            name="result90"
            rows={3}
            required
            value={formData.result90}
            onChange={handleChange}
            placeholder="e.g. $100k in new contracted revenue, or 10 qualified sales conversations."
            className="w-full bg-[#0F1013] border border-white/15 px-4 py-3 text-white placeholder:text-white/25 focus:border-white/60 focus:outline-none transition-colors text-sm leading-relaxed"
          />
          {errors.result90 && <p className="label text-red-400 !normal-case !tracking-normal text-xs">{errors.result90}</p>}
        </div>

        <div data-field="proof" className="space-y-2">
          <label className="label text-white/60 block" htmlFor="app-proof">
            What proof can NARA Studio use? <span className="text-white/40">*</span>
          </label>
          <textarea
            id="app-proof"
            name="proof"
            rows={3}
            required
            value={formData.proof}
            onChange={handleChange}
            placeholder="e.g. Past client outcomes, case studies, published data, reputable logos."
            className="w-full bg-[#0F1013] border border-white/15 px-4 py-3 text-white placeholder:text-white/25 focus:border-white/60 focus:outline-none transition-colors text-sm leading-relaxed"
          />
          {errors.proof && <p className="label text-red-400 !normal-case !tracking-normal text-xs">{errors.proof}</p>}
        </div>
      </div>

      {/* Blocker */}
      <div data-field="blocker" className="space-y-2">
        <label className="label text-white/60 block" htmlFor="app-blocker">
          What has stopped this from working so far? <span className="text-white/40">*</span>
        </label>
        <textarea
          id="app-blocker"
          name="blocker"
          rows={2}
          required
          value={formData.blocker}
          onChange={handleChange}
          placeholder="e.g. Generic posting with low conversion, lack of systematic reactivation, unclear offer positioning."
          className="w-full bg-[#0F1013] border border-white/15 px-4 py-3 text-white placeholder:text-white/25 focus:border-white/60 focus:outline-none transition-colors text-sm leading-relaxed"
        />
        {errors.blocker && <p className="label text-red-400 !normal-case !tracking-normal text-xs">{errors.blocker}</p>}
      </div>

      {/* Preferred Starting Point */}
      <div data-field="startingPoint" className="space-y-3">
        <span className="label text-white/60 block">
          Preferred starting point <span className="text-white/40">*</span>
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {applyStartOptions.map((opt) => {
            const isSelected = formData.startingPoint === opt.value;
            return (
              <label
                key={opt.value}
                className={`p-3.5 border cursor-pointer transition-colors text-sm flex items-center justify-between ${
                  isSelected
                    ? "bg-white text-ink border-white font-medium"
                    : "bg-[#0F1013] text-white/80 border-white/15 hover:border-white/40"
                }`}
              >
                <input
                  type="radio"
                  name="startingPoint"
                  value={opt.value}
                  checked={isSelected}
                  onChange={handleChange}
                  className="sr-only"
                />
                <span>{opt.label}</span>
                <span
                  className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                    isSelected ? "border-ink bg-ink" : "border-white/30"
                  }`}
                >
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                </span>
              </label>
            );
          })}
        </div>
        {errors.startingPoint && (
          <p className="label text-red-400 !normal-case !tracking-normal text-xs">{errors.startingPoint}</p>
        )}
      </div>

      {/* Consent */}
      <div data-field="consent" className="space-y-2 pt-4 border-t border-white/10">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="sr-only"
          />
          <span
            className={`w-4 h-4 border mt-0.5 flex items-center justify-center shrink-0 ${
              formData.consent ? "border-white bg-white text-ink" : "border-white/30 bg-[#0F1013]"
            }`}
          >
            {formData.consent && <Check size={12} />}
          </span>
          <span className="text-xs text-white/60 leading-relaxed">
            I agree that NARA Studio can use these details to assess fit and reply about working together. We will not sell your information. See{" "}
            <Link to="/privacy" className="underline text-white hover:text-white/80">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {errors.consent && <p className="label text-red-400 !normal-case !tracking-normal text-xs">{errors.consent}</p>}
      </div>

      {/* Submit button */}
      <div>
        <button
          type="submit"
          disabled={submitting}
          className="btn btn-chrome w-full sm:w-auto"
        >
          {submitting ? "Submitting Application..." : "Submit Brand Equity Valuation Application"}
          <ArrowUpRight size={14} className="arrow" />
        </button>
      </div>
    </form>
  );
};
