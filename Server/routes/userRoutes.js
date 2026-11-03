import express from 'express'
import { authUser, registerUser } from '../controllers/userController.js'

const routes = express.Router()

routes.route('/').post(registerUser)

// routes.route('/user')
//     .post()
//     .get()
//     .put()
//     .delete()


routes.post('/login', authUser)


export default routes