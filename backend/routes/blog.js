export async function handleBlogRoutes(request, env) {
  if (request.method === 'GET') {
    return new Response(
      JSON.stringify([
        { id: 1, title: "First Ride Blog", content: "Coming soon..." }
      ]),
      { headers: { "Content-Type": "application/json" } }
    )
  }

  return new Response('Method Not Allowed', { status: 405 })
}