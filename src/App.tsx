import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './routes/Home'
import Services from './routes/Services'
import Products from './routes/Products'
import Solutions from './routes/Solutions'
import About from './routes/About'
import Contact from './routes/Contact'
import BlogIndex from './routes/BlogIndex'
import BlogPost from './routes/BlogPost'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Layout>
  )
}

export default App
