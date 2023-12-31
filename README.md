# 끼랭(영문명: wwklang)

> 우 왁 끼 는 살 아 있 다 ! ! !

왁끼스탕스를 위한 혁명 언어입니다.

## 사용법
각 구현체 디렉토리 README에 구체적인 실행 방법이 기록되어 있습니다. 공통적인 규칙은 다음과 같습니다.
* 스크립트 확장자는 `.wwk` 입니다.
* `내가싼똥`부터 명령어를 인식합니다. `침바~`가 나오면 프로그램이 종료됩니다.
* 문법에 적힌 명령어 외 문자는 무시됩니다. 예를 들어, 공백 문자는 무시됩니다.
* 문법은 하단 설명을 읽어주세요.

## 문법
`내가싼똥`부터 명령어를 인식합니다. `침바~`가 나오면 프로그램이 종료됩니다. 즉, `내가싼똥` 위로 `침바~` 아래로 무시됩니다. 외에는 기본적으로 Brainfuck 언어와 생긴 것만 다르고 동일합니다.

| 명령어 | 의미 |
|------|-----|
| 우  | 포인터 위치가 1 증가됩니다. |
| 왁  | 포인터 위치가 1 감소합니다. |
| 끼  | 포인터 위치에 해당하는 값이 1 증가합니다. |
| 는  | 포인터 위치에 해당하는 값이 1 감소합니다. |
| 살  | 포인터에 해당하는 값을 ASCII 값으로 출력합니다. |
| 아  | 포인터 위치에 입력받은 값을 저장합니다. |
| 있  | 포인터 위치에 해당하는 값이 0이라면 "다"로 이동합니다. 0이 아니라면 다음 명령어로 이동합니다. |
| 다  | 포인터 위치에 해당하는 값이 0이 아니라면 "있"로 이동합니다. 0이라면 다음 명령어로 이동합니다. |

## 예제
### Hello, World!
```
내가싼똥
끼끼끼 끼끼끼 끼끼끼끼
있 우 끼끼 끼끼끼 끼끼 우 끼끼끼 끼끼끼 끼끼끼끼 우 끼끼끼 우 끼 왁왁왁왁 는 다
우 끼끼 살 우 끼 살 끼끼끼 끼끼끼끼 살 살 끼끼끼 살 우
끼끼끼 끼끼끼 끼끼끼 끼끼끼 끼끼 살 는는는 는는는 는는는 는는는 살 왁왁
끼끼끼 끼끼끼 끼끼끼 끼끼끼 끼끼끼 살 우 살 끼끼끼 살 는는는 는는는 살
는는는 는는는 는는 살 우 끼 살
침바~
```

## 구현체
* [JavaScript (Node)](./node)
* [JavaScript (Web)](./web)

## 참고자료
* [Brainfuck](https://github.com/kciter/brainfuck-impl)
* [엄랭](https://github.com/rycont/umjunsik-lang)
* [jazzlang](https://github.com/kciter/jazzlang)

## 라이센스
MIT License.
