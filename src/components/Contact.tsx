"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, User, MessageSquare, Building } from "lucide-react";

const MAILTO = "yoshida@aska-g.com";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `【お問い合わせ】${form.company ? form.company + " " : ""}${form.name}様より`
    );
    const body = encodeURIComponent(
      `お名前: ${form.name}\n会社名: ${form.company || "—"}\nメール: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${MAILTO}?subject=${subject}&body=${body}`;
  };

  const inputClasses =
    "w-full rounded-xl border border-[#564F48] bg-[#262320] px-4 py-3 text-[#FDFBF7] placeholder-[#635C56] outline-none transition-all duration-300 focus:border-[#EDAB62]/60 focus:shadow-lg focus:shadow-[#EDAB62]/10";

  return (
    <section className="relative px-6 py-32" id="contact">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(237, 171, 98,0.04)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-2xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="mb-4 block text-sm uppercase text-[#EDAB62]"
          >
            Contact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold text-[#FDFBF7] md:text-5xl"
          >
            お問い合わせ
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-[#B8B2AC]"
          >
            お気軽にご連絡ください
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mx-auto mt-6 h-[2px] w-24 bg-gradient-to-r from-transparent via-[#EDAB62] to-transparent"
          />
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative"
        >
          {/* Animated gradient border */}
          <motion.div
            animate={{
              background: [
                "linear-gradient(135deg, rgba(237, 171, 98,0.3), transparent, rgba(96, 144, 232,0.2))",
                "linear-gradient(225deg, rgba(237, 171, 98,0.3), transparent, rgba(96, 144, 232,0.2))",
                "linear-gradient(315deg, rgba(237, 171, 98,0.3), transparent, rgba(96, 144, 232,0.2))",
                "linear-gradient(135deg, rgba(237, 171, 98,0.3), transparent, rgba(96, 144, 232,0.2))",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-[1px] rounded-3xl"
          />

          <form
            onSubmit={handleSubmit}
            className="relative rounded-3xl bg-[#191714] p-8 md:p-12"
          >
            <div className="space-y-6">
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label
                  htmlFor="name"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-[#EAE2DA]"
                >
                  <User className="h-4 w-4 text-[#EDAB62]" />
                  お名前 <span className="text-[#EDAB62]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="山田 太郎"
                  className={inputClasses}
                />
              </motion.div>

              {/* Company */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label
                  htmlFor="company"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-[#EAE2DA]"
                >
                  <Building className="h-4 w-4 text-[#EDAB62]" />
                  会社名
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="株式会社〇〇"
                  className={inputClasses}
                />
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <label
                  htmlFor="email"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-[#EAE2DA]"
                >
                  <Mail className="h-4 w-4 text-[#EDAB62]" />
                  メールアドレス <span className="text-[#EDAB62]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={inputClasses}
                />
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <label
                  htmlFor="message"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-[#EAE2DA]"
                >
                  <MessageSquare className="h-4 w-4 text-[#EDAB62]" />
                  メッセージ <span className="text-[#EDAB62]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="お問い合わせ内容をご記入ください"
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
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#EDAB62] to-[#D49550] px-6 py-4 font-medium text-white shadow-lg shadow-[#EDAB62]/20 transition-shadow hover:shadow-xl hover:shadow-[#EDAB62]/30"
                >
                  <Send className="h-4 w-4" />
                  送信する
                </motion.button>
              </motion.div>
            </div>

            {/* Email hint */}
            <p className="mt-4 text-center text-xs text-[#8C8780]">
              送信ボタンをクリックするとメーラーが起動します
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
