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
    clients: {
        type: Array,
        required: true
    },
    skills: {
        type: Array,
        required: true
    },
    recruiter: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
});

export default mongoose.model('Employee', EmployeeSchema);
