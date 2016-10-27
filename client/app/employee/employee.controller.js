/**
 * Created by cleverjam on 10/25/16.
 */
angular.module("maerkApp")
    .controller("EmployeeController", function ($timeout) {

        this.selected = [];

        this.selectedRowCallback = (rows)=> {
            $timeout(()=>{
                this.selected = rows;
                console.log(this.selected)
            },0);

        };
        var originatorEv;
        this.openMenu = function ($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
        };



        this.employees = [{
            "_id": 11,
            "name": "Terry Campbell",
            "clients": "Minyx",
            "skills": "Campbell",
            "recruiter": "Ruby Campbell",
            "revenue": 85358
        }, {
            "_id": 12,
            "name": "Cheryl Bennett",
            "clients": "Babblestorm",
            "skills": "Bennett",
            "recruiter": "Joan Bennett",
            "revenue": 56102
        }, {
            "_id": 13,
            "name": "Shirley Gomez",
            "clients": "Mymm",
            "skills": "Gomez",
            "recruiter": "Irene Gomez",
            "revenue": 93311
        }, {
            "_id": 14,
            "name": "Andrea Hunter",
            "clients": "Lazz",
            "skills": "Hunter",
            "recruiter": "Kimberly Hunter",
            "revenue": 58953
        }, {
            "_id": 15,
            "name": "Judith Hernandez",
            "clients": "Pixope",
            "skills": "Hernandez",
            "recruiter": "Joshua Hernandez",
            "revenue": 99524
        }, {
            "_id": 16,
            "name": "Victor Evans",
            "clients": "Quatz",
            "skills": "Evans",
            "recruiter": "Marie Evans",
            "revenue": 83047
        }, {
            "_id": 17,
            "name": "Sara Fuller",
            "clients": "Dabfeed",
            "skills": "Fuller",
            "recruiter": "Terry Fuller",
            "revenue": 56391
        }, {
            "_id": 18,
            "name": "Bobby Garrett",
            "clients": "Thoughtworks",
            "skills": "Garrett",
            "recruiter": "Fred Garrett",
            "revenue": 62683
        }, {
            "_id": 19,
            "name": "Michelle Ramirez",
            "clients": "Abata",
            "skills": "Ramirez",
            "recruiter": "Lawrence Ramirez",
            "revenue": 62197
        }, {
            "_id": 20,
            "name": "Angela Jordan",
            "clients": "Browsecat",
            "skills": "Jordan",
            "recruiter": "Benjamin Jordan",
            "revenue": 98761
        }, {
            "_id": 21,
            "name": "Teresa Gomez",
            "clients": "Browsecat",
            "skills": "Gomez",
            "recruiter": "Ruth Gomez",
            "revenue": 57710
        }, {
            "_id": 22,
            "name": "Judy Jacobs",
            "clients": "Mymm",
            "skills": "Jacobs",
            "recruiter": "Eugene Jacobs",
            "revenue": 90580
        }, {
            "_id": 23,
            "name": "Pamela Webb",
            "clients": "Roomm",
            "skills": "Webb",
            "recruiter": "Harry Webb",
            "revenue": 76241
        }, {
            "_id": 24,
            "name": "Lillian Brown",
            "clients": "Devify",
            "skills": "Brown",
            "recruiter": "Sharon Brown",
            "revenue": 73992
        }, {
            "_id": 25,
            "name": "Julia Thompson",
            "clients": "Plajo",
            "skills": "Thompson",
            "recruiter": "Frances Thompson",
            "revenue": 83624
        }, {
            "_id": 26,
            "name": "Annie Roberts",
            "clients": "Pixonyx",
            "skills": "Roberts",
            "recruiter": "Jack Roberts",
            "revenue": 73508
        }, {
            "_id": 27,
            "name": "Matthew Green",
            "clients": "Gabspot",
            "skills": "Green",
            "recruiter": "Julie Green",
            "revenue": 97915
        }, {
            "_id": 28,
            "name": "Diana Daniels",
            "clients": "Tambee",
            "skills": "Daniels",
            "recruiter": "Brian Daniels",
            "revenue": 76635
        }, {
            "_id": 29,
            "name": "Emily Barnes",
            "clients": "Topicblab",
            "skills": "Barnes",
            "recruiter": "Marilyn Barnes",
            "revenue": 69540
        }, {
            "_id": 30,
            "name": "Laura Ross",
            "clients": "Skyba",
            "skills": "Ross",
            "recruiter": "Christine Ross",
            "revenue": 73244
        }];


    });