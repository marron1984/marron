"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Mail,
  Send,
  User,
  MessageSquare,
  Building,
  ArrowRight,
  Phone,
  MapPin,
} from "lucide-react";
import { useRef } from "react";

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
  const formRef = useRef<HTMLDivElement>(null);

  // 3D tilt for form card
  const cardMouseX = useMotionValue(0);
  const cardMouseY = useMotionValue(0);
  const cardRotateX = useSpring(
    useTransform(cardMouseY, [-0.5, 0.5], [4, -4]),
    { stiffness: 200, damping: 20 }
  );
  const cardRotateY = useSpring(
    useTransform(cardMouseX, [-0.5, 0.5], [-4, 4]),
    { stiffness: 200, damping: 20 }
  );

  const handleCardMouse = (e: React.MouseEvent) => {
    if (!formRef.current) return;
    const rect = formRef.current.getBoundingClientRect();
    cardMouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    cardMouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleCardLeave = () => {
    cardMouseX.set(0);
    cardMouseY.set(0);
  };

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
    "w-full rounded-xl border border-line bg-elevated px-4 py-3 text-foreground placeholder-dimmest outline-none transition-all duration-300 focus:border-marron/60 focus:shadow-lg focus:shadow-marron/10 focus:ring-1 focus:ring-marron/20";

  const fields = [
    {
      id: "name",
      label: t.ui.contact.nameLabel,
      icon: User,
      required: true,
      type: "text",
      placeholder: t.ui.contact.namePlaceholder,
    },
    {
      id: "company",
      label: t.ui.contact.companyLabel,
      icon: Building,
      required: false,
      type: "text",
      placeholder: t.ui.contact.companyPlaceholder,
    },
    {
      id: "email",
      label: t.ui.contact.emailLabel,
      icon: Mail,
      required: true,
      type: "email",
      placeholder: t.ui.contact.emailPlaceholder,
    },
  ];

  return (
    <section className="relative px-6 py-32" id="contact">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(237,171,98,0.04)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-2xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", stiffness: 60 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0em", y: 20 }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="mb-4 block text-sm uppercase text-marron"
          >
            {t.ui.contact.label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="text-3xl font-bold text-foreground md:text-5xl"
          >
            {t.ui.contact.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-muted"
          >
            {t.ui.contact.subtitle}
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="mx-auto mt-6 h-[2px] w-32 bg-gradient-to-r from-transparent via-marron to-transparent"
          />
        </motion.div>

        {/* Contact info cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {[
            {
              icon: Phone,
              label: t.ui.contact.phoneLabel,
              value: t.ui.contact.phone,
              href: `tel:${t.ui.contact.phone.replace(/-/g, "")}`,
            },
            {
              icon: Mail,
              label: "Email",
              value: t.ui.contact.emailAddress,
              href: `mailto:${t.ui.contact.emailAddress}`,
            },
            {
              icon: MapPin,
              label: t.ui.contact.addressLabel,
              value: t.ui.contact.address,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + idx * 0.08 }}
              className="group rounded-2xl border border-line bg-surface p-5 transition-all duration-300 hover:border-marron/30 hover:shadow-lg hover:shadow-marron/5"
            >
              <div className="mb-2 flex items-center gap-2">
                <item.icon className="h-4 w-4 text-marron" />
                <span className="text-xs font-medium uppercase tracking-wider text-dimmest">
                  {item.label}
                </span>
              </div>
              {"href" in item && item.href ? (
                <a
                  href={item.href}
                  className="text-sm text-foreground transition-colors hover:text-marron"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm leading-relaxed text-foreground">
                  {item.value}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Form card with 3D tilt */}
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, y: 60, scale: 0.9, rotateX: -8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.2,
            type: "spring",
            stiffness: 60,
            damping: 15,
          }}
          onMouseMove={handleCardMouse}
          onMouseLeave={handleCardLeave}
          style={{
            rotateX: cardRotateX,
            rotateY: cardRotateY,
            transformPerspective: 1000,
          }}
          className="relative"
        >
          {/* Animated gradient border */}
          <motion.div
            animate={{
              background: [
                "linear-gradient(0deg, rgba(237,171,98,0.4), transparent 50%, rgba(96,144,232,0.2))",
                "linear-gradient(90deg, rgba(237,171,98,0.4), transparent 50%, rgba(96,144,232,0.2))",
                "linear-gradient(180deg, rgba(237,171,98,0.4), transparent 50%, rgba(96,144,232,0.2))",
                "linear-gradient(270deg, rgba(237,171,98,0.4), transparent 50%, rgba(96,144,232,0.2))",
                "linear-gradient(360deg, rgba(237,171,98,0.4), transparent 50%, rgba(96,144,232,0.2))",
              ],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-[1px] rounded-3xl"
          />

          <form
            onSubmit={handleSubmit}
            className="relative rounded-3xl bg-surface p-8 md:p-12"
          >
            <div className="space-y-6">
              {fields.map((field, idx) => (
                <motion.div
                  key={field.id}
                  initial={{ opacity: 0, x: -40, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3 + idx * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }}
                >
                  <label
                    htmlFor={field.id}
                    className="mb-2 flex items-center gap-2 text-sm font-medium text-secondary"
                  >
                    <field.icon className="h-4 w-4 text-marron" />
                    {field.label}
                    {field.required && (
                      <span className="text-marron">*</span>
                    )}
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

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, x: -40, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
              >
                <label
                  htmlFor="message"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-secondary"
                >
                  <MessageSquare className="h-4 w-4 text-marron" />
                  {t.ui.contact.messageLabel} <span className="text-marron">*</span>
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

              {/* Submit */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.03,
                    y: -3,
                    boxShadow: "0 20px 40px rgba(237,171,98,0.3)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  animate={
                    isSubmitting ? { scale: [1, 0.95, 1] } : undefined
                  }
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-marron to-[#D49550] px-6 py-4 font-medium text-white shadow-lg shadow-marron/20 transition-all"
                >
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                  {t.ui.contact.submitButton}
                  <motion.div
                    className="overflow-hidden"
                    initial={{ width: 0, opacity: 0 }}
                    whileHover={{ width: "auto", opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </motion.button>
              </motion.div>
            </div>

            <p className="mt-4 text-center text-xs text-dimmer">
              {t.ui.contact.submitHint}
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
