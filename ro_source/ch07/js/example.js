//

$(function() {
    var $list, $newItemForm, $newItemButton;
    var item = "";
    $list = $("ul");
    $newItemForm = $("#newItemForm");
    $newItemButton = $("#newItemButton");

    // Fade in
    $("li").hide().each(function(index) {
        $(this).delay(450 * index).fadeIn(1600);
    });

    // Counter
    function updateCount() {
        var items = $("li[class!=complete]").length;
        $("#counter").text(items);
    }
    updateCount();

    // Form - New item button
    $newItemButton.show();
    $newItemForm.hide();
    $("#showForm").on("click", function() {
        $newItemButton.hide();
        $newItemForm.show();
    });

    // Form - Adding new item
    $newItemForm.on("submit", function(e) {
        e.preventDefault();
        var $text = $("input:text");
        $list.append("<li>" + $text.val() + "</li>");
        $text.val("");
        updateCount();
    });
    
    // Click handling for list items
    $list.on("click", "li", function() {
        var $this = $(this);
        var complete = $this.hasClass("complete");
        
        if (complete === true) {
            $this.animate({
                opacity: 0.0,
                paddingLeft: "+=180"
            }, 500, "swing", function() {
                $this.remove();
            });
        }
        else {
            item = $this.text();
            $this.remove();
            $list.append("<li class=\"complete\">" + item + "</li>").hide().fadeIn(300);
        }
        updateCount();
    });
});