## [Algorithm](./README.md)

#### [정렬](./sort.md)

#### 그래프 알고리즘

#### [탐색 알고리즘](./search.md)
  
[( 홈으로 )](../README.md)

<br>

# 그래프 알고리즘

<br>

## MST 알고리즘

<details>
<summary>&nbsp; MST에 대해서 설명해주세요.</summary>

---

`최소 비용 신장트리`

- 신장트리 
  - 사이클을 갖지 않는 그래프(트리)로 모든 노드를 연결하는 것
- 최소신장트리 
  - 최소 비용(가중치)으로 신장트리를 만드는 것.

---

</details>

<details>
<summary>&nbsp; 크루스칼 Kruskal 알고리즘에 대해서 설명해주세요.</summary>

---

`최소 가중치 간선`

- greedy하게 최소 가중치 간선을 선택한다.
- 시간 복잡도 `O(ElogE) + O(E + VlogV)`

1. 그래프의 간선을 가중치를 기준으로 오름차순 정렬한다.
2. 비용이 가장 작은 간선부터 검토한다.
    - 연결시켰을 때 cycle이 발생되면 다음 간선을 검토한다.
    - cycle을 검사하는 법
    ```
    각 정점에 1~n 값으로 vertex를 초기화 한다.
    정점이 합쳐질 때 set-id 개수가 많은 set-id로 통일한다.
    같은 집합에서 간선을 연결시키면 cycle이 발생한다.
    ```
3. 해당 간선을 선택한다.
- [코드](./kruskal.js)

---

</details>

<details>
<summary>&nbsp; 프림 Prim 알고리즘에 대해서 설명해주세요.</summary>

---

`정점 기준으 신장트리를 확장`

- 시작 정점을 집합에 포함한다.
- 현 신장트리 집합에서 인접한 가장 낮은 가중치의 간선을 선택한다.
- MST가 나올 때까지 반복한다.
- 시간 복잡도 `O(ElogV)`

---

</details>

<br>

## 최단경로

<details>
<summary>&nbsp; 다익스트라 알고리즘에 대해서 설명해주세요.</summary>

---

`하나의 정점에서 모든 정점` `우선순위 큐`

- 시간 복잡도 `O((E+V)logV)` = 최단 거리 찾는데 `VlogV` + 거리 갱신 `ElogV`
 
1. 시작점의 거리는 0, 다른 모든 정점의 거리는 Infinity로 초기화.
2. 방문하지 않은 정점 중에서 거리가 가장 적은 정점을 방문한다.
    - 우선순위 큐(min heap)를 활용해서 거리가 적은 정점을 구한다.
3. 최소 비용을 갱신한다. (기존 비용 + 간선 비용)

---

</details>

<details>
<summary>&nbsp; 벨만포드 알고리즘에 대해서 설명해주세요.</summary>

---

`하나의 정점에서 모든 정점` `음의 가중치`

- 시간 복잡도 `O(VE)`
- 음의 cycle이 발생할 때 해를 찾을 수 없다.

---

</details>

<details>
<summary>&nbsp; 플로이드 와샬 알고리즘에 대해서 설명해주세요.</summary>

---

`모든 정점에서 모든 정점`

- 3중 for문을 통해 거리를 갱신한다. `O(N^3)`
    ```js
    for (let k = 1; k <= n; k++)
        for (let i = 1; i <= n; i++)
            for (let j = 1; j <= n; j++)
                if (route[i][j] > route[i][k] + route[k][j])
                    route[i][j] = route[i][k] + route[k][j];
    ```
- i → j  ⇒  i → k → j
  - k를 경유지라고 생각하면 된다.

---

</details>

<details>
<summary>&nbsp; (심화) A* 알고리즘에 대해서 설명해주세요. </summary>

---

`한 정점에서 다른 한 정점`

- 네비게이션에서 활용

---

</details>

<br>
