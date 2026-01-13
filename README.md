# VyomTech Website

Production-ready website for VyomTech — a premium AI consulting and product studio.

Built with React, Vite, Tailwind CSS, and MDX for the blog system.

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
├── public/                 # Static assets
│   └── favicon.svg
└── src/
    ├── main.tsx            # React entry point
    ├── App.tsx             # Main app with routing
    ├── vite-env.d.ts       # TypeScript declarations
    ├── components/         # Reusable components
    │   ├── Header.tsx
    │   ├── Footer.tsx
    │   ├── Layout.tsx
    │   └── SEO.tsx
    ├── routes/             # Page components
    │   ├── Home.tsx
    │   ├── Services.tsx
    │   ├── Products.tsx
    │   ├── Solutions.tsx
    │   ├── About.tsx
    │   ├── Contact.tsx
    │   ├── BlogIndex.tsx
    │   └── BlogPost.tsx
    ├── content/
    │   └── blog/           # Blog posts (MDX files)
    │       └── *.mdx
    ├── styles/
    │   └── index.css       # Global styles and Tailwind
    └── utils/
        └── blog.ts         # Blog utilities
```

## Publishing a New Blog Post

1. Create a new `.mdx` file in `src/content/blog/`
2. Name the file using the URL slug (e.g., `my-new-post.mdx` → `/blog/my-new-post`)
3. Add frontmatter at the top of the file:

```mdx
export const frontmatter = {
  title: "Your Post Title",
  date: "2026-01-15",
  description: "A brief description of your post for SEO and previews.",
  tags: ["AI", "Production Systems"],
  author: "Author Name"  // optional
}

Your post content goes here in Markdown format.

## You Can Use Headings

And **bold text**, *italics*, [links](https://example.com), and more.

- Bullet points work
- Just like this

1. Numbered lists too
2. Of course

> Blockquotes are supported

\`\`\`javascript
// Code blocks with syntax highlighting
const example = "code";
\`\`\`
```

4. The post will automatically appear in the blog index

### Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Post title |
| `date` | Yes | Publication date (YYYY-MM-DD format) |
| `description` | Yes | Short description for SEO and previews |
| `tags` | Yes | Array of tags for categorization |
| `author` | No | Author name (defaults to "VyomTech") |

## Deploy to GitHub Pages

Deployment is automated via GitHub Actions on every push to `main`.

### Setup

1. Go to your repo **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main` — the workflow will build and deploy automatically

### Custom Domain (Optional)

1. Add a `CNAME` file in `public/` containing your domain (e.g., `vyomtech.com`)
2. Configure DNS with your registrar:
   - **Apex domain:** A records pointing to GitHub's IPs
   - **Subdomain:** CNAME record to `<username>.github.io`

### SPA Routing Note

This site uses client-side routing (React Router). A `404.html` redirect workaround ensures deep links work on GitHub Pages. No action needed — it's already configured

## Development Notes

### Adding New Pages

1. Create component in `src/routes/YourPage.tsx`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/Header.tsx` (if needed)

### SEO

Use the `SEO` component on every page:

```tsx
import SEO from '../components/SEO'

export default function YourPage() {
  return (
    <>
      <SEO
        title="Page Title"
        description="Page description for search engines"
        keywords="relevant, keywords, here"
      />
      {/* Page content */}
    </>
  )
}
```

### Styling

- Use Tailwind utility classes
- Custom components defined in `src/styles/index.css`
- Color palette configured in `tailwind.config.ts`:
  - Navy: `#0B1426`
  - Charcoal: `#2B2F36`
  - Primary text: `#0F1115`
  - Accent: `#9E4B2F`
  - Surface: `#F4F1EC`

### Typography

- Font: Sora (loaded from Google Fonts)
- Custom font sizes configured for headings
- Use `.heading-1`, `.heading-2`, etc. classes

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Router** - Client-side routing
- **MDX** - Blog content
- **React Helmet Async** - SEO meta tags

## License

Proprietary - VyomTech
