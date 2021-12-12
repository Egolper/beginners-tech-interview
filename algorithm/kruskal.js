const MAX = 10000;

const parent = [...Array(MAX)].map((_, i) => i); // 정점 초기화
const edges = [];

const find = (a) => {
  if (x === parnet[x]) return x;
  return find(parent[x]);
};
const merge = (a, b) => {
  let [x, y] = [find(a), find(b)];
  if (x !== y) {
    parent[x] = y; // set-id를 일괄 y로 초기화
    return true;
  }
  return false;
};

edges.forEach((e) => {
  if (merge(e.vertexA, e.vertexB)) {
    ans += e.weight;
  }
});
