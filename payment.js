var card_num=123456789012;
var cvv=123;
var date="01-01-2022";
var test=document.querySelector("form>:nth-child(9)");
test.value="Send Otp"
test.addEventListener("click",submited)
function submited(){
event.preventDefault();
var card=document.querySelector("#card_num").value;
var exp_date=document.querySelector("#exp-date").value;
var cvv1=document.querySelector("#cvv").value;
if(cvv==cvv1&&card==card_num&&date==exp_date)
{
alert("otp has been sent");
window.location.href="otp.html";
}
else{
alert("error")
}
}