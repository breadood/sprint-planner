class TaskComponent extends StorageComponent {
    constructor(el) {
        super(el, {});
        this.button.on('click', this.addTask.bind(this));
        this.tasks = {};
        this.count = 0;
    }
    
    addTask() {
        this.count++;
        var id = 'task' + this.count;
        var name = this.input.val();
        var el = $(Task.getTemplate(name, id)).appendTo(this.panel);
        var task = new Task(name, id, el);
        this.tasks[id] = task;
        this.input.val('');
        
        task.$el.on('remove', function(event, task) {
            delete this.tasks[task.id];
            task.$el.remove();
        }.bind(this));
        
        task.$el.on('dragstart', function(event) {
            event.originalEvent.dataTransfer.setData("text/plain", this.id);
        }.bind(task));
    }
    
    getTask(id) {
        return this.tasks[id];
    }
}