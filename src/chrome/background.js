import extensionStore from '../helper/local-store';

async function addListenerOnCreate() {
    const prevNumTabs = await extensionStore.get('numTabs');
    console.log(prevNumTabs);
    chrome.tabs.query({}, async function (tabs) {
        const numTabs = tabs.length;
        if (prevNumTabs === numTabs)
            await extensionStore.set('isCloseBrowser', true);
    });
}

async function addListenerSaveTabsLength() {
    await chrome.tabs.query({}, async function (tabs) {
        await extensionStore.set('numTabs', tabs.length);
    });
}

chrome.windows.onCreated.addListener(addListenerOnCreate);
chrome.tabs.onCreated.addListener(addListenerSaveTabsLength);
chrome.tabs.onRemoved.addListener(addListenerSaveTabsLength);
