/**
 * @param {string} genA
 * @param {string} genB
 * @param {number} level
 * @returns {boolean}
*/
function isRelativies(genA, genB, level) {
   const baseStr = genA.length > genB.length ? genB : genA;
   const longStr = genA.length > genB.length ? genA : genB;
   let maxMatch = 0;
   let matchLevel = longStr.length - level;
   if(matchLevel <= 1) matchLevel = 1;

   for(let i = 0; i+matchLevel <= baseStr.length; i++) {
    const searchStr = baseStr.slice(i, i+matchLevel);
    if(longStr.includes(searchStr)) return true;
   }

   return false;
}

exports.isRelativies = isRelativies;