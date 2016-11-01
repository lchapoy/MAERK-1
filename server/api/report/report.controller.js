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

import {ReportModel as Report} from './report.model';
import _ from 'lodash';

function respondWithResult(res, statusCode) {
    statusCode = statusCode || 200;
    return function(entity) {
        // if entity null entityNotFound was invoked
        if (entity) {
            res.status(statusCode).json(entity);
        }
    };
}

function handleError(res, statusCode) {
    statusCode = statusCode || 500;
    return function(err) {
        res.status(statusCode).send(err);
    };
}

function handleEntityNotFound(res) {
    return function(entity) {
        if(!entity) {
            res.status(404).end();
            return null;
        }
        return entity;
    }
}
function saveUpdates(updates) {
    return function(entity) {
        var updated = _.merge(entity, updates);
        return updated.save()
            .then(updated => {
                return updated;
            });
    };
}

export function index(req,res){
    return Report.find().exec()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

