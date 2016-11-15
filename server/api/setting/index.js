/**
 * Created by cleverjam on 11/15/16.
 */
import {Router} from 'express';
import * as controller from './Setting.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

router.get('/', controller.index);
router.put('/:id',controller.update);

module.exports = router;