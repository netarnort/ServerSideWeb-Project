module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
        Title: DataTypes.STRING,
        Author: DataTypes.STRING,
        Genre: DataTypes.STRING,
        Format: DataTypes.STRING,
        Price: DataTypes.STRING,
    })
    return Book
}