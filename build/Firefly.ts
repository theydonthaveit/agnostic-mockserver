import * as Hapi from 'hapi'

class App {
  public Hapi

  constructor() {
    this.Hapi = new Hapi.Server()
    this.connection()
    this.mouthRoutes()
  }

  private connection(): void {
    this.Hapi.connection({
      port: 3000,
      host: 'localhost'
    })
  }
  private mouthRoutes(): void {
    this.Hapi.route({
      method: 'POST',
      path: '/carrier',
      handler: function (request, reply) {
        reply(JSON.parse("{\n\"carrier\": \"INTERNAL\"\n}"))
      }
    })
    this.Hapi.route({
      method: 'GET',
      path: '/health',
      handler: function (request, reply) {
        reply(JSON.parse("{\n\"overview\": \"ok\",\n\"components\": [\n{\n\"name\": \"database\",\n\"ok\": true,\n\"criticalComponent\": true,\n\"description\": \"ok\"\n},\n{\n\"name\": \"internet\",\n\"ok\": true,\n\"criticalComponent\": true,\n\"description\": \"ok\"\n},\n{\n\"name\": \"dhl\",\n\"ok\": true,\n\"criticalComponent\": false,\n\"description\": \"ok\"\n},\n{\n\"name\": \"ups\",\n\"ok\": true,\n\"criticalComponent\": false,\n\"description\": \"ok\"\n},\n{\n\"name\": \"falcon\",\n\"ok\": true,\n\"criticalComponent\": false,\n\"description\": \"ok\"\n}\n],\n\"reports\": [\n{\n\"name\": \"clock\",\n\"data\": \"2017-07-31T11:39:55.357Z[UTC]\"\n},\n{\n\"name\": \"buildInfo\",\n\"data\": {\n\"name\": \"firefly\",\n\"jenkinsBuild\": \"299\",\n\"gitCommit\": \"d33383597f39da2e2edf005e120dd10129b52c9d\",\n\"scalaVersion\": \"2.11.7\",\n\"version\": \"0.2\",\n\"sbtVersion\": \"0.13.11\"\n}\n}\n]\n}"))
      }
    })
  }
}

export default new App().Hapi