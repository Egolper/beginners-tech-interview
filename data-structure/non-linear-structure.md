# 비선형 자료구조

> 자료 앞뒤로 1:n, 또는 n:n 관계가 가능하여 계층적 구조를 표현하기 좋다.

  - [그래프](#그래프-graph)
    - [MST](#최소-신장-트리-mst)
  - [트리](#트리-tree)
    - [이진트리](#이진트리-binary-tree)
    - [이진탐색트리](#이진탐색트리-binary-search-tree)
    - [이진힙 (우선순위큐)](#이진힙-binary-heap-우선순위-큐)
    - [( B 트리 )](#-b-트리-)
    - [( 트라이 )](#-트라이-trie-)
    - ( 허프만 트리 )
  - [해시테이블](#해시테이블)
    - [open addressing](#open-addressing)
    - [chaining](#chaining)
  - [Map, Set](#map-set)


<br>

[돌아가기](./README.md)

---

## 그래프 Graph

`객체 간의 관계` `example` 


<details>
<summary>&nbsp; 상세 포인트</summary>
<p>

- BFS(최단 경로), DFS(모든 노드 방문) `O(V+E)`
- 인접 행렬, 인접 리스트
- 방향, 간선에 가치

</p>
</details>

<details>
<summary>&nbsp; 트리와 그래프의 차이점을 설명해주세요.</summary>
<p>

- 트리는 사이클이 없다.
- 트리는 루트 노드가 있다. (모든 노드는 하나의 부모노드 만을 갖는다)

</p>
</details>

<br>

### 최소 신장 트리 MST

`모든 정점 연결` `간선 비용의 합이 최소`

<details>
<summary>&nbsp; 상세 포인트</summary>
<p>

- Kruskal, Prim은 알고리즘에서.

</p>
</details>

<br>

---

## 트리 Tree

`데이터의 계층적 관계`

<details>
<summary>&nbsp; 상세 포인트</summary>
<p>

- 트리는 데이터의 계층적 관계를 표현한 자료구조이다.
- 포화이진트리: 가장 밑 층이 좌측부터 채워져 있다.
- 완전이진트리: 가장 밑 층에 비워 있는 노드가 없다.

</p>
</details>

<details>
<summary>&nbsp; 배열과 트리의 차이점에 대해서 설명해주세요.</summary>
<p>

`관계` `계층적`
- 배열은 선형적으로 데이터를 담는 자료구조이고, 트리는 계층적 데이터를 표현하는 자료구조이다.
- 개체과의 관계를 노드와 엣지를 통해서 쉽게 표현할 수 있다.

</p>
</details>

<br>


### 이진트리 Binary Tree

`2개 자식` `순회`

<details>
<summary>&nbsp; 상세 포인트</summary>
<p>

- 각각의 노드가 최대 두 개의 자식 노드를 가지는 트리이다.

<br>

| 순회 종류 |             |                                 |
| --------- | ----------- | ------------------------------- |
| 전위 순회 | preorder    | root를 먼저 방문                |
| 중위 순회 | inorder     | 좌측 하위 트리 방문후 root 방문 |
| 후위 순회 | postorder   | 하위 트리 모두 방문후 root 방문 |
| 레벨 순회 | level order | 층별로 좌측에서 우측으로 방문   |

</p>
</details>

<br>

### 이진탐색트리 Binary Search Tree

`값 비교` `편향`

<details>
<summary>&nbsp; 상세 포인트</summary>
<p>

- 각 노드에는 하나의 키만 갖는다.
- 좌측 자식은 부모보다 작고 우측 자식을 부모보다 크다.

<br>

- 효율적인 탐색을 위한 데이터 저장방법이다. `O(h)`
- 데이터를 저장하다보면 `편향된 트리`가 될 수 있다. `O(N)`
  - **AVL 트리**
    - 회전을 통해서 트리의 밸런스를 보장한다.
    - LL, RR, RL, LR
  - **Red-Black 트리**
    - Red 노드, Black 노드 개수를 기반으로 트리를 회전시켜 트리의 밸런스를 보장한다.
      - 루트노드는 검은색
      - 모든 leaf node밖의 노드들은 검은색
      - 빨간색 노드의 자식은 무조건 검은색
      - 루트~리프노드까지 나오는 검은색 노드의 수는 같다
</p>
</details>

<br>

### 이진힙 Binary Heap (우선순위 큐)

`min힙` `max힙` `O(logN)`

<details>
<summary>&nbsp; 상세 포인트</summary>
<p>

- 힙 중에서 가장 널리 쓰이는 형태 중 하나이다.
- 루트에 항상 최댓값 혹은 최솟값을 갖고 우선순위 큐를 구현하는데 적절하다.
- 삽입, 삭제, 힙정렬

</p>

</details>

<details>
<summary>&nbsp; 이진힙과 BST의 차이점에 대해서 설명해주세요.</summary>
<p>

- 이진힙은 모든 자식이 부모와 대소관계를 갖는데 min힙이면 자식이 더 크고 max힙이면 자식이 더 작다. 반면 BST같은 경우 좌측자식이 더 작고 우측자식이 더 커야한다.

</p>
</details>

[우선순위 큐 JS 코드](./PriorityQueue.js)

<br>

### ( B 트리 )

`인덱싱` `빠른 탐색` 


<details>
<summary>&nbsp; 상세 포인트</summary>
<p>

- 모든 리프노드들이 같은 레벨을 가질 수 있도록 자동으로 벨런스를 맞추는 트리다.
- 정렬된 순서를 보장한다.
- 멀티레벨 인덱싱을 통한 빠른 검색할 수 있다.

![B트리](https://media.vlpt.us/images/emplam27/post/ddbae2c9-da94-457d-bad8-77ff6791255b/B%ED%8A%B8%EB%A6%AC%20%EA%B8%B0%EB%B3%B8%20%ED%98%95%ED%83%9C.png)

- 대표적인 3차 B트리이다.
- 좌측 포인터에 작은 노드, 중간 포인터에 사이 노드, 우측에 큰 노드가 들어 간다.
- 검색방법
  - 루트에서 대소관계를 비교하여 아래 노드로 탐색한다.
  - 리프노드에도 같은 key 값이 없으면 검색이 실패된다.

</p>
</details>

<br>

#### B+ 트리

`연결리스트` `초 빠른 탐색`

<details>
<summary>&nbsp; 상세 포인트</summary>
<p>

- 리프노드는 연결리스트의 형태로 선형 탐색이 가능하다.
- 모든 key, data가 리프노드 모여 있다.
- DBMS에서 인덱싱할 때 B+트리를 활용한다.

![B+트리](https://media.vlpt.us/images/emplam27/post/bcbce100-d475-4cda-aebe-946d1813949c/B%ED%94%8C%EB%9F%AC%EC%8A%A4%20%ED%8A%B8%EB%A6%AC%20%EA%B8%B0%EB%B3%B8%20%ED%98%95%ED%83%9C.jpg)

![B+트리 예시](https://media.vlpt.us/images/emplam27/post/64290106-d927-4a82-9e08-8e52783c7dd3/DB%20%EC%9D%B8%EB%8D%B1%EC%8A%A4.jpg)


</p>
</details>

<br>

### ( 트라이 Trie )

`문자열 탐색` `O(m)`

<details>
<summary>&nbsp; 상세 포인트</summary>
<p>

- 탐색 트리의 일종이다.
  - a-z 문자열이라면 26진 트리
- 삽입 탐색 모두 시간 복잡도 O(문자열 길이 m)이 걸린다.
- 자동 완성 알고리즘을 만들 수 있다.
  - 노드의 모든 자손은 노드에 연관된 문자열의 공통 접두사를 공유한다.

![예시사진](https://blog.kakaocdn.net/dn/pYAoN/btqPZJ9d7rl/YGhdbBzRXzLdY1ytJmsvJK/img.png)


- 트라이 만드는 법
  - Root에서부터 탐색을 시작한다.
  - 현 문자가 자식 노드 중에 있으면 그 노드를 탐색하고 없으면 새로운 노드를 생성한다.
  - 문자열의 모든 문자를 모두 탐색시킨다.

</p>
</details>

<br>

---

## 해시테이블

`key value` `해시 함수` `해시충돌`

<details>
<summary>&nbsp; 상세 포인트</summary>

---

- 해시 함수를 통해 키와 데이터값(value)를 매핑하여 함께 저장하는 자료구조이다.
- 해시 함수
  - 데이터를 효율적으로 관리하기 위해 임의의 길이의 데이터를 고정된 길이의 데이터로 매핑하는 함수이다.
  - 매핑된 고정된 길이의 데이터를 해시값이라고 부른다.
  - 예시. 나눗셈법, 곱셈법, universal hasing
- 데이터가 실제 저장되는 곳을 버킷 또는 슬롯이라고 한다.

---

</details>

<details>
<summary>&nbsp; 데이터 액세스할 때 발생하는 시간 복잡도에 대해서 설명해주세요.</summary>
<p>

- key를 바탕으로 해시연산을 하면 바로 value에 접근하기에 O(1)이 소요된다.
- 최악으로 해시충돌되어 모든 버킷을 순회하기에 최악으로 𝑂(1 + 버킷수) = O(N) 소요된다.

</p>
</details>

<br>

#### open addressing

<details>
<summary>&nbsp; 상세 포인트</summary>
<p>

- 충돌이 발생하면 다른 버킷에 데이터를 저장시킨다.
- 다른 버킷을 찾는 방법은 여러가지가 있다.

| 방식                       |                                                                                                                   |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| 선형탐색 Linear probing    | 고정적으로 폭을 증가 시킨다. h(key) +1, +2 ..                                                                     |
| 제곱탐색 Quadratic probing | 폭을 제곱수로 증가 시킨다. h(key) +2, +4 ..                                                                       |
| Random Probing             | 랜덤 함수를 통해 증가 시킨다. h(key) +난수1, +난수2 ...                                                           |
| 이중해싱 Double hashing    | 다음 해시값의 규칙성을 없애는 방법으로 이동폭을 다른 해시함수를 통해 구한다. 위 방식들이 가지는 군집화 문제 없다. |

- 어느정도 데이터가 차면 테이블 크기를 적절하게 늘려주고 처음부터 다시 해싱하는 것이 좋다.

</p>
</details>

<br>


#### chaining

<details>
<summary>&nbsp; 상세 포인트</summary>
<p>

- 한 버킷에 들어갈 데이터 수를 제한하지 않고 충돌되면 체인에 데이터를 추가한다.
  - 체인을 연결리스트, 레드블랙트리로 구현
- 해시가 충돌 될 때 해당 버킷 체인에 `보조 해시 함수`를 통해 해시값을 변형하여 해시 충돌 가능성을 줄인다.
- 일반적으로 open이 chaining보다 느리다.
  - 버킷 밀도가 높아지면서 open이 충돌빈도가 높이지기 때문이다.


</p>
</details>

<br>

---

## Map, Set

`key value`


<details>
<summary>&nbsp; map과 set의 차이점은?</summary>
<p>

- map같은 경우 key와 value를 매핑시키는 자료구조로 key를 통해서 value를 접근할 수 있다.
- set같은 경우 key가 곧 value로 저장되는 자료구조로 집합에 value가 있는지 여부를 파악하기 쉽다.


</p>
</details>

<br>
