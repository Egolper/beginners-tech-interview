<details>
<summary>&nbsp; 목차</summary>

---

## [Algorithm](./README.md)

#### [정렬](./sort.md)

#### [그래프 알고리즘](./graph.md)
  - [MST 알고리즘](./graph.md#mst-알고리즘)
  - [최단경로](./graph.md#최단경로)

#### 탐색 알고리즘

[( 홈으로 )](../README.md)

---

</details>

<br>

# 탐색 알고리즘

> 카카오는 BFS, DFS 문제를 굉장히 좋아하므로 꼭 다양한 문제를 풀어보기 바란다.

<br>

## BFS, DFS

<details>
<summary>&nbsp; BFS에 대해서 설명해주세요.</summary>

---

- 가중치가 없는 그래프에서 최단경로 찾기
  - Qeueu로 탐색
  - 방문하지않으면 경로 추가
- 경로 추적
  - 다음 정점을 방문했을 때 이전 정점의 정보를 저장

---

</details>

<details>
<summary>&nbsp; BFS, DFS 관련 손코딩 (K사)</summary>

---

- 미로 탐색, 방문 여부 기록 등 다양한 조건을 요구할 수 있다.
- 실제 기능 요구사항이 있다면 함수명 작성도 신경쓰자 ^^ `const dfs = () => {...}` 사절

---

</details>

<br>


<br>


<details>
<summary>&nbsp; 백트레킹에 대해서 설명해주세요.</summary>

---

`가지치기`

- DFS로 모든 경로를 탐색할 수 있지만 O(N!)되어 시간초과될 수 있다.
- **가지치기**를 통해서 효율성을 최적화 한다.
  - 해를 찾는 도중 지금 경로가 해가 될 것 같지 않으면 더이상 탐색 X
  - 특정 조건을 만족하는 경우만 살펴본다.

---

</details>

<details>
<summary>&nbsp; 이진탐색에 대해서 설명해주세요.</summary>

---

- O(logN)으로 target의 존재여부 및 위치를 구할 수 있다.
- 알고리즘 풀 때 배열 인덱스를 탐색하는 것이 아닌 결과값(최대, 최소)를 탐색하자

```js
const int = (n) => Math.floor(n);
let m, l = 0, r = max;

while(l < r){
    m = int((l + r) / 2);
    /* 로직 */
    if(/* 조건 */) r = m + 1;
    else l = m + 1;
}

console.log(l)
```

---

</details>

<details>
<summary>&nbsp; Parametric Search에 대해서 설명해주세요.</summary>

---

- 매개변수 탐색
- 조건을 만족하는 최대값을 구하는 방법이다.
  - 내부적으로 이진탐색을 활용
  - 어느 시점에서 조건이 변하게 되는지를 파악

---

</details>

<details>
<summary>&nbsp; Union-Find에 대해서 설명해주세요.</summary>

---

- 서로 **중복되지 않는 부분 집합들을 표현**할 때 사용되는 알고리즘이다.
  - union 함수와 find 함수를 활용하여 각 원소들이 속한 집합을 다룬다.
  - Kruskal 알고리즘에서 사용된다.
- find를 최적화하기 위해 `경로압축`
  - 최악의 경우 find를 수행시 O(N)이 소요된다.
  - 이에 find하면서 root를 최신화를 한다.
- union에서 최적화하기 위해 `union-by-rank`
  - rank에 트리의 높이를 저장한다.
  - 항상 낮은 트리를 높은 트리에 union한다.

```js
const max = 1000
const root = [...Array(max)].map((_, i) => i);
// O(n)
const find = (x) => {
    if(root[x] === x) return x
    // 경로 압축
    return root[x] = find(root[x]);
}

// O(n)
const union = (a, b) => {
    const x = find(a);
    const y = find(b);

    if(x === y) return;
    
    // union-by-rank
    if(rank[x] < rank[y]) root[x] = y;
    else {
        root[y] = x;
        if(rank[x] === rank[y]) rank[x]++;
    }
}
```


---

</details>

<br>
