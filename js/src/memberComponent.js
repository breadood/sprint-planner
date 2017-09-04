var memberComponent = $("section.members-component"), 
memberForm = memberComponent.children("div.member-form"),
memberContainer = memberComponent.children("div.member-container");

memberForm.find("button").click(addMember);


function addMember(event) {
    var member = memberForm.find("input");
    var memberName = member.val();
    // add member to member container
    var newBlock = '<div class="panel-block">' + memberName + '<progress class="progress is-primary is-small" value="0" max="100">0%</progress><button class="delete is-small"></button></div>';
    memberContainer.find('.panel').append(newBlock);
}
