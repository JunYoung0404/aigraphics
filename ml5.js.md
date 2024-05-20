# ml5.js실습

## 과제 내용
- PoseNet

- Handpose

- Facemask
# PoseNet
## 실행코드
```
// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
PoseNet example using p5.js
=== */

let video;
let poseNet;
let poses = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);
  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  select('#status').html('Model Loaded');
}

function draw() {
  image(video, 0, 0, width, height);

  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
  drawSkeleton();
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints()  {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.2) {
        fill(255, 0, 0);
        noStroke();
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
      }
    }
  }
}

// A function to draw the skeletons
function drawSkeleton() {
  // Loop through all the skeletons detected
  for (let i = 0; i < poses.length; i++) {
    let skeleton = poses[i].skeleton;
    // For every skeleton, loop through all body connections
    for (let j = 0; j < skeleton.length; j++) {
      let partA = skeleton[j][0];
      let partB = skeleton[j][1];
      stroke(255, 0, 0);
      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
    }
  }
}

```
## 실행결과 사진
![image](https://github.com/JunYoung0404/aigraphics/assets/50895748/3d088770-77c9-4bcf-a7f5-d39c1ab29f15)

# Handpose
## 실행코드
```
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Handpose with Webcam</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.dom.min.js"></script>
    <script src="https://unpkg.com/ml5@latest/dist/ml5.min.js" type="text/javascript"></script>
  </head>
  <body>
    <h1>Handpose with Webcam</h1>
    <script src="sketch.js"></script>
  </body>
</html>

```
## 실행 결과 사진
![image](https://github.com/JunYoung0404/aigraphics/assets/50895748/ef8a6cfc-e6dc-4cfd-bba2-ba112b51a098)

# facemesh
## 실행 코드
```
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Facemesh with Webcam</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.dom.min.js"></script>
    <script src="https://unpkg.com/ml5@latest/dist/ml5.min.js" type="text/javascript"></script>

    <style></style>
  </head>

  <script src="sketch.js"></script>

  <body>
    <h1>Facemesh with Webcam</h1>
  </body>
</html>

```
## 실행 결과 사진
![image](https://github.com/JunYoung0404/aigraphics/assets/50895748/ca96b3a8-ecbc-4138-ab61-5064f676d2d3)


## 변경 사항
1. 색상변경
2. 도형 모형 변경
3. 선추가
![image](https://github.com/JunYoung0404/aigraphics/assets/50895748/16158220-df89-4880-9043-c2c747432af1)

# sketch.js
```
let facemesh;
let video;
let predictions = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  facemesh = ml5.facemesh(video, modelReady);
  facemesh.on('predict', results => {
    predictions = results;
  });

  video.hide();
}

function modelReady() {
  console.log('Facemesh model ready!');
}

function draw() {
  image(video, 0, 0, width, height);
  drawKeypoints();
}

function drawKeypoints() {
  for (let i = 0; i < predictions.length; i += 1) {
    const keypoints = predictions[i].scaledMesh;
    for (let j = 0; j < keypoints.length; j += 1) {
      const [x, y] = keypoints[j];
      fill(0, 0, 255); // 파란색으로 설정
       stroke(255, 255, 0); // 노란색 선 설정
      rect(x, y, 5, 5); // 네모 그리기
    }
  }
}
```


