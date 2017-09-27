class MemberComponent extends StorageComponent {
    constructor(el) {
        super(el, {});
        this.button.on('click', this.onClick.bind(this));
        this.members = [];
    }
    
    onClick() {
        var member = new Member(this.input.val());
        this.members.push(member);
        this.input.val('');
    }
}