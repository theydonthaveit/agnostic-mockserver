import RouteConfigs from './routeConfigs'

class GetResponse {
    constructor() {}

    loopOverRouteConfig(pathName: string) {
        const RouteConfig = new RouteConfigs()
        let RouteResponse

        for ( let endpoint of RouteConfig.Configs.endpoints ) {
            if ( pathName.match(endpoint.name) ) {
                RouteResponse = endpoint
                return RouteResponse
            }
            else {
                RouteResponse = RouteConfig.Configs
                return RouteResponse
            }
        }
    }

    public retrieveResponse(requestPath: string) {
        const pathName = requestPath.split('/').join('')
        const RouteResponse = this.loopOverRouteConfig(pathName)

        if ( pathName.match(RouteResponse.name) ) {
            return RouteResponse.exampleResponse
        }
        else {
            return RouteResponse.default_bad_url
        }
    }
}

export default GetResponse