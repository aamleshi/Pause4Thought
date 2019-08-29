var delay = 10;

function runDelay(delay){
    browser.runtime.sendMessage({"hidePage": true})
    
}