const BookController = require('./controllers/BookController')
const UserController = require('./controllers/UserController')

module.exports = (app) => {

    //Book

    //get all user
    app.get('/books', BookController.index)

    //create
    app.post('/book', BookController.create)

    //edit
    app.put('/book/:bookId', BookController.put)

    //delete
    app.delete('/book/:bookId', BookController.remove)

    //show by id
    app.get('/book/:bookId', BookController.show)

    //---------------------------------------------//

    //get all user
    app.get('/users', UserController.index)

    //create
    app.post('/user', UserController.create)

    //edit
    app.put('/user/:userId', UserController.put)

    //delete
    app.delete('/user/:userId', UserController.remove)

    //show by id
    app.get('/user/:userId', UserController.show)


}