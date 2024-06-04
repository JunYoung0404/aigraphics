# Direct3D 실습하기

## 과제 조건
1. HelloWindow 기본

2. HelloTriangle 삼각형 그리기 <-추가된 내용

3. HelloTexture 텍스쳐를 넣는 방법 <-추가된 내용

❗ 필수
* Nuget에서 Microsoft.Direct3D.D3D12 설치되어 있어야 함.

* src\packages 내용도 필요함. #include "include/d3dx12/d3dx12.h"

➡필요한 이유:

NuGet 패키지는 Direct3D 12 API를 사용할 수 있도록 하고, 추가 헤더 파일(d3dx12.h)은 Direct3D 12 프로그래밍을 더 쉽게 만들기 위해 필요한 유틸리티 함수를 제공합니다. 이 두 가지를 통해 Direct3D 12 프로그래밍 환경을 빠르고 쉽게 설정할 수 있습니다.



# 1. HelloWindow 기본
![image](https://github.com/JunYoung0404/aigraphics/assets/50895748/56d0c936-1acf-4304-9718-76fa27689d93)

DirectX 12를 사용하여 창(window)에서 그래픽을 그리는 프로그램을 작성하는 예제입니다. DirectX 12는 게임이나 그래픽 소프트웨어에서 자주 사용되는 그래픽 라이브러리입니다.

- 내용
  
파이프라인 로딩 (LoadPipeline()): DirectX 12에서는 렌더링을 위한 파이프라인을 설정해야 합니다. 이 과정에서 디바이스를 생성하고, 디버그 레이어를 활성화하고, 스왑 체인을 생성하는 등의 작업이 이루어집니다.

자원 로딩 (LoadAssets()): 필요한 자원들을 로딩합니다. 여기서는 커맨드 리스트와 동기화 객체를 생성합니다. 이 객체들은 렌더링 프로세스를 동기화하고 GPU 작업을 관리하는 데 사용됩니다.

커맨드 리스트 작성 (PopulateCommandList()): 렌더링 명령들을 커맨드 리스트에 기록합니다. 이 명령들은 실제 그래픽 작업을 수행하는데 사용됩니다. 여기서는 백 버퍼를 렌더링 타겟으로 설정하고, 화면을 지우는 명령을 포함합니다.

프레임 완료 대기 (WaitForPreviousFrame()): GPU가 이전 프레임의 렌더링을 완료할 때까지 기다립니다. 이는 프레임 간 동기화를 위해 필요합니다. 종료 전 GPU가 리소스를 참조하지 않도록 합니다.



# 2. HelloTriangle 삼각형 그리기 <-추가된 내용
### ❎추가된 내용
## 1. 버텍스와 픽셀 쉐이더 추가: shaders.hlsl 파일에 적절한 버텍스와 픽셀 쉐이더를 추가해야 합니다. 
```
// Vertex Shader
struct VertexInput
{
    float3 position : POSITION;
    float4 color : COLOR;
};

struct VertexOutput
{
    float4 position : SV_POSITION;
    float4 color : COLOR;
};

VertexOutput VSMain(VertexInput input)
{
    VertexOutput output;
    output.position = float4(input.position, 1.0f);
    output.color = input.color;
    return output;
}

// Pixel Shader
struct PixelInput
{
    float4 position : SV_POSITION;
    float4 color : COLOR;
};

float4 PSMain(PixelInput input) : SV_TARGET
{
    return input.color;
}
```
## 2. 버텍스 데이터 정의: LoadAssets() 메서드에서 삼각형을 그리기 위한 버텍스 데이터를 정의해야 합니다.
```
Vertex triangleVertices[] =
{
    { { 0.0f, 0.25f * m_aspectRatio, 0.0f }, { 1.0f, 0.0f, 0.0f, 1.0f } },
    { { 0.25f, -0.25f * m_aspectRatio, 0.0f }, { 0.0f, 1.0f, 0.0f, 1.0f } },
    { { -0.25f, -0.25f * m_aspectRatio, 0.0f }, { 0.0f, 0.0f, 1.0f, 1.0f } }
};
```
## 3. 프리미티브 타입 설정: PopulateCommandList() 메서드에서 IASetPrimitiveTopology() 함수를 사용하여 프리미티브 타입을 설정해야 합니다. 삼각형을 그리려면 다음과 같이 설정합니다
```
m_commandList->IASetPrimitiveTopology(D3D_PRIMITIVE_TOPOLOGY_TRIANGLELIST);
```

# 3. HelloTexture 텍스쳐를 넣는 방법 <-추가된 내용




  

