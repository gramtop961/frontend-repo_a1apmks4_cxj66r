export default function CTA() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to automate your growth?</h2>
              <p className="mt-4 text-white/80">Tell us about your goals and we’ll send a tailored strategy within 24 hours.</p>
              <div className="mt-6 flex items-center gap-4 text-white/70 text-sm">
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <p>Limited slots each month</p>
              </div>
            </div>

            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="col-span-1 sm:col-span-2 rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Company / Project" />
              <input className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Name" />
              <input className="rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Email" />
              <select className="col-span-1 sm:col-span-2 rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white/90 focus:outline-none focus:ring-2 focus:ring-white/30">
                <option className="bg-slate-900">Website</option>
                <option className="bg-slate-900">Custom AI Chatbot</option>
                <option className="bg-slate-900">Digital Marketing</option>
                <option className="bg-slate-900">Social Automation</option>
                <option className="bg-slate-900">AI Video Editing</option>
                <option className="bg-slate-900">All of the above</option>
              </select>
              <button type="button" className="col-span-1 sm:col-span-2 inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-lg hover:opacity-90">Get my plan</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
