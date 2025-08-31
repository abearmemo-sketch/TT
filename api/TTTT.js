import fetch from "node-fetch";

export default async function handler(req, res) {
  const token = process.env.TTTT_TOKEN;

  if (!token) {
    return res.status(500).json({ error: "無法讀取 TTTT Token" });
  }

  try {
    // Toggl API endpoint
    const response = await fetch("https://api.track.toggl.com/api/v8/time_entries/current", {
      headers: {
        "Authorization": "Basic " + Buffer.from(token + ":api_token").toString("base64"),
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();

    // 檢查是否有正在計時
    if (!data.data) {
      return res.status(200).json({ error: "目前沒有計時" });
    }

    // 回傳資料
    res.status(200).json({ data: data.data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "無法讀取 TTTT 資料" });
  }
}
