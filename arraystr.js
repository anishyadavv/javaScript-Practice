const strArr = ["(1,2)", "(2,3)", "(3,4)", "(4,5)", "(5,6)"];
 const map = new Map();

 for (let pair of strArr) {

   const [child, parent] = pair.match(/\d+/g).map(Number);

   if (map.has(child) || [...map.values()].includes(parent)) {
     return "false";
   }

   map.set(child, parent);
 }

 let rootCount = 0;
 for (let [child, parent] of map.entries()) {
   if (!map.has(parent)) {
     rootCount++;
     if (rootCount > 1) {
       return "false";
     }
   }
 }

 return "true";