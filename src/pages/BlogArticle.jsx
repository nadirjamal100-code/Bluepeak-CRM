import { Link, useParams } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import Button from '../components/Button'
import { InnerHero } from '../components/InnerKit'
import { articles, getArticleSections } from '../data/blogArticles'

export default function BlogArticle() {
  const { slug } = useParams()
  const article = articles.find((item) => item.slug === slug)
  const related = articles.filter((item) => item.slug !== slug && item.category === article?.category).slice(0, 2)
  usePageMeta({ title: article ? `${article.title} | BluePeak Blog` : 'Article not found | BluePeak', description: article?.excerpt || 'Explore practical ideas from the BluePeak blog.', path: `/blog/${slug}` })
  if (!article) return <div className="ip-section"><div className="container"><h1>We couldn’t find that article.</h1><Button to="/blog" variant="outline">Back to all articles</Button></div></div>
  return <div className="ip blog-article">
    <InnerHero compact crumbs={[{ label: 'Home', to: '/' }, { label: 'Blog', to: '/blog' }, { label: article.category }]} title={article.title} lead={article.excerpt} />
    <section className="ip-section ip-section--white"><div className="container blog-article__layout">
      <aside className="blog-article__meta"><span>{article.category}</span><span>{article.date}</span><span>{article.read}</span><a href="#article-content">On this page ↓</a></aside>
      <article id="article-content" className="blog-article__content">
        <p className="blog-article__intro">Good customer work depends on people having the context and clarity to make the next interaction count. A few intentional habits can make that easier for the whole team.</p>
        {getArticleSections(article).map((section, index) => <section key={section.heading}><h2>{index + 1}. {section.heading}</h2><p>{section.text}</p>{index === 1 && <blockquote>“The best process is the one that helps the next person pick up the conversation with confidence.”</blockquote>}</section>)}
        <div className="blog-article__takeaway"><strong>Put it into practice</strong><p>Choose one handoff, review, or follow-up this week and make its next step easier to see. Small improvements become dependable team habits when they fit naturally into the work.</p></div>
        <div className="blog-article__back"><Link to="/blog">← Back to all articles</Link></div>
      </article>
    </div></section>
    {related.length > 0 && <section className="ip-section blog-article__related"><div className="container"><div className="ip-head"><h2 className="ip-h2">Keep exploring</h2><p className="ip-lead">More ideas in {article.category.toLowerCase()}.</p></div><div className="blog-article__related-grid">{related.map((item) => <Link key={item.slug} to={`/blog/${item.slug}`}><span>{item.read}</span><h3>{item.title}</h3><b>Read article →</b></Link>)}</div></div></section>}
  </div>
}
