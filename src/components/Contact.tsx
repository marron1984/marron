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
    "w-full border-b-2 border-foreground/15 bg-transparent px-0 py-4 text-lg text-foreground placeholder-dimmest outline-none transition-all duration-500 focus:border-foreground focus:pl-2";

  const fields = [
    { id: "name", label: t.ui.contact.nameLabel, required: true, placeholder: t.ui.contact.namePlaceholder, type: "text" },
    { id: "company", label: t.ui.contact.companyLabel, required: false, placeholder: t.ui.contact.companyPlaceholder, type: "text" },
    { id: "email", label: t.ui.contact.emailLabel, required: true, placeholder: t.ui.contact.emailPlaceholder, type: "email" },
  ];

  return (
    <section className="px-6 py-32 md:px-12 lg:px-20" id="contact">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="mb-3 block text-xs font-medium uppercase tracking-[0.3em] text-dimmer">
            {t.ui.contact.label}
          </span>
          <h2 className="text-4xl font-black tracking-tight text-foreground md:text-6xl">
            {t.ui.contact.title}
          </h2>
          <p className="mt-2 text-sm text-muted">{t.ui.contact.subtitle}</p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 h-[2px] w-24 origin-left bg-foreground"
          />
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          {fields.map((field, i) => (
            <motion.div
              key={field.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <label htmlFor={field.id} className="mb-2 block text-xs font-medium uppercase tracking-wider text-dimmer">
                {field.label} {field.required && "*"}
              </label>
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                required={field.required}
                value={form[field.id as keyof typeof form]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className={inputClasses}
              />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-dimmer">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.03, x: 8 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-3 bg-foreground px-10 py-5 text-sm font-bold uppercase tracking-wider text-background transition-opacity hover:opacity-90"
            >
              <Send className="h-4 w-4" />
              {t.ui.contact.submitButton}
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </motion.button>
            <p className="mt-3 text-xs text-dimmer">{t.ui.contact.submitHint}</p>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
