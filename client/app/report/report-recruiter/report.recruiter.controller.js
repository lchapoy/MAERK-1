/**
 * Created by cleverjam on 11/10/16.
 */
class ReportRecruiterController {
    constructor(reportData, months) {
        this.orderVal = 'recruiter';
        this.page = 1;
        this.limit = 5;
        this.reports = reportData;
        this.years = Object.keys(reportData.recruiter);
        this.months = months;
        this.selection = {
            year: "2016",
            month: "january"
        };
        this.chart = this.generateChartData("2016", "january");
        this.table = this.generateTableData("2016", "january");
    }

    update(year, month) {
        if ((year !== this.selection.year) && (month !== this.selection.month)) {
            this.chart = this.generateChartData(year || this.selection.year, month || this.selection.month);
            this.table = this.generateTableData(year || this.selection.year, month || this.selection.month);
            this.selection.year = year || this.selection.year;
            this.selection.month = month || this.selection.month;
        }
    }

    generateTableData(year, month) {
        var recruiters, table = [];
        recruiters = Object.keys(this.reports.recruiter[year][month]);
        recruiters.forEach(e=> {
            if (e !== 'closed') {
                table.push({
                    recruiter: e,
                    count: this.reports.recruiter[year][month][e].count,
                    revenue: this.reports.recruiter[year][month][e]['actual_revenue']
                })
            }
        });
        return table;
    }

    generateChartData(year, month) {
        var chart = {
            labels: [],
            data: [],
            closed
        };
        for (var recruiter in this.reports.recruiter[year][month]) {
            if (this.reports.recruiter[year][month].hasOwnProperty(recruiter) && recruiter != "closed") {
                chart.labels.push(recruiter);
                chart.data.push(this.reports.recruiter[year][month][recruiter]["actual_revenue"]);
            }
        }
        return chart;
    }
}
angular.module('maerkApp')
    .controller('ReportRecruiterController', ReportRecruiterController);