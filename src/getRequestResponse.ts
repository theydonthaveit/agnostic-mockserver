import RouteConfigs from './routeConfigs'

class GetResponse {
    constructor() {}

    loopOverRouteConfig(requestPath: string) {
        const RouteConfig = new RouteConfigs()
        const pathName = requestPath.split('/').join('')
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
        const RouteResponse = this.loopOverRouteConfig(requestPath)
        const pathName = requestPath.split('/').join('')

        if ( pathName.match(RouteResponse.name) ) {
            return RouteResponse.exampleResponse
        }
        else {
            return RouteResponse.default_bad_url
        }
    }
}

export default GetResponse