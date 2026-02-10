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

  return (
    <section className="relative px-6 py-32" id="contact">
      <div className="mx-auto max-w-2xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 block text-sm tracking-[0.3em] uppercase text-[#B87333]">
            Contact
          </span>
          <h2 className="text-3xl font-bold text-[#F5F0EB] md:text-5xl">
            お問い合わせ
          </h2>
          <p className="mt-4 text-[#8B8680]">
            お気軽にご連絡ください
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Gradient border */}
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-[#B87333]/30 via-transparent to-[#2A4A7F]/20" />

          <form
            onSubmit={handleSubmit}
            className="relative rounded-3xl bg-[#0E0D0A] p-8 md:p-12"
          >
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-[#C9C0B6]"
                >
                  <User className="h-4 w-4 text-[#B87333]" />
                  お名前 <span className="text-[#B87333]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="山田 太郎"
                  className="w-full rounded-xl border border-[#2A2520] bg-[#12110E] px-4 py-3 text-[#F5F0EB] placeholder-[#3A3530] outline-none transition-colors focus:border-[#B87333]/50"
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-[#C9C0B6]"
                >
                  <Building className="h-4 w-4 text-[#B87333]" />
                  会社名
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  placeholder="株式会社〇〇"
                  className="w-full rounded-xl border border-[#2A2520] bg-[#12110E] px-4 py-3 text-[#F5F0EB] placeholder-[#3A3530] outline-none transition-colors focus:border-[#B87333]/50"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-[#C9C0B6]"
                >
                  <Mail className="h-4 w-4 text-[#B87333]" />
                  メールアドレス <span className="text-[#B87333]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-[#2A2520] bg-[#12110E] px-4 py-3 text-[#F5F0EB] placeholder-[#3A3530] outline-none transition-colors focus:border-[#B87333]/50"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 flex items-center gap-2 text-sm font-medium text-[#C9C0B6]"
                >
                  <MessageSquare className="h-4 w-4 text-[#B87333]" />
                  メッセージ <span className="text-[#B87333]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="お問い合わせ内容をご記入ください"
                  className="w-full resize-none rounded-xl border border-[#2A2520] bg-[#12110E] px-4 py-3 text-[#F5F0EB] placeholder-[#3A3530] outline-none transition-colors focus:border-[#B87333]/50"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#B87333] to-[#A0622D] px-6 py-4 font-medium text-white transition-shadow hover:shadow-lg hover:shadow-[#B87333]/20"
              >
                <Send className="h-4 w-4" />
                送信する
              </motion.button>
            </div>

            {/* Email hint */}
            <p className="mt-4 text-center text-xs text-[#5A5550]">
              送信ボタンをクリックするとメーラーが起動します
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
