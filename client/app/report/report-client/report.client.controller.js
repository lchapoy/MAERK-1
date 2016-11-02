/**
 * Created by cleverjam on 11/2/16.
 */
class ReportClientController {

    constructor(reportData, months) {
        this.reports = reportData;
        this.years = Object.keys(reportData.client);
        this.months = months;
        this.chart = this.getMonthReport("2016", "january");
        this.selection = {
            year: "2016",
            month: "january"
        }
    }

    update(year, month) {
        if ((year !== this.selection.year) && (month !== this.selection.month)){
            console.log('updating chart');
            this.chart = this.getMonthReport(year || this.selection.year, month || this.selection.month);
            this.selection.year = year || this.selection.year;
            this.selection.month = month || this.selection.month;
        }
    }

    getMonthReport(year, month) {
        var chart = {
            labels: [],
            data: [],
            closed
        };
        for (var client in this.reports.client[year][month]) {
            if (this.reports.client[year][month].hasOwnProperty(client) && client != "closed") {
                chart.labels.push(client);
                chart.data.push(this.reports.client[year][month][client]["actual_revenue"]);
            }
        }
        return chart;
    }
}
angular.module('maerkApp')
.controller('ReportClientController', ReportClientController);