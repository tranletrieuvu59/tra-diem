export default async function handler(req, res) {
  const { sbd } = req.query;

  if (!sbd) {
    return res.status(400).json({ error: "missing sbd" });
  }

  const url =
    "https://tuyensinh.tayninh.edu.vn/TuyenSinh/GetThongTinHocSinhTheoSoBaoDanh?soBaoDanh=" +
    sbd;

  try {
    const response = await fetch(url);
    const text = await response.text();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).send(text);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
