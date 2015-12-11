$(document).ready(function () {

    var DropDown = $("<select>");
    var WorkSpace = $("#menu");
    
    DropDown.attr("id", "name");
    WorkSpace.append(DropDown);
    
    $("<select>").attr("id", "perunit");
    WorkSpace.append($("<select>").attr("id", "perunit"));
    
    
    
    function populate() {
        console.log("test");
        $.ajax({
            url: "data/Team_constants.json",
     
            success: function (data) {
                console.log("test");
                console.log(data);
                console.log(data["NBA Teams"][0]["abbr"]);
                var i;
                var nba = data["NBA Teams"];
                for (i = 0; i < nba.length; i = i + 1) {
                    var TeamName = $("<option>");
                    TeamName.attr("value", nba[i]["abbr"]);
                    TeamName.text(nba[i]["abbr"]);
                    $("#name").append(TeamName);
                }
            }
        });
    }
    $(document).ready(populate);
    
});