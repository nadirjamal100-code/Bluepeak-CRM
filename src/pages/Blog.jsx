import { useMemo, useState } from 'react'
import usePageMeta from '../hooks/usePageMeta'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { InnerHero } from '../components/InnerKit'

import { articles } from '../data/blogArticles'

const ALL = 'All topics'
const categories = [ALL, ...new Set(articles.map((article) => article.category))]

/* Article cards are unchanged from the original design, including the hover animation. */
function ArticleVisual({ kind }) {
  return (
    <div className={`blog-visual blog-visual--${kind}`} aria-hidden="true">
      <div className="blog-visual__orb blog-visual__orb--one" />
      <div className="blog-visual__orb blog-visual__orb--two" />
      <div className="blog-visual__window">
        <span className="blog-visual__dots"><i /><i /><i /></span>
        <span className="blog-visual__line blog-visual__line--wide" />
        <span className="blog-visual__line" />
        <span className="blog-visual__line blog-visual__line--short" />
        <span className="blog-visual__pill" />
      </div>
    </div>
  )
}

function ArticleCard({ article }) {
  return (
    <article className="blog-card">
      <ArticleVisual kind={article.visual} />
      <div className="blog-card__body">
        <div className="blog-card__category">{article.category}</div>
        <h2>{article.title}</h2>
        <p>{article.excerpt}</p>
        <span className="blog-card__learn">Read article <svg className="blog-card__arrow" aria-hidden="true" viewBox="0 0 20 20" focusable="false"><path d="M4 10h11M10 5l5 5-5 5" /></svg></span>
        <div className="blog-card__bottom">
          <span>Article</span>
        </div>
      </div>
    </article>
  )
}

export default function Blog() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(ALL)
  const [visibleCount, setVisibleCount] = useState(6)
  usePageMeta({
    title: 'BluePeak Blog | Ideas for better customer relationships',
    description: 'Practical ideas for customer relationships, sales operations, and more focused team follow-up.',
    path: '/blog',
  })

  const filteredArticles = useMemo(() => {
    const search = query.trim().toLowerCase()
    return articles.filter((article) => {
      const matchesCategory = category === ALL || article.category === category
      const matchesSearch = !search || `${article.title} ${article.excerpt} ${article.category}`.toLowerCase().includes(search)
      return matchesCategory && matchesSearch
    })
  }, [category, query])
  const visibleArticles = filteredArticles.slice(0, visibleCount)

  const chooseCategory = (next) => {
    setCategory(next)
    setVisibleCount(6)
    document.getElementById('latest-articles')?.scrollIntoView()
  }
  const clearFilters = () => {
    setQuery('')
    setCategory(ALL)
    setVisibleCount(6)
  }

  return (
    <div className="ip">
      <InnerHero
        compact
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Blog' }]}
        title="Ideas for stronger customer relationships."
        lead="Thoughtful perspectives on customer context, sales workflows, and the small habits that help teams do their best work."
        aside={
          <div className="ip-glass">
            <h2 className="ip-glass__title">Browse by topic</h2>
            <ul className="ip-cats">
              {categories.map((item) => {
                const count = item === ALL ? articles.length : articles.filter((article) => article.category === item).length
                return (
                  <li key={item}>
                    <button type="button" className="ip-cat" aria-pressed={category === item} onClick={() => chooseCategory(item)}>
                      <span>{item}</span>
                      <span className="ip-cat__count">{count}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        }
      />

      <section id="latest-articles" className="ip-section ip-blog" aria-labelledby="blog-listing-title">
        <div className="container">
          <div className="ip-head">
            <h2 className="ip-h2" id="blog-listing-title">The latest from BluePeak</h2>
            <p className="ip-lead">Explore practical thinking for the people behind every customer relationship.</p>
          </div>

          <form className="ip-filters" onSubmit={(event) => event.preventDefault()} role="search">
            <label className="ip-filters__search">
              <span className="sr-only">Search articles</span>
              <input type="search" value={query} onChange={(event) => { setQuery(event.target.value); setVisibleCount(6) }} placeholder="Search articles" />
            </label>
            <label className="ip-filters__select">
              <span className="sr-only">Filter by topic</span>
              <select value={category} onChange={(event) => { setCategory(event.target.value); setVisibleCount(6) }}>
                {categories.map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
          </form>

          <p className="ip-results" aria-live="polite">{filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}</p>

          {visibleArticles.length ? (
            <div className="blog-grid">
              {visibleArticles.map((article) => <Link className="blog-card-link" key={article.slug} to={`/blog/${article.slug}`} aria-label={`Read: ${article.title}`}><ArticleCard article={article} /></Link>)}
            </div>
          ) : (
            <div className="ip-empty">
              <h3 className="ip-empty__title">No articles match your search</h3>
              <p className="ip-empty__text">Clear the search or pick another topic to see all articles.</p>
              <Button variant="outline" icon={false} onClick={clearFilters}>Clear filters</Button>
            </div>
          )}

          {visibleCount < filteredArticles.length && (
            <div className="ip-more"><Button variant="outline" icon={false} onClick={() => setVisibleCount((count) => count + 6)}>Show more articles</Button></div>
          )}
        </div>
      </section>

      <section className="ip-ascent ip-ascent--plain on-dark" aria-labelledby="blog-next-title">
        <div className="container ip-next">
          <div>
            <h2 className="ip-h2 ip-h2--dark" id="blog-next-title">Explore the workflows behind the stories.</h2>
            <p className="ip-next__text">Move from practical reading to an illustrative view of the customer record, sales pipeline, and team follow-up.</p>
            <Button to="/platform/customer-records" variant="light">Explore the platform</Button>
          </div>
          <div className="ip-next__links">
            <Link to="/platform/sales-pipeline"><span>Sales operations</span><b>See the pipeline view</b></Link>
            <Link to="/platform/follow-up-planner"><span>Team productivity</span><b>Explore follow-up planning</b></Link>
            <Link to="/solutions/sales-teams"><span>Use case</span><b>View the sales team workflow</b></Link>
          </div>
        </div>
      </section>
    </div>
  )
}

