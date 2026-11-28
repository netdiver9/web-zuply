# 레슨 생성기

`public/learn/computer/index.html`을 틀로 삼아 다른 레슨 페이지를 만든다.

- `build_lessons.py` : 공통 틀 변경, 아이콘(dev2), 구역(ZONES) 처리. 실행하면 모든 레슨을 다시 만든다.
- `lessons_*.py` : 레슨별 데이터 (부품, 배치, 단계별 글과 애니메이션)
- `build_one.py` : 데이터 파일 하나에 든 레슨만 만든다.
- `shot3.py` : 화면 확인용 스크린숏 (Playwright 필요)

```bash
# zuply 폴더에서
python3 learn-src/builder/build_lessons.py .          # 전체
python3 learn-src/builder/build_one.py learn-src/builder/lessons_sat.py   # 일부
```

규칙: 그림 속 글자는 영어, 설명은 한글. 새 레슨은 `public/learn/index.html`의 TOPICS에 카드 한 줄을 추가한다.
