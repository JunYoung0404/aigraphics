# three.js로 3D 큐브 만들기(조명, 재질) 및 회전

팀원 : 김준영,오예준,이재경

- 과제내용

   Lab 4-3을 활용하여 three.js로 3D 큐브를 회전 하는 코드를 작성하시오.
 
   큐브의 색상을 임의 색상으로 한다.
 
   팀장이 github에 올리고, 링크를 제출한다.

  ## 수정된 부분
```  
   _setupLight(){
        const color = 0xFFFFFF;  // 빛의 색상 
        const intensity = 1;
        const light = new THREE.AmbientLight(color, intensity);     // 자연광 
        light.position.set(-1, 2, 4);
        this._scene.add(light);
    }
    _setupModel(){
        const geometry = new THREE.BoxGeometry(1,1,1);
        const material = new THREE.MeshNormalMaterial({ color: 0x00ff00 });   // MeshNormalMateiral : 법선 벡터 값을 RGB로 나타냄 

        const cube = new THREE.Mesh(geometry, material);
        this._scene.add(cube);
        this._cube = cube;
    }
```

## 실행결과



https://github.com/JunYoung0404/aigraphics/assets/50895748/a60e25e4-a6bf-4423-af29-f806ae541e7d


## 소감
