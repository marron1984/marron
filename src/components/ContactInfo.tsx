"use client";

import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function ContactInfo() {
  const { t } = useLanguage();

  const items = [
    {
      icon: Phone,
      label: t.ui.contact.phoneLabel,
      value: t.ui.contact.phone,
      href: `tel:${t.ui.contact.phone.replace(/-/g, "")}`,
      extra: {
        icon: MessageCircle,
        label: "LINE Works",
        href: "https://works.do/R/ti/p/syoshida@aaworks",
      },
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
  ];

  return (
    <section className="relative px-6 py-20" id="info">
      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + idx * 0.08 }}
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
              {"extra" in item && item.extra && (
                <a
                  href={item.extra.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-[#00C73C]/10 px-3 py-1.5 text-xs font-medium text-[#00C73C] transition-colors hover:bg-[#00C73C]/20"
                >
                  <item.extra.icon className="h-3.5 w-3.5" />
                  {item.extra.label}
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
