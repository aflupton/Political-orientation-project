$(document).ready(function() {
  $("form#political-meter").submit(function(event) {
    event.preventDefault();
    var age = parseInt($("input#age").val());
    var checkbox1 = $("input#inlineCheckbox1:checked").val();
    var checkbox2 = $("input#inlineCheckbox2:checked").val();
    var checkbox3 = $("input#inlineCheckbox3:checked").val();
    var checkbox4 = $("input#inlineCheckbox4:checked").val();
    var checkbox5 = $("input#inlineCheckbox5:checked").val();
    var result1 = "liberal";
    var result2 = "moderate";
    var result3 = "conservative";
    var result4 = "not determinable"

    if (age < 25) {
      if (checkbox1 === 'option1' && checkbox3 === 'option3') {
        $("#answer").text(result1);
      } else {
        $("#answer").text(result2);
      }
    } else if (age >= 25 && age < 40) {
      if (checkbox3 === 'option3' && checkbox4 === 'option4' || checkbox1 === 'option1')  {
        $("#answer").text(result1);
      } else {
        $("#answer").text(result3);
      }
    } else if (age >= 40) {
      if (checkbox1 === "option1" && checkbox3 === "option3" && checkbox4 === "option4") {
        $("#answer").text(result1);
      } else {
        $("#answer").text(result3);
      }
    } else {
      $("#answer").text(result4);
    }


    $("#result").show();


  });
});
