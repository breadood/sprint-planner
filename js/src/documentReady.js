'use strict';
var planner = {};

$(document).ready(function () {
    // add prototypical method for Date
    Date.prototype.toLocalDate = function () {
        var local = new Date(this);
        local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
        return local.toJSON().slice(0, 10);
    };
    Date.prototype.addDays = function (days) {
        this.setDate(this.getDate() + days);  
    };
    Date.prototype.getUTCDayString = function () {
        var week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            ofDay = this.getUTCDay();
        return week[ofDay];
    };
    
    // initialize planner component
    (function () {
        var plannerComponent = $("section.planner-component");
        planner.planner = new PlannerComponent(plannerComponent.get(0), {});
    })();

    // initialize storage components
    (function () {
        // set configs
        var memberClick = function (event) {
                var member = this.input.val(),
                    newBlock = '<div class="panel-block"><div class="member-name">' + member + '</div><progress class="progress is-primary is-small" value="0" max="100">0%</progress><button class="delete is-small"></button></div>';
                this.panel.append(newBlock);
                this.input.val('');
                planner.planner.addMember(member);
            },
            taskClick = function (event) {
                var task = this.input.val(),
                    newBlock = '<div class="panel-block"><div class="task-name">' + task + '</div><button class="delete is-small"></button></div>';
                this.panel.append(newBlock);
                this.input.val('');
            };
        var memberComp = $(".member-component.storage-component"),
            taskComp = $(".task-component.storage-component");
        planner.members = new StorageComponent(memberComp, {});
        planner.tasks = new StorageComponent(taskComp, {});
        planner.members.button.on('click', memberClick.bind(planner.members));
        planner.tasks.button.on('click', taskClick.bind(planner.tasks));
    })();
})
