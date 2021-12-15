<details>
<summary>&nbsp; 목차</summary>

---

## [Algorithm](./README.md)

#### 정렬

#### [그래프 알고리즘](./graph.md)
  - [MST 알고리즘](./graph.md#mst-알고리즘-2)
  - [최단경로](./graph.md#최단경로)


#### [탐색 알고리즘](./search.md)

[( 홈으로 )](../README.md)

---

</details>

<br>

# 정렬

> 면접 때 단골로 묻는다. 반드시 설명할 수 있어야 한다.   
> 퀵정렬 정도는 손코딩 대비하는 것도 좋다.

<br>

<details>
<summary>&nbsp; stable, unstable에 대해서 설명해주세요. ( K사 )</summary>

---

`같은 value의 정렬 후 위치`

(꼬리 질문)
- 각각 해당되는 정렬알고리즘을 말해보세요.
- 말한 알고리즘이 어떻게 stable함을 보장하는지 설명해주세요.
- 각각의 시간 복잡도를 설명해주세요.
- 퀵정렬과 합병정렬의 장단점, 어디서 사용되면 좋을까요?

---

</details>

<details>
<summary>&nbsp; In-place sort에 대해서 설명해주세요.</summary>

---

`추가적인 메모리 공간`

- 원소들의 개수에 비해서 충분히 무시할 만한 저장 공간만을 더 사용하는 정렬 알고리즘이다.
- 해당
  - 버블, 선택, 삽입, 셸, 힙, 퀵
- 해당되지 않음
  - 합병, 기수

---

</details>

<details>
<summary>&nbsp; 부분적으로 정렬되어 있는 상태에서 사용하면 좋은 알고리즘은? ( K사 )</summary>

---

`삽입정렬` `셸 정렬`

- 바로 다음 값 이전이 자신의 위치기에 별도의 탐색없이 O(n)이 소요된다. 

---

</details>

<br>

<details>
<summary>&nbsp; 버블정렬에 대해서 설명해주세요.</summary>

---

`인접한 2 원소 비교` `O(n^2)`

- 배열 제일 끝에 큰 숫자가 오도록 계속 인접한 2원소를 비교하고 스왑한다.
- 코드가 짧고 단순하다.
- `stable` `in-place`

---

</details>


<details>
<summary>&nbsp; 선택정렬에 대해서 설명해주세요.</summary>

---

`첫번째 최솟값 선택` `O(n^2)`

- 자료 이동횟수가 미리 결정된다.
- `unstable` `in-place`
  - `[7, 7', 1]`과 같은 상황에서 `[1, 7', 7]` 순서가 바뀐다.
---

</details>

<details>
<summary>&nbsp; ✨ 삽입정렬에 대해서 설명해주세요.</summary>

---

`자신의 위치 찾기` `O(n^2)`

- 정렬된 구간에 자신의 위치를 찾아 삽입한다.
- 대부분 정렬된 상태에서 사용하기 좋다. 바로 다음 위치 직전이 자신의 위치기에 순회를 안하여 `O(n)`이 되기 때문이다.
  - 요소가 적을 때 알고리즘이 간단하여 다른 복잡한 정렬 방법보다 유리하다.
- 반면 거꾸로 정렬시 항상 멀리 떨어진 곳으로 이동해야하여 비효율적이다.
- `stable` `in-place`

---

</details>

<details>
<summary>&nbsp; 셸정렬에 대해서 설명해주세요.</summary>

---

`간격` `삽입정렬 이용` `n ~ O(nlogn) ~ O(n^2)`

- 삽입정렬을 보완했다. ( 멀리 떨어진 곳으로 이동해야 하는 가능성 )
- 간격( 요소수 / 2 )을 두고 1이 될 때까지 부분 연결리스트를 추출하여 삽입정렬시킨다.
- `unstable` `in-place`

---

</details>

<details>
<summary>&nbsp; ✨ 힙정렬에 대해서 설명해주세요.</summary>

---

`힙` `O(nlogn)`

- 힙를 구성하여 요소를 하나씩 빼낸다.
- 내림차순은 max heap, 오름차순은 min heap을 사용한다.
- 가장 큰 값 몇개만 필요할 때 상당히 유용하다.


---

</details>

<details>
<summary>&nbsp; ✨ 합병정렬에 대해서 설명해주세요.</summary>

---

`분할정복` `O(nlogn)`
- 배열을 반으로 계속 분할하고 2개 요소가 되었을 때 비교해서 스왑을 한다.
- `stable` `not in-place`
  - 연결리스트로 구현시 in-place할 수 있다.
- 자연합병정렬

---

</details>

<details>
<summary>&nbsp; ✨ 퀵정렬에 대해서 설명해주세요.</summary>

---

`피벗` `O(nlogn) ~ O(n^2)`
- 피벗을 선정하여 좌측, 우측 끝 값을 서로 비교하여 스와핑한다.
- `unstable` `in-place`
- 피벗을 (최댓값 혹은 최솟값으로) 잘못 선정할 경우 `O(n)`이 소요된다.
  - 이를 방지하기 위해 미디안 퀵 (랜덤 3개 중 중간값), 터키 퀵 (랜덤 7개 중 중간값)이 있다.

---

</details>

<details>
<summary>&nbsp; ( 심화 ) 기수정렬에 대해서 설명해주세요.</summary>

---

`O(dn)`

- 자리수가 고정된 요소들을 정열할 때 효율적이다.
- 1의 자릿수부터 자신에 해당되는 버킷 Queue에 삽입한다. 큐의 순서대로 하나씩 다시 빼낸다. 2의 자릿수 기준으로 다시 버킷에 삽입한다.
- 스왑을 하지않는다.

---

</details>

<br>

[정렬 과정 참고](https://gmlwjd9405.github.io/tags#sort)