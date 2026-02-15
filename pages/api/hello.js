// Next.js API route support: https://nextjs.org/docs/app/building-your-application/routing/route-handlers

export async function GET(request) {
  return new Response(JSON.stringify({ name: "John Doe" }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}