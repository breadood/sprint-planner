'use strict';

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
        new PlannerComponent(plannerComponent.get(0), {});
    })();

    // initialize storage components
    (function () {
        // set configs
        var els = $(".storage-component"),
            defaultConfig = {},
            memberConfig = {
                events: {
                    click: function (event) {
                        var member = this.input.val(),
                            newBlock = '<div class="panel-block">' + member + '<progress class="progress is-primary is-small" value="0" max="100">0%</progress><button class="delete is-small"></button></div>';
                        this.panel.append(newBlock);
                        this.input.val('');
                    }
                }
            },
            taskConfig = {
                events: {
                    click: function (event) {
                        var task = this.input.val(),
                            newBlock = '<div class="panel-block">' + task + '<button class="delete is-small"></button></div>';
                        this.panel.append(newBlock);
                        this.input.val('');
                    }
                }
            };
        // intialize with respective configs
        for (var index = 0; index < els.length; index++) {
            var el = els[index];
            if ($(el).hasClass('member-component')) {
                new StorageComponent(el, memberConfig);
            } else if ($(el).hasClass('task-component')) {
                new StorageComponent(el, taskConfig);
            } else {
                new StorageComponent(el, defaultConfig);
            }
        }
    })();
})
