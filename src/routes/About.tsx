import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const values = [
  {
    title: 'Ownership',
    description: 'We own the outcome, not just the task. If a system doesn\'t perform in production, we stay until it does. No handoffs, no excuses.'
  },
  {
    title: 'Clarity',
    description: 'We tell you what works, what doesn\'t, and what we don\'t know yet. Clear communication prevents expensive mistakes.'
  },
  {
    title: 'Craft',
    description: 'Production AI systems demand rigor. We write clean code, build observable systems, and engineer for reliability—not just accuracy.'
  },
  {
    title: 'Impact',
    description: 'We measure success by production metrics: latency, cost, user adoption, business outcomes. Not by demos or documentation.'
  }
]

const beliefs = [
  {
    title: 'AI must ship to create value.',
    description: 'A model in a notebook isn\'t AI—it\'s a hypothesis. We focus on building systems that run reliably in production, not prototypes that impress in meetings.'
  },
  {
    title: 'Simpler systems win.',
    description: 'The most effective AI implementations are often the least complex. We default to the simplest architecture that solves the problem, then optimize from there.'
  },
  {
    title: 'Human oversight is non-negotiable.',
    description: 'AI systems that operate without human checkpoints create liability and erode trust. We design for human-in-the-loop by default.'
  },
  {
    title: 'Clients should see everything.',
    description: 'We work in shared code repositories with full visibility. You\'ll understand every decision and own every line of code we write.'
  }
]

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="VyomTech is a founder-led AI consulting and engineering studio. We help companies ship production AI systems—LLMs, agents, and automation—with hands-on senior expertise."
        keywords="AI consulting, AI engineering, production AI systems, LLM development, founder-led AI studio, practical AI implementation"
      />

      {/* Hero */}
      <section className="section bg-bg">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">
              AI consulting that ships to production.
            </h1>
            <p className="text-body text-xl">
              VyomTech is a founder-led AI consulting and engineering studio. We help 
              companies move from AI experimentation to production systems that deliver 
              measurable business value.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-tight bg-surface">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <span className="text-accent font-body font-semibold text-sm tracking-wide uppercase mb-4 block">
                Our Story
              </span>
              <h2 className="heading-2 mb-6">Engineering execution, not slide decks</h2>
            </div>
            <div className="space-y-6 text-body">
              <p>
                We started VyomTech because we saw the same pattern too many times: 
                companies investing in AI, hiring consultants, building impressive 
                prototypes—and never shipping anything to production.
              </p>
              <p>
                The problem isn't the technology. LLMs work. RAG systems work. Agents 
                work. The problem is execution. Most AI initiatives stall because no 
                one owns the hard engineering work of making systems production-ready.
              </p>
              <p>
                Traditional consultants deliver strategy and recommendations. We deliver 
                working systems. Our engagements end with code in production, documentation 
                your team can maintain, and measurable outcomes you can point to.
              </p>
              <p>
                "Vyom" means "sky" in Sanskrit—representing expansive possibility. But 
                possibility only matters when it's grounded in practical AI implementation. 
                We're building the AI engineering studio we wished existed: technically 
                deep, founder-accountable, and obsessed with shipping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-bg">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">How We Operate</h2>
            <p className="text-body-muted max-w-2xl mx-auto">
              These principles come from years of shipping AI to production. They guide 
              every engagement and every hire.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title}>
                <h3 className="heading-4 mb-3">{value.title}</h3>
                <p className="text-body-muted text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="section bg-primary text-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-heading font-semibold mb-4">What Guides Our Work</h2>
            <p className="text-white/70 font-body max-w-2xl mx-auto">
              Principles we've learned from building production AI systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {beliefs.map((belief) => (
              <div key={belief.title} className="border border-white/10 p-8 rounded-subtle">
                <h3 className="text-xl font-heading font-semibold mb-3">{belief.title}</h3>
                <p className="text-white/70 font-body">
                  {belief.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section bg-bg">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 mb-6 text-center">How We Engage</h2>
            
            <div className="space-y-8 text-body">
              <div>
                <h3 className="heading-4 mb-3">Senior engineers, every engagement</h3>
                <p>
                  We don't staff projects with junior resources. Every VyomTech engagement 
                  is led by practitioners who have built and deployed production AI systems. 
                  You get expertise from day one, not a learning curve on your timeline.
                </p>
              </div>

              <div>
                <h3 className="heading-4 mb-3">Selective partnerships</h3>
                <p>
                  We take on work where we can create genuine impact. That means real 
                  problems, committed teams, and realistic timelines. We'd rather do 
                  fewer projects exceptionally than many projects adequately.
                </p>
              </div>

              <div>
                <h3 className="heading-4 mb-3">Complete transparency</h3>
                <p>
                  We work in your repositories, attend your standups, and document every 
                  technical decision. There are no proprietary methods or black-box 
                  approaches. You see exactly how we work and why.
                </p>
              </div>

              <div>
                <h3 className="heading-4 mb-3">Built for handoff</h3>
                <p>
                  Our goal is your team's independence, not ongoing dependency. Every 
                  engagement includes thorough documentation, knowledge transfer sessions, 
                  and systems your engineers can maintain and extend.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-surface">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Leadership</h2>
            <p className="text-body-muted max-w-2xl mx-auto">
              VyomTech is founder-led. You work directly with senior practitioners 
              who build production AI systems.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-bg p-8 rounded-subtle border border-muted/20 text-center">
              <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-heading font-bold text-white">RV</span>
              </div>
              <h3 className="heading-4 mb-1">Rohit Vaidyula</h3>
              <p className="text-accent font-body font-medium mb-4">Founder & Principal Engineer</p>
              <p className="text-body-muted text-sm">
                AI engineer with deep experience shipping LLM systems, RAG pipelines, and 
                intelligent automation to production. Previously delivered AI solutions 
                for Fortune 500 enterprises. Focused on practical AI implementation that 
                creates measurable business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-bg">
        <div className="container-wide text-center">
          <h2 className="heading-2 mb-6">Let's discuss your AI initiative</h2>
          <p className="text-body-muted max-w-2xl mx-auto mb-10">
            Whether you're evaluating AI feasibility, stuck in proof-of-concept, or 
            ready to scale production systems—we're happy to share perspective. No 
            pitch, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Start a Conversation
            </Link>
            <Link to="/blog" className="btn-secondary text-lg px-8 py-4">
              Read Our Insights
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
