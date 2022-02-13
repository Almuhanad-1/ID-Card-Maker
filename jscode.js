function idCard() {
   document.getElementById('idCardDiv').style.display = "block";

   var firstName = document.getElementById('first-name').value;
   var lastName = document.getElementById('last-name').value;
   var address = document.getElementById('address').value;

   var postFullName = document.getElementById('post-full-name');
   postFullName.innerHTML = firstName + " " + lastName;
   var postAddress = document.getElementById('post-address');
   postAddress.innerHTML = address;


   var age = document.getElementById('age').value;
   var phoneNumber = document.getElementById('phone-num').value;

   var postAge = document.getElementById('post-age');
   var postPhoneNumber = document.getElementById('post-phone-number');

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



}

function resetCard() {
   document.getElementById('idCardDiv').style.display = "none";
}