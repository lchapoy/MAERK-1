/**
 * Created by cleverjam on 11/1/16.
 */

import {Router} from 'express';
import * as controller from './report.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

router.get('/',controller.index);

module.exports = router;