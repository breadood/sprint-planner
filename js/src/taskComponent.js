var taskComponent = $("section.task-component"),
    taskForm = taskComponent.children("div.task-form"),
    taskContainer = taskComponent.children("div.task-container");

taskForm.find("button").click(addTask);


function addTask(event) {
    var task = taskForm.find("input");
    var taskName = task.val();
    var newBlock = '<div class="panel-block">' + taskName + '<button class="delete is-small"></button></div>';
    taskContainer.find('.panel').append(newBlock);
}