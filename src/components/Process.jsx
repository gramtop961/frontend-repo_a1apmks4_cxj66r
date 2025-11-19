import { Sparkles, Workflow, Zap } from 'lucide-react'

const steps = [
  { icon: Sparkles, title: 'Discover', desc: 'We audit your funnel and define automation wins.' },
  { icon: Workflow, title: 'Build', desc: 'Design, integrations, and AI agents implemented fast.' },
  { icon: Zap, title: 'Scale', desc: 'We optimize and automate to scale what works.' },
]

export default function Process() {
  return (
    <section id="process" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">How it works</h2>
          <p className="mt-3 text-white/70">Simple, fast, and measurable.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <div key={title} className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6">
              <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <Icon className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <p className="text-sm text-white/60">Step {idx + 1}</p>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 text-white/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
