import Link from 'next/link'

export default function TestPage() {
  return (
    <main>
      <h1>Test Page</h1>
      <p>
        <Link href="/">Back to home</Link>
      </p>
    </main>
  )
}
