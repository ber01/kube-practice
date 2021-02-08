import * as k8s from '../../imports/k8s'
import * as kplus from 'cdk8s-plus-17'
import { Chart } from 'cdk8s'
import { Construct } from 'constructs'
import { computed } from 'mobx'

export interface IMosquittoChart {
  readonly deployment: k8s.KubeDeployment
}

export class MosquittoChart extends Chart implements IMosquittoChart {
  constructor(scope: Construct, id: string) {
    super(scope, id)
    this.deployment
    this.service
    this.configMap
  }

  @computed
  public get deployment(): k8s.KubeDeployment {
    const name = 'deployment-mosquitto'
    return new k8s.KubeDeployment(this, 'deployment', {
      metadata: {
        name,
      },
      spec: {
        replicas: 1,
        selector: {
          matchLabels: {
            'cdk8s.deployment': name,
          },
        },
        template: {
          metadata: {
            labels: {
              'cdk8s.deployment': name,
            },
          },
          spec: {
            containers: [
              {
                env: [],
                image: 'eclipse-mosquitto:2',
                imagePullPolicy: 'Always',
                name: 'main',
                ports: [],
                volumeMounts: [
                  {
                    mountPath: '/mosquitto/config/mosquitto.conf',
                    name: 'config',
                    readOnly: true,
                    subPath: 'mosquitto.conf',
                  },
                ],
              },
            ],
            volumes: [
              {
                configMap: {
                  items: [{ key: 'mosquitto.conf', path: 'mosquitto.conf' }],
                  name: this.configName,
                },
                name: 'config',
              },
            ],
          },
        },
      },
    })
  }

  @computed
  public get service(): k8s.KubeService {
    const name = 'service-mosquitto'
    return new k8s.KubeService(this, 'service', {
      metadata: {
        name,
      },
      spec: {
        externalIPs: [],
        ports: [{ name: 'mqtt', port: 1883, nodePort: 32010 }],
        selector: {
          'cdk8s.deployment': this.deployment.name,
        },
        type: 'NodePort',
      },
    })
  }

  @computed
  public get configMap(): kplus.ConfigMap {
    return new kplus.ConfigMap(this, 'configMap', {
      metadata: {
        name: this.configName,
      },
      data: {
        'mosquitto.conf': `
retain_available false
allow_zero_length_clientid true
log_dest stdout
listener 1883
protocol mqtt
allow_anonymous true
require_certificate false
use_identity_as_username false
        `,
      },
    })
  }

  @computed
  public get configName(): string {
    return 'config-mosquitto'
  }
}
