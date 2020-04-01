function yeetanswers() {
  // min is lowerbound, max is lowerbound + range;
  range = 600000;
  lowerbound = 600000;
  var buttons = document.querySelectorAll('input[type="radio"]')
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].checked = true;
    buttons[i].click();
  }
  MinID = parseInt(buttons[0].value);
  for (i = 1; i < 4; i++) {
    if (parseInt(buttons[i].value) < MinID)
      MinID = parseInt(buttons[i].value);
  }
  MinID %= 4;
  wrong = 0;
  for (i = 0; i < testResultLocalObject.length; i++) {
    if (Math.random() > 0.9 && wrong + 1< testResultLocalObject.length / 10) {
      wrong++;
      SaveUserAnswer(testResultLocalObject[i].QuestionId, (Math.floor((parseInt(testResultLocalObject[i].AnswerId) - MinID) / 4) * 4 + MinID + 1).toString());
    } else {
      SaveUserAnswer(testResultLocalObject[i].QuestionId, (Math.floor((parseInt(testResultLocalObject[i].AnswerId) - MinID) / 4) * 4 + MinID).toString());
    }
  }

  setTimeout(function () {
    SubmitTestResultClick();
    document.getElementsByClassName("swal2-confirm swal2-styled")[0].click();
  }, lowerbound + Math.floor(range * Math.random()));

}
var script = document.createElement('script');
script.appendChild(document.createTextNode('(' + yeetanswers + ')();'));
(document.body || document.head || document.documentElement).appendChild(script);
