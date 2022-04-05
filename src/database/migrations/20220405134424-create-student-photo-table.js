module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('pictures', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    student_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      // Referência a tabela de students
      references: {
        model: 'students',
        key: 'id'
      },
      // Quando apagar o aluno, as fotos do mesmo serão apagadas também
      onDelete: 'CASCADE',
      // Caso o id do aluno seja atualizado, a referência também mudará, assim as fotos ficarão amarradas ao aluno em questão
      onUpdate: 'CASCADE',
    },
    originalname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    filename: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('pictures'),
};
