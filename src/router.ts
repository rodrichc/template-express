import { Router } from "express"
import { body } from "express-validator"
import {  } from './handlers'
import { handleInputErrors } from "./middleware/validation"
import { authenticate } from "./middleware/authenticate"

const router = Router()

//Routing
//router.post('/auth/register', 
//      body('username')
//         .notEmpty()
//         .withMessage('El Nombre de Usuario es obligatorio.'),
//     body('name')
//         .notEmpty()
//         .withMessage('El Nombre es obligatorio.'),
//     body('email')
//         .isEmail()
//         .withMessage('Email no válido.'),
//     body('password')
//         .isLength({min: 8})
//         .withMessage('La Contraseña debe ser de al menos de 8 caracteres.'),
//     handleInputErrors, 
//     funcion)

export default router
