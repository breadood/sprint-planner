'use strict';

class PlannerComponent {
    constructor(el, config) {
        this.$el = $(el);
        this.el = el;
        this.events = config.events || {};


        this.initialize();
        this.bindEvents();
    }

    initialize() {
        this.initializeDates();
        this.initializeCalendar();
    }
    
    initializeDates() {
        var startDate = this.$el.find(".date-component.start-date");
        var endDate = this.$el.find(".date-component.end-date");

        var today = new Date(),
            endDay = new Date(),
            setToday = function (event) {
                this.setDate(new Date().toLocalDate());
                $(this.input).trigger("change");
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
    
    initializeCalendar() {
        var calendar = this.$el.find('.calendar-component').get(0);
        var config = {
            startDate: this.startDate.getDate(),
            endDate: this.endDate.getDate(),
            members: []
        };
        this.calendar = new CalendarComponent(calendar, config);
    }
    
    bindEvents() {
        this.startDate.input.on('change', function() {
            this.calendar.changeStartDate.call(this.calendar, this.startDate.getDate());
        }.bind(this));
        this.endDate.input.on('change', function () {
            this.calendar.changeEndDate.call(this.calendar, this.endDate.getDate());
        }.bind(this));
    }
    
    addMember(member) {
        this.calendar.addMember(member);
    }
}