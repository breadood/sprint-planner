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
        this.header = this.$el.find('div.calendar-header');
        this.container = this.$el.find('div.calendar-container');
        this.overlay = this.$el.find('div.calendar-overlay');
        this.background = this.$el.find('div.calendar-boxes');
        this.initializeDayBlocks();
        this.members = [];
    }

    initializeDayBlocks() {
        this.drawCalendar();
    }

    drawCalendar() {
        var header = this.header.find('ul'),
            boxes = this.container.find('ul');

        header.empty();
        boxes.empty();

        header.append('<li class="member-title">Members</li>');
        boxes.append('<li class="box member-list"></li>');

        var today = new Date(this.startDate),
            number = 1;
        while (today < this.endDate) {
            if (today.getUTCDay() !== 0 && today.getUTCDay() !== 6) {
                header.append('<li class="day-title">' + today.getUTCDayString() + '</li>');
                boxes.append('<li class="box day"></div>');
                number++;
            }
            today.addDays(1);
        }
    }

    adjustHeight() {
        this.container.height(this.overlay.height());
    }

    changeStartDate(startDate) {
        this.startDate = new Date(startDate);
        this.drawCalendar();
    }

    changeEndDate(endDate) {
        this.endDate = new Date(endDate);
        this.drawCalendar();
    }
    
    addMember(member) {
        // add a member
        member.calendar$el = $(Member.getCalendarTemplate(member.name)).appendTo(this.overlay);
        member.calendar$el.on('removemember', function(event, member) {
            member.calendar$el.remove();
        });
        
        member.calendar$el.on("dragover", function(event) {
            event.preventDefault();
        })
        member.calendar$el.on("drop", function(event) {
            event.preventDefault();
            var data = event.originalEvent.dataTransfer.getData("text/plain");
            this.addTask(data);
        }.bind(member));
        this.adjustHeight();
    }
}
