export default function handler(req, res) {
  return new Response({
    status: 200,
    body: {
      name: 'John Doe'
    }
  });