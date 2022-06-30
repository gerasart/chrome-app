const extensionStore = {
    get(key) {
        return new Promise((resolve, reject) => {
            chrome.storage.local.get([key], (result) => {
                if (chrome.runtime.lastError) {
                    return reject(chrome.runtime.lastError);
                }
                if (result[key]) {
                    resolve(result[key]);
                } else {
                    resolve(null);
                }
            });
        });
    },

    set(key, value) {
        return new Promise((resolve, reject) => {
            chrome.storage.local.set({ [key]: value }, () => {
                if (chrome.runtime.lastError) {
                    return reject(chrome.runtime.lastError);
                }
                resolve();
            });
        });
    },

    clear() {
        return new Promise((resolve, reject) => {
            chrome.storage.local.get(null, (result) => {
                if (chrome.runtime.lastError) {
                    return reject(chrome.runtime.lastError);
                }
                Object.keys(result).forEach((key) => {
                    switch (typeof result[key]) {
                        case 'string':
                            this.set(key, '');
                            break;
                        case 'boolean':
                            this.set(key, false);
                            break;
                        case 'number':
                            this.set(key, 0);
                            break;
                        default:
                            break;
                    }
                });
                resolve();
            });
        });
    },
};

export default extensionStore;
