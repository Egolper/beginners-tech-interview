/**
 * @arr 초기 배열
 * @compare 객체에 대한 비교 함수
 */
const PQ = (arr, compare = (a, b) => a > b) => {
  const heap = [];

  const getPIdx = (i) => Math.floor((i - 1) / 2);
  const getLIdx = (i) => i * 2 + 1;
  const getRIdx = (i) => i * 2 + 2;
  const swap = (a, b) => ([heap[a], heap[b]] = [heap[b], heap[a]]);
  const isEmpty = () => !heap.length;

  const enqueue = (v) => {
    heap.push(v);

    let i = heap.length - 1;
    let p = getPIdx(i);
    while (p >= 0 && compare(heap[p], heap[i])) {
      swap(i, p);
      i = p;
      p = getPIdx(i);
    }
  };

  const dequeue = () => {
    if (!heap.length) return undefined;
    if (heap.length === 1) return heap.pop();

    const target = heap[0];
    heap[0] = heap.pop();

    let i = 0;
    const len = heap.length;
    while (getLIdx(i) < len) {
      const l = getLIdx(i);
      const r = getRIdx(i);
      const minChildIdx = r < len && compare(heap[l], heap[r]) ? r : l;

      if (compare(heap[minChildIdx], heap[i])) break;
      swap(i, minChildIdx);
      i = minChildIdx;
    }
    return target;
  };

  arr.forEach((v) => enqueue(v));
  return { heap, isEmpty, enqueue, dequeue };
};

const pq = PQ([[0, 1]], (a, b) => a[1] > b[1]);

console.log(pq.heap);
pq.dequeue();
console.log(pq.heap);
pq.enqueue([123, 4]);
pq.enqueue([123, 1]);
pq.enqueue([123, 2]);
console.log(pq.heap);
pq.dequeue();
console.log(pq.heap);
