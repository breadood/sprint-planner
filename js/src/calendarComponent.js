'use strict';

class CalendarComponent {
    constructor(el, config) {
        this.$el = $(el);
        this.el = el;
        this.startDate = new Date(config.startDate); // this will be UTC date
        this.endDate = new Date(config.endDate);
        this.members = config.members;
        this.initialize();
    }
    
    initialize() {
        this.initializeHeader();
        this.initializeDayBlocks();
    }
    
    initializeHeader() {
        var header = '<ul class="box calendar-header"></ul>';
        var container = '<ul class="calendar-container"></ul>';
        
        this.$el.append(header);
        this.$el.append(container);
        
        this.header = this.$el.find('.calendar-header');
        this.container = this.$el.find('.calendar-container');
    }
    
    initializeDayBlocks() {
        this.drawCalendar();
    }
    
    drawCalendar() {
        this.header.empty();
        this.container.empty();
        this.header.append('<li class="member-title">Members</li>');
        this.container.append('<li class="box member-list"></li>');
        
        var today = new Date(this.startDate),
            number = 1;
        while (today < this.endDate) {
            if (today.getUTCDay() !== 0 && today.getUTCDay() !== 6) {
                this.header.append('<li class="day-title">' + today.getUTCDayString() + '</li>');
                this.container.append('<li class="box day"></div>');
                number++;
            }
            today.addDays(1);   
        }
    }
    
    addMember(member) {
        console.log(member);
        this.container.find('.member-list').append('<div class="member">' + member + '</div>');
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