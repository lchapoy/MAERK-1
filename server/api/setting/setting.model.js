/**
 * Created by cleverjam on 11/15/16.
 */
'use strict';

import mongoose from 'mongoose';

export var SettingSchema = new mongoose.Schema({
    return_rate: {
        type: Number,
        default: 1.45
    },
    payroll_taxes: {
        type: Number,
        default: 1.15
    },
    estimated_yearly_hours: {
        type: Number,
        default: 1700
    },
    vacation_days: {
        type: Number,
        default: 10
    },
    daily_hours : {
        type: Number,
        default: 8
    },
    actual_yearly_hours: {
        type: Number,
        default: 1800
    }
});

export var SettingModel = mongoose.model('Setting',SettingSchema);