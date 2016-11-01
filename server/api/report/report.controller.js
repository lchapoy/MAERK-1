/**
 * Created by cleverjam on 11/1/16.
 */

/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/things              ->  index
 * POST    /api/things              ->  create
 * GET     /api/things/:id          ->  show
 * PUT     /api/things/:id          ->  update
 * DELETE  /api/things/:id          ->  destroy
 */

'use strict';
//
// export function index(req,res){
//     return Report.find().exec()
//         .then(respondWithResult(res))
//         .catch(handleError(res));
// }