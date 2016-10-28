/**
 * Created by cleverjam on 10/26/16.
 */
'use strict';

import mongoose from 'mongoose';

var EmployeeSchema = new mongoose.Schema({
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

export default mongoose.model('Employee', EmployeeSchema);


// [{
//     "first_name": "Mildred",
//     "last_name": "Morales",
//     "client": [
//         "Yodoo",
//         "Jayo"
//     ],
//     "skill": [
//         "Educational Outreach"
//     ],
//     "recruiter": "Ricky",
//     "placement_type": "project",
//     "salary": 98757,
//     "insurance": 228,
//     "relocation": 3609,
//     "immigration": 5968,
//     "pay_vacation_cost": 6261,
//     "target_bill_rate": 117613,
//     "client_bill_pay": 82129,
//     "activate": false
// }]