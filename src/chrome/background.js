import extensionStore from '../helper/local-store';

async function addListenerOnRemove() {
    await extensionStore.set('isCloseBrowser', true);
}

chrome.windows.onRemoved.addListener(addListenerOnRemove);
