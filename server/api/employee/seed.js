/**
 * Created by cleverjam on 10/26/16.
 */

import Employee from './employee.model';

Employee.find({}).remove()
    .then(function () {
        Employee.create({
            "first_name": "Jeffrey",
            "last_name": "Patterson",
            "clients": [
                "Aimbo",
                "Edgeclub"
            ],
            "skills": [
                "Tcsh",
                "IM",
                "AED"
            ],
            "recruiter": "Jeffrey Patterson",
            "salary": 65161
        }, {
            "first_name": "Jeffrey",
            "last_name": "Meyer",
            "clients": [
                "Youbridge",
                "Kwideo"
            ],
            "skills": [
                "MDI",
                "JCreator",
                "Visual Basic"
            ],
            "recruiter": "Jeffrey Meyer",
            "salary": 59132
        }, {
            "first_name": "Albert",
            "last_name": "Kelly",
            "clients": [
                "Skimia",
                "Babblestorm"
            ],
            "skills": [
                "XTRACT",
                "LBO",
                "LDO"
            ],
            "recruiter": "Albert Kelly",
            "salary": 92726
        }, {
            "first_name": "Nicholas",
            "last_name": "Stevens",
            "clients": [
                "Wikizz",
                "Jaxbean"
            ],
            "skills": [
                "Customer Engagement",
                "3Com NBX",
                "Study Abroad Programs"
            ],
            "recruiter": "Nicholas Stevens",
            "salary": 92904
        }, {
            "first_name": "Louise",
            "last_name": "Andrews",
            "clients": [
                "Mycat",
                "Feedbug"
            ],
            "skills": [
                "Teeth Whitening",
                "JWICS",
                "AMI"
            ],
            "recruiter": "Louise Andrews",
            "salary": 82152
        }, {
            "first_name": "Douglas",
            "last_name": "Parker",
            "clients": [
                "Cogibox",
                "Cogidoo"
            ],
            "skills": [
                "TCM",
                "Pumps",
                "Chemical Engineering"
            ],
            "recruiter": "Douglas Parker",
            "salary": 62378
        }, {
            "first_name": "Shawn",
            "last_name": "Hudson",
            "clients": [
                "Trunyx",
                "Oloo"
            ],
            "skills": [
                "Creative Writing",
                "DNA Sequencing",
                "Titration"
            ],
            "recruiter": "Shawn Hudson",
            "salary": 72507
        }, {
            "first_name": "Timothy",
            "last_name": "Watson",
            "clients": [
                "Meembee",
                "Browsetype"
            ],
            "skills": [
                "UB04",
                "Electric Utility",
                "Nitrous Oxide"
            ],
            "recruiter": "Timothy Watson",
            "salary": 86863
        }, {
            "first_name": "Phyllis",
            "last_name": "Stone",
            "clients": [
                "Dynazzy",
                "Skivee"
            ],
            "skills": [
                "BSI Tax Factory",
                "NCover",
                "Petroleum Geology"
            ],
            "recruiter": "Phyllis Stone",
            "salary": 98703
        }, {
            "first_name": "Joyce",
            "last_name": "Rice",
            "clients": [
                "Realcube",
                "Bluezoom"
            ],
            "skills": [
                "RS232",
                "KML",
                "GPRS"
            ],
            "recruiter": "Joyce Rice",
            "salary": 77206
        }, {
            "first_name": "Joshua",
            "last_name": "Riley",
            "clients": [
                "Oodoo",
                "Izio"
            ],
            "skills": [
                "Yard Signs",
                "Outdoors",
                "Young People"
            ],
            "recruiter": "Joshua Riley",
            "salary": 96278
        }, {
            "first_name": "Edward",
            "last_name": "Ramos",
            "clients": [
                "Fiveclub",
                "Realmix"
            ],
            "skills": [
                "CTAs",
                "Literature",
                "RFQ Development"
            ],
            "recruiter": "Edward Ramos",
            "salary": 79924
        }, {
            "first_name": "Joe",
            "last_name": "Wallace",
            "clients": [
                "Linkbuzz",
                "Riffpedia"
            ],
            "skills": [
                "Group Dynamics",
                "Financial Risk",
                "Business Ethics"
            ],
            "recruiter": "Joe Wallace",
            "salary": 84281
        }, {
            "first_name": "Keith",
            "last_name": "Robertson",
            "clients": [
                "Jaxworks",
                "Brainverse"
            ],
            "skills": [
                "ABAP-OO",
                "CGI scripts",
                "DS4000"
            ],
            "recruiter": "Keith Robertson",
            "salary": 56618
        }, {
            "first_name": "Sharon",
            "last_name": "Stephens",
            "clients": [
                "Wordtune",
                "Flashdog"
            ],
            "skills": [
                "Video over IP",
                "Mac OS X Server",
                "Fitness"
            ],
            "recruiter": "Sharon Stephens",
            "salary": 68003
        }, {
            "first_name": "Maria",
            "last_name": "Moore",
            "clients": [
                "JumpXS",
                "Brainverse"
            ],
            "skills": [
                "LPIC",
                "Hazardous Materials",
                "DLX"
            ],
            "recruiter": "Maria Moore",
            "salary": 87101
        }, {
            "first_name": "Sharon",
            "last_name": "Peterson",
            "clients": [
                "Blogtag",
                "Skyndu"
            ],
            "skills": [
                "QS9000",
                "WSUS",
                "Aerial Photography"
            ],
            "recruiter": "Sharon Peterson",
            "salary": 95926
        }, {
            "first_name": "Bruce",
            "last_name": "Garrett",
            "clients": [
                "Ozu",
                "Topiclounge"
            ],
            "skills": [
                "Wrongful Death",
                "OTDR",
                "Fluorescence Microscopy"
            ],
            "recruiter": "Bruce Garrett",
            "salary": 61292
        }, {
            "first_name": "Amy",
            "last_name": "Perry",
            "clients": [
                "Reallinks",
                "Kayveo"
            ],
            "skills": [
                "OO Software Development",
                "CMC Regulatory Affairs",
                "Energy Efficiency"
            ],
            "recruiter": "Amy Perry",
            "salary": 85273
        }, {
            "first_name": "Katherine",
            "last_name": "Perkins",
            "clients": [
                "Aimbo",
                "Gabtune"
            ],
            "skills": [
                "NDDS",
                "DFR",
                "Urban Search &amp; Rescue"
            ],
            "recruiter": "Katherine Perkins",
            "salary": 75288
        })
            .then(function () {
                console.log('finished populating employees');
            });
    });