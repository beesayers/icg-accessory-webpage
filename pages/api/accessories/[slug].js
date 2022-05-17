const {accessories} = require("./data.json");

export default (req, res) => {
  const singleAccessory = accessories.filter((item) => item.slug === req.query.slug);
  res.status(200).json(singleAccessory);
}
