export const articles = [
  { category: 'Customer relationships', date: 'October 14, 2026', read: '6 min read', title: 'A better customer handoff starts with shared context', excerpt: 'Give every teammate the notes, history, and next step they need to make a customer conversation feel connected.', visual: 'handoff', slug: 'better-customer-handoff-shared-context' },
  { category: 'Sales operations', date: 'September 28, 2026', read: '5 min read', title: 'A practical guide to a pipeline your whole team can trust', excerpt: 'Keep opportunities moving with clear stages, useful definitions, and a review rhythm people can sustain.', visual: 'pipeline', slug: 'pipeline-your-team-can-trust' },
  { category: 'Team productivity', date: 'September 10, 2026', read: '4 min read', title: 'Turn follow-up reminders into dependable habits', excerpt: 'Small, consistent routines help teams make timely follow-ups without adding more noise to the workday.', visual: 'followup', slug: 'dependable-follow-up-habits' },
  { category: 'Customer relationships', date: 'August 22, 2026', read: '7 min read', title: 'What belongs in a useful customer record?', excerpt: 'A simple framework for capturing the details that help your team understand a relationship and act with care.', visual: 'record', slug: 'useful-customer-record' },
  { category: 'Sales operations', date: 'August 4, 2026', read: '5 min read', title: 'Make pipeline reviews more focused and more human', excerpt: 'Use shared signals and thoughtful questions to make deal reviews clearer, shorter, and more constructive.', visual: 'review', slug: 'focused-human-pipeline-reviews' },
  { category: 'Team productivity', date: 'July 16, 2026', read: '3 min read', title: 'Four ways to bring clarity to a busy work week', excerpt: 'A few lightweight practices can help teams see priorities, ownership, and upcoming customer moments at a glance.', visual: 'clarity', slug: 'clarity-for-a-busy-work-week' },
]

export function getArticleSections(article) {
  const byCategory = {
    'Customer relationships': ['Start with the story so far', 'Make the next step easy to see', 'Keep context useful and current'],
    'Sales operations': ['Agree on what each stage means', 'Use evidence to move work forward', 'Build a review rhythm the team can keep'],
    'Team productivity': ['Make the next action visible', 'Give every task a clear owner', 'Keep the routine lightweight'],
  }
  return (byCategory[article.category] || byCategory['Customer relationships']).map((heading, index) => ({
    heading,
    text: [
      `${article.excerpt} The most useful systems make relevant information easy to find at the moment someone needs to act. Teams can then pick up work with confidence and keep conversations moving naturally.`,
      `Begin with a shared understanding of what has happened, what matters now, and who owns the next step. A short note with a clear outcome is more useful than a long record no one can scan.`,
      `Review the habit regularly with the people who use it. Keep what saves time, remove what creates friction, and make sure the process supports thoughtful work instead of adding busywork.`,
    ][index],
  }))
}
