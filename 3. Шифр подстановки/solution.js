/**
 * 
 * @typedef Replace
 * 
 * @property {string} from
 * @property {string} to
 */

/**
 * 
 * @param {string} message 
 * @param {Replace[]} replaces 
 * @returns {string}
 */

function decode(message, replaces) {
    let newMessage = '';

    for(let i = 0; i < message.length; i++) {
        let newPart = message[i];
        let currentChar = i;
        replaces.forEach((replace) => {
            if(message.startsWith(replace.from, i)) {
                newPart = replace.to;
                currentChar = i + replace.from.length - 1;
            }
        })
        newMessage = newMessage + newPart;
        i = currentChar;
    }
    return newMessage;
}

module.exports = { decode };