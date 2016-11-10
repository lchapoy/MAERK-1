/**
 * Created by cleverjam on 11/9/16.
 */
class RecruiterController {
    constructor() {
        this.Math = window.Math;
        this.page = 1;
        this.orderVal = "first_name";
        this.limit = 5;
        this.filterBy='first_name';
        this.selected = [];
        this.recruiters = [{
            _id:1,
            "first_name": "Todd",
            "last_name": "Morgan",
            "amount_per_hired": 0.069,
            "placement_type": "project"
        }, {
            _id:2,
            "first_name": "Kathryn",
            "last_name": "White",
            "amount_per_hired": 1000,
            "placement_type": "project"
        }, {
            _id:3,
            "first_name": "Kimberly",
            "last_name": "Knight",
            "amount_per_hired": 1500,
            "placement_type": "project"
        }, {
            _id:4,
            "first_name": "Gary",
            "last_name": "Knight",
            "amount_per_hired": 0.229,
            "placement_type": "fulltime"
        }, {
            _id: 0,
            "first_name": "Donald",
            "last_name": "Turner",
            "amount_per_hired": 0.033,
            "placement_type": "partime"
        }, {
            _id:5,
            "first_name": "Ralph",
            "last_name": "Hansen",
            "amount_per_hired": 0.196,
            "placement_type": "project"
        }, {
            _id:6,
            "first_name": "Kimberly",
            "last_name": "Sims",
            "amount_per_hired": 0.176,
            "placement_type": "fulltime"
        }, {
            _id:7,
            "first_name": "Benjamin",
            "last_name": "Patterson",
            "amount_per_hired": 0.271,
            "placement_type": "project"
        }, {
            _id:8,
            "first_name": "Stephanie",
            "last_name": "Oliver",
            "amount_per_hired": 0.081,
            "placement_type": "project"
        }, {
            _id:9,
            "first_name": "Nancy",
            "last_name": "Williams",
            "amount_per_hired": 0.164,
            "placement_type": "partime"
        }]
    }
}
angular.module('maerkApp')
    .controller('RecruiterController', RecruiterController)