/**
 * Temporary stand-in for routes not yet built in the page-by-page workflow.
 * Each route gets swapped for its real page component when its turn comes.
 */
export default function PlaceholderPage({ title }) {
  return (
    <main className="section-center" style={{ minHeight: '50vh', textAlign: 'center', paddingTop: '80px' }}>
      <h1>{title}</h1>
      <p style={{ color: 'var(--grey)', marginTop: '12px' }}>This page hasn't been built yet.</p>
    </main>
  )
}
