import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Blog from './pages/Blog'

// Home is eager (LCP); inner pages are code-split.
const About = lazy(() => import('./pages/About'))
const FAQ = lazy(() => import('./pages/FAQ'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFound = lazy(() => import('./pages/NotFound'))
const TopicPage = lazy(() => import('./pages/TopicPage'))
const BlogArticle = lazy(() => import('./pages/BlogArticle'))

export default function App() {
  return (
    <Suspense fallback={<div className="route-fallback" aria-hidden="true" />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogArticle />} />
          <Route path="platform/:slug" element={<TopicPage section="platform" />} />
          <Route path="solutions/:slug" element={<TopicPage section="solutions" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
