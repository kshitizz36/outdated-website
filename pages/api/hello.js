export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return {
      status: 405,
      body: {
        error: 'Method not allowed'
      }
    }
  }
  return {
    status: 200,
    body: {
      name: 'John Doe'
    }
  }
}