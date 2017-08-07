import * as Hapi from 'hapi';
import GetResponse from './getRequestResponse'
import PostResponse from './postRequestResponse';

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
            host: '0.0.0.0' 
        })
    }

    private mouthRoutes(): void {
        const g = new GetResponse()
        const p = new PostResponse()
    
        this.Hapi.route({
            method: 'GET',
            path: '/favicon.ico',
            config: {
            auth: false,
                cache: {
                    expiresIn: 1
                }
            },
            handler: function (request, reply) {
                return reply().code(204).type('image/x-icon');
            }
        })

        this.Hapi.route({
            method: 'GET',
            path: '/{operation}',
            handler: function (request, reply) {
                reply()
            }
        })

        this.Hapi.route({
            method: 'POST',
            path: '/{operation}',
            handler: function (request, reply) {
                reply(p.retrieveResponse(request.params.operation, request.payload))
            }
        })
    }
}

export default new App().Hapi