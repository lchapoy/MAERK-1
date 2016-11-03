/**
 * Created by cleverjam on 11/3/16.
 */
class SkillClientController {
    constructor(reportData, months) {
        this.reports = reportData;
        this.years = Object.keys(reportData.skill);
        this.months = months;
        this.chart = this.getMonthReport("2016", "january");
        this.selection = {
            year: "2016",
            month: "january"
        }
    }

    update(year, month) {
        if ((year !== this.selection.year) && (month !== this.selection.month)){
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
        for (var skill in this.reports.skill[year][month]) {
            if (this.reports.skill[year][month].hasOwnProperty(skill) && skill != "closed") {
                chart.labels.push(skill);
                chart.data.push(this.reports.skill[year][month][skill]["actual_revenue"]);
            }
        }
        return chart;
    }
}
angular.module('maerkApp')
    .controller('SkillClientController', SkillClientController);