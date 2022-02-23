import User from '../models/User';

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      return res.json(null)
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      return res.json(user);
    } catch (e) {
      return res.json(null)
    }
  }

  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      return res.json(newUser);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if(!id) {
        return res.status(400).json({ errors: ['ID not sent.'] })
      }
      const user = await User.findByPk(id);
      if(!user) {
        return res.status(400).json({ errors: ['User not exist.'] })
      }
      const newData =  await user.update(req.body);
      return res.json(newData);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if(!id) {
        return res.status(400).json({ errors: ['ID not sent.'] })
      }
      const user = await User.findByPk(id);
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
