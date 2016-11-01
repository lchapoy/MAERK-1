/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import  {EmployeeModel as Employee} from '../api/employee/employee.model';
import  {ReportModel as Report} from '../api/report/report.model';

Report.find({}).remove()
    .then(function () {
        Report.create(
            [
                {
                    "year": 2016,
                    "closed": 0,
                    "january": [{
                        "first_name": "Patricia",
                        "last_name": "Bradley",
                        "recruiter": "Ricky",
                        "placement_type": "part-time",
                        "salary": 80613,
                        "insurance": 611,
                        "relocation": 3653,
                        "immigration": 9005,
                        "pay_vacation_cost": 6629,
                        "ksquare_hourly_cost": 50,
                        "target_bill_rate": 65990,
                        "client_bill_pay": 111757,
                        "activate": false,
                        "skill": ["Clinical Development"],
                        "client": ["Dabtype", "Topicshots"]
                    }],
                    "february": [{
                        "first_name": "Clarence",
                        "last_name": "Coleman",
                        "client": [
                            "Latz",
                            "Wordify",
                            "Mycat"
                        ],
                        "skill": [
                            "SAP Business ByDesign",
                            "DVD Authoring"
                        ],
                        "recruiter": "Ricky",
                        "placement_type": "full-time",
                        "salary": 63776,
                        "insurance": 386,
                        "relocation": 3961,
                        "immigration": 7070,
                        "pay_vacation_cost": 6762,
                        "ksquare_hourly_cost": 50,
                        "target_bill_rate": 106396,
                        "client_bill_pay": 84250,
                        "activate": true
                    }]

                }
            ]
        )
    });

Employee.find({}).remove()
    .then(function () {
        Employee.create([{
            "first_name": "Adam",
            "last_name": "Griffin",
            "client": [
                "Mudo"
            ],
            "skill": [
                "DDA"
            ],
            "recruiter": "Arnold",
            "placement_type": "project",
            "salary": 99895,
            "insurance": 1000,
            "relocation": 1715,
            "immigration": 8451,
            "pay_vacation_cost": 7072,
            "ksquare_hourly_cost": 50,
            "target_bill_rate": 104574,
            "client_bill_pay": 83784,
            "activate": false

        }, {
            "first_name": "Patricia",
            "last_name": "Bradley",
            "client": [
                "Flashdog",
                "Dabtype",
                "Topicshots"
            ],
            "skill": [
                "Clinical Development"
            ],
            "recruiter": "Ricky",
            "placement_type": "part-time",
            "salary": 80613,
            "insurance": 611,
            "relocation": 3653,
            "immigration": 9005,
            "pay_vacation_cost": 6629,
            "ksquare_hourly_cost": 50,
            "target_bill_rate": 65990,
            "client_bill_pay": 111757,
            "activate": false
        }, {
            "first_name": "Kathryn",
            "last_name": "Ramos",
            "client": [
                "Kazio"
            ],
            "skill": [
                "Screening"
            ],
            "recruiter": "Bobby",
            "placement_type": "part-time",
            "salary": 91679,
            "insurance": 352,
            "relocation": 2516,
            "immigration": 7159,
            "pay_vacation_cost": 6361,
            "ksquare_hourly_cost": 50,
            "target_bill_rate": 60021,
            "client_bill_pay": 108495,
            "activate": false
        }, {
            "first_name": "Walter",
            "last_name": "Diaz",
            "client": [
                "Skynoodle",
                "Shufflester",
                "Yodo"
            ],
            "skill": [
                "JavaSE",
                "Knowledge Sharing"
            ],
            "recruiter": "Ricky",
            "placement_type": "full-time",
            "salary": 71558,
            "insurance": 288,
            "relocation": 4861,
            "immigration": 7782,
            "pay_vacation_cost": 8737,
            "ksquare_hourly_cost": 50,
            "target_bill_rate": 89969,
            "client_bill_pay": 106938,
            "activate": false
        }, {
            "first_name": "Clarence",
            "last_name": "Coleman",
            "client": [
                "Latz",
                "Wordify",
                "Mycat"
            ],
            "skill": [
                "SAP Business ByDesign",
                "DVD Authoring"
            ],
            "recruiter": "Ricky",
            "placement_type": "full-time",
            "salary": 63776,
            "insurance": 386,
            "relocation": 3961,
            "immigration": 7070,
            "pay_vacation_cost": 6762,
            "ksquare_hourly_cost": 50,
            "target_bill_rate": 106396,
            "client_bill_pay": 84250,
            "activate": true
        }, {
            "first_name": "Carolyn",
            "last_name": "Cruz",
            "client": [
                "Browsedrive",
                "Youtags",
                "Divape"
            ],
            "skill": [
                "OBIEE"
            ],
            "recruiter": "Arnold",
            "placement_type": "project",
            "salary": 76511,
            "insurance": 941,
            "relocation": 1557,
            "immigration": 8014,
            "pay_vacation_cost": 6971,
            "ksquare_hourly_cost": 50,
            "target_bill_rate": 103492,
            "client_bill_pay": 101606,
            "activate": false
        }, {
            "first_name": "Timothy",
            "last_name": "Ross",
            "client": [
                "Brightdog",
                "Thoughtstorm"
            ],
            "skill": [
                "Lawson HRIS"
            ],
            "recruiter": "Bobby",
            "placement_type": "part-time",
            "salary": 86177,
            "insurance": 346,
            "relocation": 1280,
            "immigration": 5571,
            "pay_vacation_cost": 5269,
            "ksquare_hourly_cost": 50,
            "target_bill_rate": 64198,
            "client_bill_pay": 97347,
            "activate": false
        }, {
            "first_name": "Paul",
            "last_name": "Fuller",
            "client": [
                "Voolith"
            ],
            "skill": [
                "UCC filings"
            ],
            "recruiter": "Rocky",
            "placement_type": "project",
            "salary": 73004,
            "insurance": 613,
            "relocation": 2500,
            "immigration": 8485,
            "pay_vacation_cost": 5729,
            "ksquare_hourly_cost": 50,
            "target_bill_rate": 109610,
            "client_bill_pay": 117599,
            "activate": false
        }, {
            "first_name": "Joe",
            "last_name": "Walker",
            "client": [
                "Tavu",
                "Gigaclub",
                "Yodo"
            ],
            "skill": [
                "Start-ups",
                "NPO"
            ],
            "recruiter": "Ricky",
            "placement_type": "project",
            "salary": 56728,
            "insurance": 264,
            "relocation": 4818,
            "immigration": 9962,
            "pay_vacation_cost": 7896,
            "ksquare_hourly_cost": 50,
            "target_bill_rate": 115543,
            "client_bill_pay": 87657,
            "activate": true
        }, {
            "first_name": "Robert",
            "last_name": "Washington",
            "client": [
                "Yodel",
                "Devpoint"
            ],
            "skill": [
                "National Security",
                "RPG III"
            ],
            "recruiter": "Ricky",
            "placement_type": "project",
            "salary": 53474,
            "insurance": 784,
            "relocation": 3122,
            "immigration": 5421,
            "pay_vacation_cost": 7314,
            "ksquare_hourly_cost": 50,
            "target_bill_rate": 118865,
            "client_bill_pay": 97842,
            "activate": true
        }, {
            "first_name": "Tina",
            "last_name": "Mccoy",
            "client": [
                "Cogibox",
                "Reallinks"
            ],
            "skill": [
                "Automotive",
                "DVD"
            ],
            "recruiter": "Bobby",
            "placement_type": "project",
            "salary": 97786,
            "insurance": 346,
            "relocation": 3054,
            "immigration": 7653,
            "pay_vacation_cost": 6292,
            "ksquare_hourly_cost": 50,
            "target_bill_rate": 71390,
            "client_bill_pay": 102582,
            "activate": false
        }, {
            "first_name": "Janet",
            "last_name": "Bishop",
            "client": [
                "Rhybox",
                "Skippad",
                "Digitube"
            ],
            "skill": [
                "Lawson HRIS",
                "Drupal"
            ],
            "recruiter": "Bobby",
            "placement_type": "full-time",
            "salary": 86142,
            "insurance": 511,
            "relocation": 4280,
            "immigration": 6432,
            "pay_vacation_cost": 9992,
            "ksquare_hourly_cost": 50,
            "target_bill_rate": 112173,
            "client_bill_pay": 111484,
            "activate": true
        }, {
            "first_name": "Bruce",
            "last_name": "Palmer",
            "client": [
                "Brightbean",
                "Mycat",
                "Thoughtsphere"
            ],
            "skill": [
                "SI",
                "User Scenarios"
            ],
            "recruiter": "Bobby",
            "placement_type": "project",
            "salary": 97995,
            "insurance": 166,
            "relocation": 2262,
            "immigration": 8097,
            "pay_vacation_cost": 8519,
            "ksquare_hourly_cost": 50,
            "target_bill_rate": 87305,
            "client_bill_pay": 103588,
            "activate": true
        }, {
            "first_name": "Andrea",
            "last_name": "Payne",
            "client": [
                "Yozio",
                "Cogilith",
                "Zooxo"
            ],
            "skill": [
                "Type Approval"
            ],
            "recruiter": "Bobby",
            "placement_type": "full-time",
            "salary": 67533,
            "insurance": 347,
            "relocation": 3594,
            "immigration": 7367,
            "pay_vacation_cost": 7294,
            "ksquare_hourly_cost": 50,
            "target_bill_rate": 103543,
            "client_bill_pay": 117013,
            "activate": true
        }, {
            "first_name": "Bonnie",
            "last_name": "Stevens",
            "client": [
                "Jabbersphere",
                "Bubblemix",
                "Ntag"
            ],
            "skill": [
                "Occupational Therapy"
            ],
            "recruiter": "Ricky",
            "placement_type": "part-time",
            "salary": 59936,
            "insurance": 765,
            "relocation": 1429,
            "immigration": 9515,
            "pay_vacation_cost": 7467,
            "ksquare_hourly_cost":50,
            "target_bill_rate": 109375,
            "client_bill_pay": 112658,
            "activate": true
        }, {
            "first_name": "Mark",
            "last_name": "Brown",
            "client": [
                "Wordtune",
                "Vipe"
            ],
            "skill": [
                "MCMS"
            ],
            "recruiter": "Ricky",
            "placement_type": "full-time",
            "salary": 68094,
            "insurance": 587,
            "relocation": 2416,
            "immigration": 6640,
            "pay_vacation_cost": 7488,
            "ksquare_hourly_cost": 50,
            "target_bill_rate": 91212,
            "client_bill_pay": 97064,
            "activate": true
        }, {
            "first_name": "Scott",
            "last_name": "Collins",
            "client": [
                "Wordpedia"
            ],
            "skill": [
                "Golf",
                "MGCP"
            ],
            "recruiter": "Bobby",
            "placement_type": "project",
            "salary": 77796,
            "insurance": 261,
            "relocation": 2466,
            "immigration": 8087,
            "pay_vacation_cost": 8603,
            "ksquare_hourly_cost": 50,
            "target_bill_rate": 81912,
            "client_bill_pay": 107068,
            "activate": true
        }, {
            "first_name": "Cheryl",
            "last_name": "Frazier",
            "client": [
                "Avavee",
                "Jabberbean",
                "Linkbridge"
            ],
            "skill": [
                "Offshore Oil",
                "EHR"
            ],
            "recruiter": "Ricky",
            "placement_type": "project",
            "salary": 57943,
            "insurance": 869,
            "relocation": 1907,
            "immigration": 9840,
            "pay_vacation_cost": 7441,
            "ksquare_hourly_cost": 50,
            "target_bill_rate": 94913,
            "client_bill_pay": 117448,
            "activate": true
        }])
            .then(function () {
                console.log('finished populating employees');
            });
    });


Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
