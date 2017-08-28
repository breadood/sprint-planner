var memberComponent = $("section.members-component"), 
memberForm = memberComponent.children("div.member-form"),
memberContainer = memberComponent.children("div.member-container");

memberForm.find("button").click(addMember);


function addMember(event) {
    var member = memberForm.find("input");
    var memberName = member.val();
    // add member to member container
    var newBlock = '<div class="panel-block">' + memberName + '</div>';
    memberContainer.find('.panel').append(newBlock);
}
