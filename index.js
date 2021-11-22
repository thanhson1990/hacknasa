$(document).ready(function() {
    var war = $("#warning");
    var warning = null;
    var isClicked = false;
    var cl = null;
    var bar = $("#pb");
    //war.show();

    function showMes(percent) {

        if (percent < 30) {
            var text = "Connecting ...";
            $("#connect").text(text);

        } else if (percent < 50) {

            var text = "Connected and Hacking phase 1 ...";
            $("#phase_1").text(text);
        } else if (percent < 70) {

            var text = "Hacking phase 2 ...";
            $("#phase_2").text(text);
        } else if (percent < 80) {

            var text = " Hacking phase 3 ...";
            $("#phase_3").text(text);
        } else if (percent < 90) {

            var text = "Almost done ...";
            $("#almost").text(text);
        } else if (percent == 100) {

            var text = "Hacked NASA. Congratulations !!!";
            war.text("Unauthorized Access !!!");
            $("#done").text(text);
            $("#clk").text("Click to Hack again !");
            isClicked = false;
            clearInterval(cl);
        }
    }

    function clearMes() {
        $("#mes").children().text("");
        clearInterval(cl);
        war.text("");
        bar.css("width", 0 + "%");
        bar.text("");
    }

    $("#clk").click(function() {
        if (isClicked) { // STOP
            isClicked = false;
            $("#clk").text("Click to Hack !");
            clearMes();
        } else { // HACK
            clearMes()
            $("#clk").text("End Task !");
            //war.show();
            isClicked = true;
            var width = 0;
            cl = setInterval(function() {
                var rd = Math.floor(Math.random() * 11);
                // var w = "";
                width += rd;
                console.log(width);
                if (width > 100) {
                    width = 100;
                    bar.css("width", width + "%");
                    bar.text(width + "% Completed");
                    showMes(width);
                } else {
                    //  w = width + "%";
                    bar.css("width", width + "%");
                    bar.text(width + "% Completed");
                    showMes(width);
                }

            }, 1000);
        }

        ////


    });
    /*
    $("#stop").click(function() {
        clearInterval(cl);
        bar.css("width", 0 + "%");
        bar.text("");
        clearMes();
    });
*/
});