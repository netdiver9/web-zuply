# ZUPLY Learn

3D 인터랙티브 다이어그램으로 배우는 기술 원리. `learn.zuply.co.kr`

## 주소

| 주소 | 파일 |
|---|---|
| learn.zuply.co.kr | public/learn/index.html (레슨 목록) |
| learn.zuply.co.kr/computer | public/learn/computer/index.html |
| learn.zuply.co.kr/chat | public/learn/chat/index.html |
| zuply.co.kr/learn, zuply.co.kr/learn/computer … | 위와 같은 파일 |

연결 규칙은 `next.config.ts`의 `rewrites()`에 있다.

## 폴더

- `public/learn/` : 실제 서비스되는 레슨 페이지 (각 페이지는 HTML 파일 하나에 CSS, JS, 그림이 모두 들어 있음)
- `learn-src/` : 원본 자료 (사이트에 노출되지 않음)
  - `computer-reel.mp4` : 컴퓨터의 원리 인스타 릴스 영상 (1080x1920, 28초)
  - `make_reel.py` : 레슨 페이지로 릴스 영상을 자동으로 만드는 스크립트

## 새 레슨 추가 (예: phone)

1. `public/learn/computer/` 폴더를 복사해서 `public/learn/phone/` 만들기
2. `phone/index.html`의 스크립트에서 데이터 바꾸기
   - `NODES` : 등장하는 부품/서버 (`l` 한글 이름, `e` 영어 라벨, `t` 그림 종류, `tile` 받침 색)
   - `LAND` / `PORT` : 가로 화면 / 세로 화면 배치 (0~1 비율 좌표)
   - `STEPS` : 단계별 제목(`t` 한글, `te` 영어), 설명, 핵심, 수치(`m`), 애니메이션 흐름(`f`)
   - 새 부품 그림이 필요하면 `device()` 함수에 추가
3. `public/learn/index.html`의 `TOPICS`에서 phone 줄의 `soon:true`를 빼고 `steps` 숫자 넣기
4. 커밋, 푸시

## 화면 규칙

- 다이어그램과 릴스 화면 글자는 영어만
- 오른쪽 설명 패널은 한글
- 아래 전체 흐름 목록은 한글 + 영어

## 릴스 영상 만들기

```bash
# 처음 한 번
pip3 install playwright && python3 -m playwright install chromium
brew install ffmpeg
cd learn-src && npm i --no-save @fontsource/space-grotesk@5 @fontsource/ibm-plex-sans-kr@5 && cd ..

# 영상 만들기
python3 learn-src/make_reel.py public/learn/computer/index.html learn-src/computer-reel.mp4
```

영상은 무음 트랙만 들어 있으니 인스타 업로드할 때 음악을 붙인다.

## 배포 (처음 한 번)

1. Vercel `zuply-homepage` 프로젝트 → Settings → Domains → `learn.zuply.co.kr` 추가
2. DNS에 `learn` CNAME 레코드 추가 (Vercel이 알려주는 값)
