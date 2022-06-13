import extensionStore from '../helper/local-store';

async function saveTabsLength() {
    chrome.tabs.query({}, async function (tabs) {
        await extensionStore.set('numTabs', tabs.length);
    });
}

async function addListenerOnCreate() {
    const prevNumTabs = await extensionStore.get('numTabs');
    console.log(prevNumTabs);
    chrome.tabs.query({}, async function (tabs) {
        const numTabs = tabs.length;
        if (prevNumTabs === numTabs)
            await extensionStore.set('isCloseBrowser', true);
    });
}

async function addListenerOnCreated() {
   await saveTabsLength()
}
async function addListenerOnRemoved() {
    await saveTabsLength()
}

chrome.windows.onCreated.addListener(addListenerOnCreate);
chrome.tabs.onCreated.addListener(addListenerOnCreated);
chrome.tabs.onRemoved.addListener(addListenerOnRemoved);
