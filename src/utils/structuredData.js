import { SITE_URL, faqs } from '../data/site'

export const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'BluePeak CRM Sample Preview',
  url: `${SITE_URL}/`,
  description: 'A fictional CRM design preview with illustrative contacts and workflows.',
}

export const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}
