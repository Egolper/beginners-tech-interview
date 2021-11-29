## [Data Structure](./README.md)
#### [비선형 자료구조](./non-linear-structure.md)
  - [그래프](./non-linear-structure.md#그래프-graph)
  - [트리](./non-linear-structure.md#트리-tree)

#### [그외 자료구조](./else-structure.md)
  - [해시테이블](./else-structure.md#해시테이블,-Map,-Set)
  - [진법](././else-structure.md#진법)

[돌아가기](./README.md)


<br>

# 선형 자료구조

> 앞뒤 자료들 간이 1:1의 선형관계를 맺는 자료구조이다.
 
<br>

## 배열, 연결리스트

<details>
<summary>&nbsp; 배열과 연결리스트의 차이에 대해서 설명해주세요.</summary>

---

`인접메모리` `Random Access`

- 배열은 요소들을 연속된 물리주소 위치에 연이어 저장하고 연결리스트는 무작위 메모리 위치에 있고 포인터를 통해서 논리적으로 연결한다. 
- 따라서 배열 특정 요소를 O(1)로 접근하고 .

- 특정 요소를 삽입, 제거하려면 요소들의 메모리 위치를 재조정해야하기에 O(N)이 필요하다. 
- 요소를 삽입, 삭제할 때 노드의 포인터만 조정해주면 되기에 O(1)이 소요된다. 

- 요소들이 무작위 메모리 위치에 있고 포인터를 통해서 논리적으로 연결된다.
- 특정 요소를 탐색하기 위해 시작지점에서 부터 순차적으로 찾아가야하기에 O(N)이 소요된다.

---

</details>

<details>
<summary>&nbsp; 연결리스트의 종류에 대해서 설명해주세요.</summary>

---

- `단순 연결 리스트` 한방향으로 데이터가 연결 된다. 
- `원형 연결 리스트` 맨 끝이 NULL이 아니라 첫 노드를 가리킨다.
- `이중 연결리스트` 하나 노드에 head와 tail이 있어 앞뒤로 탐색을 할 수 있다.

---

</details>

<details>
<summary>&nbsp; 연결리스트에서 중간 요소을 어떻게 효율적으로 접근할 수 있는가?</summary>

---

- 2개의 포인터를 가지고 탐색을 하는데 하나는 2개 노드씩 이동하고 하나는 1개 노드씩 이동을 한다. 2개씩 이동하는 노드가 끝에 다달았을 때 1개씩 이동하는 노드의 위치가 중간 요소이다.

---

</details>

<br>

## 스텍, 큐, 데크



<details>
<summary>&nbsp; 스택에 대해서 설명해주세요.</summary>

---

`후입선출` 

- 쌓아 올리는 자료구조로 가장 나중에 들어온 데이터를 빼낼할 수 있다. (top 한방향으로만 접근)
- DFS, 재귀에서 사용된다.

---

</details>

<details>
<summary>&nbsp; 큐에 대해서 설명해주세요.</summary>

---

`선입선출` `front & rear` 

- 줄을 세우는 자료구조로 먼저 들어온 데이터를 빼낼 수 있다.
- front, rear 두방향으로 접근할 수 있고 front로 데이터를 추출하고 rear로 데이터를 삽입한다.
- BFS, 캐시를 구현할 때 사용된다.

---

</details>

<details>
<summary>&nbsp; 선형큐와 원형큐에 대해서 설명해주세요.</summary>

---

`꽉 차는 기준` `공간 재활용`

- 선형큐
  - `rear = n - 1`이면 큐가 꽉찬 것.
  - `front` 앞에 있는 공간이 낭비된다.
  - `front = rear = n - 1`일 때 큐가 비어 있으면서 꽉차 있는 놀라운 현상이 발생할 수 있다.

- 원형큐
  - 논리적으로 배열을 원형으로 재해석한 자료구조이다.
  - `rear = front - 1`이면 큐가 꽉 찬 것.
  - `rear`가 `front` 앞에 있는 공간을 활용할 수 있게 된다.
- 둘다 resize 문제를 보유하고 있다.

![queue](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FP2AjD%2FbtqDaU3tb21%2FPRkoy9hnjkTFIkS96wrY51%2Fimg.png)

---

</details>

<details>
<summary>&nbsp; 데크에 대해서 설명해주세요. </summary>

---

`양방향으로 삽입과 삭제`

- 스택과 큐의 기능을 모두 가진다.
- 덱의 파생 자료구조
  - 스크롤 
    - 입력은 한쪽 끝으로만 가능하도록 제한 (입력 제한)
  - 셸프 
    - 출력은 한쪽 끝으로만 가능하도록 제한 (출력 제한)

---

</details>

<br>
