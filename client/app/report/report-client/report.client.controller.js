/**
 * Created by cleverjam on 11/2/16.
 */
class ReportClientController {

    constructor(reportData, months) {
        this.orderVal = 'client';
        this.page = 1;
        this.limit = 5;
        this.reports = reportData;
        this.years = Object.keys(reportData.client);
        this.months = months;

        this.selection = {
            year: "2016",
            month: "january"
        };
        // this.generateTableData();
        this.chart = this.generateChartData("2016", "january");
        this.table = this.generateTableData("2016", "january");
    }

    update(year, month) {
        if ((year !== this.selection.year) && (month !== this.selection.month)){
            this.chart = this.generateChartData(year || this.selection.year, month || this.selection.month);
            this.table = this.generateTableData(year || this.selection.year, month || this.selection.month);
            this.selection.year = year || this.selection.year;
            this.selection.month = month || this.selection.month;
        }
    }
    generateTableData(year, month) {
        var clients, table = [];
        clients = Object.keys(this.reports.client[year][month]);
        clients.forEach(e=> {
            if (e !== 'closed')
                table.push({
                    client: e,
                    count: this.reports.client[year][month][e].count,
                    revenue: this.reports.client[year][month][e]['actual_revenue']
                })
        });
        return table;
    }

    generateChartData(year, month) {
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