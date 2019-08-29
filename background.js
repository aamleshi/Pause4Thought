console.log("starting background.js");
browser.runtime.onMessage.addListener(pageVisibility);

function pageVisibility(message){
    console.log("message recieved");
    if (message.hidePage){
        console.log("hiding page");
        //browser.tabs.insertCSS({code: hidePage});
        openMyPage();
    } else {
        console.log("revealing page");
        browser.tabs.removeCSS({code: hidePage});
    }
}

function openMyPage() {
console.log("injecting");
browser.tabs.create({
    "url": "/my-page.html"
    });
}