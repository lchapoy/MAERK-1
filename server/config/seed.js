/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import  {EmployeeModel as Employee} from '../api/employee/employee.model';
import  {ReportModel as Report} from '../api/report/report.model';
import  {RecruiterModel as Recruiter} from '../api/recruiter/recruiter.model';

Recruiter.find({}).remove()
    .then(function () {
       Recruiter.create([{
           "first_name": "Todd",
           "last_name": "Morgan",
           "amount_per_hired": 0.069,
           "placement_type": "Project"
       }, {
           "first_name": "Kathryn",
           "last_name": "White",
           "amount_per_hired": 1000,
           "placement_type": "Project"
       }, {
           "first_name": "Kimberly",
           "last_name": "Knight",
           "amount_per_hired": 1500,
           "placement_type": "Project"
       }, {
           "first_name": "Gary",
           "last_name": "Knight",
           "amount_per_hired": 0.229,
           "placement_type": "Full Time"
       }, {
           "first_name": "Donald",
           "last_name": "Turner",
           "amount_per_hired": 0.033,
           "placement_type": "Part Time"
       }, {
           "first_name": "Ralph",
           "last_name": "Hansen",
           "amount_per_hired": 0.196,
           "placement_type": "Project"
       }, {
           "first_name": "Kimberly",
           "last_name": "Sims",
           "amount_per_hired": 0.176,
           "placement_type": "Full Time"
       }, {
           "first_name": "Benjamin",
           "last_name": "Patterson",
           "amount_per_hired": 0.271,
           "placement_type": "Project"
       }, {
           "first_name": "Stephanie",
           "last_name": "Oliver",
           "amount_per_hired": 0.081,
           "placement_type": "Project"
       }, {
           "first_name": "Nancy",
           "last_name": "Williams",
           "amount_per_hired": 0.164,
           "placement_type": "Part Time"
       }]).then(function () {
           console.log('finished populating recruiters');
       });
    });
Report.find({}).remove()
    .then(function () {
        //
    });

Employee.find({}).remove()
    .then(function () {
        Employee.create([{
            "first_name": "Larry",
            "last_name": "Young",
            "client": [
                "Shuffletag"
            ],
            "skill": [
                "Interior Design"
            ],
            "recruiter": " Jane ",
            "placement_type": "Project",
            "salary": 97,
            "insurance": 997,
            "relocation": 8219,
            "immigration": 8949,
            "pay_vacation_cost": 5674,
            "ksquare_hourly_cost": 88,
            "target_bill_rate": 93,
            "client_bill_pay": 70,
            "activate": 84,
            "actual_hours": "",
            "offset": "",
            "start_date": "2016-10-06T17:51:45Z"
        }, {
            "first_name": "Tina",
            "last_name": "Rodriguez",
            "client": [
                "Eabox"
            ],
            "skill": [
                "Google Apps"
            ],
            "recruiter": " John ",
            "placement_type": "Project",
            "salary": 93,
            "insurance": 671,
            "relocation": 5274,
            "immigration": 9335,
            "pay_vacation_cost": 8820,
            "ksquare_hourly_cost": 59,
            "target_bill_rate": 58,
            "client_bill_pay": 80,
            "activate": 91,
            "actual_hours": "",
            "offset": "",
            "start_date": "2016-11-16T07:01:43Z"
        }, {
            "first_name": "Donald",
            "last_name": "Cook",
            "client": [
                "Cogidoo"
            ],
            "skill": [
                "LTE"
            ],
            "recruiter": " Jess",
            "placement_type": "Part Time",
            "salary": 81,
            "insurance": 549,
            "relocation": 9219,
            "immigration": 9507,
            "pay_vacation_cost": 9315,
            "ksquare_hourly_cost": 80,
            "target_bill_rate": 60,
            "client_bill_pay": 84,
            "activate": 69,
            "actual_hours": "",
            "offset": "",
            "start_date": "2016-11-01T07:30:40Z"
        }, {
            "first_name": "Albert",
            "last_name": "Stewart",
            "client": [
                "Skilith"
            ],
            "skill": [
                "XCOM"
            ],
            "recruiter": " Jess",
            "placement_type": "Project",
            "salary": 99,
            "insurance": 1000,
            "relocation": 5849,
            "immigration": 5519,
            "pay_vacation_cost": 8504,
            "ksquare_hourly_cost": 93,
            "target_bill_rate": 60,
            "client_bill_pay": 96,
            "activate": 89,
            "actual_hours": "",
            "offset": "",
            "start_date": "2016-10-06T11:16:03Z"
        }, {
            "first_name": "Lawrence",
            "last_name": "Fuller",
            "client": [
                "Mymm"
            ],
            "skill": [
                "Amazon VPC"
            ],
            "recruiter": " Jess",
            "placement_type": "Full Time",
            "salary": 69,
            "insurance": 789,
            "relocation": 6086,
            "immigration": 9631,
            "pay_vacation_cost": 8863,
            "ksquare_hourly_cost": 74,
            "target_bill_rate": 65,
            "client_bill_pay": 80,
            "activate": 100,
            "actual_hours": "",
            "offset": "",
            "start_date": "2016-11-11T12:03:26Z"
        }, {
            "first_name": "Roy",
            "last_name": "Price",
            "client": [
                "Oyondu"
            ],
            "skill": [
                "Fashion"
            ],
            "recruiter": " Jane ",
            "placement_type": "Project",
            "salary": 93,
            "insurance": 815,
            "relocation": 8879,
            "immigration": 6230,
            "pay_vacation_cost": 6472,
            "ksquare_hourly_cost": 93,
            "target_bill_rate": 66,
            "client_bill_pay": 67,
            "activate": 97,
            "actual_hours": "",
            "offset": "",
            "start_date": "2016-10-06T12:53:43Z"
        }, {
            "first_name": "Earl",
            "last_name": "Kelley",
            "client": [
                "Twitterworks"
            ],
            "skill": [
                "Affiliate Management"
            ],
            "recruiter": " Jess",
            "placement_type": "Project",
            "salary": 51,
            "insurance": 641,
            "relocation": 9360,
            "immigration": 6768,
            "pay_vacation_cost": 5661,
            "ksquare_hourly_cost": 76,
            "target_bill_rate": 77,
            "client_bill_pay": 74,
            "activate": 86,
            "actual_hours": "",
            "offset": "",
            "start_date": "2016-11-01T20:29:04Z"
        }, {
            "first_name": "Cynthia",
            "last_name": "Romero",
            "client": [
                "Browsezoom"
            ],
            "skill": [
                "Uranium"
            ],
            "recruiter": " Jess",
            "placement_type": "Project",
            "salary": 92,
            "insurance": 646,
            "relocation": 6348,
            "immigration": 7982,
            "pay_vacation_cost": 5038,
            "ksquare_hourly_cost": 78,
            "target_bill_rate": 52,
            "client_bill_pay": 97,
            "activate": 97,
            "actual_hours": "",
            "offset": "",
            "start_date": "2016-10-17T11:01:32Z"
        }, {
            "first_name": "Patricia",
            "last_name": "Thompson",
            "client": [
                "Dabtype"
            ],
            "skill": [
                "Process Automation"
            ],
            "recruiter": "Bobby ",
            "placement_type": "Project",
            "salary": 64,
            "insurance": 674,
            "relocation": 6314,
            "immigration": 5377,
            "pay_vacation_cost": 6432,
            "ksquare_hourly_cost": 90,
            "target_bill_rate": 75,
            "client_bill_pay": 50,
            "activate": 75,
            "actual_hours": "",
            "offset": "",
            "start_date": "2016-11-29T17:41:46Z"
        }, {
            "first_name": "Diane",
            "last_name": "Allen",
            "client": [
                "Midel"
            ],
            "skill": [
                "Billing Systems"
            ],
            "recruiter": " Jane ",
            "placement_type": "Project",
            "salary": 56,
            "insurance": 827,
            "relocation": 9992,
            "immigration": 9139,
            "pay_vacation_cost": 6626,
            "ksquare_hourly_cost": 77,
            "target_bill_rate": 80,
            "client_bill_pay": 74,
            "activate": 74,
            "actual_hours": "",
            "offset": "",
            "start_date": "2016-10-25T17:58:54Z"
        }, {
            "first_name": "Phillip",
            "last_name": "Reynolds",
            "client": [
                "Divavu"
            ],
            "skill": [
                "Government Procurement"
            ],
            "recruiter": " John ",
            "placement_type": "Project",
            "salary": 87,
            "insurance": 577,
            "relocation": 5775,
            "immigration": 8885,
            "pay_vacation_cost": 7306,
            "ksquare_hourly_cost": 73,
            "target_bill_rate": 71,
            "client_bill_pay": 57,
            "activate": 53,
            "actual_hours": "",
            "offset": "",
            "start_date": "2016-11-11T00:34:36Z"
        }, {
            "first_name": "Joshua",
            "last_name": "Johnson",
            "client": [
                "Thoughtstorm"
            ],
            "skill": [
                "Particle Effects"
            ],
            "recruiter": " Jess",
            "placement_type": "Part Time",
            "salary": 96,
            "insurance": 919,
            "relocation": 8608,
            "immigration": 6862,
            "pay_vacation_cost": 6562,
            "ksquare_hourly_cost": 74,
            "target_bill_rate": 80,
            "client_bill_pay": 56,
            "activate": 81,
            "actual_hours": "",
            "offset": "",
            "start_date": "2016-11-09T15:47:11Z"
        }, {
            "first_name": "Janet",
            "last_name": "Smith",
            "client": [
                "Zoonder"
            ],
            "skill": [
                "Analytical Skills"
            ],
            "recruiter": " Jess",
            "placement_type": "Full Time",
            "salary": 68,
            "insurance": 786,
            "relocation": 8260,
            "immigration": 6579,
            "pay_vacation_cost": 7688,
            "ksquare_hourly_cost": 84,
            "target_bill_rate": 56,
            "client_bill_pay": 68,
            "activate": 56,
            "actual_hours": "",
            "offset": "",
            "start_date": "2016-10-21T02:08:58Z"
        }, {
            "first_name": "Justin",
            "last_name": "Peterson",
            "client": [
                "Jaxspan"
            ],
            "skill": [
                "Requirements Gathering"
            ],
            "recruiter": " John ",
            "placement_type": "Project",
            "salary": 58,
            "insurance": 680,
            "relocation": 5813,
            "immigration": 9996,
            "pay_vacation_cost": 9450,
            "ksquare_hourly_cost": 65,
            "target_bill_rate": 81,
            "client_bill_pay": 82,
            "activate": 60,
            "actual_hours": "",
            "offset": "",
            "start_date": "2016-10-12T07:08:46Z"
        }, {
            "first_name": "Joan",
            "last_name": "Gibson",
            "client": [
                "Mudo"
            ],
            "skill": [
                "GSM"
            ],
            "recruiter": " Jess",
            "placement_type": "Part Time",
            "salary": 89,
            "insurance": 665,
            "relocation": 8415,
            "immigration": 8939,
            "pay_vacation_cost": 7791,
            "ksquare_hourly_cost": 84,
            "target_bill_rate": 75,
            "client_bill_pay": 97,
            "activate": 85,
            "actual_hours": "",
            "offset": "",
            "start_date": "2016-10-19T02:50:26Z"
        }, {
            "first_name": "Melissa",
            "last_name": "Cruz",
            "client": [
                "Linkbuzz"
            ],
            "skill": [
                "SRDS"
            ],
            "recruiter": " Jess",
            "placement_type": "Full Time",
            "salary": 58,
            "insurance": 863,
            "relocation": 9192,
            "immigration": 6926,
            "pay_vacation_cost": 8642,
            "ksquare_hourly_cost": 99,
            "target_bill_rate": 60,
            "client_bill_pay": 92,
            "activate": 80,
            "actual_hours": "",
            "offset": "",
            "start_date": "2016-10-16T14:29:06Z"
        }, {
            "first_name": "Jacqueline",
            "last_name": "Hill",
            "client": [
                "Eazzy"
            ],
            "skill": [
                "Omron"
            ],
            "recruiter": " Jess",
            "placement_type": "Project",
            "salary": 74,
            "insurance": 804,
            "relocation": 6413,
            "immigration": 8450,
            "pay_vacation_cost": 8108,
            "ksquare_hourly_cost": 98,
            "target_bill_rate": 72,
            "client_bill_pay": 78,
            "activate": 69,
            "actual_hours": "",
            "offset": "",
            "start_date": "2016-11-06T19:58:16Z"
        }, {
            "first_name": "Amy",
            "last_name": "Greene",
            "client": [
                "Zava"
            ],
            "skill": [
                "MCS"
            ],
            "recruiter": " John ",
            "placement_type": "Project",
            "salary": 72,
            "insurance": 771,
            "relocation": 6168,
            "immigration": 7926,
            "pay_vacation_cost": 9944,
            "ksquare_hourly_cost": 95,
            "target_bill_rate": 90,
            "client_bill_pay": 58,
            "activate": 84,
            "actual_hours": "",
            "offset": "",
            "start_date": "2016-11-22T18:26:41Z"
        }, {
            "first_name": "Frank",
            "last_name": "Pierce",
            "client": [
                "Latz"
            ],
            "skill": [
                "Ducting"
            ],
            "recruiter": " Jess",
            "placement_type": "Full Time",
            "salary": 84,
            "insurance": 892,
            "relocation": 5093,
            "immigration": 9361,
            "pay_vacation_cost": 7395,
            "ksquare_hourly_cost": 80,
            "target_bill_rate": 61,
            "client_bill_pay": 80,
            "activate": 80,
            "actual_hours": "",
            "offset": "",
            "start_date": "2016-10-17T20:06:24Z"
        }, {
            "first_name": "Jimmy",
            "last_name": "Wilson",
            "client": [
                "Fiveclub"
            ],
            "skill": [
                "Quantum GIS"
            ],
            "recruiter": " Jess",
            "placement_type": "Project",
            "salary": 59,
            "insurance": 846,
            "relocation": 5202,
            "immigration": 8669,
            "pay_vacation_cost": 9589,
            "ksquare_hourly_cost": 71,
            "target_bill_rate": 97,
            "client_bill_pay": 59,
            "activate": 98,
            "actual_hours": "",
            "offset": "",
            "start_date": "2016-11-01T21:33:41Z"
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
