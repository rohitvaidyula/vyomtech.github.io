import { useState, FormEvent } from 'react'
import SEO from '../components/SEO'

interface FormData {
  name: string
  email: string
  company: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would send to a backend or service
    // For now, we'll show a success message
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <SEO
        title="Contact VyomTech"
        description="Get in touch with VyomTech to discuss production AI consulting, LLM and RAG systems, agentic workflows, and AWS-backed AI engineering."
        keywords="contact AI consulting, AI engineering inquiry, production AI discussion, LLM consulting contact, AWS AI consulting"
      />

      <section className="section bg-bg">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column - Content */}
            <div>
              <h1 className="heading-1 mb-6">
                Let’s talk about your AI use case.
              </h1>
              <p className="text-body text-lg mb-10">
                Whether you’re evaluating an idea or trying to move an existing system into production, we’re happy to have an honest technical conversation. Most engagements start with a free AI readiness call to understand your goals, constraints, and next steps.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="heading-4 mb-3">What happens next</h3>
                  <ul className="space-y-3 text-body">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>You’ll hear back from us within one business day</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>The initial AI readiness call is free and obligation-free</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>We’ll give you an honest technical assessment—even if AI isn’t the right answer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>No sales pressure, no generic pitches—just a real discussion</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-8 border-t border-muted/20">
                  <h3 className="heading-4 mb-3">Direct contact</h3>
                  <p className="text-body mb-4">
                    Prefer to reach out directly? Email us at:
                  </p>
                  <a 
                    href="mailto:hello@vyomtech.com" 
                    className="text-accent font-body font-medium hover:underline text-lg"
                  >
                    hello@vyomtech.com
                  </a>
                </div>

                <div className="pt-8 border-t border-muted/20">
                  <h3 className="heading-4 mb-3">We typically help with</h3>
                  <div className="space-y-4 text-body text-sm">
                    <div>
                      <span className="font-body font-semibold text-primary">AI Strategy:</span> Defining a production-ready AI roadmap or evaluating feasibility
                    </div>
                    <div>
                      <span className="font-body font-semibold text-primary">Project Work:</span> Building or deploying a specific AI system into real workflows
                    </div>
                    <div>
                      <span className="font-body font-semibold text-primary">Product Access:</span> Requesting early access to one of our AI products
                    </div>
                    <div>
                      <span className="font-body font-semibold text-primary">Partnership:</span> Ongoing AI engineering support as your capabilities mature
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <div className="bg-surface p-8 lg:p-10 rounded-subtle">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="heading-3 mb-4">Thanks for reaching out!</h3>
                    <p className="text-body-muted">
                      We’ve received your message and will follow up within one business day to schedule next steps.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="heading-3 mb-6">Request a free AI readiness call</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-body font-medium text-primary mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-bg border border-muted/20 rounded-subtle font-body focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-body font-medium text-primary mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-bg border border-muted/20 rounded-subtle font-body focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                          placeholder="you@company.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-body font-medium text-primary mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-bg border border-muted/20 rounded-subtle font-body focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                          placeholder="Company or team name"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-body font-medium text-primary mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-bg border border-muted/20 rounded-subtle font-body focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                          placeholder="Briefly describe your use case, current setup, and what you’re trying to improve."
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-primary w-full py-4"
                      >
                        Send Message
                      </button>

                      <p className="text-xs font-body text-muted text-center">
                        Your information stays private. We only use it to respond to your request—never for unsolicited outreach.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-surface">
        <div className="container-wide">
          <h2 className="heading-2 mb-12 text-center">Before you reach out</h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="heading-4 mb-2">How quickly can we start?</h3>
              <p className="text-body">
                This depends on current capacity, but we typically begin new engagements within 2–4 weeks of alignment.
              </p>
            </div>

            <div>
              <h3 className="heading-4 mb-2">What's your typical project size?</h3>
              <p className="text-body">
                Engagements range from focused discovery sprints to multi-month delivery partnerships, depending on scope and goals.
              </p>
            </div>

            <div>
              <h3 className="heading-4 mb-2">Do you work with early-stage companies?</h3>
              <p className="text-body">
                Yes—when the problem is well-defined and AI is the right tool. We focus on problem clarity, not company size.
              </p>
            </div>

            <div>
              <h3 className="heading-4 mb-2">What if AI isn't the right solution?</h3>
              <p className="text-body">
                We’ll tell you. If a simpler or non-AI approach makes more sense, we’ll recommend that instead.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
