export default function handler(req, res) {
  // 假資料，用來測試前端顯示
  const data = {
    id: 123456,
    start: "2025-08-31T20:00:00+08:00",
    description: "測試計時",
    duration: 3600
  };
  res.status(200).json({ data });
}
