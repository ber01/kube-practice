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

MQTTBox 설치

- [Installing from dmg package](http://workswithweb.com/html/mqttbox/installing_apps.html#install_on_mac)

## Run

minikube 실행 (hyperkit)

```bash
$ minikube start --vm-driver=hyperkit
```

매니페스트 생성

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

## MQTTBox

MQTT client setting

![image](https://user-images.githubusercontent.com/28918801/108363626-82047f80-7238-11eb-9555-9859a33222ad.png)

Subscribe setting

![image](https://user-images.githubusercontent.com/28918801/108364004-e6bfda00-7238-11eb-9e9e-cc84a75ddbee.png)

message publish

```bash
$ cd packages/message-publish

$ yarn debug
```

![image](https://user-images.githubusercontent.com/28918801/108363950-d6a7fa80-7238-11eb-8af0-69326d96ba94.png)

## Reference

- [CDK8s Documentation-Getting Started](https://cdk8s.io/docs/v1.0.0-beta.8/getting-started/#getting-started)
