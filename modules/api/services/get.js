import fakeDatabase from '../constants/fakeDatabase';
import execWithRandomDelay from './execWithRandomDelay';

const cachedRequests = {};

export default async function get(table, id) {
    const cacheKey = table + id;

    if (cachedRequests[cacheKey]) {
        return cachedRequests[cacheKey];
    }

    cachedRequests[cacheKey] = execWithRandomDelay(() => {
        delete cachedRequests[cacheKey];
        
        const value = fakeDatabase[table][id];

        if (!value) {
            throw new Error('Item not found');
        }

        return value;
    });

    return cachedRequests[cacheKey];
}