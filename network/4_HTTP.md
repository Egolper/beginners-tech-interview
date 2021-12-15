<details>
<summary>&nbsp; 목차 바로가기</summary>

---

## [Network](./README.md)
#### [네트워크의 흐름과 OSI 7계층](./1_network_flow.md)
#### [전송계층 - TCP와 UDP](./2_TCP와_UDP.md)
#### [네트워크계층 - IP](./3_IP.md)
#### 응용계층 - HTTP와 HTTPS
#### [응용계층 - DNS와 DHCP](./5_DNS_DHCP.md)
#### [네트워크 지식 더 알아보기](./6_네트워크지식_더_알아보기.md)

<br>

[( 홈으로 )](../README.md)

---

</details>

<br>

# HTTP

<details>
<summary>http와 https에 대해서 설명해주세요</summary>  

---  
- **http는 hypertext transport protocol의 약자**
- http는 인터넷에서 웹 서버와 통신하기 위한 규약(protocol).
- 서버는 기본적으로 TCP 80포트에서 http연결을 기다린다. 
- **https의 s는 secure socket을 의미함**
- 정보를 암호화하는 SSL 프로토콜을 사용해 자원을 주고 받을 때 쓰는 통신 규약

---
</details>

<details>
<summary>http 1.1과 비교해 2.0의 특징에 대해서 설명해주세요</summary>  

---  
- http/1.1은 connection 당 하나의 요청을 처리함. 연관된 파일이 많으면 그만큼 응답속도가 느려진다는 단점이 있음
    - Connection Keep-Alive 기능을 이용해 connection을 바로 끊지않고 일정기간 동안 유지하는 기술이 생겨남
- http/2는 하나의 connection에 여러개의 요청을 보낼 수 있음. stream으로 주고 받는 뜻
    - 리소스간의 의존관계를 확인해 우선순위를 판별해 응답한다.
---
</details>

<details>
<summary>http 응답코드 종류에 설명해주세요</summary>  

---  
- 2xx - 요청을 성공적으로 받았다는 뜻(성공)
- 3xx - 추가작업이 필요하다는 뜻(리다이렉션)
- 4xx - 요청을 처리할 수 없습니다(클라이언트의 오류)
- 5xx - 서버가 유효한 요청엑 처리를 못함(서버 오류)
---
</details>

<details>
<summary>http 메서드 종류에는 뭐가 있을까요</summary>  


`POST`, `GET`, `PUT`, `PATCH`, `DELETE`  

---  
- POST - 자원 생성을 할때 보내는 메서드
- GET - 특정 자원을 읽는 메서드
- PUT - 특정 자원의 전체를 수정할 때 사용하는 메서드
- PATCH - 특정 자원의 부분을 수정하는데 사용하는 메서드
- DELETE - 특정 자원을 삭제할때 사용
---
</details>