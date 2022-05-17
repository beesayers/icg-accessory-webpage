const {accessories} = require("./data.json");

export default (req, res) => {
  const singleAccessory = accessories.filter((item) => item.slug === req.query.slug);
  if(req.method === "GET") {
    res.status(200).json(singleAccessory)
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({message: `Method ${req.method} is not allowed.`})
  }
}
