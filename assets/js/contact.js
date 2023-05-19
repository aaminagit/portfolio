function validateName() {
    const name = document.getElementById("name");
    const email = document.getElementById("email")
    const message = document.getElementById("message")
    console.log('inside validate name');
  
    if (name.value.trim() == "" || !name.value.match(/^[A-Za-z]/)) {
      name.style.border = "2px solid red";
      document.getElementById("invalidName").style.visibility = "visible";
      return false;
    } else {
      name.style.border = "none"
      document.getElementById("invalidName").style.visibility = "hidden";
      return true;
    }
  }
  
  function validateEmail() {
    const email = document.getElementById("email");
    console.log('inside validate email');
  
    if (email.value.trim() == "" || !email.value.match(/^[^ ]+@[^ ]+\.(com|in)$/)) {
      console.log('matches');
      email.style.border = "2px solid red";
      document.getElementById("invalidEmail").style.visibility = "visible";
      return false;
    } else {
      console.log("not matching");
      email.style.border = "none"
      document.getElementById("invalidEmail").style.visibility = "hidden";
      return true;
    }
  
  }
  
  function validateMessage () {
  
    const message = document.getElementById("message");
    if(message.value.trim() == "") {
      message.style.border = "2px solid red";
      document.getElementById("invalidMessage").style.visibility = "visible";
      return false;
    } else {
      message.style.border = "none";
      document.getElementById("invalidMessage").style.visibility = "hidden";
      return true;
    }
  }
  
  
  
  $("#submit-form").submit((e) => {
  
    e.preventDefault()
    const nameFlag = validateName();
    const emailFlag = validateEmail();
    const messageFlag = validateMessage();
  
    if (nameFlag && emailFlag && validateMessage)  {
  
      $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzhu8l-4e_kwkngH8VbX8hlfNWq7sJesgF-f82ZW5LBnwUEKLB_UvooXoYM3cDKayP6/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function (response) {
          if (response.result == 'success') {
            alert("Form submitted successfully")
            /*  $('#successModal').modal('show'); */
            /* $('#successModal').focus(); */
            window.location.reload()
            //window.location.href="https://google.com"
          }
        },
        error: function (err) {
          alert("Something Error")
  
        }
      })
    }
  })