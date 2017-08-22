"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routeConfigs_1 = require("./routeConfigs");
const Ajv = require("ajv");
class PostResponse {
    constructor() { }
    loopOverRouteConfig(requestPath) {
        const RouteConfig = new routeConfigs_1.default();
        const pathName = requestPath.split('/').join('');
        let RouteResponse;
        for (let endpoint of RouteConfig.Configs.endpoints) {
            if (pathName.match(endpoint.name)) {
                RouteResponse = endpoint;
            }
        }
        return RouteResponse;
    }
    retrieveResponse(requestPath, payload) {
        const AJV = new Ajv();
        const RouteResponse = this.loopOverRouteConfig(requestPath);
        const pathName = requestPath.split('/').join('');
        let isValid;
        if (pathName.match(RouteResponse.name)) {
            let validSchema = AJV.compile(JSON.parse(RouteResponse.schema));
            isValid = validSchema(payload);
        }
        if (isValid) {
            if (pathName.match(RouteResponse.name) && !(!payload)) {
                return RouteResponse.exampleResponse;
            }
            else {
                return RouteResponse.invalidRequest;
            }
        }
        else {
            return RouteResponse.unfulfillableRequest;
        }
    }
}
exports.default = PostResponse;
//# sourceMappingURL=postRequestResponse.js.map