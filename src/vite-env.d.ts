/// <reference types="vite/client" />

declare module '*.mdx' {
  import type { ComponentType } from 'react'
  
  export const frontmatter: {
    title: string
    date: string
    description: string
    tags: string[]
    author?: string
  }
  
  const MDXComponent: ComponentType
  export default MDXComponent
}
