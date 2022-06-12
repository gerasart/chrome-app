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
                    if (typeof result[key] === "string") {
                        this.set(key, "");
                    }
                    if (typeof result[key] === "boolean") {
                        this.set(key, false);
                    }
                    if (typeof result[key] === "number") {
                        this.set(key, 0);
                    }
                });
                resolve();
            });
        });
    },
};

export default extensionStore;
