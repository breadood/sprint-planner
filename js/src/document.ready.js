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
        var memberComp = $(".member-component.storage-component"),
            taskComp = $(".task-component.storage-component");
        planner.members = new MemberComponent(memberComp);
        planner.tasks = new TaskComponent(taskComp);
    })();
    
    // binding events
    (function () {
        planner.members.$el.on('addmember', function(event, member) {
            planner.planner.addMember(member);
        });
    })();
})
