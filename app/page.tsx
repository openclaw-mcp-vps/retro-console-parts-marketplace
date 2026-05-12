export default function Home() {
  const faqs = [
    {
      q: "What kinds of components are listed?",
      a: "Everything from custom PCBs, FPGA boards, and cartridge connectors to display drivers, power regulators, and full console kits designed by the homebrew community."
    },
    {
      q: "How does the supplier verification work?",
      a: "All suppliers go through a manual review process. We verify fabrication capabilities, sample quality, and community reputation before listings go live."
    },
    {
      q: "Can I share my own PCB designs or schematics?",
      a: "Yes. Makers can upload Gerber files, KiCad projects, and BOM sheets. You control licensing — open source or paid downloads."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Nav */}
      <nav className="border-b border-[#21262d] px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <span className="text-[#58a6ff] font-bold text-lg tracking-tight">RetroForge</span>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="bg-[#58a6ff] text-[#0d1117] text-sm font-semibold px-4 py-2 rounded-md hover:bg-[#79b8ff] transition-colors"
        >
          Get Access
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-block bg-[#161b22] border border-[#21262d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          For Homebrew Console Makers
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          The Marketplace for{" "}
          <span className="text-[#58a6ff]">Retro Console</span>{" "}
          Components
        </h1>
        <p className="text-[#8b949e] text-lg max-w-2xl mx-auto mb-8">
          Connect with verified PCB fabricators, component suppliers, and design file creators. Source everything you need to build your next homebrew console — in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] text-[#0d1117] font-bold px-8 py-3 rounded-md hover:bg-[#79b8ff] transition-colors text-base"
          >
            Start for $19/month
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] text-[#c9d1d9] font-semibold px-8 py-3 rounded-md hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            ["500+", "Components Listed"],
            ["80+", "Verified Suppliers"],
            ["2k+", "Makers Joined"]
          ].map(([num, label]) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold text-[#58a6ff]">{num}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border border-[#58a6ff] rounded-xl p-8">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Maker Plan</div>
          <div className="flex items-end gap-1 mb-4">
            <span className="text-5xl font-extrabold text-white">$19</span>
            <span className="text-[#8b949e] mb-2">/month</span>
          </div>
          <ul className="space-y-3 mb-8">
            {[
              "Full component catalog access",
              "Direct supplier messaging",
              "PCB design file downloads",
              "Order tracking dashboard",
              "Community forum access",
              "New listings alerts"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full text-center bg-[#58a6ff] text-[#0d1117] font-bold py-3 rounded-md hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#21262d] rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#21262d] py-8 text-center text-[#8b949e] text-sm">
        <span className="text-[#58a6ff] font-bold">RetroForge</span> &copy; {new Date().getFullYear()} — Marketplace for Homebrew Console Makers
      </footer>
    </main>
  );
}
