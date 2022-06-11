
    // Set the date we're counting down to
    var countDownDate = new Date("May 26, 2021 08:00:00").getTime();
    
    // Update the count down every 1 second
    var x = setInterval(function() {
    
      // Get today's date and time
      var now = new Date().getTime();
        
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
        
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      // Output the result in an element with id="timer"
      document.getElementById("timer").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
        
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "See you in 2022";
      }
    }, 1000);


    function validate(){
      var name = document.getElementById("name").value;
      var subject = document.getElementById("subject").value;
      var phone = document.getElementById("phone").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;
      var error_message = document.getElementById("error_message");
      
      error_message.style.padding = "10px";
      
      var text;
      if(name.length < 3){
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
      }
      if(subject.length < 5){
        text = "Please Enter Correct Subject";
        error_message.innerHTML = text;
        return false;
      }
      if(isNaN(phone) || phone.length != 10){
        text = "Please Enter valid Phone Number";
        error_message.innerHTML = text;
        return false;
      }
      if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
      }
      if(message.length <= 40){
        text = "Please Enter More Than 140 Characters";
        error_message.innerHTML = text;
        return false;
      }
      alert("Form Submitted Successfully!");
      return true;
    }

    /* =======>Pop-up<==========*/
    function togglePopupApplication(){
      document.getElementById("popup-1").classList.toggle("active");
    }
    function togglePopupPresenter2(){
      document.getElementById("popup-2").classList.toggle("active");
    }
    function togglePopupPresenter3(){
      document.getElementById("popup-3").classList.toggle("active");
    }
    function togglePopupPresenter4(){
      document.getElementById("popup-4").classList.toggle("active");
    }
    function togglePopupPresenter5(){
      document.getElementById("popup-5").classList.toggle("active");
    }
    function togglePopupPresenter6(){
      document.getElementById("popup-6").classList.toggle("active");
    }
    function togglePopupPresenter7(){
      document.getElementById("popup-7").classList.toggle("active");
    }
    function togglePopupPresenter8(){
      document.getElementById("popup-8").classList.toggle("active");
    }
    function togglePopupPresenter9(){
      document.getElementById("popup-9").classList.toggle("active");
    }
    function togglePopupPresenter10(){
      document.getElementById("popup-10").classList.toggle("active");
    }
    function togglePopupPresenter11(){
      document.getElementById("popup-11").classList.toggle("active");
    }
    function togglePopupPresenter12(){
      document.getElementById("popup-12").classList.toggle("active");
    }
    function togglePopupPresenter13(){
      document.getElementById("popup-13").classList.toggle("active");
    }

    /*======================>Hamburger menu<==========================*/
    function myFunction() {
      var x = document.getElementById("myLinks");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    }


     /*======================>FAQ<==========================*/
     var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}