## [Data Structure](./README.md)
#### [선형 자료구조](./linear-structure.md)
  - [배열, 연결리스트](./linear-structure.md#배열,-연결리스트)
  - [스텍, 큐](./linear-structure.md#스텍,-큐,-데크)

#### [비선형 자료구조](./non-linear-structure.md)
  - [그래프](./non-linear-structure.md#그래프-graph)
  - [트리](./non-linear-structure.md#트리-tree)

[돌아가기](./README.md)

<br>

# 그외 자료구조

<br>

## 해시테이블, Map, Set

<details>
<summary>&nbsp; 해시테이블에 대해서 설명해주세요.</summary>

---

`key value`

- 해시 함수를 통해 키(key)와 데이터값(value)를 매핑하여 저장하는 자료구조이다.
  - `해시 함수`
    - 임의의 길이의 (key)를 고정된 길이의 (index, 해시값)로 변환되어 (value)의 주소를 매핑하는 함수이다.
    - SHA1, SHA256 ()
  - `해시 충돌`
    - 해시 함수의 성능에 따라 다른 key가 같은 해시값으로 변환되는 경우가 발생할 수 있다.
    - 크게 open addressing, chaning 2가지 방법이 있다.
- 데이터가 실제 저장되는 곳을 버킷 또는 슬롯이라고 한다.
- [참고하면 좋은 글](https://baeharam.netlify.app/posts/data%20structure/hash-table)

---

</details>

<details>
<summary>&nbsp; 해시테이블에서 데이터 액세스할 때의 시간 복잡도에 대해서 설명해주세요.</summary>

---

`해시충돌`

- key를 바탕으로 해시연산을 하면 바로 value에 접근하기에 평균 𝑂(1)이 소요된다.
- 최악으로 해시충돌되어 모든 버킷 혹은 연결도니 리스트를 순회하기에 𝑂(N) 소요된다.

---

</details>

<details>
<summary>&nbsp; open addressing에 대해서 설명해주세요.</summary>

---

`다른 위치`

- 충돌이 발생하면 다른 버킷에 데이터를 저장시킨다.
- 다른 버킷을 찾는 방법은 여러가지가 있다.

| 방식                       |                                                                                                                   |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 선형탐색 Linear probing    | 고정적으로 폭을 증가 시킨다. h(key) +1, +2 ..                                                                     |
| 제곱탐색 Quadratic probing | 폭을 제곱수로 증가 시킨다. h(key) +2, +4 ..                                                                       |
| 랜덤탐색 Random Probing    | 랜덤 함수를 통해 증가 시킨다. h(key) +난수1, +난수2 ...                                                           |
| 이중해싱 Double hashing    | 다음 해시값의 규칙성을 없애는 방법으로 이동폭을 다른 해시함수를 통해 구한다. 위 방식들이 가지는 군집화 문제 없다. |

- 어느정도 데이터가 차면 테이블 크기를 적절하게 늘려주고 처음부터 다시 해싱하는 것이 좋다.
  - 통계적으로 테이블의 적재율이 70% ~ 80%정도가 되면 성능이 저하된다.

---

</details>

<details>
<summary>&nbsp; chaining 방식에 대해서 설명해주세요.</summary>

---

`연결리스트`

- 한 버킷에 들어갈 데이터 수를 제한하지 않고 충돌되면 체인에 데이터를 추가한다.
  - 체인을 연결리스트, 레드블랙트리로 구현할 수 있다.
- 해시가 충돌 될 때 해당 버킷 체인에 `보조 해시 함수`를 통해 해시값을 변형하여 해시 충돌 가능성을 줄인다.
- 일반적으로 open이 chaining보다 느리다.
  - 버킷 밀도가 높아지면서 open이 충돌빈도가 높이지기 때문이다.

---

</details>

<details>
<summary>&nbsp; map과 set의 차이점은?</summary>

---

`key == value` `key != value`

- map같은 경우 key와 value를 매핑시키는 자료구조로 key를 통해서 value를 접근할 수 있다.
- set같은 경우 key가 곧 value로 저장되는 자료구조로 집합에 value가 있는지 여부를 파악하기 쉽다.

---

</details>

<details>
<summary>&nbsp; 자료구조에서 암호화시키는 방법과 어떻게 암호화하는지 설명해줄 수 있나요? (K사)</summary>

---

`해싱` `허프만 코딩`

(꼬리질문)

<details>
<summary>&nbsp; 실제 사용되는 예시가 있을까요?</summary>
<p>

- 비밀번호, 평문 통신?

</p>
</details>

<details>
<summary>&nbsp; 해싱에서 효율적으로 암호화하는 방식이 있을까요?</summary>
<p>

- 수학적으로 충돌 가능성이 작은 해싱함수를 사용한다. (예를 들어서 SHA-256)

</p>
</details>

---

</details>

<br>

## 진법 

> 게임 쪽에서 주로 물어 본다.

<details>
<summary>&nbsp; 부동소수점 연산에서 교환법칙이 성립할까요?</summary>

---

교환법칙, 곱셈법칙은 성립하지만 결합법칙은 성립하지 않는다.

```
(3 + 1.1234) + 0.0006 = 4.124
3 + (1.1234 + 0.0006) = 4.124
```

---

</details>

<details>
<summary>&nbsp; 2진수 → 10진수 → 16진수 변환 손코딩</summary>

---

- 

---

</details>

<br>
