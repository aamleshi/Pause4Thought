//var delay = 15;
console.log("start of content script")

function runDelay(delay){
    console.log("in the delay");
    browser.runtime.sendMessage({"hidePage": true});
    setTimeout(showPage, 10*delay);
}
function showPage() {
    console.log("ending the delay")
    browser.runtime.sendMessage({"hidePage": false});
}
runDelay(delay);
console.log("end of content script")