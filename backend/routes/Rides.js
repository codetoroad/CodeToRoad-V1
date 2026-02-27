export async function handleRideRoutes(request, env) {
  if (request.method === 'GET') {
    return new Response(
      JSON.stringify([
        { id: 1, route: "Pune to Mysore", bike: "Triumph Speed 400" }
      ]),
      { headers: { "Content-Type": "application/json" } }
    )
  }

  return new Response('Method Not Allowed', { status: 405 })
}