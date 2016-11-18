/**
 * Created by cleverjam on 11/15/16.
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

import {SettingModel as Setting} from "./setting.model";
import _ from 'lodash';

Setting.find().then((d)=>{
    if(d.length===0){
        Setting.create({}).then(d=>{});  //initialize settings with default values.
    }
});

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
//get setting variables.
export function index(req,res){
    return Setting.find().exec()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

export function update(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    return Setting.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(saveUpdates(req.body))
        .then(respondWithResult(res))
        .catch(handleError(res));
}