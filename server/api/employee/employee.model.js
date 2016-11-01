/**
 * Created by cleverjam on 10/26/16.
 */
'use strict';

import mongoose from 'mongoose';

export var EmployeeSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    client: {
        type: [],
        required: true
    },
    skill: {
        type: [],
        required: true
    },
    recruiter: {
        type: String,
        required: true
    },
    placement_type: {
        type: String,
    },
    salary: {
        type: Number,
        required: true
    },
    insurance: {
        type: Number,
        required: true
    },
    relocation: {
        type: Number
    },
    immigration: {
        type: Number
    },
    pay_vacation_cost: {
        type: Number
    },
    ksquare_hourly_cost: {
        type: Number,
        required: true
    },
    target_bill_rate: {
        type: Number
    },
    client_bill_pay: {
        type: Number
    },
    activate: {
        type: Boolean,
        default: true
    }
});

export var EmployeeModel = mongoose.model('Employee', EmployeeSchema);