"use client";

import { useLanguage } from "./LanguageProvider";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, IdCard } from "lucide-react";

export default function ContactInfo() {
  const { t } = useLanguage();

  const items = [
    {
      icon: Phone,
      label: t.ui.contact.phoneLabel,
      value: t.ui.contact.phone,
      href: `tel:${t.ui.contact.phone.replace(/-/g, "")}`,
      extras: [
        { icon: MessageCircle, label: "LINE Works", href: "https://works.do/R/ti/p/syoshida@aaworks" },
        { icon: MessageCircle, label: "LINE", href: "https://line.me/ti/p/0F2Yv5Je6b" },
        { icon: IdCard, label: "名刺", href: "https://8card.net/virtual_cards/-fWqt7rpTBlXjBCx4k1Krw" },
      ],
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
    <section className="px-6 py-16 md:px-12 lg:px-20" id="info">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-px border border-foreground/8 sm:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="border-foreground/8 bg-background p-6 sm:border-r last:sm:border-r-0"
            >
              <div className="mb-3 flex items-center gap-2">
                <item.icon className="h-4 w-4 text-dimmer" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-dimmer">
                  {item.label}
                </span>
              </div>

              {item.href ? (
                <a
                  href={item.href}
                  className="text-sm font-medium text-foreground transition-opacity hover:opacity-60"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm leading-relaxed text-foreground">{item.value}</p>
              )}

              {"extras" in item && item.extras && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.extras.map((ex, i) => (
                    <a
                      key={i}
                      href={ex.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-foreground/10 px-2.5 py-1 text-[10px] font-medium text-dimmer transition-colors hover:border-foreground/30 hover:text-foreground"
                    >
                      <ex.icon className="h-3 w-3" />
                      {ex.label}
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
