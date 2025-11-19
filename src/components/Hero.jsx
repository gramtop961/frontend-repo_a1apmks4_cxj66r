import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm">Automation-first growth studio</span>
            </div>

            <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">
              Build once. Automate forever.
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-white/80 max-w-2xl">
              Weavy helps modern brands ship conversion-ready websites, custom AI chatbots, omnichannel marketing, social automation, and AI-powered video at record speed.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-lg hover:opacity-90">
                Get a free strategy call
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/15">
                Explore services
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950" />
    </section>
  )
}
