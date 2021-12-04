# TCP와 UDP

<details>
<summary>전송계층의 역할</summary>  

---
- 통신을 하는 양 끝단에서 단대단 연결을 제공.
- 양 끝단에서 내보낼 데이터를 분할해서 보내고, 들어온 데이터에 대해 제어를 함.  
---
</details>

<details>
<summary>TCP란?</summary>  

---
`신뢰성`
- **신뢰성 있는 데이터 전송을 목적으로 하는 전송계층의 프로토콜**
- 연결지향적이며, 전이중 방식이다. (가상회선 방식도 얘기도 해주면 좋음)
- 신뢰성있는 통신을 위해 오류,흐름,혼잡제어를 제공한다.
---
</details>

<details>
<summary>3way handshake이란?</summary>  

---
- 실제 데이터를 보내기 전 상대와 소통하겠다는 뜻으로 연결을하는데 이 연결을 수립하는데 3way handshake방식을 이용함.
- 클라이언트가 서버에게 SYN를 보냄
- 서버가 받고, 클라이언트로 받았다는 신호인 ACK와 SYN을 보냄
- 클라이언트는 응답을 받고, ACK를 서버로 보냄(이때부터 통신시작)
---
</details>

<details>
<summary>4way handshake이란?</summary>  

---
- 상대와의 소통이 끝나고 연결을 해제하는 방법
- 클라이언트는 보낼 데이터를 다 보낸 후 서버에게 연결을 종료한다는 FIN 신호를 보낸다.
- 서버는 FIN을 받고, 잘 받았다는 신호인 ACK를 보낸다.
- 서버도 모든 데이터를 보냈다면, 연결이 종료되었다는 FIN 신호를 클라이언트에게 보낸다.
- 클라이언트는 FIN을 받고, 확인했다는 ACK를 서버에게 보낸다.
- 이때 클라이언트는 ACK을 보내고 바로 연결해제를 하지 않고 잠시 기다림(서버측에서 오류 때문에 ACK을 받지 못했을경우 재전송을 위해서)
---
</details>

<details>
<summary>3way handshake와 4way handshake가 차이나는 이유는?</summary>  

---
- 해제 시에는 서버가 클라이언트의 FIN 신호를 받고 ACK와 동시에 자신도 끝났다는 FIN 신호를 보내지 않음.
- 서버측에서는 보낼 데이터를 다 보내지 않았을 수도 있으므로 ACK신호와 FIN신호를 나누어서 보내기 때문
---
</details>

<details>
<summary>TCP의 흐름제어, 혼잡제어란?</summary>  

---
- 흐름제어란 각 상대측 노드의 데이터 처리 속도 차이를 해결하는 방법
- 혼잡제어란 네트워크 상황에 맞게 데이터의 양을 제어하는 방법
---
</details>

<details>
<summary>(심화) TCP의 오류제어 방법인 ARQ에 대해 설명해주세요?</summary>  

`재전송`
---
- 재전송을 이용한 오류제어 방식으로 대표적으로 stop-and-wait, go-bakc-N, selective-repeat 방법이 있음
- stop-and-wait : 전송한 패킷에 대한 ACK를 받아야만 다음 패킷을 보냄.
- go-back-N : 설정한 윈도우 크기만큼 상대측으로 데이터를 보냄. 중간에 에러가 난오면 에러가 나온 패킷부터 다시 윈도우 크기만큼 데이터를 보냄
- selective-repeat : 에러가 난 패킷만을 재전송하는 방법. 송신 측에서 데이터의 순서가 바뀌게 된다면 ACK를 보내지 않음.
---
</details>

<details>
<summary>TCP의 헤더?</summary>  

- 상대측 포트번호가 들어가있음(가장 중요)
- 해당 패킷의 번호가 들어가있음
</details>


<details>
<summary>UDP란?</summary>  

- User Datagram Protocol의 약자, 데이터그램 단위로 처리하는 프로토콜
- 비연결형, 신뢰성 없는 전송 프로토콜이다.
- 데이터그램 단위로 쪼개면서 전송을 해야하기 때문에 전송 계층이다.
- TCP에 비해 속도가 빠름
</details>