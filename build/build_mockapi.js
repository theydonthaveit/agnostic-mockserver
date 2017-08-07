var yaml = require('yamljs')
var jparser = require('json-parser')
var fs = require('fs');

var yamlFile = yaml.load('../public/micro-services/firefly.yml')
var fileName = `${yamlFile.name}.ts`

var stream = fs.createWriteStream(fileName, { flags : 'w' })

stream.write(`import * as Hapi from 'hapi'\n\n`)
stream.write(`class App {\n`)
stream.write('  '+`public Hapi\n\n`)
stream.write('  '+`constructor() {\n`)
stream.write('    '+`this.Hapi = new Hapi.Server()\n`)
stream.write('    '+`this.connection()\n`)
stream.write('    '+`this.mouthRoutes()\n`)
stream.write('  '+`}\n\n`)
stream.write('  '+`private connection(): void {\n`)
stream.write('    '+`this.Hapi.connection({\n`)
stream.write('      '+`port: 3000,\n`)
stream.write('      '+`host: 'localhost'\n`)
stream.write('    '+`})\n`)
stream.write('  '+`}\n`)
stream.write('  '+`private mouthRoutes(): void {\n`)

for ( const endpoint of yamlFile.endpoints ) {
    var json = JSON.stringify(endpoint.exampleResponse);

    stream.write('    '+`this.Hapi.route({\n`)
    stream.write('      '+`method: '${endpoint.method}',\n`)
    stream.write('      '+`path: '/${endpoint.name}',\n`)
    stream.write('      '+`handler: function (request, reply) {\n`)
    stream.write('        '+`reply(JSON.parse(${json}))\n`)
    stream.write('      '+`}\n`)
    stream.write('    '+`})\n`)
}

stream.write('  '+`}\n`)
stream.write(`}\n\n`)
stream.write(`export default new App().Hapi`)
stream.end()