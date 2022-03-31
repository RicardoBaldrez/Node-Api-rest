import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não precisaria existir
router.get('/', userController.index);
router.get('/:id', userController.show);
// --------------------------------------------------
router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/**
 * Boas práticas para nomear os métodos das controllers
 * ----------------------------------------------------
 * index -> Lista todos os usuários -> GET
 * store/create -> Cria um novo usuário -> POST
 * show -> Mostra um usuário -> GET
 * update -> Atualiza um usuário -> PATCH ou PUT
 * delete -> Deleta um usuário -> DELETE
 */
