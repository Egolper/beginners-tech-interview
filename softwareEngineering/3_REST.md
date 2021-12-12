# REST 

<details>
<summary>REST란 무엇인가?</summary>

---
### **정의**
Representaional State Transfer의 약자로 웹의 장점을 최대한 활용할 수 있는 `네트워크 기반의 아키텍쳐이다`  
URI로 자원을 명시하고 HTTP method로 자원에 대한 행위를 정의하는 방법이다.

### **설계 원칙**
1. 서버-클라이언트 구조
2. Stateless (서버가 클라이언트의 세션,쿠키를 저장하지 않는다는 뜻입니다)
3. 캐시처리가 가능해야합니다
4. Layered System(클라이언트는 API호출만 하고 서버에서 다중 계층으로 나누어져 있어야합니다 -> 로드 밸런싱 등)
5. Code-on-Demand (서버에서 코드를 클라이언트에서 실행할 수 있어야합니다 -> 자바스크립트)
6. Uniform-interface(리소스가 URI로 식별되어야하고 HTTP Metho만으로 행위를 알아낼 수 있어야합니다)

### **장단점**
- HTTP 인프라를 그대로 사용함 (그 위에서 제한사항을 두는 것 - 막 사용하는 것보다 규칙을 정한다는 뜻)
- HTTP를 따르는 모든 플랫폼에서 사용이 가능하다
- 서버와 클라이언트의 역할을 명확하게 분리함
- 표준이 존재하지 않고 원칙이 추상적이다
- 사용 가능한 HTTP method가 4가지이다.

---
</details>

<details>
<summary>REST API</summary>

---
### **정의**
REST 아키텍쳐를 기본으로 하는 API 구현할 것을 REST API라고 한다.
REST 아키텍쳐는 서버-클라이언트에 전반적인 구조(서버내부 설계 구조까지 포함)라고 한다면,
REST API는 `네트워크 소통(즉, API)`에 관한 규칙이다.

### **API(REST API) 설계 원칙**
- '/' 구분자로 계층관계를 나타내고 URI의 마지막에는 '/'를 생략한다
- '-' 가독성을 높일때(URI가 길때) 사용한다
- '_' 사용하지 않는다.
- 경로는 소문자로 표시한다
- 파일 확장자는 URI에 표시하지 않는다 => '/index.html' -> '/index'
- 리소스의 관계가 있는 경우 'Path에 주체/정보'로 표시한다 => '{userId}/post' 

---
</details>


<details>
<summary>RESTful하다</summary>

---
REST 아키텍쳐를 구현한 웹 서비스 시스템이라고 할 수 있다.
즉, 서버-클라이언트가 REST 아키텍쳐를 준수하고 REST API 규칙을 준수한다면 RESTful하다라고 할 수 있다.  

---
</details>