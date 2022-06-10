const extensionStore = {
    get(key) {
        return new Promise((resolve, reject) => {
            chrome.storage.local.get([key], (result) => {
                if (result[key]) {
                    resolve(result[key]);
                }
                reject("not found");
            });
        });
    },

    set(key, value) {
        return new Promise((resolve) => {
            chrome.storage.local.set({ [key]: value }, () => {
                resolve();
            });
        });
    },
};

export default extensionStore;

