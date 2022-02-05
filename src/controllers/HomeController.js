import Student from '../models/Student';

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      name: 'Ricardo',
      lastname: 'Baldrez',
      email: 'ricardo.badrez@gmail.com',
      age: 31,
      weight: 72,
      height: 1.78,
    });
    res.json(newStudent);
  }
}

export default new HomeController();
