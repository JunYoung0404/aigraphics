# 결과 사진
### PerspectiveCamera사용
![image](https://github.com/JunYoung0404/aigraphics/assets/50895748/d46b13ed-ae02-482c-980a-b67f67889eaf)

## 코드
```
const camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		100
	 );
```
### OrthographicCamera사용
![image](https://github.com/JunYoung0404/aigraphics/assets/50895748/d9b39440-5b8f-4877-b853-8c0672e4e124)

## 코드
```
 const aspect = window.innerWidth / window.innerHeight;
      const camera = new THREE.OrthographicCamera(
		aspect * -1, aspect * 1, 1, -1, 0.1, 100);
     
	
	
	 camera.zoom = 0.15; 
```
