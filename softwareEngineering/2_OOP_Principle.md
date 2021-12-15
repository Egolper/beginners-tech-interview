<details>
<summary>&nbsp; 목차 바로가기</summary>

---

## [Software Engineering](./README.md)
#### [프로그래밍 패러다임들](./1_Paradigm.md)
#### 객체 지향 설계 5원칙 - SOLID
#### [REST API](./3_REST.md)

<br>

[( 홈으로 )](../README.md)

---

</details>

<br>

# 객체 지향 설계 원칙

객체 지향 설계 원칙이란 `객체 지향 사용법`을 정리한 것이라고 볼 수 있다. 5가지를 소개하고자 한다.

<details>
<summary>단일 책임 원칙</summary>

---
- 하나의 클래스가 하나의 책임과 역할을 갖도록 하는 것.
- 클래스는 그 역할을 완전히 캡슐화해야한다.
---
</details>

<details>
<summary>개방 폐쇄 원칙</summary>

---
- 확장에는 열려있고 수정에는 닫혀있도록 하는 것.
- 상속과 다형성을 이용하여 확장시킬거나 기능을 추가할 수 있다.
---
</details>

<details>
<summary>리스코프 치환 원칙</summary>

---
- 자식클래스는 언제나 부모클래스를 대체할 수 있어야 한다.
- 자식클래스가 부모클래스의 책임을 무시/재정의하지 않고 `확장만을 수행해야한다` -> Overriding하더라도 super클래스의 메서드를 호출하고 추가적인 작업을 해야한다.
---
</details>

<details>
<summary>인터페이스 분리 원칙</summary>

---
- 자신이 사용하지 않는 인터페이스를 구현하지 말아야 한다.
- 기능별로 쪼개서 여러개의 인터페이스를 이용하는 것이 좋다.
---
</details>

<details>
<summary>의존 역전 원칙</summary>

---
- 의존 관계를 맺을 때 변하기 쉬운 것이 아닌 거의 변하지 않는 것에 의존해야 한다.
- 구체적인 클래스보다 인터페이스와 관계를 맺어 의존 관계를 역전시킴으로서 유지/보수에 좋다
---
</details>