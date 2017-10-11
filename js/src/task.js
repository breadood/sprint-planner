'use strict';

class Task {
    constructor(name, id, el) {
        var _this = this;
        this.name = name;
        this.point = 2;
        this.id = id;
        this.$el = el;
        this.button = this.$el.find('button');
        
        this.$el.find('button').on('click', this.removeTask.bind(this));
    }
    
    weight(weight) {
        if (weight) {
            this.point = weight;
        } else {
            return weight;
        }
    }
    
    static getTemplate(name, id) {
        return '<div class="panel-block" draggable="true" id="' + id + '"><div class="task-name">' + name + '</div><button class="delete is-small"></button></div>'
    }
    
    removeTask() {
        this.$el.trigger('remove', this);
    }
}