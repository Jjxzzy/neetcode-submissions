class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
       let minIndex = 0;
       let maxIndex = heights.length-1;
       let max_Area = 0;

       while (minIndex < maxIndex){
            const height = Math.min(heights[minIndex], heights[maxIndex]);
            const width = maxIndex - minIndex;

            max_Area = Math.max(max_Area, height*width);

            if(heights[minIndex] < heights[maxIndex]){
                minIndex++
            }
            else {
                maxIndex--
            }
       }
       return max_Area;
    }
}
