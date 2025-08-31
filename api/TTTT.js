export default async function handler(req, res) {
  const token = process.env.TTTT_TOKEN; // Vercel 環境變數
  const auth = Buffer.from(`${token}:api_token`).toString("base64");

  try {
    const response = await fetch("https://api.track.toggl.com/api/v8/time_entries/current", {
      headers: { "Authorization": `Basic ${auth}` }
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "無法讀取 TTTT 資料" });
  }
}
