import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const services = [
  {
    id: 'consulting',
    title: 'AI Strategy & Consulting',
    description: 'Senior-led AI consulting that turns business goals into a practical, production-ready plan—architecture, data strategy, and an execution roadmap your team can act on.',
    details: [
      'AI readiness assessments and use-case prioritization',
      'System architecture design for LLM, RAG, and agent-based systems',
      'AWS service selection (SageMaker, Bedrock, Lambda, ECS, S3)',
      'Build vs. buy analysis and vendor evaluation',
      'Data strategy, security, and compliance planning',
      'Technical roadmap and delivery planning',
      'Success metrics, evaluation approach, and rollout planning'
    ],
    outcomes: 'A clear execution roadmap backed by sound architecture, realistic timelines, and the technical foundation required to deploy AI systems into production.'
  },
  {
    id: 'llm-rag',
    title: 'LLM Development & RAG Implementation',
    description: 'Production-grade LLM and RAG systems grounded in your proprietary data—built with evaluation, citations, monitoring, and cost controls for reliability at scale.',
    details: [
      'LLM application development using OpenAI, Anthropic, and AWS Bedrock',
      'RAG pipeline design with vector databases and embedding strategies',
      'Document ingestion, chunking, and semantic retrieval',
      'Prompt engineering, evaluation harnesses, and quality metrics',
      'AWS-based deployment (ECS, Lambda, S3, OpenSearch)',
      'Monitoring, logging, and cost optimization',
      'Grounded answers with citations, guardrails, and regression testing'
    ],
    outcomes: 'Production-deployed LLM and RAG systems that deliver accurate, traceable outputs—supported by observability, evaluation, and operational controls.'
  },
  {
    id: 'agents',
    title: 'Intelligent Agent Development',
    description: 'Agentic workflows that take action safely—tool use, orchestration, human-in-the-loop controls, and integrations that fit your operating model.',
    details: [
      'Single- and multi-agent architecture design',
      'Tool use and API integrations (CRM, internal systems, SaaS tools)',
      'State, memory, and context management',
      'Human-in-the-loop workflows and safety guardrails',
      'Agent orchestration frameworks and testing',
      'Secure deployment on AWS infrastructure',
      'Safety-by-design: permissions, tool constraints, and fallback behaviors'
    ],
    outcomes: 'Deployed AI agents that automate workflows, take action safely, and integrate cleanly into existing business systems.'
  },
  {
    id: 'governance',
    title: 'AI Governance & LLMOps',
    description: 'The operational discipline that keeps AI stable in the real world—versioning, evaluation pipelines, observability, security controls, and incident-ready operations.',
    details: [
      'Model and prompt versioning strategies',
      'Evaluation pipelines and regression testing',
      'Usage monitoring, logging, and cost controls',
      'Access control, secrets management, and security',
      'Bias, risk, and failure-mode analysis',
      'Incident response and rollback procedures',
      'Runbooks, alerts, and operational SLAs for AI systems'
    ],
    outcomes: 'Mature LLMOps capabilities that keep AI systems stable, auditable, and cost-effective as usage grows.'
  }
]

const approach = [
  {
    phase: 'Discovery',
    description: 'We align on business goals, technical constraints, and success metrics—ensuring we solve the right problems before writing code.'
  },
  {
    phase: 'Architecture',
    description: 'We design cloud-native AI systems with explicit trade-offs, security considerations, and scalability in mind.'
  },
  {
    phase: 'Build',
    description: 'Hands-on engineering with frequent demos, working software, and continuous validation against production requirements.'
  },
  {
    phase: 'Deploy',
    description: 'AWS-backed deployment with monitoring, documentation, and knowledge transfer so your team owns the system end-to-end.'
  }
]

export default function Services() {
  return (
    <>
      <SEO
        title="AI Engineering Services"
        description="Production-first AI engineering services. We build LLM applications, RAG pipelines, AI agents, and LLMOps on AWS—designed with evaluation, observability, and cost controls so systems keep performing."
        keywords="AI engineering services, AI consulting, AWS AI consulting, LLM development, RAG implementation, AI agents, agentic workflows, LLMOps, production AI, evaluation, observability"
      />

      {/* Hero */}
      <section className="section bg-bg">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">
              AI engineering services that ship—and keep performing.
            </h1>
            <p className="text-body text-xl">
              We design, build, and deploy production-grade AI on AWS—LLM applications, retrieval-augmented generation, and safe agentic automation. The goal is simple: reduce manual work, improve decision quality, and deliver measurable outcomes without getting stuck in proof-of-concept mode.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-8 bg-bg">
        <div className="container-wide">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                  <div>
                    <span className="text-accent font-body font-semibold text-sm tracking-wide uppercase mb-4 block">
                      Service {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="heading-2 mb-4">{service.title}</h2>
                    <p className="text-body text-lg mb-8">
                      {service.description}
                    </p>
                    <div className="bg-surface p-6 rounded-subtle">
                      <h4 className="font-heading font-semibold text-primary mb-2">Outcome</h4>
                      <p className="text-body-muted">
                        {service.outcomes}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="heading-4 mb-6">What's Included</h4>
                    <ul className="space-y-4">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-body">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {index < services.length - 1 && (
                  <div className="divider mt-20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section bg-surface">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Our Approach</h2>
            <p className="text-body-muted max-w-2xl mx-auto">
              A production-first delivery model that reduces risk, validates quality early, and leaves your team with systems they can operate confidently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((phase, index) => (
              <div key={phase.phase} className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 bg-primary text-white rounded-subtle flex items-center justify-center font-body font-semibold text-sm">
                    {index + 1}
                  </span>
                  <h3 className="heading-4">{phase.phase}</h3>
                </div>
                <p className="text-body-muted text-sm">
                  {phase.description}
                </p>
                {index < approach.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-[calc(100%+1rem)] w-8 h-0.5 bg-muted/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="section bg-bg">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-2 mb-4">Flexible Engagement Models</h2>
            <p className="text-body-muted">
              Choose the engagement model that fits your team and timeline. Every option is senior-led, AWS-capable, and focused on shipping production AI with measurable impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="heading-4 mb-3">Advisory</h3>
              <p className="text-body-muted mb-4">
                Senior guidance with execution reality. Architecture reviews, feasibility checks, evaluation plans, and technical mentorship for AI and AWS decisions.
              </p>
              <span className="text-sm font-body text-muted">Best for: Teams that need direction</span>
            </div>

            <div className="card border-accent border-2">
              <h3 className="heading-4 mb-3">Project-Based</h3>
              <p className="text-body-muted mb-4">
                Defined scope, real delivery. We build and deploy production AI systems on AWS with clear milestones, evaluation, and operational handoff.
              </p>
              <span className="text-sm font-body text-muted">Best for: Specific initiatives</span>
            </div>

            <div className="card">
              <h3 className="heading-4 mb-3">Partnership</h3>
              <p className="text-body-muted mb-4">
                An extension of your team. Ongoing builds, iterations, and reliability improvements as your AI capabilities mature and usage grows.
              </p>
              <span className="text-sm font-body text-muted">Best for: Long-term initiatives</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-primary text-white">
        <div className="container-wide text-center">
          <h2 className="text-h2 font-heading font-semibold mb-6">Let’s map your fastest path to production AI.</h2>
          <p className="text-white/70 font-body max-w-2xl mx-auto mb-10 text-lg">
            Share your use case and current stack. We’ll give an honest technical assessment, outline a practical AWS-backed architecture, and recommend what to build now vs. later.
          </p>
          <Link to="/contact" className="btn bg-accent text-white font-body font-semibold hover:bg-accent/90 text-lg px-10 py-4 rounded-subtle transition-all">
            Get a Free AI Readiness Call
          </Link>
        </div>
      </section>
    </>
  )
}
