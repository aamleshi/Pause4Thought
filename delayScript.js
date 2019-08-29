var delay = 15;
console.log("start of content script")

function runDelay(){
    console.log("in the delay");
    browser.runtime.sendMessage({"hidePage": true});
    setTimeout(showPage, 10000);
}
function showPage() {
    console.log("ending the delay")
    browser.runtime.sendMessage({"hidePage": false});
}
runDelay();
console.log("end of content script")