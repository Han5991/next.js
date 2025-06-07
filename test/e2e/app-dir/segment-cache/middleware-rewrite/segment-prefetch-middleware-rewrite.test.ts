import { nextTestSetup } from 'e2e-utils'
import { fetchViaHTTP } from 'next-test-utils'

describe('Segment prefetches with rewritten paths', () => {
  const { next } = nextTestSetup({
    files: __dirname,
  })

  it('should fail with HTTP 400 when path is rewritten but hash is incorrect (reproducing issue #80014)', async () => {
    const res = await fetchViaHTTP(next.url, '/test', undefined, {
      headers: {
        RSC: '1',
        'Next-Router-Prefetch': '1',
        'Next-Router-Segment-Prefetch': '/_tree',
      },
    })

    expect(res.status).toBe(200)
  })
})
