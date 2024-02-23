## GPTRecipe는 어떤 프로젝트인가요? 🙋 
GPTRecipe는 GPT-3.5-Turbo API를 활용하여 사용자의 상황과 요리 능력, <br />
가지고 있는 재료들을 기반으로 맞춤형 레시피를 제공해주는 서비스입니다.

![gptr](https://github.com/ngeetl/GPTRecipe/assets/53422022/02218abf-605b-47d3-8a7b-28cc6b4a54d8)


## GPTRecipe는 어떤 기능들이 구현되어 있나요? 👓
* GPT-3.5-Turbo 모델 API를 통합하여 사용자 입력을 인공지능으로 분석하고, 결과를 JSON 형식으로 수신하였습니다.
* 컴포넌트 기반 접근 방식으로 SPA 웹 애플리케이션을 구현하였습니다.
* TailwindCSS를 사용하여 모바일 환경에서도 최적화된 반응형 디자인을 구현하였습니다.
* 사용자 입력 검증을 위해 Ant Design의 message API를 활용하였습니다.
* Firebase를 이용하여 애플리케이션의 호스팅을 진행하였습니다.

## 프로젝트를 진행하면서 느낀점은요?
여러 입력 필드를 관리하기 위해 배열을 사용한 상태 관리에 직면한 어려움이 있었습니다. <br />
onChange이벤트가 발생할 때 모든 필드의 값이 동일한 value를 가지는 문제였고,<br />
이 문제는 반복문(map)을 사용할 때 index 값과 배열의 복사 기능을 활용하여 해결할 수 있었습니다.<br />
이로인해 상태 관리에서 배열을 다룰 때는 각 요소를 고유하게 식별하는 방법의 중요성을 깊이 이해하게 되었습니다.<br />
또한, GPT API를 활용하는 과정에서 API로부터 반환되는 응답 형식의 일관성 부족으로 어려움을 느꼈습니다.<br />

#### GPTRecipe는 바로가기: https://gptrecipe-ec699.web.app/

## 기술 스택
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/openai-74aa9c?style=for-the-badge&logo=openai&logoColor=white">
>


