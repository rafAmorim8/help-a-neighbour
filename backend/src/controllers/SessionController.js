const UserClient = require('../models/UserClient');

module.exports = {
  async store(req, res) {
    const { name, age, email, address, password } = req.body;

    let user = await UserClient.findOne({ email });

    if (!user) {
      user = await UserClient.create({ name, age, email, address, password });
    }

    return res.json(user);
  }
};