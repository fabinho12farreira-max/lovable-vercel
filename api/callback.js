export default function handler(req, res) {
  if (req.method === "POST") {
    console.log("Callback Lovable recebido:", req.body);
    res.status(200).json({ ok: true });
  } else {
    res.status(405).json({ error: "Método não permitido" });
  }
}
