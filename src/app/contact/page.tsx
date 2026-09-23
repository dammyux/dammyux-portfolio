'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Mail, 
  Calendar, 
  ArrowUpRight, 
  Check, 
  Copy, 
  Sparkles
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function ContactPage() {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 dark:text-white mb-6">
            Let&apos;s build something exceptional together.
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
            No endless contact forms or automated bots. Choose your preferred communication channel below for immediate direct response.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {/* WhatsApp Direct */}
          <motion.a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="p-8 rounded-3xl bg-white dark:bg-[#0c0e12] border-2 border-emerald-500/40 hover:border-emerald-500 shadow-xl shadow-emerald-500/5 hover:shadow-emerald-500/15 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold block mb-1">
                Fastest Response
              </span>
              <h2 className="text-2xl font-bold text-neutral-950 dark:text-white mb-2">
                WhatsApp Direct
              </h2>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                Instant messaging for quick inquiries, scope chats, voice notes, and fast project turnarounds.
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500">
              <span>Open WhatsApp Chat</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </motion.a>

          {/* Calendly Discovery Call */}
          <motion.a
            href={siteConfig.contact.calendly}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-8 rounded-3xl bg-white dark:bg-[#0c0e12] border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/40 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-emerald-500" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                1-on-1 Video Session
              </span>
              <h2 className="text-2xl font-bold text-neutral-950 dark:text-white mb-2">
                Book Discovery Call
              </h2>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                Schedule a 20-minute Google Meet or Zoom discovery call to align on requirements and timelines.
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs font-bold text-neutral-900 dark:text-white group-hover:text-emerald-400">
              <span>View Available Time Slots</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </motion.a>

          {/* Direct Email with Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-8 rounded-3xl bg-white dark:bg-[#0c0e12] border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/40 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-emerald-500" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                Formal Inquiries & RFPs
              </span>
              <h2 className="text-2xl font-bold text-neutral-950 dark:text-white mb-2">
                Direct Email
              </h2>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                Send briefs, project specifications, and NDA documents directly to my primary inbox.
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center gap-2">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex-grow py-2.5 px-3 rounded-xl text-xs font-bold bg-neutral-900 dark:bg-neutral-800 text-white dark:text-neutral-200 hover:bg-emerald-500 hover:text-neutral-950 transition-colors text-center"
              >
                Send Email
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-emerald-500 transition-colors"
                title="Copy email address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Verified Freelance Platforms Strip */}
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-100 dark:bg-[#0c0e12] border border-neutral-200 dark:border-neutral-800">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl font-bold text-neutral-950 dark:text-white mb-2">
              Prefer Escrow Protection & Established Marketplaces?
            </h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              You can also hire me directly with escrow protection on verified freelance platforms with 5-star ratings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={siteConfig.contact.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white dark:bg-[#121419] border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/40 flex items-center justify-between group transition-all"
            >
              <div>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 block mb-1">
                  Upwork Verified Profile
                </span>
                <span className="text-sm font-bold text-neutral-950 dark:text-white">
                  Hire on Upwork Escrow
                </span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <a
              href={siteConfig.contact.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-white dark:bg-[#121419] border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500/40 flex items-center justify-between group transition-all"
            >
              <div>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 block mb-1">
                  Fiverr Pro Studio
                </span>
                <span className="text-sm font-bold text-neutral-950 dark:text-white">
                  Hire on Fiverr
                </span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

