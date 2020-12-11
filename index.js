
let share = $("#share");
console.log(share);

share.on("click", () => {
    let popup = $(".popup").css("display");
    if (popup === "none") {
        $(".popup").fadeIn(400, () => {
            $(this).css("display", "block");
        });
        share.fadeOut(100, () => {
            share.css("background-color", "#9EAFC2");
            $(".icon").css("fill", "#ffffff");
            share.fadeIn(200);
        });
    } else {
        $(".popup").fadeOut(400, () => {
            $(this).css("display", "none");
        });
        share.fadeOut(100, () => {
            share.css("background-color", "#eff7fc");
            $(".icon").css("fill", "#6E8098")
            share.fadeIn(200);
        });
    }
});
