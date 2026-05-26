"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";
import { Send, ArrowRight } from "lucide-react";

const MAILTO = "yoshida@aska-g.com";

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const subject = encodeURIComponent(
      t.ui.contact.emailSubjectTemplate
        .replace("{company}", form.company ? form.company + " " : "")
        .replace("{name}", form.name)
    );
    const body = encodeURIComponent(
      `${t.ui.contact.emailBodyNameLabel}: ${form.name}\n${t.ui.contact.emailBodyCompanyLabel}: ${form.company || "—"}\n${t.ui.contact.emailBodyEmailLabel}: ${form.email}\n\n${form.message}`
    );
    setTimeout(() => {
      window.location.href = `mailto:${MAILTO}?subject=${subject}&body=${body}`;
      setIsSubmitting(false);
    }, 300);
  };

  const inputClasses =
    "w-full border-b border-foreground/15 bg-transparent px-0 py-3 text-foreground placeholder-dimmest outline-none transition-colors focus:border-foreground";

  return (
    <section className="px-6 py-24 md:px-12 lg:px-20" id="contact">
      <div className="mx-auto max-w-2xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="mb-3 block text-xs font-medium uppercase tracking-[0.3em] text-dimmer">
            {t.ui.contact.label}
          </span>
          <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">
            {t.ui.contact.title}
          </h2>
          <p className="mt-2 text-sm text-muted">{t.ui.contact.subtitle}</p>
          <div className="mt-4 h-px w-16 bg-foreground" />
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-8"
        >
          <div>
            <label htmlFor="name" className="mb-1 block text-xs font-medium uppercase tracking-wider text-dimmer">
              {t.ui.contact.nameLabel} *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder={t.ui.contact.namePlaceholder}
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="company" className="mb-1 block text-xs font-medium uppercase tracking-wider text-dimmer">
              {t.ui.contact.companyLabel}
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder={t.ui.contact.companyPlaceholder}
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-xs font-medium uppercase tracking-wider text-dimmer">
              {t.ui.contact.emailLabel} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder={t.ui.contact.emailPlaceholder}
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-xs font-medium uppercase tracking-wider text-dimmer">
              {t.ui.contact.messageLabel} *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder={t.ui.contact.messagePlaceholder}
              className={`${inputClasses} resize-none`}
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex items-center gap-3 bg-foreground px-8 py-4 text-sm font-bold uppercase tracking-wider text-background transition-opacity hover:opacity-80"
            >
              <Send className="h-4 w-4" />
              {t.ui.contact.submitButton}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <p className="mt-3 text-xs text-dimmer">{t.ui.contact.submitHint}</p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
