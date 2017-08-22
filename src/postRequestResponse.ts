import RouteConfigs from './routeConfigs'
import * as Ajv from 'ajv';

class PostResponse {

    constructor() {}

    loopOverRouteConfig(requestPath: string) {
        const RouteConfig = new RouteConfigs()
        const pathName = requestPath.split('/').join('')
        let RouteResponse

        for ( let endpoint of RouteConfig.Configs.endpoints ) {
            if ( pathName.match(endpoint.name) ) {
                RouteResponse = endpoint
            }
        }

        return RouteResponse
    }

    public retrieveResponse(requestPath: string, payload: any) {
        const AJV = new Ajv()
        const RouteResponse = this.loopOverRouteConfig(requestPath)
        const pathName = requestPath.split('/').join('')

        let isValid

        if ( pathName.match(RouteResponse.name) ) {
            let validSchema = AJV.compile(JSON.parse(RouteResponse.schema))
            isValid = validSchema(payload)
        }
        
        if ( isValid ) {
            if ( pathName.match(RouteResponse.name) && !(!payload) ) {
                return RouteResponse.exampleResponse
            }
            else {
                return RouteResponse.invalidRequest
            }
        }
        else {
            return RouteResponse.unfulfillableRequest
        }
    }
}

export default PostResponse