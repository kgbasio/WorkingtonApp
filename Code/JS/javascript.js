// JavaScript Document

window.plugins.CallNumber.callNumber(onSuccess, onError, "0353348194", true);

function onSuccess(result){
  console.log("Success:"+result);
}

function onError(result) {
  console.log("Error:"+result);
}