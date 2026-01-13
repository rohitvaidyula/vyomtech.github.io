import { useParams, Link, Navigate } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import SEO from '../components/SEO'
import { getPostBySlug, formatDate } from '../utils/blog'

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-h1 font-heading font-bold text-primary mt-12 mb-6" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-h2 font-heading font-semibold text-primary mt-10 mb-4" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-h3 font-heading font-semibold text-primary mt-8 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-lg-body font-body text-text leading-relaxed mb-6" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-lg-body font-body" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-lg-body font-body" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-text" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-accent font-body hover:underline" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-accent pl-6 italic text-muted font-body my-6" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-surface px-2 py-1 rounded text-sm text-accent font-mono" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-primary text-white p-6 rounded-subtle overflow-x-auto mb-6 text-sm" {...props} />
  ),
  hr: () => <hr className="my-12 border-muted/20" />,
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img className="rounded-subtle my-8 w-full" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-primary" {...props} />
  )
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  
  if (!slug) {
    return <Navigate to="/blog" replace />
  }

  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <section className="section bg-bg">
        <div className="container-narrow text-center">
          <h1 className="heading-1 mb-6">Post Not Found</h1>
          <p className="text-body-muted mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </section>
    )
  }

  const Content = post.content

  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
        type="article"
        publishedTime={post.date}
        author={post.author || 'VyomTech'}
        keywords={post.tags.join(', ')}
      />

      {/* Article Header */}
      <section className="section-tight bg-bg">
        <div className="container-narrow">
          <Link 
            to="/blog" 
            className="inline-flex items-center font-body text-muted hover:text-accent mb-8 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <article>
            <header className="mb-12">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="tag text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="heading-1 mb-4">{post.title}</h1>
              <p className="text-body text-lg mb-6">{post.description}</p>
              <div className="flex items-center gap-4 text-sm font-body text-muted">
                <time>{formatDate(post.date)}</time>
                {post.author && (
                  <>
                    <span>·</span>
                    <span>{post.author}</span>
                  </>
                )}
              </div>
            </header>

            <div className="divider mb-12" />

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <MDXProvider components={mdxComponents}>
                <Content />
              </MDXProvider>
            </div>
          </article>
        </div>
      </section>

      {/* Post Footer */}
      <section className="section bg-surface">
        <div className="container-narrow">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="heading-4 mb-2">Enjoyed this article?</h3>
              <p className="text-body-muted">
                Follow our blog for more insights on AI engineering and production systems.
              </p>
            </div>
            <div className="flex gap-4">
              <Link to="/blog" className="btn-secondary">
                More Articles
              </Link>
              <Link to="/contact" className="btn-primary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
