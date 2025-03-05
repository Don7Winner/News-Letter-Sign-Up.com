$(document).ready(function () {
  const form = $("form");
  const errorMsgEmail = $(".errorMsgEmail");
  const email = $("#email");
  const button = $("#btn");
  const popUp = $("#popUp");
  const dismiss = $("#dismiss");
  const emailAddress = $("#emailMsg");
  form.click("submit", function (e) {
    $("#email").keyup(function () {
      if (validEmail()) {
        $("#email").css("border", "2px solid green");
        errorMsgEmail.html("");
        button.css("backgroundColor", "hsl(4, 100%, 67%)");
        $("#btn").click(function () {
          $(".email-submition").hide();
          $("#popUp").addClass("open-popup");
        });
      } else {
        email.css("border", "2px solid  hsl(0, 66%, 54%)");
        errorMsgEmail
          .html("valid email required")
          .css("color", " hsl(0, 66%, 54%)");
        button.css("backgroundColor", " hsl(234, 29%, 20%)");
        button.e.preventDefault();
      }
    });
    // THE CODE FOR THE EMAIL FUNCTION
    function validEmail() {
      let email = $("#email").val();
      var emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      if (emailPattern.test(email)) {
        return true;
      } else {
        return false;
      }
    }
  });
  // THE CODE FOR FOR HIDING AND SHOWING THE SUCCESS POPUP
  dismiss.click(function () {
    popUp.hide();
    $(".email-submition").show();
    location.reload("index.html");
  });
  $("#h1").click(function () {
    emailAddress.text($("#email1").val());
  });
  // THE CODE SEND'S THE EMAIL TO THE SUCCESS POPUP
  button.click(function () {
    emailAddress.text(email.val());
  });
});
