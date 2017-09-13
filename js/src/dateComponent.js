'use strict';

class DateComponent {
    constructor(el, config) {
        this.$el = $(el);
        this.el = el;
        this.events = config.events || {};
        this.default = config.default || {};
        

        this.initialize();
        this.bindEvents();
    }

    initialize() {
        this.input = this.$el.find("input");
        this.button = this.$el.find("button");
        this.input.val(this.default.date);
    }

    bindEvents() {
        this.button.on('click', (this.events['click']).bind(this));
        this.input.on('change', function() {console.log("changed!")})
    }

    getDate() {
        return this.input.val();
    }

    setDate(date) {
        this.input.val(date);
    }
}
