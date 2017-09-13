'use strict';

class CalendarComponent {
    constructor(el, config) {
        this.$el = $(el);
        this.el = el;
        this.startDate = new Date(config.startDate); // this will be UTC date
        this.endDate = new Date(config.endDate);
        this.members = config.members;
        //this.events = config.events || {};
        this.initialize();
        this.bindEvents();
        //        this.bindEvents();
    }
    
    initialize() {
        this.initializeHeader();
        this.initializeDayBlocks();
    }
    
    bindEvents() {
        
    }
    initializeHeader() {
        var header = '<div class="box calendar-header"><div class="member-title">Members</div></div>';
        var container = '<div class="calendar-container"></div>';
        
        this.$el.append(header);
        this.$el.append(container);
        
        this.header = this.$el.find('.calendar-header');
        this.container = this.$el.find('.calendar-container');
    }
    
    initializeDayBlocks() {
        this.container.append('<div class="box member-list"></div>');
        this.drawCalendar();
    }
    
    drawCalendar() {
        var today = new Date(this.startDate);
        while (today < this.endDate) {
            if (today.getUTCDay() !== 0 && today.getUTCDay() !== 6) {
                this.header.append('<div class="day-title">Day</div>');
                this.container.append('<div class="box day"></div>');
            }
            today.addDays(1);
        }
    }
    
    addMember() {
        
    }
    
    changeStartDate(startDate) {
        this.startDate = new Date(startDate);
        this.drawCalendar();
    }
    
    changeEndDate(endDate) {
        this.endDate = new Date(endDate);
        this.drawCalendar();
    }
}