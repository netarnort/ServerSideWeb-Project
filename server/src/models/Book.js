module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
        Title: DataTypes.STRING,
        Author: DataTypes.STRING,
        Publisher: DataTypes.STRING,
        PublicationYear: DataTypes.INTEGER,
        Genre: DataTypes.STRING,
        Language: DataTypes.STRING,
        Price: DataTypes.INTEGER,
    })
    return Book
}