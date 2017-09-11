'use strict';
class DateComponent {
    constructor(item, config) {
        this.$el = $(item);
        this.el = item;
        this.events = config.events || {};
        this.default = config.default || {};

        this.initialize();
        this.bindEvents();
    }

    initialize() {
        this.$el.find("input").val(this.default.date);
    }

    bindEvents() {
        for (var event in this.events)
            this.$el.find("button").on(event, (this.events[event]).bind(this));
    }

    getDate() {
        return this.$el.find("input").val();
    }

    setDate(date) {
        this.$el.find("input").val(date);
    }
}
