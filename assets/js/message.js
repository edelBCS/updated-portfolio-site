$("#msgBtn").on("click", function(){
    var body = $("#email").val() + "\n\n" + $("#message").val();
    window.location.href("mailto:edel.marcelino@gmail.com?subject=Portfolio Message:" + $("#name").val() + "&body=" + body);
    console.log("message sent")
});