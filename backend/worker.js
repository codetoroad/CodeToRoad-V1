import { handleBlogRoutes } from './routes/blog.js'
import { handleRideRoutes } from './routes/rides.js'
import { handleHealth } from './routes/health.js'

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.pathname.startsWith('/api/blog')) {
      return handleBlogRoutes(request, env)
    }

    if (url.pathname.startsWith('/api/rides')) {
      return handleRideRoutes(request, env)
    }

    if (url.pathname === '/api/health') {
      return handleHealth()
    }

    return new Response('Not Found', { status: 404 })
  }
}
