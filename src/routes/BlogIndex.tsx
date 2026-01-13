import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { getAllPosts, formatDate } from '../utils/blog'

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <>
      <SEO
        title="AI Engineering Insights"
        description="Practical insights on AI engineering, production AI systems, LLMs, RAG, agentic workflows, and lessons from deploying real-world AI."
        keywords="AI engineering blog, production AI insights, LLM development, RAG systems, agentic workflows, AI architecture, AWS AI"
      />

      {/* Hero */}
      <section className="section bg-bg">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">
              AI Engineering Insights
            </h1>
            <p className="text-body text-xl">
              Practical notes from the field on building, deploying, and operating production AI systems—LLMs, RAG pipelines, agentic workflows, and the engineering discipline required to make them reliable over time.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-8 pb-20 bg-bg">
        <div className="container-wide">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-body-muted text-lg mb-6">
                We’re publishing practical articles on AI engineering, production systems, and real-world deployment lessons. Check back soon.
              </p>
              <Link to="/" className="btn-secondary">
                Return to Homepage
              </Link>
            </div>
          ) : (
            <div className="max-w-3xl">
              <div className="space-y-12">
                {posts.map((post) => (
                  <article key={post.slug} className="group">
                    <Link to={`/blog/${post.slug}`}>
                      <div className="flex flex-col">
                        <time className="text-sm font-body text-muted mb-2">
                          {formatDate(post.date)}
                        </time>
                        <h2 className="heading-3 group-hover:text-accent transition-colors mb-3">
                          {post.title}
                        </h2>
                        <p className="text-body mb-4">
                          {post.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span key={tag} className="tag text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                    <div className="divider mt-12" />
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section bg-surface">
        <div className="container-wide text-center">
          <h2 className="heading-2 mb-4">Get New Insights</h2>
          <p className="text-body-muted max-w-xl mx-auto mb-8">
            Occasional writing on production AI, engineering trade-offs, and lessons learned from building real systems—not marketing noise.
          </p>
          <Link to="/contact" className="btn-primary">
            Talk to VyomTech
          </Link>
        </div>
      </section>
    </>
  )
}
