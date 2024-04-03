# Lab과제: Material 을 유튜브를 따라 구현해 본다.

## 과제 시행 결과 사진
### part-1
![image](https://github.com/JunYoung0404/aigraphics/assets/50895748/1f75b115-3ba9-41be-86ab-5f783adef3f8)
![image](https://github.com/JunYoung0404/aigraphics/assets/50895748/96bdac10-c622-47f5-bf88-c5afd2d3d524)


### 모래시계 코드
```
 _setupModel(){
        const vertices = [
            -1, 1, 0,
            1, 1, 0,
            -1, -1, 0,
            1, -1, 0,
            
        ];
        
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute(
         "position",
         new THREE.Float32BufferAttribute(vertices, 3)
        );
        const material = new THREE.LineDashedMaterial({
            color: 0xFF3300,
            dashSize: 1,
            gapSize: 1,
            scale: 8
     });
     const line = new THREE.LineLoop(geometry, material);
     line.computeLineDistances();
     this._scene.add(line);
    }
```
### part-2
![image](https://github.com/JunYoung0404/aigraphics/assets/50895748/fcee5ca2-0c3d-4aaa-a374-53caca24775c)



### part-3
![image](https://github.com/JunYoung0404/aigraphics/assets/50895748/2177d27c-6b1e-491d-b74f-c72d5366737f)


### part-4
![image](https://github.com/JunYoung0404/aigraphics/assets/50895748/0c8deff9-7209-4077-9ad1-66cf7b1dcbaa)



### 소감
이번 과제를 통해 각 강좌에서 도형의 재질, 색상, 빛의 처리 방법 및 사진을 도형에 적용하는 코드를 배웠습니다. 코드를 통해 실제로 시각적인 효과를 확인하는 과정은 매우 흥미롭고 신기했습니다. 또한 강의 영상을 따라가면서 코드를 직접 입력해보는 것은 시간이 오래 걸리지만 매우 의미 있는 경험이었습니다. 영상을 공부하는 과정에서 문제가 발생하면 동료들과 함께 고민하고 해결해 나가는 과정은 서로를 더 가깝게 만들어주었습니다. 과제를 꾸준히 깃허브에 작성하면서 매 시간마다 어떤 것을 배웠는지 한 눈에 파악할 수 있게 되었고, 깃허브 잔디가 차곡차곡 쌓이는 모습을 보며 뿌듯함을 느꼈습니다. 앞으로도 열심히 남은 강좌를 공부하여 자신의 지식을 공유할 수 있는 유튜브 채널을 만들어보고 싶다는 생각이 들었습니다.
