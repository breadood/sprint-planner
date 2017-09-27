class TaskComponent extends StorageComponent {
    constructor(el) {
        super(el, {});
        this.button.on('click', this.onClick.bind(this));
        this.tasks = [];
    }
    
    onClick() {
        var task = new Task(this.input.val());
        this.tasks.push(task);
        this.input.val('');
    }
}