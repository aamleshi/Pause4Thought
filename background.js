browser.runtime.onMessage.addListener(pageVisibility);

function pageVisibility(message){
    if (message.hidePage){
        browser.tabs.insertCSS({code: hidePage})
    } else {
        browser.tabs.removeCSS({code: hidePage})
    }
}