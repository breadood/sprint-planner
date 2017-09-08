class StorageComponent {
    constructor(item, config) {
        this.$el = $(item);
        this.el = item;
        this.events = config.events;

        this.defineParts();
        this.bindEvents();
    }

    defineParts() {
        this.input = this.$el.find("input");
        this.container = this.$el.find(".storage-container");
        this.panel = this.container.find('.panel');
    }

    bindEvents() {
        if (this.events) {
            for (var event in this.events) {
                var eventCallback = (this.events[event]).bind(this);
                this.$el.find("button").on(event, eventCallback);
            }
        }
    }
}

// initialize storage components
(function () {
    var els = $(".storage-component"),
        defaultConfig = {},
        memberConfig = {
            events: {
                click: function (event) {
                    var member = this.input.val(),
                        newBlock = '<div class="panel-block">' + member + '<progress class="progress is-primary is-small" value="0" max="100">0%</progress><button class="delete is-small"></button></div>';
                    this.panel.append(newBlock);
                    this.input.val('');
                }
            }
        },
        taskConfig = {
            events: {
                click: function (event) {
                    var task = this.input.val(),
                        newBlock = '<div class="panel-block">' + task + '<button class="delete is-small"></button></div>';
                    this.panel.append(newBlock);
                    this.input.val('');
                }
            }
        };

    for (var index = 0; index < els.length; index++) {
        var el = els[index];
        if ($(el).hasClass('member-component')) {
            new StorageComponent(el, memberConfig);
        } else if ($(el).hasClass('task-component')) {
            new StorageComponent(el, taskConfig);
        } else {
            new StorageComponent(el, defaultConfig);
        }
    }
})();
