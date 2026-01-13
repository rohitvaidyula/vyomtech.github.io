import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  author?: string
}

const defaults = {
  siteName: 'VyomTech',
  title: 'VyomTech — AI Consulting & Product Studio',
  description: 'VyomTech is a premium AI consulting and product studio specializing in production AI systems, LLM development, RAG implementation, and intelligent agents for enterprise.',
  image: '/og-image.svg',
  url: 'https://vyomtech.com'
}

export default function SEO({
  title,
  description = defaults.description,
  keywords = 'AI consulting, AI engineering, production AI systems, LLM development, RAG implementation, AI agents, agentic workflows, AI governance, LLMOps',
  image = defaults.image,
  url = defaults.url,
  type = 'website',
  publishedTime,
  author = 'VyomTech'
}: SEOProps) {
  const fullTitle = title ? `${title} — ${defaults.siteName}` : defaults.title

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={defaults.siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Article specific */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && (
        <meta property="article:author" content={author} />
      )}

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  )
}
