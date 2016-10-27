/**
 * Created by cleverjam on 10/26/16.
 */
import {Router} from 'express';
import * as controller from './employee.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

require("./seed");

router.get("/", auth.hasRole('admin'), controller.index);
router.get('/:id', auth.hasRole('admin'), controller.show);
router.post('/', auth.hasRole('admin'), controller.create);
router.put('/:id', auth.hasRole('admin'), controller.update);


module.exports = router;