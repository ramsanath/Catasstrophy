/**
 * An AsyncStorage wrapper with error handling and complex object support.
 */

import {AsyncStorage} from 'react-native';

export default localStorage = {
    set: async function (key, value) {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    },
    get: async function (key) {
        try {
            const result = await AsyncStorage.getItem(key);
            if (!result) return null;

            return JSON.parse(result);
        } catch (error) {
            console.error(error);
            return undefined;
        }
    },
    remove: async function (key) {
        await AsyncStorage.removeItem(key);
    }
}