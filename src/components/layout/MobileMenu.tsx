"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/content/site";
import { X, ArrowUpRight, Mail, MessageSquare, ExternalLink } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Drawer Content */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-[#0a0b10] border-l border-white/[0.08] p-6 flex flex-col justify-between overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
              <span className="text-xl font-bold tracking-tight uppercase text-white">
                DAMMY<span className="text-brand">UX</span>
              </span>
              <button
                onClick={onClose}
                aria-label="Close navigation menu"
                className="p-2 rounded-full bg-white/[0.06] text-neutral-300 hover:text-white hover:bg-white/[0.12] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-2 py-8">
              {siteConfig.navigation.map((item, idx) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center justify-between py-3 px-4 rounded-xl text-lg font-medium transition-all ${
                        isActive
                          ? "bg-brand/10 text-brand font-semibold"
                          : "text-neutral-300 hover:text-white hover:bg-white/[0.04]"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-brand" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Bottom Actions & Contacts */}
            <div className="space-y-4 pt-6 border-t border-white/[0.08]">
              <Link
                href="/contact"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-brand text-neutral-950 font-semibold hover:bg-brand/90 transition-all shadow-lg shadow-brand/20 text-center"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-medium text-neutral-300 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-brand" />
                  <span>Email Me</span>
                </a>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-xs font-medium text-neutral-300 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-brand" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-4 pt-2 text-xs text-neutral-500">
                <a
                  href={siteConfig.upworkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-300 transition-colors flex items-center gap-1"
                >
                  <span>Upwork</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span>•</span>
                <a
                  href={siteConfig.fiverrUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-300 transition-colors flex items-center gap-1"
                >
                  <span>Fiverr</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span>•</span>
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-300 transition-colors flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
