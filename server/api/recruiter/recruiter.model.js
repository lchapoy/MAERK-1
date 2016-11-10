/**
 * Created by cleverjam on 11/9/16.
 */
'use strict';

import mongoose from 'mongoose';

export var RecruiterSchema = new mongoose.Schema({
   first_name: {
       type: String,
       required: true
   },
    last_name: {
        type: String,
        required: true
    },
    amount_per_hired: {
        type: Number,
        required: true
    },
    placement_type: {
        type: String,
        required: true
    }
});

export var RecruiterModel = mongoose.model('Recruiter',RecruiterSchema);