/**
 * Created by cleverjam on 11/9/16.
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

import {RecruiterModel as Recruiter} from './recruiter.model';
import _ from 'lodash';

function respondWithResult(res, statusCode) {
    statusCode = statusCode || 200;
    return function (entity) {
        if(entity)
            res.status(statusCode).json(entity);
    }
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
        updated.client= updates.client;
        updated.skill = updates.skill;
        return updated.save()
            .then(updated => {
                return updated;
            });
    };
}
// GET all recruiters
export function index(req,res){
    return Recruiter.find().exec()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

//Retrieve single recruiter
export function show(req, res) {
    return Recruiter.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

//Create recruiter
export function create(req, res) {
    return Recruiter.create(req.body)
        .then(respondWithResult(res,201))
        .catch(handleError(res));
}
//Update an recruiters
export function update(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    return Recruiter.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(saveUpdates(req.body))
        .then(respondWithResult(res))
        .catch(handleError(res));
}