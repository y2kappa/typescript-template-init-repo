import * as cryptojs from "crypto-js";
const fetch = require("node-fetch");
console.log("hello world");

const encryptionExample = () => {
    const key = "1231231";
    const textToBeEncrypted = "Hi there";

    const encryptedOutput = cryptojs.AES.encrypt(textToBeEncrypted, key);
    console.log(`Encrypted text ${encryptedOutput}`);

    const decryptedOutput = cryptojs.AES.decrypt(encryptedOutput.toString(), key);
    const plainTextOutput = decryptedOutput.toString(cryptojs.enc.Utf8);
    console.log(`Decrypted text ${plainTextOutput}`);
}


const httpPostRequestExample = async () => {

    let url = "https://google.com/";
    let content = JSON.stringify({
        arg1: "Hello",
        arg2: "World",
        arg3: true
    });

    const response = await fetch(url, {
        method: 'POST',
        body: content,
        headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) { /* Handle */ }

    // If you care about a response:
    const body = await response.json();

    if (body !== null) {
        console.log(`Body ${JSON.stringify(body)}`);
    }
}

const main = async () => {
    await httpPostRequestExample();
    encryptionExample();
}

main()