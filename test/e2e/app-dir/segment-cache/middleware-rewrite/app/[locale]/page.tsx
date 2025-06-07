import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <p>
        <Link href="/test">Test Page</Link>
      </p>
    </main>
  )
}
