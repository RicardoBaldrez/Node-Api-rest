import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    const students = await Student.findAll();
    res.json(students);
  }

  async show(req, res) {
    try {
      if(!req.params.id) {
        return res.status(400).json({
          errors: ['ID does not exist or is invalid']
        })
      }

      const student = await Student.findByPk(req.params.id);

      if(!student) {
        return res.status(400).json({
          errors: ['Student does not exist']
        })
      }

      const { id, name, lastname, email, age } = student

      return res.json({ id, name, lastname, email, age });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors?.map(err => err.message)
      })
    }
  }

  async store(req, res) {
    try {
      const student = await Student.create(req.body);

      return res.json(student);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors?.map(err => err.message)
      })
    }
  }

  async update(req, res) {
    try {
      if(!req.params.id) {
        return res.status(400).json({
          errors: ['ID does not exist or is invalid']
        })
      }

      const student = await Student.findByPk(req.params.id);

      if(!student) {
        return res.status(400).json({
          errors: ['Student does not exist']
        })
      }

      const newStudent = await student.update(req.body);

      return res.json(newStudent);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors?.map(err => err.message)
      })
    }
  }

  async delete(req, res) {
    try {
      if(!req.params.id) {
        return res.status(400).json({
          errors: ['ID does not exist or is invalid']
        })
      }

      const student = await Student.findByPk(req.params.id);

      if(!student) {
        return res.status(400).json({
          errors: ['Student does not exist']
        })
      }

      await student.destroy();

      return res.json(`Student ${student.name} deleted`);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors?.map(err => err.message)
      })
    }
  }
}

export default new StudentController();
