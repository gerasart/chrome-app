async function addListenerOnRemove() {
    await new Promise((resolve, reject) => {
        chrome.storage.local.set({ "isCloseBrowser": true }, () => {
            if (chrome.runtime.lastError) {
                return reject(chrome.runtime.lastError);
            }
            resolve();
        });
    });
}

chrome.windows.onRemoved.addListener(addListenerOnRemove);
