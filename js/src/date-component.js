'use strict';

class DateComponent {
    constructor(el, config) {
        this.$el = $(el);
        this.el = el;
        this.default = config.default || {};
        this.initialize();
    }

    initialize() {
        this.input = this.$el.find("input");
        this.button = this.$el.find("button");
        this.input.val(this.default.date);
    }

    getDate() {
        return this.input.val();
    }

    setDate(date) {
        this.input.val(date);
    }
}
