export default function execWithRandomDelay(callback) {
    return new Promise((resolve, reject) => {
        window.setTimeout(() => {
            try {
                const value = callback();

                resolve(value);
            } catch (e) {
                reject(e);
            }
        }, 500 * Math.floor(Math.random() * 10) + 500);
    });
}