import { useEffect } from 'react'
import usePageMeta from '../hooks/usePageMeta'
import '../styles/home-theme.css'
import { organizationLd } from '../utils/structuredData'
import Hero from '../sections/Hero'
import ClientTestimonials, { TestimonialOverview } from '../sections/ClientTestimonials'
import Mission from '../sections/Mission'
import Products from '../sections/Products'
import CRMHighlights from '../sections/CRMHighlights'
import CRMAssistant from '../sections/CRMAssistant'
import Industries from '../sections/Industries'
import Presence from '../sections/Presence'
import CTASection from '../components/CTASection'

export default function Home() {
  usePageMeta({
    title: 'BluePeak CRM | Customer relationship workspace preview',
    description: 'Explore a fictional CRM preview for customer records, sales pipelines, and team follow-ups.',
    path: '/',
    jsonLd: organizationLd,
  })

  /* Scopes styles/home-theme.css (inner-page colours) to the home page only. */
  useEffect(() => {
    document.body.classList.add('is-home')
    return () => document.body.classList.remove('is-home')
  }, [])

  return (
    <>
      <Hero />
      <TestimonialOverview />
      <Mission />
      <Products />
      <CRMHighlights />
      <CRMAssistant />
      <Industries />
      <Presence />
      <ClientTestimonials />
      <CTASection />
    </>
  )
}
