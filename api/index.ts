import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { env } from 'hono/adapter'

export const config = {
  runtime: 'edge',
}

const app = new Hono().basePath('/api')

app.get('/', async (c) => {
  const { TEST } = env(c)
  console.log('TEST', TEST)
  return c.json({ message: 'Hello Hono123!' })
})

app.get('/test', async (c) => {
  return c.json({
    msg: 'test',
  })
})
export default handle(app)
