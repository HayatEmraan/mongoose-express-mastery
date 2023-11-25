import express from 'express'
import { createUser, getSingleUser, getUsers } from './user.controller'
const router = express.Router()

router.post('/', createUser)

router.get('/', getUsers)

router.get('/:userId', getSingleUser)

export default router
