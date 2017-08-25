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
            path: '/{any*}',
            config: {
            auth: false,
                cache: {
                    expiresIn: 1
                }
            },
            handler: function (request, reply) {
                // wasn't aware of a better solution to get around this shit
                if ( request.path.match('favicon') ) {
                    return reply().code(204).type('image/x-icon');
                }
                
                reply(g.retrieveResponse(request.path))
            }
        })

        this.Hapi.route({
            method: 'POST',
            path: '/{any*}',
            config: {
            auth: false,
                cache: {
                    expiresIn: 1
                }
            },
            handler: function (request, reply) {
                if ( request.path.match('favicon') ) {
                    return reply().code(204).type('image/x-icon');
                }

                reply(p.retrieveResponse(request.path, request.payload))
            }
        })
    }
}

export default new App().Hapi