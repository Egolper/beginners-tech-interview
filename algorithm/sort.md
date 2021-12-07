<details>
<summary>&nbsp; 목차</summary>

---

## [Algorithm](./README.md)

#### 정렬

#### [그래프 알고리즘](./graph.md)
  - [MST 알고리즘](./graph.md#mst-알고리즘)
  - [최단경로](./graph.md#최단경로)


#### [탐색 알고리즘](./search.md)

[( 홈으로 )](../README.md)

---

</details>

<br>

# 정렬

> 면접 때 단골로 묻는다. 반드시 설명할 수 있어야 한다.   
> 퀵정렬 정도는 손코딩 대비하는 것도 좋다.

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
  - 버블, 선택, 삽입, 쉘, 힙, 퀵
- 해당되지 않음
  - 합병, 기수

---

</details>

<details>
<summary>&nbsp; 부분적으로 정렬되어 있는 상태에서 사용하면 좋은 알고리즘은? (K사)</summary>

---

`삽입정렬`

- 바로 다음 값 이전이 자신의 위치기에 별도의 탐색없이 O(n)이 소요된다. 

---

</details>

<br>

<details>
<summary>&nbsp; 버블정렬에 대해서 설명해주세요.</summary>

---

- 

---

</details>


<details>
<summary>&nbsp; 선택정렬에 대해서 설명해주세요.</summary>

---

- 

---

</details>

<details>
<summary>&nbsp; ✨ 삽입정렬에 대해서 설명해주세요.</summary>

---

`O(nlogn)` `stable` `in-plate`

- 정렬된 구간에 자신의 위치를 찾아 삽입한다.
- 정렬된 상태에서 사용하기 좋다. 바로 다음 위치 직전이 자신의 위치기에 순회를 안하여 O(n)이 되기 때문이다.
- 합병정렬, 퀵정렬에서 작은 크기의 

---

</details>

<details>
<summary>&nbsp; 쉘정렬에 대해서 설명해주세요.</summary>

---

- 

---

</details>

<details>
<summary>&nbsp; ✨ 힙정렬에 대해서 설명해주세요.</summary>

---

- 

---

</details>

<details>
<summary>&nbsp; ✨ 합병정렬에 대해서 설명해주세요.</summary>

---

- 

---

</details>

<details>
<summary>&nbsp; ✨ 퀵정렬에 대해서 설명해주세요.</summary>

---

- 

---

</details>

<details>
<summary>&nbsp; ( 심화 ) 기수정렬에 대해서 설명해주세요.</summary>

---

- 

---

</details>

<br>
