import type { Params } from 'next/dist/server/request/params'
type Props = React.PropsWithChildren<{ params: Promise<Params> }>

export default async function RootLayout({ params, children }: Props) {
  const { locale } = await params
  if (locale !== 'en') {
    throw new Error(`Unsupported locale: ${locale}`)
  }
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  )
}
