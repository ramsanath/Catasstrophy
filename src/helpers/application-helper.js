import {random} from "./util";
import {ToastAndroid, Platform, Dimensions} from "react-native";


export function getFunnyName() {
    const firstName = ["Runny", "Buttercup", "Dinky", "Stinky", "Crusty",
        "Greasy", "Gidget", "Cheesypoof", "Lumpy", "Wacky", "Tiny", "Flunky",
        "Fluffy", "Zippy", "Doofus", "Gobsmacked", "Slimy", "Grimy", "Salamander",
        "Oily", "Burrito", "Bumpy", "Loopy", "Snotty", "Irving", "Egbert"];
    const middleName = ["Waffer", "Lilly", "Rugrat", "Sand", "Fuzzy", "Kitty",
        "Puppy", "Snuggles", "Rubber", "Stinky", "Lulu", "Lala", "Sparkle", "Glitter",
        "Silver", "Golden", "Rainbow", "Cloud", "Rain", "Stormy", "Wink", "Sugar",
        "Twinkle", "Star", "Halo", "Angel"];
    const lastName = ["Snicker", "Buffalo", "Gross", "Bubble", "Sheep", "Corset",
        "Toilet", "Lizard", "Waffle", "Kumquat", "Burger", "Chimp", "Liver",
        "Gorilla", "Rhino", "Emu", "Pizza", "Toad", "Gerbil", "Pickle", "Tofu",
        "Chicken", "Potato", "Hamster", "Lemur", "Vermin", 'Face', 'Dip', 'Nose',
        'Brain', 'Head', 'Breath', 'Pants', 'Shorts', 'Lips', 'Mouth', 'Muffin',
        'Butt', 'Bottom', 'Elbow', 'Honker', 'Toes', 'Buns', 'Spew', 'Kisser',
        'Fanny', 'Squirt', 'Chunks', 'Brains', 'Wit', 'Juice', 'Shower'];

    return `${random(firstName)}${random(middleName)}${random(lastName)}`;
}

export function toast(string) {
    if (Platform.OS === 'android') ToastAndroid.show(string, ToastAndroid.SHORT)
}

export function log(string) {
    if (__DEV__) console.log(string)
}

export function getScreenWidth() {
    return Dimensions.get('window').width;
}

export function getConstants() {
    return {
        iconSize: 32
    }
}

/**
 * This method will give the the relative height of an image with respect
 * to the device's screen width.
 *
 * @param imgWidth
 * @param imgHeight
 * @returns {number}
 */
export function getHeightForFullWidth(imgWidth, imgHeight) {
    let {width} = Dimensions.get('window');
    return width * (imgHeight / imgWidth);
}