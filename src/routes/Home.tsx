import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const deliveryPrinciples = [
  {
    title: 'Production-First Engineering',
    description: 'We design for deployment from day one—observability, security, evaluation, and scalability are built in, not bolted on.'
  },
  {
    title: 'Outcome Over Output',
    description: 'We align on success metrics early and deliver against them—time saved, revenue impact, quality improvements, and risk reduction.'
  },
  {
    title: 'Ownership & Transparency',
    description: 'You own the code, data flows, and documentation. We work in the open so your team can maintain and evolve what we ship.'
  }
]

const capabilities = [
  {
    title: 'AI Strategy & Consulting',
    description: 'Turn AI goals into a practical delivery plan—use cases, architecture, data strategy, build vs. buy decisions, and a production roadmap.',
    href: '/services'
  },
  {
    title: 'LLM & RAG Systems',
    description: 'Design and ship LLM applications with retrieval-augmented generation, evaluation harnesses, guardrails, and monitoring that scale.',
    href: '/services'
  },
  {
    title: 'Intelligent Agents',
    description: 'Build agentic workflows that take action—tool use, orchestration, human-in-the-loop controls, and safe integrations with your stack.',
    href: '/services'
  },
  {
    title: 'Workflow Automation',
    description: 'Automate lead management, CRM updates, proposals, and operations with AI-driven workflows that reduce manual work and errors.',
    href: '/solutions'
  }
]

const blogHighlights = [
  {
    title: 'Production AI: From Prototype to Reliable System',
    excerpt: 'A practical playbook for deploying LLM systems: evaluation, monitoring, guardrails, and cost controls that prevent “demo-to-production” failure.',
    href: '/blog'
  },
  {
    title: 'RAG That Actually Works: Retrieval, Grounding, and Quality',
    excerpt: 'Design RAG pipelines that stay accurate at scale: chunking, embeddings, reranking, citations, and failure-mode testing for grounded answers.',
    href: '/blog'
  },
  {
    title: 'Agentic Workflows: Safe Automation with Humans in Control',
    excerpt: 'Where agents create real value—and where they fail. Learn tool use, guardrails, and human-in-the-loop patterns for safe automation.',
    href: '/blog'
  }
]

export default function Home() {
  return (
    <>
      <SEO
        description="VyomTech is a founder-led AI consulting and engineering studio. We design and build production AI systems—LLM apps, RAG pipelines, AI agents, and workflow automation that deliver measurable business outcomes."
        keywords="AI consulting, AI engineering, production AI systems, LLM development, RAG pipelines, retrieval augmented generation, AI agents, agentic workflows, LLMOps, workflow automation, enterprise AI"
      />

      {/* Hero Section */}
      <section className="section bg-bg">
        <div className="container-wide">
          <div className="max-w-4xl">
            <h1 className="heading-display mb-8 animate-fade-in">
              Production AI systems that
              <span className="text-accent"> ship—and keep performing.</span>
            </h1>
            <p className="text-body text-xl md:text-2xl max-w-3xl mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              VyomTech is a founder-led AI consulting and engineering studio. We design and deploy production-grade LLM, RAG, and agentic systems on AWS—so your team can automate real workflows, reduce operational load, and see measurable impact fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Get a Free AI Readiness Call
              </Link>
              <Link to="/services" className="btn-secondary text-lg px-8 py-4">
                See Services & Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Positioning Statement */}
      <section className="section-tight bg-surface">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-1">
              <h2 className="heading-3">Why VyomTech</h2>
            </div>
            <div className="lg:col-span-2">
              <p className="text-body text-lg leading-relaxed">
                Most AI initiatives stall after a promising demo. The model looks impressive, but accuracy drifts, costs spike, edge cases pile up, and no one owns reliability. What teams need isn’t another prototype—it’s a production system with evaluation, monitoring, and clear governance.
              </p>
              <p className="text-body text-lg leading-relaxed mt-6">
                VyomTech helps teams ship AI that performs in the real world: LLM applications, retrieval-augmented generation, and safe agentic automation integrated into your stack. We work hands-on, keep scope practical, and build systems your team can operate and evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="section bg-bg">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">What We Build</h2>
            <p className="text-body-muted max-w-2xl mx-auto">
              From strategy to production, we build reliable AI systems—LLM apps, RAG pipelines, and agents—designed for security, observability, and measurable business outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((capability) => (
              <Link
                key={capability.title}
                to={capability.href}
                className="card-hover group"
              >
                <h3 className="heading-4 mb-3 group-hover:text-accent transition-colors">
                  {capability.title}
                </h3>
                <p className="text-body-muted">
                  {capability.description}
                </p>
                <span className="inline-flex items-center mt-4 text-accent font-body font-medium group-hover:translate-x-1 transition-transform">
                  See details
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Principles */}
      <section className="section bg-primary text-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-heading font-semibold mb-4">How We Deliver</h2>
            <p className="text-white/70 font-body max-w-2xl mx-auto text-lg">
              A production-first delivery model that reduces risk, validates quality early, and delivers AI your team can run—complete with evaluation, observability, and cost controls.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {deliveryPrinciples.map((principle, index) => (
              <div key={principle.title} className="relative">
                <span className="text-6xl font-heading font-bold text-white/10 absolute -top-4 -left-2">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="relative pt-8">
                  <h3 className="text-xl font-heading font-semibold mb-3">{principle.title}</h3>
                  <p className="text-white/70 font-body leading-relaxed">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="section bg-bg">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
            <div>
              <h2 className="heading-2 mb-4">Latest Insights</h2>
              <p className="text-body-muted max-w-xl">
                Short, practical notes on shipping production AI—LLMs, RAG, agentic workflows, and the engineering discipline that keeps systems reliable over time.
              </p>
            </div>
            <Link to="/blog" className="btn-secondary mt-6 lg:mt-0">
              View All Articles
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogHighlights.map((post) => (
              <Link key={post.title} to={post.href} className="card-hover group">
                <h3 className="heading-4 mb-2 group-hover:text-accent transition-colors">{post.title}</h3>
                <p className="text-body-muted text-sm leading-relaxed">{post.excerpt}</p>
                <span className="inline-flex items-center mt-4 text-accent font-body font-medium group-hover:translate-x-1 transition-transform">
                  Read
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-surface">
        <div className="container-wide text-center">
          <h2 className="heading-2 mb-6">Ready to ship production AI?</h2>
          <p className="text-body-muted max-w-2xl mx-auto mb-10">
            Share your use case and current stack. We’ll map the fastest path to production, outline a realistic architecture on AWS, and recommend what to build now vs. later—so you can invest in the right system from day one.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-10 py-4">
            Talk to VyomTech
          </Link>
        </div>
      </section>
    </>
  )
}
