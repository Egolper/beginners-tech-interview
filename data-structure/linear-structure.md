# 선형 자료구조

> 앞뒤 자료들 간이 1:1의 선형관계를 맺는 자료구조이다.

  - [배열](#배열-array-list)
  - [연결리스트](#연결리스트-linked-list)
  - [스텍](#스텍-stack)
  - [큐](#큐-queue)
    - [선형큐와 원형큐](#선형큐와-원형큐)
  - [( 데크 )](#데크-deque)

<br>

[돌아가기](./README.md)

---

### 배열 Array List

`인접메모리` `Random Access` 

<details>
<summary>&nbsp; 상세 포인트</summary>
<p>

- 요소들을 연속된 물리주소 위치에 연이어 저장한다. 따라서 특정 요소를 O(1)로 접근할 수 있다.
- 특정 요소를 삽입, 제거하려면 요소들의 메모리 위치를 재조정해야하기에 O(N)이 필요하다. 

</p>
</details>

<br>

---

### 연결리스트 Linked List

`포인터` `Sequential Access`

<details>
<summary>&nbsp; 상세 포인트</summary>
<p>

- 요소들이 무작위 메모리 위치에 있고 포인터를 통해서 논리적으로 연결된다.
- 특정 요소를 탐색하기 위해 시작지점에서 부터 순차적으로 찾아가야하기에 O(N)이 소요된다. 
- 요소를 삽입, 삭제할 때 노드의 포인터만 조정해주면 되기에 O(1)이 소요된다.
- 노드의 연결구조에 따라 단순 연결 리스트, 원형 연결 리스트, 이중 연결리스트로 나뉜다.

</p>
</details>

<br>

#### 배열과 연결리스트의 차이를 잘 설명할 수 있어야 한다.

`메모리` `탐색` `삽입삭제`

<details>
<summary>&nbsp; 연결리스트에서 중간 요소을 어떻게 효율적으로 접근할 수 있는가?</summary>
<p>

- 2개의 포인터를 가지고 탐색을 하는데 하나는 2개 노드씩 이동하고 하나는 1개 노드씩 이동을 한다. 2개씩 이동하는 노드가 끝에 다달았을 때 1개씩 이동하는 노드의 위치가 중간 요소이다.

</p>
</details>

<br>


---


### 스텍 Stack

`후입선출` 


<details>
<summary>&nbsp; 상세 포인트</summary>
<p>

- 쌓아 올리는 자료구조로 가장 나중에 들어온 데이터를 빼낼할 수 있다. (top 한방향으로만 접근)
- DFS, 재귀에서 사용된다.

</p>
</details>

<br>

---


### 큐 Queue

`선입선출` `front & rear` 


<details>
<summary>&nbsp; 상세 포인트</summary>
<p>

- 줄을 세우는 자료구조로 먼저 들어온 데이터를 빼낼 수 있다.
- front, rear 두방향으로 접근할 수 있고 front로 데이터를 추출하고 rear로 데이터를 삽입한다.
- BFS, 캐시를 구현할 때 사용된다.

</p>
</details>

<br>

#### 선형큐와 원형큐

`꽉 차는 기준` `공간 재활용`

<details>
<summary>&nbsp; 상세 포인트</summary>
<p>


![queue](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FP2AjD%2FbtqDaU3tb21%2FPRkoy9hnjkTFIkS96wrY51%2Fimg.png)

- 선형큐
  - `rear = n - 1`이면 큐가 꽉찬 것.
  - `front` 앞에 있는 공간이 낭비된다.
  - `front = rear = n - 1`일 때 큐가 비어 있으면서 꽉차 있는 놀라운 현상이 발생할 수 있다.

- 원형큐
  - 논리적으로 배열을 원형으로 재해석한 자료구조이다.
  - `rear = front - 1`이면 큐가 꽉 찬 것.
  - `rear`가 `front` 앞에 있는 공간을 활용할 수 있게 된다.
- 둘다 resize 문제를 보유하고 있다.

</p>
</details>

<br>

---

### 데크 Deque

`양방향으로 삽입과 삭제`

<details>
<summary>&nbsp; 상세포인트 </summary>
<p>

- 스택과 큐의 기능을 모두 가진다.
- 덱의 파생 자료구조
  - 스크롤 
    - 입력은 한쪽 끝으로만 가능하도록 제한 (입력 제한)
  - 셸프 
    - 출력은 한쪽 끝으로만 가능하도록 제한 (출력 제한)

</p>
</details>

<br>
