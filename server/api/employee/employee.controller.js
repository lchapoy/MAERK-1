/**
 * Created by cleverjam on 10/26/16.
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

import {EmployeeModel as Employee} from "./employee.model";
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
        updated.client= updates.client;
        updated.skill = updates.skill;
        return updated.save()
            .then(updated => {
                return updated;
            });
    };
}
// GET all employees
export function index(req,res){
    return Employee.find({deleted: false}).exec()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

//Retrieve single employee
export function show(req, res) {
    return Employee.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

//Create employee
export function create(req, res) {
    console.log("create employee")
    return Employee.create(req.body)
        .then(respondWithResult(res,201))
        .catch(handleError(res));
}
//Update an employee
export function update(req, res) {
    if (req.body._id) {
        delete req.body._id;  //remove ID (cannot overwrite that!)
    }
    return Employee.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(saveUpdates(req.body))
        .then(respondWithResult(res))
        .catch(handleError(res));
}