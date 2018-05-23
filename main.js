var setting;
var arr = [];
var index;

$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        var url = $(this).val();
        $(this).val("");
        $("img").attr("src", url);
        $("input[type='range']").val("");
        $("input[name='Blur']").val("0");
        $("input[name='Grayscale']").val("0");
        $("input[name='Hue-Rotate']").val("0");
        $("input[name='Invert']").val("0");
        $("input[name='Opacity']").val("100");
        $("input[name='Sepia']").val("0");
        $("img").removeAttr("style");
        arr = [];
    }
});

$("#submit").click(function() {
    var url = $("input[type='text']").val();
    $("input[type='text']").val("");
    $("img").attr("src", url);
    $("input[type='range']").val("");
    $("input[name='Blur']").val("0");
    $("input[name='Grayscale']").val("0");
    $("input[name='Hue-Rotate']").val("0");
    $("input[name='Invert']").val("0");
    $("input[name='Opacity']").val("100");
    $("input[name='Sepia']").val("0");
    $("img").removeAttr("style");
    arr = [];
});

$("input[type='range']").change(function() {
    var num = $(this).val();
    var filter = $(this).parent().text().trim(); // Trim() removes white spaces in string
    setting = filter + "(" + num;
    
    if(filter === "Blur") {
        setting += "px)";
    } else if (filter === "Brightness" || filter === "Contrast" || filter === "Grayscale" || filter === "Invert" || filter === "Opacity" || filter === "Saturate" || filter === "Sepia") {
        setting += "%)";
    } else if (filter === "Hue-Rotate") {
        setting += "deg)";
    }

    arr.forEach(function(element) {
        if(element.includes(filter)) {
            arr.splice(arr.indexOf(element), 1);
        }
    });     
    
    arr.push(setting);
    
    $("img").css("filter", arr.join(" "));

    console.log(arr.join(" "));
});

$("button").click(function() {
    $("input[type='range']").val("");
    $("input[name='Blur']").val("0");
    $("input[name='Grayscale']").val("0");
    $("input[name='Hue-Rotate']").val("0");
    $("input[name='Invert']").val("0");
    $("input[name='Opacity']").val("100");
    $("input[name='Sepia']").val("0");
    $("img").removeAttr("style");
    arr = [];
});
