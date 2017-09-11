'use strict';
class PlannerComponent {
    constructor(item, config) {
        this.$el = $(item);
        this.el = item;
        this.events = config.events || {};


        this.initialize();
        //        this.bindEvents();
    }

    initialize() {
        // initialize date components
        this.initializeDates();

        // initialize calendar component
    }
    
    initializeDates() {
        var startDate = this.$el.find(".date-component.start-date");
        var endDate = this.$el.find(".date-component.end-date");

        var today = new Date(),
            endDay = new Date(),
            setToday = function () {
                this.setDate(new Date().toLocalDate());
            };
        endDay.setDate(today.getDate() + 14);
        var startConfig = {
                default: {
                    date: today.toLocalDate()
                },
                events: {
                    click: setToday
                }
            },
            endConfig = {
                default: {
                    date: endDay.toLocalDate()
                },
                events: {
                    click: setToday
                }
            }
        this.startDate = new DateComponent(startDate.get(0), startConfig);
        this.endDate = new DateComponent(endDate.get(0), endConfig);
    }
}