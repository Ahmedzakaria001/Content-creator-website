import React from "react";
import { Mic, FileText, Users, Briefcase, MessageSquare } from "lucide-react";

// أيقونة Youtube الصحيحة
export const YoutubeIcon = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

export const InstagramIcon = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const LinkedinIcon = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const TiktokIcon = (props) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export const SOCIALS = [
  { name: "YouTube", href: "https://www.youtube.com/@Ahmed.Moussa206", icon: YoutubeIcon },
  { name: "TikTok", href: "https://www.tiktok.com/@ahmed_moussa94", icon: TiktokIcon },
  { name: "Instagram", href: "https://www.instagram.com/ahm.edmoussa94", icon: InstagramIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ahmed-moussa-6b4b5622a", icon: LinkedinIcon },
];

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export const SCORECARD_SAMPLES = [
  {
    round: "HR ROUND",
    question: "\u201cTell me about a time you handled an angry customer.\u201d",
    scores: [
      { label: "Situation", value: 88 },
      { label: "Task", value: 74 },
      { label: "Action", value: 91 },
      { label: "Result", value: 82 },
    ],
    verdict: "Strong STAR structure",
  },
  {
    round: "OPERATIONAL ROUND",
    question: "\u201cWalk me through resolving a billing dispute.\u201d",
    scores: [
      { label: "Clarity", value: 79 },
      { label: "Ownership", value: 95 },
      { label: "Empathy", value: 87 },
      { label: "Resolution", value: 90 },
    ],
    verdict: "Ready for offer stage",
  },
  {
    round: "VERSANT PREP",
    question: "\u201cRepeat and paraphrase the prompt sentence.\u201d",
    scores: [
      { label: "Fluency", value: 84 },
      { label: "Pronunciation", value: 89 },
      { label: "Pace", value: 76 },
      { label: "Grammar", value: 92 },
    ],
    verdict: "On track for target score",
  },
];

export const TIMELINE = [
  { org: "Sutherland", role: "Customer Service Executive", note: "Where the fundamentals were built." },
  { org: "Teleperformance", role: "Customer Service Executive", note: "Sharpened conflict resolution and pace." },
  { org: "Concentrix", role: "Customer Service Executive", note: "Deepened process and escalation handling." },
  { org: "Prime Health Group, Dubai", role: "Customer Happiness Executive", note: "Current role — healthcare customer experience in the UAE." },
];

export const SERVICES_DATA = [
  {
    icon: MessageSquare,
    title: "Free Strategy Consultation",
    tag: "100% Free",
    desc: "A complimentary 1-on-1 strategy call to evaluate your current situation, review your goals, and identify the best path forward before committing.",
    points: [
      "30-minute 1-on-1 introductory session",
      "Quick assessment of your CV & interview readiness",
      "Clear, actionable guidance tailored to your career path",
    ],
  },
  {
    icon: Mic,
    flagship: true,
    title: "Interview Coach",
    tag: "50% Off Offer",
    desc: "1:1 mock interview sessions for both HR and operational rounds, tailored to the BPO / customer service role you're targeting.",
    price: {
      before: "200 EGP",
      after: "100 EGP",
      duration: "1 Hour",
      international: "خارج مصر: 100 درهم أو 50 دولار للساعة بعد الخصم",
    },
    policyNote: "Payment is non-refundable. Please make sure to confirm all details before submitting a request / الدفع غير قابل للإسترداد ويرجى التأكيد قبل إرسال الطلب.",
    points: [
      "Live mock HR and operational round simulations",
      "Personalized feedback using the STAR method",
      "Versant / English assessment coaching",
    ],
  },
  {
    icon: FileText,
    title: "CV Review",
    desc: "A focused review of your resume for BPO and customer service applications — structure, phrasing, and what recruiters actually scan for.",
    points: [
      "Line-by-line resume feedback",
      "Tailored to BPO / customer service roles",
      "Practical, same-format rewrite suggestions",
    ],
  },
  {
    icon: Users,
    title: "Group Coaching Program",
    desc: "A 6-month interview coaching roadmap for job seekers who want structured, ongoing preparation rather than a single session.",
    points: [
      "ICF / GROW coaching framework",
      "Recurring group mock interview sessions",
      "Access to a 100-question practice bank",
    ],
  },
];