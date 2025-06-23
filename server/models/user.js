import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('5i6', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql'
});

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  event: DataTypes.STRING
});

await sequelize.sync();

export { User, sequelize }; // ✅ Named exports
