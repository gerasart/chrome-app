import CryptoJS from 'crypto-js';

export function hash(password) {
    return CryptoJS.AES.encrypt(
        password,
        process.env.REACT_APP_PASS_SEC
    ).toString();
}

export function verify(password, hash) {
    const originalPassword = CryptoJS.AES.decrypt(
        hash,
        process.env.REACT_APP_PASS_SEC
    ).toString(CryptoJS.enc.Utf8);
    return originalPassword === password;
}
