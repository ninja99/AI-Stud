import React from 'react';
import { TrendingUp, CheckCircle, Verified, Settings, Printer } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F2E9D2] text-[#2B2920] font-sans selection:bg-[#BEB790] selection:text-[#2B2920]">
      {/* Floating Print Button (Hidden when printing) */}
      <button 
        onClick={() => window.print()}
        className="fixed bottom-6 right-6 bg-[#2B2920] text-[#F2E9D2] px-6 py-3 rounded-full font-bold shadow-2xl hover:scale-105 transition-all z-50 print:hidden flex items-center gap-2 cursor-pointer"
      >
        <Printer size={20} />
        Save as PDF
      </button>

      {/* Header */}
      <header className="py-8 print:py-4 px-6 max-w-7xl mx-auto flex justify-between items-center">
        <div className="font-black text-3xl tracking-tighter flex items-start gap-0.5">
          GOODSHAPE<span className="text-[0.45em] border-[1.5px] border-[#2B2920] rounded-full px-[3px] py-[1px] leading-none mt-[0.2em] font-extrabold">PT</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 print:py-6 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 print:grid-cols-2 gap-12 print:gap-6 items-center">
          <div className="flex flex-col gap-6 print:gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2B2920]/10 text-[#2B2920] font-bold uppercase tracking-widest border border-[#2B2920]/20 w-fit text-sm print:text-xs">
              <TrendingUp size={16} className="print:w-4 print:h-4" />
              Growth Focused
            </div>
            <h1 className="font-black text-[#1A1714] text-5xl md:text-6xl print:text-4xl leading-tight">
              Fill Your Boot Camps Faster: Done-For-You Meta Ads for <span className="font-black tracking-tighter inline-flex items-start gap-0.5">GOODSHAPE<span className="text-[0.45em] border-[1.5px] border-[#2B2920] rounded-full px-[3px] py-[1px] leading-none mt-[0.2em] font-extrabold">PT</span></span>.
            </h1>
            <p className="text-[#2B2920]/80 leading-relaxed max-w-xl text-2xl md:text-3xl print:text-xl font-light">
              Professional ad management tailored for Sydney-based <span className="font-black tracking-tighter inline-flex items-start gap-0.5">GOODSHAPE<span className="text-[0.45em] border-[1.5px] border-[#2B2920] rounded-full px-[3px] py-[1px] leading-none mt-[0.2em] font-extrabold">PT</span></span>. Stop guessing and start growing with a system built for ROI.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2B2920] to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 print:hidden"></div>
            <div className="relative w-full aspect-[4/3] rounded-2xl bg-slate-200 overflow-hidden shadow-2xl print:shadow-none border border-slate-200">
              <img 
                className="w-full h-full object-cover grayscale-[20%] contrast-[1.1]" 
                alt="Modern fitness professional leading a group training session outdoors" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYoxvVxzvGJioWU9PGz5QztDMxRb_4nu2sd5tFnfJIz6Pl9ZeRK_SKCY4eq_GrHCDT19aGWwEzRB4uDi3O65ZPifDZLRnO2TD6ybJP9CxKDhy54BlDYANW-f4hJeBC6zbj7xLOUAAO_K8p8cm_Gsfn710bPr-9vepFzHtXqJdvSqQeFEEIjIvvAt4XwNs1ye3Z3KfOEPpjfySmuTR_wmJCZU6WO6FyWOoCvfkMmr20rLjknI7AhuIQ1e9l_gdabVpifUv2Dqeioio" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 print:py-8 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl print:text-3xl font-black text-[#1A1714] mb-6">
          My Guarantee: No Lock-In, Ever.
        </h2>
        <p className="text-2xl md:text-3xl print:text-xl font-medium leading-relaxed text-[#2B2920]">
          If I'm getting you results, you'll keep paying. If I'm not, you shouldn't. I have to earn it every single month. That's the deal.
        </p>
      </section>

      {/* Pricing Section */}
      <section className="py-20 print:py-8 border-y border-[#2B2920]/10 bg-[#BEB790]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 print:mb-6">
            <h2 className="text-[#1A1714] font-bold mb-2 text-4xl print:text-3xl">Choose Your Growth Phase</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-xl print:text-lg">Flexible packages designed to take you from fitness professional to business owner.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 gap-8 print:gap-4 items-stretch">
            {/* Ad Kickstart */}
            <div className="flex flex-col p-8 print:p-5 rounded-2xl border border-slate-200 bg-white shadow-sm print:shadow-none hover:shadow-xl transition-all duration-300">
              <div className="mb-8 print:mb-4">
                <h3 className="text-[#1A1714] font-bold mb-2 text-2xl print:text-xl">Ad Kickstart</h3>
                <p className="text-slate-500 mb-6 print:mb-3 text-base print:text-sm italic">"We get your ads live, find out what works, and stop wasting money on guesswork."</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl print:text-3xl font-black text-[#1A1714]">$497</span>
                  <span className="text-slate-500 font-semibold">/mo</span>
                </div>
                <p className="text-xs print:text-[10px] font-bold text-[#2B2920] mt-2 uppercase tracking-wide">+ $297 Ad System setup (one-time)</p>
              </div>
              
              <ul className="flex flex-col gap-4 print:gap-2 mb-10 print:mb-4 flex-grow">
                <li className="flex items-center gap-3 print:gap-2 font-medium text-base print:text-sm">
                  <CheckCircle className="text-[#2B2920] print:w-4 print:h-4" size={20} />
                  1 Active Campaign
                </li>
                <li className="flex items-center gap-3 print:gap-2 font-medium text-base print:text-sm">
                  <CheckCircle className="text-[#2B2920] print:w-4 print:h-4" size={20} />
                  3 Custom Creatives
                </li>
                <li className="flex items-center gap-3 print:gap-2 font-medium text-base print:text-sm">
                  <CheckCircle className="text-[#2B2920] print:w-4 print:h-4" size={20} />
                  Monthly Performance Reports
                </li>
                <li className="flex items-center gap-3 print:gap-2 font-medium text-base print:text-sm">
                  <CheckCircle className="text-[#2B2920] print:w-4 print:h-4" size={20} />
                  Custom Audience Build
                </li>
              </ul>
              
              <button className="w-full py-4 print:py-2 rounded-xl border-2 border-[#2B2920] text-[#2B2920] font-bold hover:bg-[#2B2920] hover:text-white transition-all">
                Kickstart
              </button>
            </div>

            {/* Lead Machine */}
            <div className="flex flex-col p-8 print:p-5 rounded-2xl border-2 border-[#2B2920] bg-[#685D37] shadow-2xl print:shadow-none shadow-[#2B2920]/10 relative scale-105 print:scale-100 z-10 text-[#F2E9D2]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2B2920] text-white text-xs print:text-[10px] font-black uppercase tracking-[0.2em] px-6 print:px-4 py-2 print:py-1 rounded-full whitespace-nowrap">
                Recommended
              </div>
              
              <div className="mb-8 print:mb-4 pt-4 print:pt-2">
                <h3 className="font-bold mb-2 text-2xl print:text-xl text-[#F2E9D2]">Lead Machine</h3>
                <p className="mb-6 print:mb-3 text-base print:text-sm italic opacity-90">"This is where we stop experimenting and start scaling what works. I manage everything, you show up and coach."</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl print:text-3xl font-black text-[#F2E9D2]">$997</span>
                  <span className="font-semibold opacity-80">/mo</span>
                </div>
                <p className="text-xs print:text-[10px] font-bold text-[#2B2920] mt-2 uppercase tracking-wide bg-[#FFF983] px-2 py-1 rounded inline-block">
                  AD SYSTEM Setup Fee Waived
                </p>
              </div>
              
              <ul className="flex flex-col gap-4 print:gap-2 mb-10 print:mb-4 flex-grow">
                <li className="flex items-center gap-3 print:gap-2 font-bold text-base print:text-sm">
                  <Verified className="text-[#F2E9D2] print:w-4 print:h-4" size={20} />
                  Everything in Kickstart
                </li>
                <li className="flex items-center gap-3 print:gap-2 font-medium text-base print:text-sm">
                  <CheckCircle className="text-[#F2E9D2] print:w-4 print:h-4" size={20} />
                  3 Active Campaigns
                </li>
                <li className="flex items-center gap-3 print:gap-2 font-medium text-base print:text-sm">
                  <CheckCircle className="text-[#F2E9D2] print:w-4 print:h-4" size={20} />
                  6 Custom Creatives
                </li>
                <li className="flex items-center gap-3 print:gap-2 font-medium text-base print:text-sm">
                  <CheckCircle className="text-[#F2E9D2] print:w-4 print:h-4" size={20} />
                  Ongoing A/B Testing
                </li>
                <li className="flex items-center gap-3 print:gap-2 font-medium text-base print:text-sm">
                  <CheckCircle className="text-[#F2E9D2] print:w-4 print:h-4" size={20} />
                  Bi-weekly Strategy Calls
                </li>
              </ul>
              
              <button className="w-full py-4 print:py-2 rounded-xl bg-[#2B2920] text-[#F2E9D2] font-bold hover:bg-[#2B2920]/90 transition-all shadow-lg print:shadow-none shadow-[#2B2920]/25">
                Get Lead Machine
              </button>
            </div>

            {/* Full Growth System */}
            <div className="flex flex-col p-8 print:p-5 rounded-2xl border border-slate-200 bg-white shadow-sm print:shadow-none hover:shadow-xl transition-all duration-300">
              <div className="mb-8 print:mb-4">
                <h3 className="text-[#1A1714] font-bold mb-2 text-2xl print:text-xl">Full Growth System</h3>
                <p className="text-slate-500 mb-6 print:mb-3 text-base print:text-sm italic">"You're not just buying ad management, you're buying a growth system. I'm your part-time marketing director."</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl print:text-3xl font-black text-[#1A1714]">$1,997</span>
                  <span className="text-slate-500 font-semibold">/mo</span>
                </div>
                <p className="text-xs print:text-[10px] font-bold text-[#2B2920] mt-2 uppercase tracking-wide bg-[#FFF983] px-2 py-1 rounded inline-block">
                  AD SYSTEM Setup Fee Waived
                </p>
              </div>
              
              <ul className="flex flex-col gap-4 print:gap-2 mb-10 print:mb-4 flex-grow">
                <li className="flex items-center gap-3 print:gap-2 font-bold text-base print:text-sm">
                  <Verified className="text-[#2B2920] print:w-4 print:h-4" size={20} />
                  Everything in Lead Machine
                </li>
                <li className="flex items-center gap-3 print:gap-2 font-medium text-base print:text-sm">
                  <CheckCircle className="text-[#2B2920] print:w-4 print:h-4" size={20} />
                  Full Funnel Management
                </li>
                <li className="flex items-center gap-3 print:gap-2 font-medium text-base print:text-sm">
                  <CheckCircle className="text-[#2B2920] print:w-4 print:h-4" size={20} />
                  Video Ad Scripting
                </li>
                <li className="flex items-center gap-3 print:gap-2 font-medium text-base print:text-sm">
                  <CheckCircle className="text-[#2B2920] print:w-4 print:h-4" size={20} />
                  Email/SMS Follow-up Systems
                </li>
                <li className="flex items-center gap-3 print:gap-2 font-medium text-base print:text-sm">
                  <CheckCircle className="text-[#2B2920] print:w-4 print:h-4" size={20} />
                  Landing Page Optimization
                </li>
              </ul>
              
              <button className="w-full py-4 print:py-2 rounded-xl border-2 border-[#2B2920] text-[#2B2920] font-bold hover:bg-[#2B2920] hover:text-white transition-all">
                Scale Now
              </button>
            </div>
          </div>

          {/* Setup Detail */}
          <div className="mt-12 print:mt-6 p-6 print:p-4 rounded-xl bg-[#BEB790] border border-[#685D37] flex flex-col md:flex-row print:flex-row items-center justify-between gap-6 print:gap-4">
            <div className="flex items-start gap-4 print:gap-3">
              <div className="size-12 print:size-10 rounded-full bg-[#685D37] flex items-center justify-center text-[#F2E9D2] shrink-0">
                <Settings size={24} className="print:w-5 print:h-5" />
              </div>
              <div>
                <h4 className="text-[#2B2920] font-bold text-lg print:text-base">Ad System Setup - $297 One-Time</h4>
                <p className="text-[#2B2920] text-lg print:text-sm">Includes professional Meta Ads account configuration, pixel installation/verification, custom event tracking and audience creation. Waived for Lead Machine and Full Growth packages.</p>
              </div>
            </div>
          </div>
          
          <p className="mt-10 print:mt-6 text-center text-slate-500 font-bold uppercase tracking-wide text-lg print:text-sm">
            FEES CHARGED A MONTH IN ADVANCE - <span className="bg-[#FFF983] px-1 rounded-sm text-[#2B2920]">NO LOCK-IN CONTRACTS</span>.
          </p>
          <p className="text-center text-slate-500 font-medium italic mt-2 text-lg print:text-sm">
            Pricing is for Direct Invoicing (Not via Upwork) and is exclusive of GST. Projects billed via Upwork are subject to a +25% platform fee.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1A1714]/10 py-16 print:py-6 px-6 bg-[#BEB790]">
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center gap-8 print:gap-4">
          <div className="flex flex-col items-center">
            <h4 className="text-[#2B2920] font-bold mb-2 print:mb-1">Contact</h4>
            <p className="text-[#2B2920] font-medium text-2xl print:text-xl">James Thomson</p>
            <a className="text-[#2B2920] hover:underline font-black text-4xl print:text-2xl" href="mailto:jt@jnt.com.au">jt@jnt.com.au</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
