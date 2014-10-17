describe("Bubble Sort", function() {
    it("handles an empty array", function() {
        expect(bubbleSort([])).toEqual([]);
    });
    it("handles a sorted array", function() {
      expect(bubbleSort([1,2,3,4])).toEqual([1,2,3,4]);
    });
    it("handles an unsorted array", function() {
        expect(bubbleSort([9,3,1,6,3,9,2,4,7])).toEqual([1,2,3,3,4,6,7,9,9]);
    });
});

describe("Merge Sort", function() {
    it("should sort an unsorted array", function() {
        expect(sort([2,4,9,1,0,4,3,5,7,8])).toEqual([0,1,2,3,4,4,5,7,8,9]);
    });
});

describe("merge", function() {
  it("is able to merge two arrays", function() {
        expect(merge([2,4,6],[1,3,5])).toEqual([1,2,3,4,5,6]);
    });
});
