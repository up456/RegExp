let str = `
010-1234-5678
thesecon@ganmil.com
https:www.omdbapi.com/?
The quick brown fox jumps over the lazy dog.
abbccccdddd
`


console.log(
  str.match(/(?<=@).{1,}/g)
)
