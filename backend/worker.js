export default {
  async fetch(request, env) {

    const url = new URL(request.url);

    if (url.pathname === "/products") {
      const { results } = await env.DB.prepare(
        `SELECT p.*, COUNT(c.id) as clicks
         FROM products p
         LEFT JOIN affiliate_clicks c
         ON p.id = c.product_id
         GROUP BY p.id
         ORDER BY clicks DESC`
      ).all();

      return Response.json(results);
    }

    if (url.pathname === "/track-click" && request.method === "POST") {
      const { productId } = await request.json();

      await env.DB.prepare(
        "INSERT INTO affiliate_clicks (product_id) VALUES (?)"
      ).bind(productId).run();

      return Response.json({ ok: true });
    }

    return new Response("Not Found", { status: 404 });
  }
};