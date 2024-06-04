# Direct3D 실습하기

## 과제 조건
1. HelloWindow 기본

2. HelloTriangle 삼각형 그리기 <-추가된 내용

3. HelloTexture 텍스쳐를 넣는 방법 <-추가된 내용

# ❗필수❗
* Nuget에서 Microsoft.Direct3D.D3D12 설치되어 있어야 함.

* src\packages 내용도 필요함. #include "include/d3dx12/d3dx12.h"

## ➡필요한 이유:

NuGet 패키지는 Direct3D 12 API를 사용할 수 있도록 하고, 추가 헤더 파일(d3dx12.h)은 Direct3D 12 프로그래밍을 더 쉽게 만들기 위해 필요한 유틸리티 함수를 제공합니다. 이 두 가지를 통해 Direct3D 12 프로그래밍 환경을 빠르고 쉽게 설정할 수 있습니다.



# 1. HelloWindow 기본
![image](https://github.com/JunYoung0404/aigraphics/assets/50895748/56d0c936-1acf-4304-9718-76fa27689d93)

DirectX 12를 사용하여 창(window)에서 그래픽을 그리는 프로그램을 작성하는 예제입니다. DirectX 12는 게임이나 그래픽 소프트웨어에서 자주 사용되는 그래픽 라이브러리입니다.

- 내용
  
파이프라인 로딩 (LoadPipeline()): DirectX 12에서는 렌더링을 위한 파이프라인을 설정해야 합니다. 이 과정에서 디바이스를 생성하고, 디버그 레이어를 활성화하고, 스왑 체인을 생성하는 등의 작업이 이루어집니다.

자원 로딩 (LoadAssets()): 필요한 자원들을 로딩합니다. 여기서는 커맨드 리스트와 동기화 객체를 생성합니다. 이 객체들은 렌더링 프로세스를 동기화하고 GPU 작업을 관리하는 데 사용됩니다.

커맨드 리스트 작성 (PopulateCommandList()): 렌더링 명령들을 커맨드 리스트에 기록합니다. 이 명령들은 실제 그래픽 작업을 수행하는데 사용됩니다. 여기서는 백 버퍼를 렌더링 타겟으로 설정하고, 화면을 지우는 명령을 포함합니다.

프레임 완료 대기 (WaitForPreviousFrame()): GPU가 이전 프레임의 렌더링을 완료할 때까지 기다립니다. 이는 프레임 간 동기화를 위해 필요합니다. 종료 전 GPU가 리소스를 참조하지 않도록 합니다.

#### 소스코드
https://github.com/JunYoung0404/aigraphics/tree/main/Direct3D/HelloWindow/HelloWindow


# 2. HelloTriangle 삼각형 그리기 <-추가된 내용
### 🟪추가된 내용
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
## 2. 루트 서명 및 파이프라인 상태 생성
```
// D3D12HelloWindow 클래스
void D3D12HelloWindow::LoadPipeline() {
    // DXGI 팩토리 생성 및 디바이스 생성

    // 루트 서명 초기화
    CD3DX12_ROOT_SIGNATURE_DESC rootSignatureDesc;
    rootSignatureDesc.Init(0, nullptr, 0, nullptr, D3D12_ROOT_SIGNATURE_FLAG_ALLOW_INPUT_ASSEMBLER_INPUT_LAYOUT);
    ComPtr<ID3DBlob> signature;
    ComPtr<ID3DBlob> error;
    ThrowIfFailed(D3D12SerializeRootSignature(&rootSignatureDesc, D3D_ROOT_SIGNATURE_VERSION_1, &signature, &error));
    ThrowIfFailed(m_device->CreateRootSignature(0, signature->GetBufferPointer(), signature->GetBufferSize(), IID_PPV_ARGS(&m_rootSignature)));

    // 파이프라인 상태 설정
    ComPtr<ID3DBlob> vertexShader;
    ComPtr<ID3DBlob> pixelShader;
    UINT compileFlags = 0; // 릴리스 빌드에는 디버그 플래그를 사용하지 않습니다.
    ThrowIfFailed(D3DCompileFromFile(GetAssetFullPath(L"shaders.hlsl").c_str(), nullptr, nullptr, "VSMain", "vs_5_0", compileFlags, 0, &vertexShader, nullptr));
    ThrowIfFailed(D3DCompileFromFile(GetAssetFullPath(L"shaders.hlsl").c_str(), nullptr, nullptr, "PSMain", "ps_5_0", compileFlags, 0, &pixelShader, nullptr));
    // 기타 파이프라인 상태 설정
}

```
설명:
D3D12HelloWindow 클래스에는 루트 서명과 파이프라인 상태가 없기 때문에 이를 추가해야 합니다. 이를 위해 LoadPipeline() 메서드에서 루트 서명을 초기화하고, 파이프라인 상태를 설정해야 합니다.

## 3. 버텍스 데이터 정의: LoadAssets() 메서드에서 삼각형을 그리기 위한 버텍스 데이터를 정의해야 합니다.
```
Vertex triangleVertices[] =
{
    { { 0.0f, 0.25f * m_aspectRatio, 0.0f }, { 1.0f, 0.0f, 0.0f, 1.0f } },
    { { 0.25f, -0.25f * m_aspectRatio, 0.0f }, { 0.0f, 1.0f, 0.0f, 1.0f } },
    { { -0.25f, -0.25f * m_aspectRatio, 0.0f }, { 0.0f, 0.0f, 1.0f, 1.0f } }
};
```
## 4. 프리미티브 타입 설정: PopulateCommandList() 메서드에서 IASetPrimitiveTopology() 함수를 사용하여 프리미티브 타입을 설정해야 합니다. 삼각형을 그리려면 다음과 같이 설정합니다
```
m_commandList->IASetPrimitiveTopology(D3D_PRIMITIVE_TOPOLOGY_TRIANGLELIST);
```
### 실행 결과 사진
![image](https://github.com/JunYoung0404/aigraphics/assets/50895748/25dd7ff9-c45f-47a4-974e-e62a28128fc6)



# 3. HelloTexture 텍스쳐를 넣는 방법 <-추가된 내용
### 🟪추가된 내용
## 1. 텍스처 생성 및 초기화
```
// Create the texture.
{
    // Describe and create a Texture2D.
    D3D12_RESOURCE_DESC textureDesc = {};
    textureDesc.MipLevels = 1;
    textureDesc.Format = DXGI_FORMAT_R8G8B8A8_UNORM;
    textureDesc.Width = TextureWidth;
    textureDesc.Height = TextureHeight;
    textureDesc.Flags = D3D12_RESOURCE_FLAG_NONE;
    textureDesc.DepthOrArraySize = 1;
    textureDesc.SampleDesc.Count = 1;
    textureDesc.SampleDesc.Quality = 0;
    textureDesc.Dimension = D3D12_RESOURCE_DIMENSION_TEXTURE2D;

    ThrowIfFailed(m_device->CreateCommittedResource(
        &CD3DX12_HEAP_PROPERTIES(D3D12_HEAP_TYPE_DEFAULT),
        D3D12_HEAP_FLAG_NONE,
        &textureDesc,
        D3D12_RESOURCE_STATE_COPY_DEST,
        nullptr,
        IID_PPV_ARGS(&m_texture)));
}
```
설명:
이 코드는 루트 시그니처를 생성합니다. 이전에는 단순한 루트 시그니처만을 사용했지만, 이 코드에서는 텍스처를 처리하기 위한 SRV와 샘플러를 포함한 루트 시그니처를 생성합니다.

## 2. 텍스처 데이터 생성
```
// Generate a simple black and white checkerboard texture.
std::vector<UINT8> D3D12HelloTexture::GenerateTextureData()
{
    // Texture data generation logic...
}
```
설명:
GenerateTextureData() 함수에서는 체크무늬 패턴의 텍스처 데이터를 생성합니다. 이는 텍스처의 픽셀 값을 배열로 생성하는 과정입니다.
## 3. 텍스처 업로드
```
// Copy data to the intermediate upload heap and then schedule a copy 
// from the upload heap to the Texture2D.
UpdateSubresources(m_commandList.Get(), m_texture.Get(), textureUploadHeap.Get(), 0, 0, 1, &textureData);
m_commandList->ResourceBarrier(1, &CD3DX12_RESOURCE_BARRIER::Transition(m_texture.Get(), D3D12_RESOURCE_STATE_COPY_DEST, D3D12_RESOURCE_STATE_PIXEL_SHADER_RESOURCE));
```
설명:
텍스처 데이터를 업로드 힙으로 복사하고, 그 후 업로드 힙에서 텍스처로 복사하여 텍스처를 초기화합니다. UpdateSubresources 함수를 사용하여 데이터를 복사하고, ResourceBarrier 함수를 사용하여 상태 전이를 설정합니다.

## 4. 셰이더 리소스 뷰(SRV) 생성
```
// Describe and create a SRV for the texture.
D3D12_SHADER_RESOURCE_VIEW_DESC srvDesc = {};
srvDesc.Shader4ComponentMapping = D3D12_DEFAULT_SHADER_4_COMPONENT_MAPPING;
srvDesc.Format = textureDesc.Format;
srvDesc.ViewDimension = D3D12_SRV_DIMENSION_TEXTURE2D;
srvDesc.Texture2D.MipLevels = 1;
m_device->CreateShaderResourceView(m_texture.Get(), &srvDesc, m_srvHeap->GetCPUDescriptorHandleForHeapStart());
```
설명:
텍스처를 셰이더에서 액세스할 수 있도록 셰이더 리소스 뷰(SRV)를 생성합니다. 이는 텍스처의 형식, 차원 및 다른 특성에 맞게 설정됩니다.

### 실행 결과 사진
![image](https://github.com/JunYoung0404/aigraphics/assets/50895748/867a5352-e1ad-4a37-8edc-525abbbef331)


⏹소감:
교수님께서 올려주신 Direct3D 12 Hello, World! samples 에서 다운을 받아 windowHello와 Hello Triangle,HelloTexture 을 실행해 보면서 Direct3D와 조금 친해진거 같습니다. 먼저 각 소스코드에서의 변화를 chat gpt 4.o와 륀튼 등을 사용해 보면서 공부해 보았고 교수님이 올려주신 사이트를 참고해 보면서도 공부를 해 보았습니다. 그리고 카페에서 올려주신 shader언어와 그리고 주요 쉐어더 언어,설명들을 읽어 보면서 다이렉트 x 에 대해 조금더 알게 되었습니다. 하지만 처음부터 이렇게 막 읽었다고 다 끝이게 아닌것 처럼 기말고사 치기 전까지 천천히 카페를 탐방해 보면서 반복숙달하는것이 가장 중요하다고 생각합니다. 하루에 1~3개의 쉐이더를 공부하면 기말고사전까지 교수님께서 올려주신 쉐이더를 모두 숙달할수있을것 같습니다. 그리고 너겟과 패키지를 왜 설치해야하는지도 교수님께서 수업시간에 설명해주셔서 이유를 알게 되었습니다. 앞으로 남은 기말고사 기간까지 반복 숙달하여 Direct3D와 친해지도록 하겠습니다ㅣ.


  

