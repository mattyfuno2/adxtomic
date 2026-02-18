"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Facebook, Instagram, Youtube, X as XIcon } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* SECTION 1: HERO */}
      <section id="home" className="relative bg-black overflow-hidden">
        {/* Background with neural network effect */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/adxtomic-neurons-bg-02.png"
            alt="Neural network background"
            fill
            className="object-cover "
            priority
          />
        </div>

        {/* Navigation */}
        <nav className="relative z-20 flex items-center justify-between px-6 py-4 md:px-12 lg:px-24">
          <div className="h-10 flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-header-EEotTp5UI6ncJ4S4f2EA5klOg1IS0J.png"
              alt="ADXTOMIC"
              width={180}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="hidden md:flex items-center gap-12">
            <a href="#home" className="text-sm hover:text-cyan-400 transition-colors font-bold tracking-widest">
              HOME
            </a>
            <a href="#features" className="text-sm hover:text-cyan-400 transition-colors font-bold tracking-widest">
              FEATURES
            </a>
            <a href="#technology" className="text-sm hover:text-cyan-400 transition-colors font-bold tracking-widest">
              TECHNOLOGY
            </a>
            <a href="#about" className="text-sm hover:text-cyan-400 transition-colors font-bold tracking-widest">
              ABOUT US
            </a>
          </div>

        </nav>

        {/* Hero Content */}
        <div className="relative z-10 px-6 py-12 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center min-h-[550px]">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white">
                Add X to Playtonic.<br />
                Unlock Your Club's Revenue Potential.
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                Turn your existing Playtonic CRM into an intelligent revenue engine with AI-powered player grouping, smart messaging, and real-time monetization.
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-6 text-base">
                GET THE AI ADVANTAGE
              </Button>
            </div>

          </div>

          {/* Carousel indicators */}
          <div className="flex justify-center gap-3 mt-8 max-w-7xl mx-auto">
            <div className="h-1 bg-cyan-400 w-8" />
            <div className="h-1 bg-white/30 w-2" />
            <div className="h-1 bg-white/30 w-2" />
          </div>
        </div>
      </section>

      {/* SECTION 2: PROBLEM STATEMENT */}
      <section className="relative bg-gradient-to-r from-purple-900/60 to-indigo-900/60 py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-purple-900/80 to-indigo-900/80 rounded-3xl p-8 md:p-12 space-y-6 border border-purple-500/30">
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Most Clubs Are Sitting on Untapped Revenue.
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed max-w-3xl">
              Your courts are active. Your players are engaged. But your data isn't working for you.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl">
              Without intelligent grouping, targeted messaging, and smart ad placement, you're leaving sessions unfilled and revenue unrealized.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: VALUE PROPOSITION */}
      <section className="relative bg-black py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Turn Playtonic Data Into Revenue With X
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              ADXTOMIC is an AI-powered revenue layer built specifically for Playtonic clubs.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              It connects to your CRM, analyzes player behavior, and activates revenue opportunities automatically.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              No extra admin. No extra complexity. Just smarter monetization.
            </p>
          </div>
          <div className="relative flex items-center justify-center h-96">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-right-Gm3jCCirarqoDvOkW5MDmfy6zVk0ss.png"
              alt="ADXTOMIC X"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: 3-STEP PROCESS */}
      <section id="technology" className="relative bg-gradient-to-r from-cyan-400 to-cyan-300 py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16 text-center">
            From Data to Revenue — In 3 Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative md:-skew-x-12 transition-transform duration-300 bg-slate-950 h-full">
              <div className="md:skew-x-12 p-8 space-y-6 h-full">
                <h3 className="text-2xl md:text-3xl font-black text-white">Step 1 — Connect</h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Seamlessly integrates with your Playtonic CRM. No disruption to your existing operations.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative md:-skew-x-12 transition-transform duration-300 bg-slate-950 h-full">
              <div className="md:skew-x-12 p-8 space-y-6 h-full">
                <h3 className="text-2xl md:text-3xl font-black text-white">Step 2 — Analyze</h3>
                <p className="text-gray-300 text-base font-semibold">Our AI understands:</p>
                <ul className="text-gray-300 text-base space-y-2">
                  <li>• Player skill levels</li>
                  <li>• Booking patterns</li>
                  <li>• Drop-off behavior</li>
                  <li>• Session demand</li>
                  <li>• Engagement history</li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative md:-skew-x-12 transition-transform duration-300 bg-slate-950 h-full">
              <div className="md:skew-x-12 p-8 space-y-6 h-full">
                <h3 className="text-2xl md:text-3xl font-black text-white">Step 3 — Monetize</h3>
                <p className="text-gray-300 text-base font-semibold">Automatically:</p>
                <ul className="text-gray-300 text-base space-y-2">
                  <li>• Fills sessions intelligently</li>
                  <li>• Sends hyper-targeted direct messages</li>
                  <li>• Activates local ad placements</li>
                  <li>• Unlocks new revenue streams</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: PLAYER INTELLIGENCE SUITE */}
      <section id="features" className="relative w-full max-w-[1200px] mx-auto bg-black py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-white text-center">
            The Player Intelligence Suite
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 space-y-6 hover:shadow-2xl hover:shadow-purple-500/50 transition-all">
              <div className="relative w-full h-48  rounded-2xl overflow-hidden">
                <Image
                  src="/images/groups.png"
                  alt="Group & Conquer"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div>
                <h3 className="text-2xl text-center md:text-3xl font-black text-white mb-2">Group & Conquer</h3>
                <p className="text-xl text-center text-purple-100 mb-4 font-semibold">(AI Player Grouping)</p>
                <p className="text-purple-50 leading-relaxed mb-4">
                  Eliminate mismatched sessions. Create balanced, competitive games that players actually want to return to.
                </p>
                <p className="text-white font-bold">Result: Higher retention. More repeat bookings.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 space-y-6 hover:shadow-2xl hover:shadow-purple-500/50 transition-all">
              <div className="relative w-full h-48  rounded-2xl overflow-hidden">
                <Image
                  src="/images/magnet.png"
                  alt="The Match Magnet"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div>
                <h3 className="text-2xl  text-center  md:text-3xl font-black text-white mb-2">The Match Magnet</h3>
                <p className="text-xl  text-center  text-purple-100 mb-4 font-semibold">(Match Intelligence)</p>
                <p className="text-purple-50 leading-relaxed mb-4">
                  Predicts demand before it drops. Automatically nudges players into optimal sessions.
                </p>
                <p className="text-white font-bold">Result: Higher occupancy. Fewer empty courts.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 space-y-6 hover:shadow-2xl hover:shadow-purple-500/50 transition-all">
              <div className="relative w-full h-48  rounded-2xl overflow-hidden">
                <Image
                  src="/images/dm.png"
                  alt="Direct Messaging Engine"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div>
                <h3 className="text-2xl  text-center  md:text-3xl font-black text-white mb-2">Direct Messaging Engine</h3>
                <p className="text-xl   text-center text-purple-100 mb-4 font-semibold">(Smart Communication)</p>
                <p className="text-purple-50 leading-relaxed mb-4">
                  Target specific skill levels, groups, or demographics. Promote events, tournaments, or premium sessions with precision.
                </p>
                <p className="text-white font-bold">Result: Increased engagement. Higher event turnout.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-8 space-y-6 hover:shadow-2xl hover:shadow-purple-500/50 transition-all">
              <div className="relative w-full h-48  rounded-2xl overflow-hidden">
                <Image
                  src="/images/ad.png"
                  alt="Real-Time Ad Revenue Layer"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div>
                <h3 className="text-2xl  text-center  md:text-3xl font-black text-white mb-2">Real-Time Ad Revenue Layer</h3>
                <p className="text-sm  text-center  text-purple-100 mb-4 font-semibold">(Monetization)</p>
                <p className="text-purple-50 leading-relaxed mb-4">
                  Activate hyper-local sponsors directly within your ecosystem. Turn player attention into recurring ad revenue.
                </p>
                <p className="text-white font-bold">Result: Monetization beyond bookings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHERE REVENUE GROWS */}
      <section className="relative bg-slate-950 py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-white">
            Where Revenue Actually Grows
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white">Increase session occupancy</h3>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white">Reduce no-shows</h3>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white">Improve player retention</h3>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white">Unlock sponsor revenue</h3>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white">Monetize inactive users</h3>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white">Maximize court utilization</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Chart */}
          <div className="relative block w-full min-h-[300px] md:min-h-[696px] h-full rounded-2xl overflow-hidden ">
            <Image
              src="/images/graph-padel-revenue.png"
              alt="Revenue growth chart"
              fill
              className="object-contain p-8"
            />
          </div>
        </div>
      </section>

      {/* SECTION 7: COMPETITIVE ADVANTAGE */}
      <section className="relative bg-gradient-to-br from-purple-900/50 to-indigo-900/50 py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-purple-900/80 to-indigo-900/80 rounded-3xl p-8 md:p-12 space-y-6 border border-purple-500/30">
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Your Competition Is Already Using Smarter Tools
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              Clubs that adopt AI-driven monetization fill faster, retain longer, and scale easier.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              ADXTOMIC gives your club the X Factor — the intelligent advantage built directly on top of Playtonic.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8: BUILT FOR GROWTH */}
      <section className="relative bg-black py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-white">
            Built for Growth-Focused Club Owners
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white">Multi-court facilities</h3>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white">Clubs running regular tournaments</h3>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white">Facilities with unused off-peak hours</h3>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white">Clubs seeking sponsor partnerships</h3>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-white">Owners scaling to multiple locations</h3>
                </div>
              </div>
            </div>
            <div className="relative h-full min-h-[606px] rounded-2xl overflow-hidden">
              <Image
                src="/images/padel-king.png"
                alt="Padel King Champion"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: INTEGRATION CTA */}
      <section className="relative bg-black py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-purple-400">
            Seamless Playtonic Integration
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            No switching systems.
            <br />
            No complex onboarding.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            ADXTOMIC enhances your existing Playtonic environment — without disrupting your workflow.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Setup takes minutes. Revenue starts compounding immediately.
          </p>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="relative bg-black py-16 md:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white">
            Stop Managing. <span className="text-cyan-400">Start Monetizing.</span>
          </h2>
          <p className="text-gray-300 text-xl leading-relaxed">
            Add X to your Playtonic CRM and unlock the revenue layer your club is missing.
          </p>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-10 py-10 text-lg">
            UPGRADE YOUR CLUB WITH X
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="about" className="relative bg-slate-950 border-t border-gray-800 py-12 md:py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Logo */}
            <div className="flex flex-col items-start space-y-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-right-Gm3jCCirarqoDvOkW5MDmfy6zVk0ss.png"
                alt="ADXTOMIC"
                width={160}
                height={80}
                className="object-contain"
              />
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h3 className="font-bold text-white text-sm tracking-widest">PRODUCT</h3>
              <nav className="space-y-2">
                <p className="text-gray-400 text-sm hover:text-cyan-400 cursor-pointer transition-colors">Home</p>
                <p className="text-gray-400 text-sm hover:text-cyan-400 cursor-pointer transition-colors">Features</p>
                <p className="text-gray-400 text-sm hover:text-cyan-400 cursor-pointer transition-colors">Technology</p>
              </nav>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="font-bold text-white text-sm tracking-widest">COMPANY</h3>
              <nav className="space-y-2">
                <p className="text-gray-400 text-sm hover:text-cyan-400 cursor-pointer transition-colors">About Us</p>
                <p className="text-gray-400 text-sm hover:text-cyan-400 cursor-pointer transition-colors">Contact</p>
              </nav>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h3 className="font-bold text-white text-sm tracking-widest">SOCIAL</h3>
              <div className="flex gap-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                <XIcon className="w-5 h-5 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                <Youtube className="w-5 h-5 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>

          {/* Description and Copyright */}
          <div className="border-t border-gray-800 pt-8 space-y-4">
            <p className="text-gray-400 text-sm leading-relaxed">
              ADXTOMIC is an independent revenue optimization layer built to integrate with Playtonic. Designed for forward-thinking clubs.
            </p>
            <p className="text-gray-500 text-xs">
              ADXTOMIC © Copyright 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
