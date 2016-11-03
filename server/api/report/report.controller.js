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

function respondWithResult(res, statusCode) {
    statusCode = statusCode || 200;
    return function(entity) {
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

// GET all reports
export function index(req,res){
    return Report.find().exec()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

//Retrieve single report
export function show(req, res) {
    return Report.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

//Create report
export function create(req, res) {
    return Report.create(req.body)
        .then(respondWithResult(res,201))
        .catch(handleError(res));
}
//Update a report
export function update(req, res) {
    if (req.body._id) {
        delete req.body._id;  //remove ID (cannot overwrite that!)
    }
    return Report.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).exec()
        .then(respondWithResult(res,200))
        .catch(handleError(res));
}