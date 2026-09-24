import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Mail,
  MessageSquare,
  Calendar,
  ExternalLink,
  MapPin,
  Clock,
  Sparkles,
  ArrowUpRight,
  Linkedin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Direct Channels",
  description:
    "Get in touch directly with DammyUX via Email, WhatsApp, Upwork, Fiverr, LinkedIn, or book a 15-minute discovery call on Calendly.",
};

export default function ContactPage() {
  const directChannels = [
    {
      title: "Direct Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      icon: Mail,
      badge: "Fastest Response",
      description: "Send project briefs, RFP inquiries, or ask any technical question directly.",
      actionText: "Send an Email",
    },
    {
      title: "WhatsApp Direct",
      value: siteConfig.whatsappDisplay,
      href: siteConfig.whatsapp,
      icon: MessageSquare,
      badge: "Instant Messaging",
      description: "Quick chat, voice notes, and real-time sprint status updates.",
      actionText: "Open WhatsApp",
    },
    {
      title: "15-Min Discovery Call",
      value: "Schedule via Calendly",
      href: siteConfig.calendlyUrl,
      icon: Calendar,
      badge: "Video Meeting",
      description: "Book an intro video session to align on requirements, scope, and timeline.",
      actionText: "Pick a Time Slot",
    },
    {
      title: "Upwork Profile",
      value: "Top Rated Plus",
      href: siteConfig.upworkUrl,
      icon: ExternalLink,
      badge: "Escrow Protected",
      description: "Hire with verified platform contracts, milestones, and client protection.",
      actionText: "Hire on Upwork",
    },
    {
      title: "Fiverr Studio",
      value: "fiverr.com/dammyux",
      href: siteConfig.fiverrUrl,
      icon: ExternalLink,
      badge: "Quick Orders",
      description: "Order fixed-price packages and vetted studio sprints through Fiverr.",
      actionText: "View Fiverr Profile",
    },
    {
      title: "LinkedIn",
      value: "Adetoro Hammed",
      href: siteConfig.linkedinUrl,
      icon: Linkedin,
      badge: "Professional Network",
      description: "Connect on LinkedIn for partnerships, career inquiries, and endorsements.",
      actionText: "Connect on LinkedIn",
    },
  ];

  return (
    <div className="pt-32 pb-24 space-y-20">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <SectionHeading
          badge="Start a Conversation"
          title="Let's Work Together"
          subtitle="No clunky forms or spam queues. Reach out directly through your preferred channel to discuss your upcoming project."
          align="center"
        />
      </section>

      {/* 2. Direct Channels Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {directChannels.map((channel, idx) => {
            const Icon = channel.icon;
            return (
              <a
                key={idx}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative p-8 rounded-3xl border border-neutral-300/80 dark:border-white/[0.08] bg-white dark:bg-neutral-900/50 hover:border-brand/60 dark:hover:border-brand/40 shadow-sm hover:shadow-[0_10px_35px_-10px_rgba(0,255,135,0.2)] flex flex-col justify-between gap-6 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-brand/15 dark:bg-brand/10 text-emerald-800 dark:text-brand group-hover:bg-brand group-hover:text-neutral-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-white/[0.05] text-[#445145] dark:text-neutral-400 border border-neutral-200 dark:border-white/[0.04]">
                      {channel.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#172018] dark:text-white group-hover:text-emerald-700 dark:group-hover:text-brand transition-colors">
                      {channel.title}
                    </h3>
                    <p className="text-xs font-mono text-[#556356] dark:text-neutral-400 pt-0.5 truncate">
                      {channel.value}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#445145] dark:text-[#879287] leading-relaxed">
                    {channel.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-200 dark:border-white/[0.06] flex items-center justify-between text-xs font-bold text-[#172018] dark:text-white group-hover:text-emerald-700 dark:group-hover:text-brand transition-colors">
                  <span>{channel.actionText}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* 3. Status & Timezone Info */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl border border-neutral-300/80 dark:border-white/[0.08] bg-white dark:bg-black/40 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-brand/15 dark:bg-brand/10 text-emerald-800 dark:text-brand shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-mono uppercase text-[#556356] dark:text-neutral-400">
                Current Status
              </span>
              <span className="text-sm font-bold text-[#172018] dark:text-white">
                {siteConfig.availability}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-brand/15 dark:bg-brand/10 text-emerald-800 dark:text-brand shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-mono uppercase text-[#556356] dark:text-neutral-400">
                Location
              </span>
              <span className="text-sm font-bold text-[#172018] dark:text-white">
                {siteConfig.location}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-brand/15 dark:bg-brand/10 text-emerald-800 dark:text-brand shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-xs font-mono uppercase text-[#556356] dark:text-neutral-400">
                Average Turnaround
              </span>
              <span className="text-sm font-bold text-[#172018] dark:text-white">
                Under 24 Hours
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
