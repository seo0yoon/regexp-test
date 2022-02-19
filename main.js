const str = `
010-1234-5678
theew@naver.com
https://www,omdbapi.com/?apikey=7035c60c&s=frozen
The puick brown fox humps over the lazt dog.
abbcccddddd
`

console.log(
  str.match(/(?<=@).{1,}/g)
)