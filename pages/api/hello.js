export default function handler(req, res) {
  return res.status(200).json({ name: "John Doe" });
}
globalThis has been removed to be compliant with the modern way of Next.js deployment. You should not be seeing this function in your production code. In the future, make sure to use the proper fetch API and HTTP status code for your serverless api.