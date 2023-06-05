import { findLongestCommonSubstring } from "./longestCommonSubstring"
test('Find longest common substring', ()=>{
    expect(findLongestCommonSubstring(['abcdef', 'abczyzcdef'], 2)).toEqual('ef')
})