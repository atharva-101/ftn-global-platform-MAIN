"use client"

import React, { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { createClient } from "@supabase/supabase-js"
import {
  Globe,
  Factory,
  Ship,
  FileText,
  TrendingUp,
  Zap,
  ArrowRight,
  Settings,
  Leaf,
  Beaker,
  Shirt,
  PenTool,
  Box,
  Pill,
  Component,
  ClipboardCheck,
  CheckCircle2,
  Shield,
  Truck,
  Upload,
  Search,
  Activity,
  Mail,
  MapPin,
  ChevronRight,
  ChevronLeft,
} from "lucide-react"

// --- DATABASE CONFIGURATION ---
const supabase = createClient(
  "https://rpryrmjoefhlzxibbgjtja.supabase.co",
  "sb_publishable_FSXkJDxH9oYRkjV1G_T31A_X4ocEY5F"
)

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" },
}

export default function ForeignTradeNetworks() {
  const [step, setStep] = useState(1)
  const [file, setFile] = useState(null)
  const [status, setStatus] = useState("")
  const [loading, setLoading] = useState(false)

  const nextStep = () => setStep((s) => s + 1)
  const prevStep = () => setStep((s) => s - 1)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    try {
      let fileUrl = ""
      if (file) {
        const fileName = `${Date.now()}-${file.name}`
        const { data: uploadData } = await supabase.storage
          .from("buyer-documents")
          .upload(fileName, file)
        fileUrl = uploadData?.path || ""
      }
      const { error } = await supabase
        .from("buyer_requirements")
        .insert([{ ...data, attachment_url: fileUrl }])
      if (error) throw error
      setStatus("SUCCESS")
    } catch (err) {
      setStatus("ERROR")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="ftn-root bg-[#020408] text-white selection:bg-blue-500/30 font-sans antialiased scroll-smooth relative">
      {/* SECTION 1: HERO */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020408]/60 to-[#020408] z-10" />

        <div className="relative z-20 container mx-auto px-6 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-tight mb-8">
              FOREIGN <br />
              <span className="text-blue-500">TRADE</span> <br />
              NETWORKS
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 font-light mb-12 leading-relaxed italic">
              Connecting International Buyers with Verified Indian Manufacturers
              at Factory-Direct Pricing with Complete Export Coordination.
            </p>
            <a
              href="#contact"
              className="px-12 py-5 bg-blue-600 hover:bg-blue-500 rounded-full font-black text-lg transition-all shadow-[0_0_50px_rgba(37,99,235,0.4)] inline-flex items-center gap-3 group cursor-pointer"
            >
              SUBMIT YOUR REQUIREMENT{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: FLOWCHART */}
      <section className="py-32 bg-[#020408] border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-7xl font-bold mb-4 tracking-tighter">
            Direct Access.{" "}
            <span className="text-blue-500 italic">Better Margins.</span>
          </h2>
          <p className="text-blue-400 text-sm uppercase tracking-[0.4em] font-black mb-24">
            Eliminating Middlemen. Maximizing Your Margins.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-8 relative px-10">
            <div className="z-20 w-64 p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl">
              <Globe className="text-blue-400 mx-auto mb-6" size={48} />
              <p className="font-black text-xs uppercase tracking-widest text-gray-400">
                Global Buyer
              </p>
            </div>
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent -z-10" />
            <div className="z-30 w-72 p-12 rounded-[3rem] bg-blue-600/10 border-2 border-blue-500/50 backdrop-blur-2xl shadow-[0_0_60px_rgba(37,99,235,0.3)]">
              <Zap
                className="text-blue-400 mx-auto mb-6 fill-blue-400/20"
                size={64}
              />
              <p className="font-black text-3xl mb-1">FTN</p>
              <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">
                Direct Access Hub
              </p>
            </div>
            <div className="z-20 w-64 p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl">
              <Factory className="text-blue-400 mx-auto mb-6" size={48} />
              <p className="font-black text-xs uppercase tracking-widest text-gray-400">
                Indian Factory
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT WE DO */}
      <section className="py-32 bg-[#050810]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-20 tracking-tighter">
            What <span className="text-blue-500">We Do</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                t: "Requirement Understanding",
                i: <FileText size={32} />,
                d: "Detailed analysis of technical specs and quality standards.",
              },
              {
                t: "Manufacturer Identification",
                i: <Factory size={32} />,
                d: "Sourcing from our pre-audited network of specialized Indian factories.",
              },
              {
                t: "Price Negotiation",
                i: <TrendingUp size={32} />,
                d: "Direct factory-floor negotiations to secure the best possible margins.",
              },
              {
                t: "Export Coordination",
                i: <Ship size={32} />,
                d: "Handling all documentation, inspection, and global logistics.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md text-left"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-8 mx-auto">
                  {card.i}
                </div>
                <h3 className="text-xl font-bold mb-4 leading-tight">
                  {card.t}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: INDUSTRIES */}
      <section className="py-32 bg-[#020408]">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20 tracking-tighter">
            Industries We <span className="text-blue-500">Serve</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { t: "Engineering / CNC", i: <Settings /> },
              { t: "Agriculture / Food", i: <Leaf /> },
              { t: "Chemicals", i: <Beaker /> },
              { t: "Textiles", i: <Shirt /> },
              { t: "Custom Manufacturing", i: <PenTool /> },
              { t: "Private Labeling", i: <Box /> },
              { t: "Pharmaceuticals", i: <Pill /> },
              { t: "Industrial Components", i: <Component /> },
            ].map((ind, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 text-center flex flex-col items-center"
              >
                <div className="text-blue-400 mb-4">{ind.i}</div>
                <h3 className="font-bold text-xs uppercase tracking-widest">
                  {ind.t}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: SOURCING PROCESS */}
      <section className="py-32 bg-[#050810]">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-24 tracking-tighter text-white">
            Our Structured <br />{" "}
            <span className="text-blue-500 italic">Sourcing Process</span>
          </h2>
          <div className="relative border-l-2 border-blue-500/20 ml-6">
            {[
              {
                t: "Requirement Assessment",
                d: "Understanding your exact needs.",
                i: <ClipboardCheck />,
              },
              {
                t: "Manufacturer Identification",
                d: "Finding the right partners.",
                i: <Search />,
              },
              {
                t: "Quotation & Proposal",
                d: "Negotiating factory-direct pricing.",
                i: <FileText />,
              },
              {
                t: "Order Confirmation",
                d: "Finalizing contract and payment milestones.",
                i: <CheckCircle2 />,
              },
              {
                t: "Manufacturing & QC",
                d: "Live monitoring of production quality.",
                i: <Activity />,
              },
              {
                t: "Pre-shipment Inspection",
                d: "Final quality assurance audit.",
                i: <Shield />,
              },
              {
                t: "Shipment Execution",
                d: "Door-to-port delivery.",
                i: <Truck />,
              },
            ].map((step, i) => (
              <div key={i} className="mb-16 ml-12 relative">
                <div className="absolute -left-[61px] top-0 w-12 h-12 rounded-full bg-[#050810] border-2 border-blue-500 flex items-center justify-center text-blue-500 font-bold shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                  {i + 1}
                </div>
                <h4 className="text-2xl font-bold mb-2">{step.t}</h4>
                <p className="text-gray-500 text-sm italic">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FORM */}
      <section id="contact" className="py-32 bg-[#020408]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 tracking-tighter">
              Submit Your <span className="text-blue-500">Requirement</span>
            </h2>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 backdrop-blur-3xl min-h-[550px] flex flex-col justify-between">
            <form
              onSubmit={handleSubmit}
              className="flex-grow flex flex-col justify-center"
            >
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="s1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold mb-8 underline decoration-blue-500 underline-offset-8">
                      Basic Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
                        name="company"
                        required
                        placeholder="Company Name *"
                        className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-blue-500 outline-none"
                      />
                      <input
                        name="name"
                        required
                        placeholder="Contact Person *"
                        className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-blue-500 outline-none"
                      />
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="Business Email *"
                        className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-blue-500 outline-none"
                      />
                      <input
                        name="phone"
                        type="tel"
                        required
                        placeholder="Phone *"
                        className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-blue-500 outline-none"
                      />
                    </div>
                    <input
                      name="country"
                      required
                      placeholder="Country *"
                      className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-blue-500 outline-none mt-6"
                    />
                  </motion.div>
                )}
                {/* Steps 2-4 logic here */}
              </AnimatePresence>
              <div className="flex justify-between mt-12 pt-10 border-t border-white/5">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-8 py-4 border border-white/20 rounded-xl font-bold flex items-center gap-2"
                  >
                    Previous
                  </button>
                )}
                {step < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="ml-auto px-10 py-4 bg-blue-600 rounded-xl font-black flex items-center gap-2"
                  >
                    Next <ChevronRight size={20} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={loading}
                    className="ml-auto px-10 py-4 bg-green-600 rounded-xl font-black"
                  >
                    {loading ? "Submitting..." : "Submit Requirement"}
                  </button>
                )}
              </div>
              {status === "SUCCESS" && (
                <p className="text-green-400 text-center font-bold mt-8 uppercase tracking-widest text-xs">
                  Success! We will contact you shortly.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* SECTION: TRUST & COMPLIANCE */}
      <section className="py-32 bg-[#050810] border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-20 tracking-tighter">
            Trust & <span className="text-blue-500">Compliance</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              { t: "IEC Registered Business", i: <CheckCircle2 /> },
              { t: "Export Inspection Agencies", i: <Shield /> },
              { t: "Pre-shipment Inspection", i: <FileText /> },
              { t: "Certificate of Origin", i: <Activity /> },
              { t: "Full Export Documentation", i: <Ship /> },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-3xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 shadow-[0_0_20px_rgba(37,99,235,0.2)]">
                  {item.i}
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                  {item.t}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-10">
            <div>
              <h2 className="text-2xl font-black tracking-tighter mb-2">
                FOREIGN TRADE NETWORKS
              </h2>
              <p className="text-gray-600 text-[10px] tracking-widest uppercase font-black">
                Connecting International Buyers with India&apos;s Manufacturing
                Excellence.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8 text-gray-400 font-bold uppercase tracking-widest text-xs">
              <a
                href="mailto:business@foreigntradenetworks.com"
                className="flex items-center gap-2 hover:text-blue-500 transition-colors"
              >
                <Mail size={16} /> business@foreigntradenetworks.com
              </a>
              <span className="flex items-center gap-2 text-blue-500">
                <MapPin size={16} /> India
              </span>
            </div>
          </div>
          <div className="mt-20 pt-10 border-t border-white/5 text-center text-gray-700 text-[9px] tracking-[0.6em] uppercase font-black">
            &copy; 2026 FOREIGN TRADE NETWORKS. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  )
}
