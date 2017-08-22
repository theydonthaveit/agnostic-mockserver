"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Hapi = require("hapi");
const getRequestResponse_1 = require("./getRequestResponse");
const postRequestResponse_1 = require("./postRequestResponse");
class App {
    constructor() {
        this.Hapi = new Hapi.Server();
        this.connection();
        this.mouthRoutes();
    }
    connection() {
        this.Hapi.connection({
            port: 3000,
            host: '0.0.0.0'
        });
    }
    mouthRoutes() {
        const g = new getRequestResponse_1.default();
        const p = new postRequestResponse_1.default();
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
        });
        this.Hapi.route({
            method: 'GET',
            path: '/{operation}',
            handler: function (request, reply) {
                reply(g.retrieveResponse(request.path));
            }
        });
        this.Hapi.route({
            method: 'POST',
            path: '/{operation}',
            handler: function (request, reply) {
                reply(p.retrieveResponse(request.path, request.payload));
            }
        });
        this.Hapi.route({
            method: 'POST',
            path: '/book/shipment',
            handler: function (request, reply) {
                reply(p.retrieveResponse(request.path, request.payload));
            }
        });
        this.Hapi.route({
            method: 'POST',
            path: '/v2/book/shipment',
            handler: function (request, reply) {
                reply(p.retrieveResponse(request.path, request.payload));
            }
        });
        this.Hapi.route({
            method: 'POST',
            path: '/v3/book/shipment',
            handler: function (request, reply) {
                reply(p.retrieveResponse(request.path, request.payload));
            }
        });
        this.Hapi.route({
            method: 'POST',
            path: '/validate/shipment',
            handler: function (request, reply) {
                reply(p.retrieveResponse(request.path, request.payload));
            }
        });
    }
}
exports.default = new App().Hapi;
//# sourceMappingURL=App.js.map