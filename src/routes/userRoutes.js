import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.get('/', userController.index);
router.post('/', userController.store);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

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
