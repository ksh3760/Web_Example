# Node js 서버 실행 방법
1. 먼저 node js가 설치되어 있는지 확인합니다.
```
node --version
```
- node js가 설치되지 않았다면 해당 링크로 이동 하여 설치하도록 합니다.
- Link: [https://nodejs.org/ko/]
- 설치를 완료 하였다면 명령어를 입력하여 확인하도록 합니다.

2. 초기화
```
npm init
```
- Terminal에 명령어를 입력하여 package.json 파일을 작성합니다.
- 만약 이미 package.json 파일이 있다면, "npm init -y"를 입력하면 그 파일을 읽고 난 후 옵션을 기본값으로 사용합니다.
- package.json 파일은 프로젝트의 정보와 의존성(Dependencies)을 관리하는 문서입니다.
- 이미 작성된 package.json 문서는 어느 곳에서도 동일한 개발 환경을 구축할 수 있게 해줍니다.

3. 의존성 모듈 설치
```
npm install
```
- **npm install** 명령어를 통해 package.json 파일에 이미 정의된 의존성 모듈이 있다면, 나열된 모든 모듈을 로컬(node_modules) 폴더에 설치합니다.

4. 정의되지 않은 의존성 모듈 설치 (만약 모듈이 이미 설치되어 있다면 생략)
```
npm install --save express request-ip ip moment
```
- **npm install --save [패키지]**
- 예시) npm install --save express

- 설치해야할 패키지 목록들 :
express,
request-ip,
ip
moment

5. node js 실행하기
```
node node.js
```
- Terminal에 **node [파일명]**을 입력하여 실행시킵니다.
- 파일명 : node.js