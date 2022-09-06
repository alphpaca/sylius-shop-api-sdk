export default function sum(...numbers: number[]) {
    console.log('dupa123 1234123')
    return numbers.reduce((total, number) => total + number, 0)
}

// can test in development like this:
//
// if (import.meta.vitest) {
//     const { describe, expect, it} = import.meta.vitest

//     describe("#someTest", ()=>{
//         it("returns 0 with no number parameters", () => {
//             expect(sum()).toBe(0)
//         })
    
//         it("returns same number with single number provided", () => {
//             expect(sum(96)).toBe(96)
//         })
    
//         it("returns sum when multiple numbers provided", () => {
//             expect(sum(1, 2, 3, 4, 5)).toBe(15)
//         })
//     })  
// }