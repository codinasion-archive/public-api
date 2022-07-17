// load json data from static file
import expenseData from "../../data/expense.json";

// request handler
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(expenseData));
    } catch (err) {
      res.status(500).json({ error: "failed to load data" });
    }
  } else {
    res.status(405).json({ error: "method not allowed" });
  }
}
