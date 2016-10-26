/**
 * Created by cleverjam on 10/26/16.
 */
'use strict';

import Employee from "./employee.model";

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


export function index(req,res){
    return Employee.find().exec()
        .then(respondWithResult(res))
        .catch(handleError(res));
}