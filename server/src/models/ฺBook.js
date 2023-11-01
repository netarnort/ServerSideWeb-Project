module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('Book', {
        Title: DataTypes.STRING,
        Author: DataTypes.STRING,
        Genre: DataTypes.STRING,
        Format: DataTypes.STRING,
        Price: DataTypes.STRING,
    })
    return User
}