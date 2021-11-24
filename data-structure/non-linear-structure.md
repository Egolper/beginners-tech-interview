# 비선형 자료구조

> 자료 앞뒤로 1:n, 또는 n:n 관계가 가능하여 계층적 구조를 표현하기 좋다.

  - [그래프](#그래프-graph)
    - [MST](#최소-신장-트리-mst)
  - [트리](#트리-tree)
    - [이진트리](#이진트리-binary-tree)
    - [이진탐색트리](#이진탐색트리-binary-search-tree)
    - 이진힙 (우선순위큐)
    - [( B 트리 )](#-b-트리-)
    - ( 트라이 )
    - ( 허프만 트리 )
  - 해시테이블
  - Map, Set
    - union-find


<br>

[돌아가기](./README.md)

---

### 그래프 Graph

`객체 간의 관계` `example` 


<details>
<summary>&nbsp; 상세 포인트</summary>
<p>

- BFS(최단 경로), DFS(모든 노드 방문) `O(V+E)`
- 인접 행렬, 인접 리스트
- 방향, 간선에 가치

</p>
</details>

<br>

<details>
<summary>&nbsp; 트리와 그래프의 차이점을 설명해주세요.</summary>
<p>

- 트리는 사이클이 없다.
- 트리는 루트 노드가 있다. (모든 노드는 하나의 부모노드 만을 갖는다)

</p>
</details>

<br>

#### 최소 신장 트리 MST

`모든 정점 연결` `간선 비용의 합이 최소`

<details>
<summary>&nbsp; 상세 포인트</summary>
<p>

- Kruskal, Prim은 알고리즘에서.

</p>
</details>

<br>

---

### 트리 Tree

`데이터의 계층적 관계`

<details>
<summary>&nbsp; 상세 포인트</summary>
<p>

- 트리는 데이터의 계층적 관계를 표현한 자료구조이다.
- 포화이진트리: 가장 밑 층이 좌측부터 채워져 있다.
- 완전이진트리: 가장 밑 층에 비워 있는 노드가 없다.

</p>
</details>

<br>

<details>
<summary>&nbsp; 배열과 트리의 차이점에 대해서 설명해주세요.</summary>
<p>

`관계` `계층적`
- 배열은 선형적으로 데이터를 담는 자료구조이고, 트리는 계층적 데이터를 표현하는 자료구조이다.
- 개체과의 관계를 노드와 엣지를 통해서 쉽게 표현할 수 있다.

</p>
</details>

<br>


#### 이진트리 Binary Tree

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

#### 이진탐색트리 Binary Search Tree

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
  - **Red-Black 트리**
    - Red 노드, Black 노드 개수를 기반으로 트리를 회전시켜 트리의 밸런스를 보장한다.

</p>
</details>

<br>


---



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

#### ( B+ 트리 )

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

---

