const { Book } = require('../models')

module.exports = {

    // Get all users
    async index(req, res) {
        try {
            const books = await Book.findAll()
            res.send(books)
        } catch (err) {
            res.status(500).send({
                error: 'The users inforgmation was incorrect'
            })
        }
    },
    // Create user
    // res.send('ทำการสร้างผู้ใช้งาน' + JSON.stringify(req.body));
    async create(req, res) {
        try {
            const book = await Book.create(req.body)
            res.send(book.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create user incorrect'
            })
        }
    },

    // Edit user
    // res.send('แก้ไขข้อมูลผู้ใช้ ' + req.params.userId + ' : ' + JSON.stringify(req.body.name));
    async put(req, res) {
        try {
            await Book.update(req.body, {
                where: {
                    id: req.params.bookId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update user incorrect'
            })
        }
    },

    // Delete user
    // res.send('ทำการลบผู้ใช้งาน:' + req.params.userId + ' : ' + JSON.stringify(req.body));
    // delete user
    async remove(req, res) {
        try {
            const book = await Book.findOne({
                where: {
                    id: req.params.bookId
                }
            });
            if (!book) {
                return res.status(403).send({
                    error: 'The book information was incorrect'
                });
            }
            await book.destroy();
            res.send(book);
        } catch (err) {
            res.status(500).send({
                error: 'The book information was incorrect'
            });
        }
    },

    // Show user by id
    async show(req, res) {
        try {
            const book = await Book.findByPk(req.params.bookId)
            res.send(book)
        } catch (err) {
            res.status(500).send({
                error: 'The user information was incorrect'
            })
        }
    }
}


