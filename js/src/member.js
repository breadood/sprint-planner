'use strict';

class Member {
    constructor(name) {
        this.name = name;
        this.tasks = [];
        this.capacity = 0;
        
        // not decoupled
        this.calendarEl = $(this.getCalendarTemplate()).appendTo(planner.planner.calendar.overlay);
        planner.planner.calendar.adjustHeight();
        this.containerEl = $(this.getContainerTemplate()).appendTo(planner.members.panel);
        this.containerEl.find('button').on('click', this.removeMember.bind(this));
        this.calendarEl.on("dragover", function(event) {
            event.preventDefault();
//            console.log("I got a drag");
        })
        this.calendarEl.on("drop", function(event) {
            event.preventDefault();
            console.log("hey I got a drop");
            var data = event.originalEvent.dataTransfer.getData("text/plain");
//            console.log("Look who called me: ");
            console.log(JSON.parse(data));
        })
        // TO DO: decouple, and make sure array in parent component updates
    }
    
    addTask(task) {
        this.tasks.push(task);
        // update capacity
    }
    
    getCapacity() {
        return this.capacity;    
    }
    
    updateCapacity() {
        
    }
    
    getContainerTemplate() {
        return '<div class="panel-block"><div class="member-name">' + this.name + '</div><progress class="progress is-primary is-small" value="0" max="100">0%</progress><button class="delete is-small"></button></div>';
    }
    
    getCalendarTemplate() {
        return '<div class="member-overlay"><div class="member-name">' + this.name + '</div>';
    }
    
    removeMember() {
        this.calendarEl.remove();
        this.containerEl.remove();
        planner.planner.calendar.adjustHeight();
    }
}