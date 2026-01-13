import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const solutions = [
  {
    category: 'Knowledge & Search',
    title: 'Enterprise Knowledge Systems',
    description: 'Enable teams to ask questions and get accurate, source-backed answers across documents, tickets, and internal systems—without manual searching or fragmented knowledge.',
    useCases: [
      {
        title: 'Internal Knowledge Base',
        description: 'Let employees query policies, SOPs, and internal documentation in natural language with citations and access controls—reducing onboarding time and repeat questions.'
      },
      {
        title: 'Customer Support Intelligence',
        description: 'Support teams retrieve accurate answers across tickets, runbooks, and product docs—improving first-response time and resolution quality.'
      },
      {
        title: 'Technical Documentation Search',
        description: 'Make engineering knowledge searchable across wikis, architecture notes, and repositories—so teams unblock faster and avoid duplicated work.'
      }
    ],
    keywords: ['RAG solutions', 'enterprise search', 'knowledge assistant', 'semantic retrieval']
  },
  {
    category: 'Sales & Revenue',
    title: 'Sales Intelligence & Automation',
    description: 'Improve revenue execution with AI that prioritizes the right leads, accelerates responses, and surfaces risk—embedded directly into sales and CRM workflows.',
    useCases: [
      {
        title: 'Intelligent Lead Scoring',
        description: 'Score and route leads using fit, intent, and engagement signals—so sales teams focus on opportunities most likely to convert.'
      },
      {
        title: 'Proposal Automation',
        description: 'Generate RFP and proposal drafts using approved knowledge, past responses, and reusable content—dramatically reducing response time.'
      },
      {
        title: 'Pipeline Analysis',
        description: 'Identify stalled deals, missing follow-ups, and forecast risk by analyzing CRM activity and notes—supporting better coaching and execution.'
      }
    ],
    keywords: ['AI for sales', 'CRM automation', 'proposal automation', 'pipeline intelligence']
  },
  {
    category: 'Operations',
    title: 'Workflow Automation',
    description: 'Remove manual work and reduce errors with automation that can read, reason, and act—while keeping humans in control when judgment matters.',
    useCases: [
      {
        title: 'Document Processing',
        description: 'Extract and normalize data from invoices, contracts, forms, and emails—then route it to downstream systems with validation and audit trails.'
      },
      {
        title: 'Approval Workflows',
        description: 'Automate routine approvals with policy checks, contextual summaries, and exception handling—escalating edge cases to the right owner.'
      },
      {
        title: 'Data Entry & Reconciliation',
        description: 'Sync and reconcile data across tools by handling messy inputs, enforcing validation rules, and flagging anomalies for review.'
      }
    ],
    keywords: ['operations automation', 'document automation', 'agentic workflows', 'process efficiency']
  },
  {
    category: 'Customer Experience',
    title: 'Intelligent Customer Interactions',
    description: 'Deliver faster, more consistent customer interactions with AI that personalizes responsibly, resolves issues efficiently, and escalates complexity with full context.',
    useCases: [
      {
        title: 'Conversational AI',
        description: 'Deploy chat and voice assistants that answer accurately, integrate with internal systems, and hand off to humans with full conversation context.'
      },
      {
        title: 'Personalization Engines',
        description: 'Deliver relevant recommendations and next-best actions using behavioral signals—while respecting privacy, governance, and business rules.'
      },
      {
        title: 'Proactive Engagement',
        description: 'Detect early risk and opportunity signals and trigger timely outreach—reducing churn and improving satisfaction.'
      }
    ],
    keywords: ['conversational AI', 'customer support AI', 'personalization', 'customer experience']
  }
]

const industries = [
  'Professional Services',
  'Technology',
  'Financial Services',
  'Healthcare',
  'Manufacturing',
  'Retail & E-commerce'
]

export default function Solutions() {
  return (
    <>
      <SEO
        title="Production AI Solutions"
        description="Production-ready AI solutions for knowledge search, sales automation, operations, and customer experience. Built with LLMs, RAG, and agentic workflows that perform reliably in real environments."
        keywords="AI solutions, production AI, enterprise AI solutions, AI for sales, AI for operations, knowledge base AI, RAG solutions, AI agents, workflow automation, conversational AI"
      />

      {/* Hero */}
      <section className="section bg-bg">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">
              Production AI solutions for real business problems.
            </h1>
            <p className="text-body text-xl">
              These are proven solution patterns where AI delivers measurable impact—faster access to information, higher sales efficiency, reduced operational load, and more consistent customer experiences. We focus on solutions that can be deployed, measured, and sustained in production.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-8 bg-bg">
        <div className="container-wide">
          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <div key={solution.category}>
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                  {/* Header */}
                  <div className="lg:col-span-4">
                    <span className="text-accent font-body font-semibold text-sm tracking-wide uppercase mb-3 block">
                      {solution.category}
                    </span>
                    <h2 className="heading-2 mb-4">{solution.title}</h2>
                    <p className="text-body">
                      {solution.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {solution.keywords.map((keyword) => (
                        <span key={keyword} className="tag text-xs">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div className="lg:col-span-8">
                    <div className="grid md:grid-cols-3 gap-6">
                      {solution.useCases.map((useCase) => (
                        <div key={useCase.title} className="card">
                          <h3 className="heading-4 mb-3">{useCase.title}</h3>
                          <p className="text-body-muted text-sm">
                            {useCase.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {index < solutions.length - 1 && (
                  <div className="divider mt-24" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section bg-surface">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Industry Experience</h2>
            <p className="text-body-muted max-w-2xl mx-auto">
              Our solution patterns apply across industries. We adapt to your regulatory, security, and data constraints so the solution fits how your organization actually operates.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <span
                key={industry}
                className="px-6 py-3 bg-bg border border-muted/20 rounded-subtle text-text font-body font-medium"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-bg">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-2 mb-6 text-center">How We Approach Solutions</h2>
            <p className="text-body-muted text-center mb-12">
              A production-first approach designed to validate feasibility early, reduce risk, and deliver AI systems that perform reliably over time.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-subtle flex items-center justify-center font-body font-semibold">
                  1
                </div>
                <div>
                  <h3 className="heading-4 mb-2">Problem Definition</h3>
                  <p className="text-body">
                    We define the problem precisely, choose success metrics, and map constraints (data, security, integrations). Clear inputs prevent expensive rework later.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-subtle flex items-center justify-center font-body font-semibold">
                  2
                </div>
                <div>
                  <h3 className="heading-4 mb-2">Feasibility Assessment</h3>
                  <p className="text-body">
                    We validate data availability, model fit, and operational requirements. If AI isn’t the right approach, we’ll tell you—and propose alternatives.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-subtle flex items-center justify-center font-body font-semibold">
                  3
                </div>
                <div>
                  <h3 className="heading-4 mb-2">Minimum Viable Solution</h3>
                  <p className="text-body">
                    We ship the smallest version that delivers value in the real workflow, then iterate with evaluation and user feedback—fast learning, low risk.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-subtle flex items-center justify-center font-body font-semibold">
                  4
                </div>
                <div>
                  <h3 className="heading-4 mb-2">Scale & Optimize</h3>
                  <p className="text-body">
                    We harden for reliability: monitoring, cost controls, security, and governance. Then we optimize performance and ensure your team can run it long-term.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary text-white">
        <div className="container-wide text-center">
          <h2 className="text-h2 font-heading font-semibold mb-6">Ready to apply AI to a real workflow?</h2>
          <p className="text-white/70 font-body max-w-2xl mx-auto mb-10 text-lg">
            Tell us what you’re trying to improve—knowledge access, sales execution, operational efficiency, or customer experience. We’ll assess feasibility and outline a practical path to production.
          </p>
          <Link to="/contact" className="btn bg-accent text-white font-body font-semibold hover:bg-accent/90 text-lg px-10 py-4 rounded-subtle transition-all">
            Discuss Your Use Case
          </Link>
        </div>
      </section>
    </>
  )
}
