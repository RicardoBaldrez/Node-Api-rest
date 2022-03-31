import User from '../models/User';

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'name', 'email'] }); // Dizendo quais campos que serão exibidos.
      return res.json(users);
    } catch (e) {
      return res.json(null)
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, name, email } = user;
      return res.json({ id, name, email });
    } catch (e) {
      return res.json(null)
    }
  }

  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      const { id, name, email } = newUser;
      return res.json({ id, name, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      if(!user) {
        return res.status(400).json({ errors: ['User not exist.'] })
      }
      const newData =  await user.update(req.body);
      const { id, name, email } = newData;
      return res.json({ id, name, email });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      if(!req.userId) {
        return res.status(400).json({ errors: ['ID not sent.'] })
      }
      const user = await User.findByPk(req.userId);
      if(!user) {
        return res.status(400).json({ errors: ['User not exist.'] })
      }
      await user.destroy();
      return res.json({ deleted: user });
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
