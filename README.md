# VanillaJS로 구현하는 CSR, SSR, 그리고 Hydration

이 프로젝트는 Vanilla JavaScript를 사용해 Client-Side Rendering(CSR) 과 Server-Side Rendering(SSR) 의 차이를 비교하고, Hydration을 통해 두 방식을 어떻게 결합할 수 있는지를 직접 구현하며 학습한 내용입니다.

아래 블로그에서 실습과 설명을 함께 보실 수 있습니다.

> [📘 SSR 제대로 이해하기 (with VanillaJS)](https://medium.com/@joie.huiju/ssr-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-with-vanilajs-650db651d70f)

## 프로젝트 구조

```
src/
├── api/          # API 호출 관련 로직
├── components/   # UI 컴포넌트
├── events/       # 이벤트 핸들링
├── sync/         # 상태 동기화
├── csr.js        # Client-Side Rendering
├── ssr.js        # Server-Side Rendering
└── model.js      # 데이터 모델
```

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run start
```

## 기술 스택

- Vanilla JavaScript
- Express.js (서버)
- ES Modules
- HTML/CSS
