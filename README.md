# 정규표현식(RegExp)

정규식, Regular Expression

## 역할

- 문자 검색(search)
- 문자 대체(replace)
- 문자 추출(extract)

## 정규식 생성
```js
//생성자
new RegExp('표현','옵션')
new RegExp('[a-z]', 'gi')

//리터럴
/표현/옵션
/[a-z]/gi
```

## 예제 문자
```js
const str = `
010-1234-5678
thesecon@ganmil.com
https:www.omdbapi.com/?
The quick brown fox jumps over the lazy dog.
abbccccdddd
`
```
| `(백틱)은 엔터를 쳐도 한나의 문자열로인식함

## 메소드

메소드 | 문법 | 설명
--|--|--
test | `정규식.test(문자열)` | 일치 여부(Boolean) 반환
mathch | `문자열.match(정규식)` | 일치하는 문자의 배열(Array)반환
replace | `문자열.replace(정규식,대체문자)` | 일치하는 문자를 대체

#원래 값에 바꾸지는 않는다.


## 플래그(옵션)
플래그 | 설명
--|--
g | 모든 문자 일치(global)
i | 영어 대소문자를 구분하지 않고 일치(ignoer case)
m | 각 줄 마다 시작과 끝으로 보겠다.(multi line)

## 패턴(표현)

패턴 | 설명
--|--
^ab | 줄(line) 시작에 있는 ab와 일치
ab$ | 줄(line) 끝에 있는 ab와 일치
. | 와일드카드(글자수)
a&verbar;b | a 또는 b와 일치
ab? | b가 있거나 없거나

{ }
패턴 | 설명
--|--
a{3} | a가 3개 연속 일치
a{3,} | a가 3개 이상 연속 일치
a{3,5} | a가 3개 이상 5개 이하(3~5개) 연속 일치

[ ]
패턴 | 설명
--|--
[abc] | a 또는 b 또는 c
[a-z] | a부터 z 사이의 문자 구간에 일치(영어 소문자)
[A-Z] | A부터 Z 사이의 문자 구간에 일치(영어 대문자)
[0-9] | 0부터 9 사이의 문자 구간에 일치(숫자)
[가-힣] | 가부터 힣 사이의 문자 구간에 일치(한글)

\
패턴 | 설명
--|--
\w | 63개 문자(Word,대소영문52개+숫자10개 +_)에 일치
\b | 63개 문자에 일치하지 않는 문자를 경계로하여 자름(Boundary)
\d | 숫자(Digit)에 일치
\s | 공백(Space, Tab 등)에 일치

( )
일치
패턴 | 설명
--|--
(?=) | 앞쪽 일치 (Lookahead)  /.{1,}(?=@)/g
(?<=) | 뒤쪽 일치 (Lookbehind)  /(?<=@).{1,}/g
