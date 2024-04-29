# [Lab 2-1] R3F 환경구성 및 Canvas

# 전체 코드
https://github.com/JunYoung0404/aigraphics/tree/main/R3F/code

# 수정 코드
```
 <directionalLight position={[1, 1, 1]} />
            <mesh ref={refMesh} rotation-y={50 * Math.PI / 200}>
                <tetrahedronGeometry attach="geometry" args={[1, 0]} /> {/* 삼각뿔 모양의 geometry */}
                <meshStandardMaterial color="#00ffff" />
            </mesh>
```
색상을 옥색 으로 변경해 보았고 박스 모양을 삼각뿔? 형식의 테트라에드론이라는 도형을 찾아 생성해 보았습니다.

# 결과 사진


https://github.com/JunYoung0404/aigraphics/assets/50895748/314f7e9c-9407-4bbb-9ffb-37c2a5c392dc


# 소감
교수님께서 올려주신 카페와 유튜브 링크를 참조하여 천천히 따라해본 결과 처음에는 오류가 발생하여서 어려움을 격었지만 다시 처음부터 해보자는 느낌으로 다시 다 삭제하고 영상을 차근차근 다시 살펴보면서
따라해보니 2강을 넘어갈수 있었습니다. 그리고 다음 3강을 하면서 코드를 차근차근 직접 쳐보면서 MyElement3D.jsx에서 boxGeometry를 생성하여서 색상을 변경한후 회전을 삽입하여 코드를 완성해보았습니다.
실습을 다하고 나서 저만의 변형을 해보았습니다. 일단 색상을 #00ffff(옥색)으로 변경해보았고 도형 모양도 변경해 보려고 인터넷 검색을 하여서 테트라에드론 이라는 삼각뿔? 모양을 찾게 되어서 삽입해 보았는데 오류가 발생하여서
Chat gpt의 도움을 받아 테트라에드론이라는 삼각뿔 모양을 넣어보았습니다. 그리고 결과사진을 캡쳐형식으로 한것이 아니라 화면 녹화를 이용하여 도형이 움직이는것을 볼수있도록 영상으로 결과를 제출해 보았습니다.
중간고사 끝나고 새로운 것을 배운것에 기분이 좋았고 앞으로의 강의에대해 열정을 느끼게 되었습니다. 
