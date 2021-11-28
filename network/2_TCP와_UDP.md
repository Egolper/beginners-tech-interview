# TCP와 UDP

<details>
<summary>기초 - 전송계층의 역할</summary>  

- 통신을 하는 양 끝단에서 단대단 연결을 제공.
- 양 끝단에서 내보낼 데이터를 분할해서 보내고, 들어온 데이터에 대해 제어를 함.
</details>

<details>
<summary>기초 - TCP란?</summary>  

- **신뢰성 있는 데이터 전송을 목적으로 하는 전송계층의 프로토콜**
- 연결지향적이며, 전이중 방식이다. (가상회선 방식도 얘기도 해주면 좋음)
- 신뢰성있는 통신을 위해 오류,흐름,혼잡제어를 제공한다.
</details>

<details>
<summary>심화 - 3way handshake이란?</summary>  

- 실제 데이터를 보내기 전 상대와 소통하겠다는 뜻으로 연결을하는데 이 연결을 수립하는데 3way handshake방식을 이용함.

</details>

<details>
<summary>초심화 - 4way handshake이란?</summary>  

- 상대와의 소통이 끝나고 연결을 해제하는 방법
</details>

<details>
<summary>심화 - 3way handshake와 4way handshake가 차이나는 이유는?</summary>  

</details>

<details>
<summary>심화 - TCP의 흐름제어, 혼잡제어란?</summary>  

- 혼잡제어란 네트워크 상황에 맞게 데이터의 양을 제어하는 방법
- 흐름제어란 각 상대측 노드가 수용가능한 데이터의 양에 맞추어 보낼 데이터를 양을 제어하는 방법
</details>

<details>
<summary>심화 - TCP의 오류제어 방법인 ARQ에 대해 설명해주세요?</summary>  

- 재전송을 이용한 오류제어 방식
- go-back-N
- selective-repeat이 있음

</details>

<details>
<summary>심화 - TCP의 헤더?</summary>  

- 재전송을 이용한 오류제어 방식
- go-back-N
- selective-repeat이 있음

</details>


<details>
<summary>기초 - UDP란?</summary>  

</details>