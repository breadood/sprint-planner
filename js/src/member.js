'use strict';

class Member {
    constructor(name, el) {
        this.name = name;
        this.tasks = {};
        this.capacity = 10;
        
        this.container$el = el;
        this.calendar$el = {};
        
        this.button = this.container$el.find('button');
        this.button.on('click', this.removeMember.bind(this));
    }
    
    addTask(taskId) {
        var task = planner.tasks.getTask(taskId);
        this.tasks[taskId] = task;
        this.updateCapacity();
    }
    
    getCapacity() {
        return this.capacity;    
    }
    
    updateCapacity() {
        var workload = 0;
        for (var task in this.tasks) {
            workload += this.tasks[task].point;
        }
        this.container$el.find('progress').val(workload / this.capacity * 100);
    }
    
    static getContainerTemplate(name) {
        return '<div class="panel-block"><div class="member-name">' + name + '</div><progress class="progress is-primary is-small" value="0" max="100">0%</progress><button class="delete is-small"></button></div>';
    }
    
    static getCalendarTemplate(name) {
        return '<div class="member-overlay"><div class="member-name">' + name + '</div>';
    }
    
    removeMember() {
        this.calendar$el.trigger('removemember', this);
        this.container$el.trigger('removemember', this);
    }
}