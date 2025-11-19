import { Globe2, MessageSquare, Rocket, Share2, Video } from 'lucide-react'

const services = [
  {
    icon: Globe2,
    title: 'Websites that convert',
    desc: 'High-velocity design and development built for SEO, speed, and sales.'
  },
  {
    icon: MessageSquare,
    title: 'Custom AI chatbots',
    desc: 'Train chatbots on your content to handle lead gen, support, and sales 24/7.'
  },
  {
    icon: Rocket,
    title: 'Digital marketing',
    desc: 'Lifecycle email, funnels, and automations that turn traffic into revenue.'
  },
  {
    icon: Share2,
    title: 'Social media automation',
    desc: 'Plan, auto-post, and repurpose content across platforms with AI.'
  },
  {
    icon: Video,
    title: 'AI video editing',
    desc: 'Cut, repurpose, caption, and brand video at scale with AI tooling.'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we do</h2>
          <p className="mt-3 text-white/70">Full-stack growth services powered by automation and AI.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-6 hover:border-white/20 transition-colors">
              <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}
