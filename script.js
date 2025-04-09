let keys = Object.keys(window);

for (let i = 0; i < keys.length; i++) {
    let value = window[keys[i]];
    if (typeof value === "function") {
        console.log(`Function: ${keys[i]}`);
    } else if (typeof value === "object" && value !== null) {
        console.log(`Object: ${keys[i]}`);
    }
}
