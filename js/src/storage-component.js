'use strict';

class StorageComponent {
    constructor(el, config) {
        this.$el = $(el);
        this.el = el;
        this.events = config.events || {};

        this.initialize();
    }

    initialize() {
        this.input = this.$el.find("input");
        this.button = this.$el.find("button");
        this.container = this.$el.find(".storage-container");
        this.panel = this.container.find('.panel');
    }

}