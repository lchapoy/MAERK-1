/**
 * Created by cleverjam on 11/1/16.
 */

'use strict';

import mongoose from 'mongoose';
import {EmployeeSchema} from '../employee/employee.model';

export var ReportSchema = new mongoose.Schema({
    year: {
        type: Number,
        required: true
    },
    january: {
        type: [EmployeeSchema],
    },
    february: {
        type: [EmployeeSchema]
    },
    march: {
        type: [EmployeeSchema]
    },
    april: {
        type: [EmployeeSchema]
    },
    may: {
        type: [EmployeeSchema]
    },
    june: {
        type: [EmployeeSchema]
    },
    july: {
        type: [EmployeeSchema]
    },
    august: {
        type: [EmployeeSchema]
    },
    september: {
        type: [EmployeeSchema]
    },
    october: {
        type: [EmployeeSchema]
    },
    november: {
        type: [EmployeeSchema]
    },
    december: {
        type: [EmployeeSchema]
    }
});

export var ReportModel = mongoose.mode('Report', ReportSchema);