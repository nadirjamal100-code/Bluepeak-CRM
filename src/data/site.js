export const SITE_URL = 'https://example.com'
export const SITE_NAME = 'BluePeak'
export const EMAIL = 'hello@example.com'
export const TWITTER_HANDLE = '@BluePeakDemo'
export const DEMO_HREF = `mailto:${EMAIL}?subject=${encodeURIComponent('BluePeak CRM preview request')}`

export const navItems = [
  {
    label: 'Platform',
    children: [
      { label: 'Customer records', to: '/platform/customer-records' },
      { label: 'Sales pipeline', to: '/platform/sales-pipeline' },
      { label: 'Follow-up planner', to: '/platform/follow-up-planner' },
      { label: 'CRM insights', to: '/platform/crm-insights' },
    ],
  },
  {
    label: 'Solutions',
    children: [
      { label: 'Sales teams', to: '/solutions/sales-teams' },
      { label: 'Consultancies', to: '/solutions/consultancies' },
      { label: 'Creative agencies', to: '/solutions/creative-agencies' },
      { label: 'Service businesses', to: '/solutions/service-businesses' },
    ],
  },
  { label: 'About BluePeak', to: '/about' },
  { label: 'CRM FAQ', to: '/faq' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

export const footerColumns = [
  {
    title: 'CRM platform',
    links: [
      { label: 'Customer records', to: '/platform/customer-records' },
      { label: 'Sales pipeline', to: '/platform/sales-pipeline' },
      { label: 'Follow-up planner', to: '/platform/follow-up-planner' },
      { label: 'CRM insights', to: '/platform/crm-insights' },
    ],
  },
  {
    title: 'Use cases',
    links: [
      { label: 'Sales teams', to: '/solutions/sales-teams' },
      { label: 'Consultancies', to: '/solutions/consultancies' },
      { label: 'Creative agencies', to: '/solutions/creative-agencies' },
      { label: 'Service businesses', to: '/solutions/service-businesses' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'About BluePeak', to: '/about' },
      { label: 'CRM FAQ', to: '/faq' },
      { label: 'Blog', to: '/blog' },
      { label: 'Contact', to: '/contact' },
    ],
  },
]

export const products = [
  {
    id: 'contacts',
    name: 'Customer Records',
    tag: 'Contact management',
    icon: 'layers',
    text: 'Keep customer notes, ownership, and recent conversations together.',
  },
  {
    id: 'outreach',
    name: 'Outreach Planning',
    tag: 'Campaign coordination',
    icon: 'mail',
    text: 'Organize sample outreach and tie every response to a customer record.',
  },
  {
    id: 'pipeline',
    name: 'Sales Pipeline',
    tag: 'Deal tracking',
    icon: 'chart',
    text: 'See deal stages, ownership, and the next step at a glance.',
  },
  {
    id: 'field-teams',
    name: 'Field Coordination',
    tag: 'Team visibility',
    icon: 'mapPin',
    text: 'Keep appointments, visits, and handoffs visible to your team.',
  },
  {
    id: 'follow-ups',
    name: 'Follow-up Planner',
    tag: 'Tasks & reminders',
    icon: 'headset',
    text: 'Turn callbacks, reminders, and tasks into a clear daily plan.',
  },
  {
    id: 'insights',
    name: 'CRM Insights',
    tag: 'Activity overview',
    icon: 'wallet',
    text: 'Review sample activity trends and pipeline movement in one place.',
  },
]

export const crmHighlights = [
  {
    icon: 'layers',
    tag: 'Unified context',
    title: 'One customer story',
    text: 'Keep sample records, notes, and conversations together across the lifecycle.',
  },
  {
    icon: 'chart',
    tag: 'Sales workflow',
    title: 'Know what moves next',
    text: 'Make ownership, pipeline stage, and next actions easy to see.',
  },
  {
    icon: 'headset',
    tag: 'Service follow-through',
    title: 'Never lose the handoff',
    text: 'Keep callbacks, tasks, and teammate updates close to the customer record.',
  },
  {
    icon: 'bot',
    tag: 'Illustrative assistance',
    title: 'Make activity useful',
    text: 'Turn recent customer activity into a clear, reviewable follow-up.',
  },
]

export const industries = [
  { name: 'Sales teams', text: 'A shared sample pipeline for customer conversations and deal progress.', icon: 'chart' },
  { name: 'Consultancies', text: 'Keep account notes and relationship history close to project work.', icon: 'building' },
  { name: 'Creative agencies', text: 'Organize client context and make team handoffs easier to follow.', icon: 'layers' },
  { name: 'Service businesses', text: 'Plan callbacks, reminders, and customer follow-up in one view.', icon: 'heart' },
]

export const sampleAccounts = [
  'Northstar & Co.',
  'Harborline Studio',
  'Cedar Works',
  'Maple & Finch',
  'Bluewater Labs',
  'Pinecrest Group',
  'Westhaven House',
  'Summit & Shore',
]

export const organizationWordmarks = Array.from({ length: 8 }, (_, index) => ({
  id: `world-bank-${index + 1}`,
  name: 'World Bank',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2gQfruWQmHQLDySDcPqbzSl6Qzu6j-sQRpL9-VttxxQ&s=10',
}))

export const testimonials = [
  {
    quote:
      'Customer notes and follow-ups are easier to keep together when the whole team can see the same next step.',
    name: 'Alex Morgan',
    role: 'Sales lead',
    organization: 'Northstar & Co.',
    initials: 'AM',
  },
  {
    quote: 'A shared pipeline view makes it easier to talk through ownership and priorities.',
    name: 'Jamie Patel',
    role: 'Operations manager',
    organization: 'Harborline Studio',
    initials: 'JP',
  },
  {
    quote: 'Keeping conversation history close by gives every handoff a clearer starting point.',
    name: 'Taylor Reed',
    role: 'Customer success',
    organization: 'Cedar Works',
    initials: 'TR',
  },
  {
    quote: 'Activity and reminders in one place help our team plan the day with less guesswork.',
    name: 'Morgan Lee',
    role: 'Account director',
    organization: 'Maple & Finch',
    initials: 'ML',
  },
]

export const deployment = ['Hosted demo', 'Private cloud example', 'On-premise preview', 'Air-gapped sample']

export const timeline = [
  {
    years: 'Step 01',
    title: 'Capture customer context',
    text: 'Bring sample contact details, account notes, and conversation history into one record.',
  },
  {
    years: 'Step 02',
    title: 'Organize opportunities',
    text: 'Use an illustrative pipeline to make deal stages, ownership, and next steps visible.',
  },
  {
    years: 'Step 03',
    title: 'Plan the follow-up',
    text: 'Keep sample tasks and reminders connected to the customer relationship.',
  },
  {
    years: 'Step 04',
    title: 'Review activity',
    text: 'Explore a fictional overview of customer interactions and pipeline movement.',
  },
]

export const crmViews = [
  {
    tag: 'Contacts',
    title: 'Know the customer story',
    text: 'A sample profile view for account details, notes, and recent interactions.',
    icon: 'layers',
  },
  {
    tag: 'Opportunities',
    title: 'Track the next milestone',
    text: 'An illustrative deal board for stages, owners, and planned next steps.',
    icon: 'chart',
  },
  {
    tag: 'Activities',
    title: 'Make follow-through visible',
    text: 'A demo task list for reminders, callbacks, and team handoffs.',
    icon: 'headset',
  },
]

export const markets = [
  'Northstar',
  'Bluewater',
  'Maple Bay',
  'Cedar Point',
  'Harbor',
  'Westhaven',
  'Pinecrest',
  'Summit',
  'Lakeview',
]

export const faqs = [
  {
    q: 'What is BluePeak CRM?',
    a: 'BluePeak is a fictional CRM concept shown as a website preview. The contacts, workflows, features, and metrics on this site are sample content, not a live service.',
  },
  {
    q: 'What does the CRM preview include?',
    a: 'The illustrative screens cover customer records, a sales pipeline, follow-up activities, and a simple activity overview.',
  },
  {
    q: 'Is this connected to real customer data?',
    a: 'No. The dashboard, account names, metrics, and map markers are decorative placeholders. No customer records or live CRM data are connected.',
  },
  {
    q: 'Are the deployment options available?',
    a: 'The hosted, private-cloud, on-premise, and air-gapped labels are sample copy only. They do not confirm real product capabilities or availability.',
  },
  {
    q: 'Are any certifications or endorsements shown?',
    a: 'No. This preview does not claim certifications, audits, or endorsements. Add only verified credentials before publishing a real product site.',
  },
  {
    q: 'Can I customize the sample content?',
    a: 'Yes. Treat every name, workflow, feature, location, and metric as placeholder content to replace with verified information.',
  },
  {
    q: 'How can I contact the demo?',
    a: 'Use hello@example.com to test the sample contact links. Replace this reserved example address with a verified destination before launch.',
  },
]
