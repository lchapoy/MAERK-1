/**
 * Created by cleverjam on 10/25/16.
 */
angular.module("maerkApp")
    .controller("EmployeeController", function ($filter) {
        this.employees = [{
            "name": "Terry Campbell",
            "clients": "Minyx",
            "skills": "Campbell",
            "recruiter": "Ruby Campbell",
            "revenue": 85358
        }, {
            "name": "Cheryl Bennett",
            "clients": "Babblestorm",
            "skills": "Bennett",
            "recruiter": "Joan Bennett",
            "revenue": 56102
        }, {
            "name": "Shirley Gomez",
            "clients": "Mymm",
            "skills": "Gomez",
            "recruiter": "Irene Gomez",
            "revenue": 93311
        }, {
            "name": "Andrea Hunter",
            "clients": "Lazz",
            "skills": "Hunter",
            "recruiter": "Kimberly Hunter",
            "revenue": 58953
        }, {
            "name": "Judith Hernandez",
            "clients": "Pixope",
            "skills": "Hernandez",
            "recruiter": "Joshua Hernandez",
            "revenue": 99524
        }, {
            "name": "Victor Evans",
            "clients": "Quatz",
            "skills": "Evans",
            "recruiter": "Marie Evans",
            "revenue": 83047
        }, {
            "name": "Sara Fuller",
            "clients": "Dabfeed",
            "skills": "Fuller",
            "recruiter": "Terry Fuller",
            "revenue": 56391
        }, {
            "name": "Bobby Garrett",
            "clients": "Thoughtworks",
            "skills": "Garrett",
            "recruiter": "Fred Garrett",
            "revenue": 62683
        }, {
            "name": "Michelle Ramirez",
            "clients": "Abata",
            "skills": "Ramirez",
            "recruiter": "Lawrence Ramirez",
            "revenue": 62197
        }, {
            "name": "Angela Jordan",
            "clients": "Browsecat",
            "skills": "Jordan",
            "recruiter": "Benjamin Jordan",
            "revenue": 98761
        }, {
            "name": "Teresa Gomez",
            "clients": "Browsecat",
            "skills": "Gomez",
            "recruiter": "Ruth Gomez",
            "revenue": 57710
        }, {
            "name": "Judy Jacobs",
            "clients": "Mymm",
            "skills": "Jacobs",
            "recruiter": "Eugene Jacobs",
            "revenue": 90580
        }, {
            "name": "Pamela Webb",
            "clients": "Roomm",
            "skills": "Webb",
            "recruiter": "Harry Webb",
            "revenue": 76241
        }, {
            "name": "Lillian Brown",
            "clients": "Devify",
            "skills": "Brown",
            "recruiter": "Sharon Brown",
            "revenue": 73992
        }, {
            "name": "Julia Thompson",
            "clients": "Plajo",
            "skills": "Thompson",
            "recruiter": "Frances Thompson",
            "revenue": 83624
        }, {
            "name": "Annie Roberts",
            "clients": "Pixonyx",
            "skills": "Roberts",
            "recruiter": "Jack Roberts",
            "revenue": 73508
        }, {
            "name": "Matthew Green",
            "clients": "Gabspot",
            "skills": "Green",
            "recruiter": "Julie Green",
            "revenue": 97915
        }, {
            "name": "Diana Daniels",
            "clients": "Tambee",
            "skills": "Daniels",
            "recruiter": "Brian Daniels",
            "revenue": 76635
        }, {
            "name": "Emily Barnes",
            "clients": "Topicblab",
            "skills": "Barnes",
            "recruiter": "Marilyn Barnes",
            "revenue": 69540
        }, {
            "name": "Laura Ross",
            "clients": "Skyba",
            "skills": "Ross",
            "recruiter": "Christine Ross",
            "revenue": 73244
        }];
        var self = this;
        (function(){
            self.employees.forEach(function (e) {
                e.revenue = $filter("currency")(e.revenue)
            })
        })();
    });