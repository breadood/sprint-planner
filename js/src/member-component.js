class MemberComponent extends StorageComponent {
    constructor(el) {
        super(el, {});
        this.button.on('click', this.onClick.bind(this));
        this.members = {};
    }

    onClick() {
        var name = this.input.val();
        var el = $(Member.getContainerTemplate(name)).appendTo(this.panel);
        var member = new Member(name, el);
        this.members[name] = member;
        member.container$el.on('removemember', function (event, member) {
            member.container$el.remove();
            delete this.members[member.name];
        }.bind(this));
        this.input.val('');

        this.el.trigger('addmember', member);
    }
}
