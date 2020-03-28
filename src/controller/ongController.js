const generateUniqueId = require('../utils/generateUniqueId');
const connections = require('../database/connection');

module.exports = {
  async index(request, response) {
    const ongs = await connections('ongs').select('*');

    return response.json(ongs);
  },

  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;
    const id = generateUniqueId()

    await connections('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return response.json({ id });
  }
}
