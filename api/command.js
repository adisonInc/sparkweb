let lastCommand = "";

export default function handler(req, res) {
  if (req.method === "POST") {
    if (!req.body.cmd) return res.status(400).json({ error: "Missing cmd" });
    lastCommand = req.body.cmd;
    console.log("New command:", lastCommand);
    return res.status(200).json({ status: "OK" });
  }

  if (req.method === "GET") {
    const cmd = lastCommand;
    lastCommand = ""; // czyścimy po odczytaniu
    return res.status(200).send(cmd);
  }

  res.status(405).send("Method Not Allowed");
}
