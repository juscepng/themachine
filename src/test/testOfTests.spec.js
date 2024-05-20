describe("test of tests", () => {   
    function sum(a, b) {
        return a + b;
    }

    test('adds 1 + 2 to equal 3', () => {
        const result = sum(1, 2);
        expect(result).toBe(3);
    });

    it('adds 1 + 5 to not equal 3', () => {
        const result = sum(1, 5);
        expect(result).not.toBe(3);
    });
})