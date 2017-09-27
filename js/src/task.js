'use strict';

class Task {
    constructor(name) {
        var _this = this;
        this.name = name;
        this.point = 0;
        
        //
        this.$el = $(this.getTemplate()).appendTo(planner.tasks.panel);
        this.$el.find('button').on('click', this.removeTask.bind(this));
        this.$el.on('dragstart', function(event) {
//            console.log('onDragStart');
//            console.log(event);
            event.originalEvent.dataTransfer.setData("text/plain", JSON.stringify(_this));
            console.log(JSON.stringify(_this.$el.get(0)))
            console.log(_this.$el.get(0))
        })
        // TO DO: decouple, and make sure array in parent component updates
    }
    
    weight(weight) {
        if (weight) {
            this.point = weight;
        } else {
            return weight;
        }
    }
    
    getTemplate() {
        return '<div class="panel-block" draggable="true"><div class="task-name">' + this.name + '</div><button class="delete is-small"></button></div>'
    }
    
    removeTask() {
        this.$el.remove();
    }
}