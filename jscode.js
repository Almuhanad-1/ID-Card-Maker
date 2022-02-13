function idCard() {

   var firstName = document.getElementById('first-name').value;
   var lastName = document.getElementById('last-name').value;
   var address = document.getElementById('address').value;
   var age = document.getElementById('age').value;
   var phoneNumber = document.getElementById('phone-num').value;


   var postFullName = document.getElementById('post-full-name');
   var postAddress = document.getElementById('post-address');
   var postAge = document.getElementById('post-age');
   var postPhoneNumber = document.getElementById('post-phone-number');


   postFullName.innerHTML = firstName + " " + lastName;
   postAddress.innerHTML = address;

   var numberArray = [];
   numberArray.push(age, phoneNumber);

   for (let i = 0; i < numberArray.length; i++) {
      if (numberArray[i] <= 100 & numberArray[i] != 0) {
         postAge.innerHTML = "Age: " + numberArray[i];
      }
      else if (numberArray[i] > 100) {
         postPhoneNumber.innerHTML = "Phone Number: " + numberArray[i];
      }
      else {

      }
   }

   document.getElementById('idCardDiv').style.display = "block";
   document.getElementById('idCardDiv').scrollIntoView({ behavior: 'smooth' });

}

function resetCard() {
   window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
   });
   setTimeout(function () {
      document.getElementById('idCardDiv').style.display = "none";
   }, (0.1 * 1000));
   // document.getElementById('idCardDiv').style.display = "none";

}