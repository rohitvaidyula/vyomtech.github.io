import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const products = [
  {
    id: 'veance',
    name: 'Véance',
    tagline: 'Fashion Shows, Designers & Scan-to-Buy Commerce',
    description: 'Véance is a fashion show and designer commerce app built for live events. Users discover upcoming shows, browse featured designers, and scan dresses on the spot to view details and purchase instantly. The app also supports a shop experience to browse and buy looks beyond the runway. Originally built for international model Meenakshi Ravi, Véance premiered at events in LA and Paris and at Miss Universe World in the Philippines in 2025.',
    features: [
      'Upcoming fashion shows and event listings',
      'Designer profiles and featured collections',
      'Scan-to-buy dress discovery during live shows',
      'Instant product pages with pricing and checkout links',
      'Shop page to browse looks outside of events',
      'Mobile-first experience designed for runway environments'
    ],
    technology: 'Mobile app development, scan-to-product lookup (computer vision), product catalog and inventory mapping, payments/checkout links, event and designer management, analytics-ready tracking',
    status: 'In Development',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 'rfp-agent',
    name: 'RFP Generator Agent',
    tagline: 'Proposal & RFP Response Automation',
    description: 'An AI agent that accelerates RFP and proposal response—extracting requirements, assembling relevant context from your approved knowledge base and past responses, and generating structured drafts for human review. Built to improve consistency, reduce cycle time, and scale quality across teams.',
    features: [
      'Automatic requirement extraction and response outlining',
      'Knowledge base retrieval across docs and prior answers',
      'Section-by-section draft generation with consistent tone',
      'Compliance checks against RFP requirements',
      'Reusable content library and approved snippets',
      'Collaboration-friendly exports and iteration support'
    ],
    technology: 'RAG architecture, document processing, evaluation workflows, versioning, secure deployment on AWS',
    status: 'Available for Early Access',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    id: 'lead-agent',
    name: 'Lead & CRM Analysis Agent',
    tagline: 'Lead Scoring, Enrichment & Routing',
    description: 'An AI agent that improves sales execution inside your CRM. It scores and enriches inbound leads, recommends routing and next steps, and flags risk signals—so teams follow up faster with better context and fewer manual steps.',
    features: [
      'Lead scoring with explainable criteria',
      'Contact enrichment and firmographic context',
      'Routing and next-best-action recommendations',
      'Pipeline health insights and risk signals',
      'Follow-up timing suggestions based on activity',
      'Integration-ready for major CRM platforms'
    ],
    technology: 'CRM integrations, scoring and enrichment logic, agentic workflows, automation pipelines, AWS-backed infrastructure',
    status: 'In Development',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
]

export default function Products() {
  return (
    <>
      <SEO
        title="AI Products"
        description="VyomTech builds focused AI products that remove workflow friction: Véance (fashion shows, designers, and scan-to-buy commerce), an RFP Generator Agent for proposal automation, and a Lead & CRM Analysis Agent for scoring, enrichment, and routing. Production-minded systems built to ship and scale."
        keywords="AI products, proposal automation, RFP response automation, RFP generator, AI proposal writer, CRM lead scoring, lead enrichment, sales automation, AI agents, agentic workflows, workflow automation, fashion show app, designer marketplace app, scan to buy fashion, runway scan to purchase"
      />

      {/* Hero */}
      <section className="section bg-bg">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">
              Focused products that remove workflow friction.
            </h1>
            <p className="text-body text-xl">
              Alongside our consulting work, we build focused products designed for fast adoption—proposal response, CRM execution, and live event commerce. Each product is engineered with production reliability, security, and measurable business impact in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-8 bg-bg">
        <div className="container-wide">
          <div className="space-y-24">
            {products.map((product, index) => (
              <div
                key={product.id}
                id={product.id}
                className="scroll-mt-24"
              >
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-surface rounded-subtle flex items-center justify-center text-accent">
                        {product.icon}
                      </div>
                      <div>
                        <h2 className="heading-2">{product.name}</h2>
                        <p className="text-accent font-body font-medium">{product.tagline}</p>
                      </div>
                    </div>
                    
                    <p className="text-body text-lg mb-6">
                      {product.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-8">
                      <span className={`tag ${product.status === 'Available for Early Access' ? 'bg-accent/10 text-accent' : ''}`}>
                        {product.status}
                      </span>
                    </div>

                    <div className="bg-surface p-5 rounded-subtle">
                      <h4 className="font-body font-semibold text-primary text-sm uppercase tracking-wide mb-2">Technology</h4>
                      <p className="text-body-muted text-sm">{product.technology}</p>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-bg border border-muted/20 p-8 rounded-subtle">
                      <h3 className="heading-4 mb-6">Key Features</h3>
                      <ul className="space-y-4">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                            </svg>
                            <span className="text-body">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {index < products.length - 1 && (
                  <div className="divider mt-24" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Philosophy */}
      <section className="section bg-surface">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Built for Adoption</h2>
            <p className="text-body text-lg mb-8">
              Our products follow the same standards we bring to client work: production-first engineering, clear user value, and a disciplined approach to reliability, security, and evaluation.
            </p>
            <p className="text-body text-lg">
              We build products to remove bottlenecks—not to create novelty. Each product targets a specific workflow, ships in an adoption-friendly shape, and improves with real usage and feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Early Access CTA */}
      <section className="section bg-primary text-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-h2 font-heading font-semibold mb-4">Interested in early access?</h2>
              <p className="text-white/70 font-body text-lg">
                We selectively onboard early users with real workflow pain who want to shape the product with feedback. If one of these tools fits your process, we’ll map a quick pilot, define success metrics, and move toward production-ready adoption.
              </p>
            </div>
            <div className="lg:text-right">
              <Link to="/contact" className="btn bg-accent text-white font-body font-semibold hover:bg-accent/90 text-lg px-10 py-4 rounded-subtle transition-all">
                Request Access
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
