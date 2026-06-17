class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }
        
        let table = {};
        for(let i = 0; i < s.length; i++){
            let letter = s[i];
        
            if(!table[letter]){
            table[letter] = 1
            } else {
                table[letter]++;
            }
        }

        for(let i = 0; i < t.length; i++){
            let letter = t[i];
            if(table[letter] === undefined){
                return false;
            }
            if (table[letter] < 1){
                return false;
            }
            table[letter]--;
        }
        return true;
    }
}
