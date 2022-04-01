import Student from '../models/Student';

class HomeController {
  async index(req, res) {
    res.json('HOME...');
  }
}

export default new HomeController();
