__export default async function handler(req, res) {
  try {
    return res.status(200).json({
      name: 'John Doe'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Internal Server Error'
    });
  }
}