$("#add-creature").click(
    function () {

        // grab the value from the input
        let crName = $("#crName").val();
        let crColor= $("#crColor").val();
        let crEyesNum= $("#crEyesNum").val();
        let crMouth= $("#crMouth").val();
        let crEyesHTML="";
        let crMouthHTML="";

        for (let i = 0; i < crEyesNum ; i++){
            crEyesHTML=crEyesHTML + '<div class="eye"><div class="pupil"></div></div>';
        }

        // Generate mouth HTML based on selection
        if (crMouth === "smile") {
            crMouthHTML = '<div class="mouth smile"></div>';
        } else if (crMouth === "sad") {
            crMouthHTML = '<div class="mouth sad"></div>';
        } else if (crMouth === "surprise") {
            crMouthHTML = '<div class="mouth surprise"></div>';
        }


        // check for the field value do not add empty ones
        if ( (crName == "") || (crName.length>12) ) { // do nothing 
        }
        else {
            $("#creature-list").append(`
<div class="creature">
    <div class="creature-body" style="background: ${crColor}">
        <div class="eyes-container" data-eyes="${crEyesNum}">
            ${crEyesHTML}
        </div>
        ${crMouthHTML}
    </div>
    <div class="creature-info">${crName}</div>
</div>
`);
        }

        // remove the name after it's added
        $("#crName").val("");

    });