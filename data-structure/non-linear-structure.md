## [Data Structure](./README.md)
#### [선형 자료구조](./linear-structure.md#선형-자료구조)
  - [배열, 연결리스트](./linear-structure.md#배열-연결리스트)
  - [스텍, 큐](./linear-structure.md#스텍,-큐,-데크)

#### 비선형 자료구조

#### [그외 자료구조](./else-structure.md#그외-자료구조)
  - [해시테이블](./else-structure.md#해시테이블-map-set)
  - [진법](./else-structure.md#진법)

[( 홈으로 )](../README.md)

<br>

# 비선형 자료구조

> 자료 앞뒤로 1:n, 또는 n:n 관계가 가능하여 계층적 구조를 표현하기 좋다.

<br>

## 그래프 Graph

<details>
<summary>&nbsp; 그래프에 대해서 설명해주세요.</summary>

---

`객체 간의 관계` 

- BFS(최단 경로), DFS(모든 노드 방문) `O(V+E)`
- 인접 행렬, 인접 리스트
- 방향 유무, 간선에 가치 유무

---

</details>

<details>
<summary>&nbsp; 트리와 그래프의 차이점을 설명해주세요.</summary>

---

- 트리는 사이클이 없다.
- 트리는 루트 노드가 있다. (모든 노드는 하나의 부모노드 만을 갖는다)

---

</details>

<details>
<summary>&nbsp; 최소 신장 트리(MST)에 대해서 설명해주세요.</summary>

---

`모든 정점 연결` `간선 비용의 합이 최소`
- Kruskal, Prim은 알고리즘에서.

---

</details>

<br>

## 트리 Tree

<details>
<summary>&nbsp; 트리에 대해서 설명해주세요.</summary>

---

`데이터의 계층적 관계`

- 트리는 데이터의 계층적 관계를 표현한 자료구조이다.
- 포화이진트리: 가장 밑 층이 좌측부터 채워져 있다.
- 완전이진트리: 가장 밑 층에 비워 있는 노드가 없다.

---

</details>

<details>
<summary>&nbsp; 배열과 트리의 차이점에 대해서 설명해주세요.</summary>

---

`관계` `계층적`

- 배열은 선형적으로 데이터를 담는 자료구조이고, 트리는 계층적 데이터를 표현하는 자료구조이다.
- 개체과의 관계를 노드와 엣지를 통해서 쉽게 표현할 수 있다.

---

</details>

<details>
<summary>&nbsp; 이진트리에 대해서 설명해주세요.</summary>

---

`2개 자식` `순회`

- 각각의 노드가 최대 두 개의 자식 노드를 가지는 트리이다.

<br>

| 순회 종류 |             |                                 |
| --------- | ----------- | ------------------------------- |
| 전위 순회 | preorder    | root를 먼저 방문                |
| 중위 순회 | inorder     | 좌측 하위 트리 방문후 root 방문 |
| 후위 순회 | postorder   | 하위 트리 모두 방문후 root 방문 |
| 레벨 순회 | level order | 층별로 좌측에서 우측으로 방문   |

---

</details>

<details>
<summary>&nbsp; 이진탐색트리에 대해서 설명해주세요.</summary>

---

`값 비교` `편향`

- 각 노드에는 하나의 키만 갖는다.
- 좌측 자식은 부모보다 작고 우측 자식을 부모보다 크다.

<br>

- 효율적인 탐색을 위한 데이터 저장방법이다. `O(h)`
- 데이터를 저장하다보면 `편향된 트리`가 될 수 있다. `O(N)`
  - **AVL 트리**
    - 회전을 통해서 트리의 밸런스를 보장한다.
    - LL, RR, RL, LR
  - (심화) **Red-Black 트리**
    - Red 노드, Black 노드 개수를 기반으로 트리를 회전시켜 트리의 밸런스를 보장한다.
      - 루트노드는 검은색
      - 모든 leaf node밖의 노드들은 검은색
      - 빨간색 노드의 자식은 무조건 검은색
      - 루트~리프노드까지 나오는 검은색 노드의 수는 같다

---

</details>

<details>
<summary>&nbsp; 힙에 대해서 설명해주세요.</summary>

---

`min힙` `max힙` `O(logN)`

- 힙 중에서 가장 널리 쓰이는 형태 중 하나이다.
- 루트에 항상 최댓값 혹은 최솟값을 갖고 *우선순위 큐*를 구현하는데 적절하다.
- 삽입, 삭제, 힙정렬
- [우선순위 큐 JS 코드](./PriorityQueue.js)

---

</details>

<details>
<summary>&nbsp; 이진힙과 BST의 차이점에 대해서 설명해주세요.</summary>

---

- 이진힙은 모든 자식이 부모와 대소관계를 갖는데 min힙이면 자식이 더 크고 max힙이면 자식이 더 작다. 
- BST는 좌측자식이 더 작고 우측자식이 더 커야한다.

---

</details>

<details>
<summary>&nbsp; (심화) B 트리에 대해서 설명해주세요.</summary>

---

`인덱싱` `빠른 탐색` 

- 모든 리프노드들이 같은 레벨을 가질 수 있도록 자동으로 벨런스를 맞추는 트리다.
- 정렬된 순서를 보장한다.
- 멀티레벨 인덱싱을 통한 빠른 검색할 수 있다.

![B트리](https://media.vlpt.us/images/emplam27/post/ddbae2c9-da94-457d-bad8-77ff6791255b/B%ED%8A%B8%EB%A6%AC%20%EA%B8%B0%EB%B3%B8%20%ED%98%95%ED%83%9C.png)

- 대표적인 3차 B트리이다.
- 좌측 포인터에 작은 노드, 중간 포인터에 사이 노드, 우측에 큰 노드가 들어 간다.
- 검색방법
  - 루트에서 대소관계를 비교하여 아래 노드로 탐색한다.
  - 리프노드에도 같은 key 값이 없으면 검색이 실패된다.

---

</details>

<details>
<summary>&nbsp; (심화) B+ 트리에 대해서 설명해주세요.</summary>

---

`연결리스트` `초 빠른 탐색`

- 리프노드는 연결리스트의 형태로 선형 탐색이 가능하다.
- 모든 key, data가 리프노드 모여 있다.
- DBMS에서 인덱싱할 때 B+트리를 활용한다.

![B+트리](https://media.vlpt.us/images/emplam27/post/bcbce100-d475-4cda-aebe-946d1813949c/B%ED%94%8C%EB%9F%AC%EC%8A%A4%20%ED%8A%B8%EB%A6%AC%20%EA%B8%B0%EB%B3%B8%20%ED%98%95%ED%83%9C.jpg)

![B+트리 예시](https://media.vlpt.us/images/emplam27/post/64290106-d927-4a82-9e08-8e52783c7dd3/DB%20%EC%9D%B8%EB%8D%B1%EC%8A%A4.jpg)

---

</details>

<details>
<summary>&nbsp; (심화) 트라이에 대해서 설명해주세요.</summary>

---

`문자열 탐색` `O(m)`

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

---

</details>