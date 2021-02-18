/* eslint-disable no-console */
import { DateTime, FixedOffsetZone } from 'luxon'
import mqtt from 'mqtt'

const client = mqtt.connect({
  host: '192.168.64.2',
  port: 32010,
  protocol: 'mqtt',
})

const opts: mqtt.IClientPublishOptions = {
  retain: false,
  qos: 0,
}

setInterval(() => {
  const timestamp = DateTime.fromISO(Date.now().toString())
    .setZone(FixedOffsetZone.instance(540))
    .toISO()
  const message = JSON.stringify({
    timestamp: Date.now(),
    data: Math.random().toString(36).substr(2, 11),
  })
  client.publish('test', message, opts)
  console.log('Sender')
}, 1000)
