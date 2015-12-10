$(document).ready(function () {

    var DropDown = $("<select>");
    var WorkSpace = $("#menu");
    
    WorkSpace.append(DropDown);
    
    
    function populate() {
        console.log("test");
        $.ajax({
            url: "data/Team_constants.json",
            
            datatype: "json",
     
            success: function (data) {
                console.log("test");
                for (i = 0; i < data.length; i = i + 1) {
                    var TeamName = $("<option>");
                    TeamName.attr("value", data[i].abbr);
                    TeamName.text(data[i].abbr);
                    DropDown.append(TeamName);
                }
            }
        });
    }
    $(document).ready(populate);
    
});