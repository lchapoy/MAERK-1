/**
 * Created by cleverjam on 11/3/16.
 */
class SkillClientController {
    constructor(reportData, months) {
        this.orderVal = 'skill';
        this.page = 1;
        this.limit = 5;
        this.reports = reportData;
        this.years = Object.keys(reportData.skill);
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
        var skills, table = [];
        skills = Object.keys(this.reports.skill[year][month]);
        skills.forEach(e=> {
            if (e !== 'closed')
                table.push({
                    skill: e,
                    count: this.reports.skill[year][month][e].count,
                    revenue: this.reports.skill[year][month][e]['actual_revenue']
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