# kube-practice

내용을 무엇으로 채울까 🤔

## Install

도커 설치

```bash
$ brew install --cask docker
```

쿠버네티스 커맨드라인 설치

```bash
$ brew install kubectl
```

minikube 설치

```bash
$ brew install minikube
```

## Run

minikube 실행 (hyperkit)

```bash
$ minikube start --vm-driver=hyperkit
```

쿠버네티스 오브젝트 생성

```bash
$ yarn synth
```

리소스 생성 및 업데이트

```bash
# 경로 이동
$ cd cdk8s

# 리소스 생성 및 업데이트
$ kubectl apply -f out
```

## Reference

- [CDK8s Documentation-Getting Started](https://cdk8s.io/docs/v1.0.0-beta.8/getting-started/#getting-started)
