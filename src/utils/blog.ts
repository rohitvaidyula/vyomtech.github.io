export interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  author?: string
}

export interface BlogPostWithContent extends BlogPost {
  content: React.ComponentType
}

// Import all MDX files from the blog directory
const blogModules = import.meta.glob('../content/blog/*.mdx', { eager: true }) as Record<
  string,
  { default: React.ComponentType; frontmatter: Omit<BlogPost, 'slug'> }
>

// Parse and sort blog posts
export function getAllPosts(): BlogPost[] {
  const posts = Object.entries(blogModules).map(([path, module]) => {
    const slug = path.split('/').pop()?.replace('.mdx', '') || ''
    return {
      slug,
      ...module.frontmatter
    }
  })

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Get a single post by slug
export function getPostBySlug(slug: string): BlogPostWithContent | null {
  const matchingEntry = Object.entries(blogModules).find(([p]) => p.endsWith(`${slug}.mdx`))
  
  if (!matchingEntry) return null

  const [, module] = matchingEntry
  return {
    slug,
    ...module.frontmatter,
    content: module.default
  }
}

// Format date for display
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Get posts by tag
export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter((post) => 
    post.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
  )
}

// Get all unique tags
export function getAllTags(): string[] {
  const tags = getAllPosts().flatMap((post) => post.tags)
  return [...new Set(tags)]
}
