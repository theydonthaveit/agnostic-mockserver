"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routeConfigs_1 = require("./routeConfigs");
class GetResponse {
    constructor() { }
    loopOverRouteConfig(requestPath) {
        const RouteConfig = new routeConfigs_1.default();
        const pathName = requestPath.split('/').join('');
        let RouteResponse;
        for (let endpoint of RouteConfig.Configs.endpoints) {
            if (pathName.match(endpoint.name)) {
                RouteResponse = endpoint;
            }
            else {
                RouteResponse = RouteConfig.Configs;
            }
        }
        return RouteResponse;
    }
    retrieveResponse(requestPath) {
        const RouteResponse = this.loopOverRouteConfig(requestPath);
        const pathName = requestPath.split('/').join('');
        if (pathName.match(RouteResponse.name)) {
            return RouteResponse.exampleResponse;
        }
        else {
            return RouteResponse.default_bad_url;
        }
    }
}
exports.default = GetResponse;
//# sourceMappingURL=getRequestResponse.js.map