# 1️⃣  [p5.js와 그래픽스 프로그래밍의 기초]

## p5.js의 특징 설명

1.사용자 친화적: p5.js는 간단한 문법과 직관적인 함수들로 구성되어 있어, 프로그래밍 초보자도 쉽게 사용할 수 있습니다.

2.풍부한 기능: 그래픽스, 애니메이션, 사운드 처리 등 다양한 멀티미디어 기능을 지원합니다.

3.브라우저 호환성: HTML5와 자바스크립트를 사용하여 모든 주요 브라우저에서 동작하며, 추가 설치가 필요 없습니다.

4.오픈 소스: 누구나 무료로 사용하고, 수정 및 배포할 수 있습니다. 또한, 활발한 커뮤니티 지원을 받습니다.

5.학습 자료: 풍부한 튜토리얼과 예제 코드가 제공되어, 학습과 응용이 용이합니다.

## 인터랙티브 아트의 개념 설명
인터랙티브 아트는 관객의 참여와 상호작용을 통해 작품이 변화하거나 완성되는 형태의 예술을 말합니다. 관객의 행동에 따라 작품이 반응하고, 이러한 상호작용을 통해 새로운 경험을 제공하는 것이 특징입니다. 인터랙티브 아트는 디지털 기술의 발전과 함께 더욱 확산되고 있으며, 특히 컴퓨터 그래픽스와 프로그래밍을 통해 다양한 형태로 구현됩니다.

p5.js는 이러한 인터랙티브 아트를 구현하는데 이상적인 도구로, 사용자의 입력(예: 마우스 움직임, 키보드 입력 등)에 따라 실시간으로 그래픽을 생성하고 변형할 수 있습니다.

## 예제 코드 작성 및 설명
```
function setup() {
  createCanvas(windowWidth, windowHeight); // 화면 크기를 윈도우 크기로 설정
  background(100); 
}function draw() {
  // draw 함수는 마우스가 움직일 때마다 반복적으로 실행됩니다.
}function mouseMoved() {
  // 마우스가 움직일 때마다 실행되는 함수
  noStroke(); // 원의 테두리를 없앰
  fill(244, 10, 255, 50); 
  ellipse(mouseX, mouseY, 25, 25); // 마우스 위치에 원 그리기
}
```
### 예제 결과


https://github.com/JunYoung0404/aigraphics/assets/50895748/76549f50-284e-4ade-b36f-230b990e5158





코드 설명
setup 함수: 프로그램이 처음 시작될 때 한 번 실행됩니다. createCanvas 함수를 사용하여 캔버스 크기를 브라우저 창 크기로 설정하고, background 함수로 배경을 흰색으로 설정합니다.

draw 함수: p5.js에서는 draw 함수가 기본적으로 계속 반복 실행되지만, 이 예제에서는 마우스 움직임을 통한 상호작용만 필요하므로 비워두었습니다.

mouseMoved 함수: 마우스가 움직일 때마다 호출되는 함수로, noStroke 함수는 원의 테두리를 없애고, fill 함수는 원의 색상을 파란색 반투명으로 설정합니다. ellipse 함수는 마우스 위치(mouseX, mouseY)에 반지름 25의 원을 그립니다.

# 2️⃣ [ml5.js를 활용한 머신러닝 기초]

## ml5.js의 기능과 장점 설명

1. 사용자 친화적: 직관적이고 간단한 API를 제공하여, 머신러닝 초보자도 쉽게 사용할 수 있습니다.
  
2. 브라우저 기반: 웹 브라우저에서 직접 실행되므로, 별도의 서버 설정이나 복잡한 환경 설정이 필요 없습니다.
  
3. 다양한 모델 지원: 이미지 분류, 객체 탐지, 스타일 변환, 텍스트 생성 등 다양한 머신러닝 모델을 지원합니다.
 
4. TensorFlow.js 기반: Google의 TensorFlow.js를 기반으로 하여, 강력한 성능과 신뢰성을 제공합니다.
  
5. 오픈 소스: 누구나 무료로 사용할 수 있고, 커뮤니티에서 활발히 개발 및 지원됩니다.

    
## 이미지 분류 모델 구현 과정 서술
라이브러리 포함: ml5.js를 HTML 파일에 포함시킵니다.
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ml5/0.10.0/ml5.min.js"></script>
```

모델 로드: 사전 학습된 이미지 분류 모델을 로드합니다. 예를 들어, MobileNet 모델을 사용합니다.
```
let classifier;
let img;

function preload() {
  classifier = ml5.imageClassifier('MobileNet');
  img = loadImage('path/to/your/image.jpg');
}
```
이미지 준비: 분류할 이미지를 준비합니다.

```
function setup() {
  createCanvas(400, 400);
  image(img, 0, 0, width, height);
  classifyImage();
}
```
이미지 분류: 준비된 이미지를 분류합니다.
```
function classifyImage() {
  classifier.classify(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    let label = results[0].label;
    let confidence = nf(results[0].confidence, 0, 2);
    text(`${label} (${confidence})`, 10, height - 10);
  }
}

```
## 이미지 분류 모델의 원리 설명
1. 데이터 수집: 모델을 학습시키기 위해 다양한 이미지 데이터셋이 필요합니다. 각 이미지에는 해당 클래스 레이블이 포함됩니다.

2. 특징 추출: 모델은 이미지에서 중요한 특징(예: 모서리, 텍스처, 패턴 등)을 자동으로 추출합니다.

3. 모델 학습: 추출된 특징을 사용하여 다층 신경망을 학습시킵니다. 이 과정에서 모델은 입력 이미지와 레이블을 매칭하는 법을 배웁니다.

4. 예측: 학습이 완료된 모델은 새로운 이미지를 입력받아, 해당 이미지가 어떤 클래스에 속하는지 예측합니다. 이때 각 클래스에 대한 확률을 출력하여, 가장 높은 확률을 가진 클래스를 최종 예측으로 선택합니다.

5. 피드백: 예측 결과에 따라 모델을 개선할 수 있습니다. 더 많은 데이터를 사용하거나, 모델의 구조를 변경하여 정확도를 높일 수 있습니다.


# 3️⃣ [three.js를 활용한 3D 그래픽스]
## three.js의 주요 구성 요소 설명

1. 씬(Scene): 3D 객체들이 배치되는 공간으로, 모든 그래픽 요소와 조명이 포함됩니다.

2. 카메라(Camera): 장면을 바라보는 시점을 정의합니다. 일반적으로 원근 카메라(PerspectiveCamera)가 사용됩니다.

4. 렌더러(Renderer): 장면과 카메라 정보를 바탕으로 최종 이미지를 생성하여 브라우저에 표시합니다. WebGLRenderer가 주로 사용됩니다.
   
5. 메시(Mesh): 기하학적 형태(Geometry)와 재질(Material)을 결합한 객체로, 3D 장면의 구성 요소입니다.
   
6. 조명(Light): 장면 내의 조명 효과를 제공합니다. 여러 종류의 조명이 있으며, 장면의 분위기를 설정합니다.

## 3D 장면 구성 과정 설명

씬 생성: 장면을 생성하여 모든 3D 객체와 조명을 추가합니다.
```
const scene = new THREE.Scene();
```
카메라 설정: 장면을 바라볼 카메라를 설정하고 위치를 지정합니다.
```
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
```
렌더러 생성: 렌더러를 생성하고 크기를 설정한 후, HTML 문서에 추가합니다.
```
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
```
메시 추가: 기하학적 형태와 재질을 결합하여 메시를 만들고 장면에 추가합니다.
```
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
```

애니메이션 루프: 애니메이션을 위해 렌더링 루프를 설정합니다. 이 루프에서 장면을 지속적으로 갱신합니다.
```
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
```
## 예제 코드 작성 및 설명
#### 예제 코드
```
import * as THREE from '../build/three.module.js';
import { OrbitControls } from "../examples/jsm/controls/OrbitControls.js"

class App {
    constructor() {
        const divContainer = document.querySelector("#webgl-container");
        this._divContainer = divContainer;

        const renderer = new THREE.WebGL1Renderer({ antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        divContainer.appendChild(renderer.domElement);
        this._renderer = renderer;

        const scene = new THREE.Scene();
        this._scene = scene;

        this._setupCamera();
        this._setupLight();
        this._setupModel();
        this._setupControls();

        window.onresize = this.resize.bind(this);
        this.resize();

        requestAnimationFrame(this.render.bind(this));
    }

    _setupControls() {
        new OrbitControls(this._camera, this._divContainer);
    }

    _setupCamera() {
        const width = this._divContainer.clientWidth;
        const height = this._divContainer.clientHeight;
        const camera = new THREE.PerspectiveCamera(
            75,
            width / height,
            0.1,
            100
        );
        camera.position.z = 2;
        this._camera = camera;
    }

    _setupLight() {
        const color = 0xffffff;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        this._scene.add(light);
    }

    _setupModel() {
        const geometry = new THREE.ConeGeometry();
        const fillMaterial = new THREE.MeshPhongMaterial({ color: 0x515151 });
        const cube = new THREE.Mesh(geometry, fillMaterial);

        const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffff00 });
        const line = new THREE.LineSegments(
            new THREE.WireframeGeometry(geometry), lineMaterial);

        const group = new THREE.Group();
        group.add(cube);
        group.add(line);

        this._scene.add(group);
        this._cube = group;
    }

    resize() {
        const width = this._divContainer.clientWidth;
        const height = this._divContainer.clientHeight;

        this._camera.aspect = width / height;
        this._camera.updateProjectionMatrix();

        this._renderer.setSize(width, height);
    }

    render(time) {
        this._renderer.render(this._scene, this._camera);
        this.update(time);
        requestAnimationFrame(this.render.bind(this));
    }

    update(time) {
        time *= 0.001;
    }
}

window.onload = function () {
    new App();
}
```
#### 예제 실행 결과


https://github.com/JunYoung0404/aigraphics/assets/50895748/e18fa868-52f6-4f58-bc84-8acb5fce8885



#### 코드 설명
 마우스로 움직이면 돌아가고 선을 노란색으로 변경 후 원뿔 모양의 3D모델을 만들어 보았습니다.
 Three.js를 사용하여 웹 페이지에 3D 장면을 렌더링하는 애플리케이션을 설정합니다. 
 App 클래스는 씬(Scene), 카메라(Camera), 조명(Light), 3D 모델(Geometry)을 설정하고, OrbitControls로 카메라 조작을 추가합니다. 
 render 메서드는 씬을 렌더링하고 애니메이션 프레임을 요청합니다. resize 메서드는 창 크기 변경에 대응하여 렌더러와 카메라를 업데이트합니다.



# 4️⃣  [R3F(React Three Fiber)와 React 통합]
## R3F의 특징 및 이점 설명
1. React와의 완벽한 통합: R3F는 React 컴포넌트 구조와 훅(Hook)을 활용하여 3D 그래픽스를 구성합니다. React 개발자에게 익숙한 패턴을 사용하므로 학습 곡선이 완만합니다.

2. 선언적 코드 스타일: R3F는 JSX를 사용하여 3D 객체를 선언적으로 정의할 수 있습니다. 이는 코드의 가독성을 높이고 유지보수를 용이하게 합니다.

3. 상태 관리 및 리렌더링: React의 상태 관리 기능을 사용하여 3D 장면을 동적으로 업데이트할 수 있습니다. 상태 변화에 따라 자동으로 리렌더링됩니다.

4. 재사용 가능한 컴포넌트: 3D 객체를 컴포넌트로 만들고 재사용할 수 있으며, React의 컴포넌트 트리를 활용하여 복잡한 장면을 구성할 수 있습니다.

5. 광범위한 생태계 지원: React와 Three.js의 다양한 서드파티 라이브러리를 통합할 수 있어 기능 확장이 용이합니다.


## R3F를 사용한 3D 장면 생성 과정 서술
1. React 프로젝트 설정: React 프로젝트를 생성하고 R3F를 설치합니다.

2. 기본 3D 씬 구성: R3F의 Canvas 컴포넌트를 사용하여 3D 씬을 구성합니다.

3. 카메라와 조명 설정: 3D 장면을 보기 위한 카메라와 조명을 설정합니다.

4. 3D 객체 추가: 필요한 3D 객체를 생성하고 씬에 추가합니다.

5. 애니메이션 적용: React 훅을 사용하여 3D 객체에 애니메이션을 적용합니다.

##  예제 코드 작성 및 설명
### 예제 코드
```
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OctahedronGeometry } from "three"; // OctahedronGeometry를 사용하여 다이아몬드 모양 생성

function MyElement3D() {
    const refMesh = useRef();

    // 매 프레임마다 메시 회전
    useFrame((state, delta) => {
        refMesh.current.rotation.y += delta;
    }); 

    return (
        <>
            {/* 조명 */}
            <directionalLight intensity={1} position={[5, 5, 5]} />
            <ambientLight intensity={0.5} />
            
            {/* 다이아몬드 메시 */}
            <mesh ref={refMesh} rotation-y={50 * Math.PI / 200}>
                <octahedronGeometry attach="geometry" args={[1, 0]} /> {/* OctahedronGeometry로 변경 */}
                
                {/* 반투명한 반사 재질 */}
                <meshStandardMaterial color="#00ffff" transparent opacity={0.8} />
            </mesh>
        </>
    );
}

export default MyElement3D;

```
### 예제 결과
https://github.com/JunYoung0404/aigraphics/assets/50895748/c71faf70-880b-458f-838c-524089c974ba
### 설명
1. useFrame 훅: useFrame 훅은 React Three Fiber에서 제공하는 기능으로, 매 프레임마다 실행됩니다. 이 코드에서는 useFrame 훅을 사용하여 다이아몬드 메시를 매 프레임마다 회전시킵니다.

2. 조명: directionalLight와 ambientLight는 조명을 추가하는 요소입니다. directionalLight는 특정 방향에서 빛을 발하는 조명을 만들고, ambientLight는 주변을 밝게 하는 조명을 만듭니다.

3. 다이아몬드 메시: mesh 요소는 3D 객체를 만드는 데 사용됩니다. 이 코드에서는 mesh 요소 안에 octahedronGeometry와 meshStandardMaterial이 포함되어 있습니다. octahedronGeometry는 다이아몬드 모양의 기하학적 형태를 생성하고, meshStandardMaterial은 다이아몬드의 색상과 투명도를 정의합니다.

4. ref: useRef 훅을 사용하여 refMesh 변수를 생성하고, 이를 메시 요소에 연결합니다. 이렇게 함으로써 우리는 메시를 JavaScript 코드에서 조작할 수 있습니다.

5. rotation-y 속성: rotation-y 속성은 메시의 y축 회전을 설정합니다. 이 코드에서는 rotation-y 속성을 사용하여 다이아몬드를 회전시킵니다.




