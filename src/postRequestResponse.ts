import RouteConfigs from './routeConfigs'
import * as Ajv from 'ajv';

class PostResponse {

    constructor() {}

    loopOverRouteConfig(pathName: string) {
        const RouteConfig = new RouteConfigs()
       
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

        const pathName = requestPath.split('/').join('')
        const RouteResponse = this.loopOverRouteConfig(pathName)

        let validSchema
        let isValid

        if ( pathName.match(RouteResponse.name) ) {
            validSchema = AJV.compile(JSON.parse(RouteResponse.schema))
            isValid = validSchema(payload)
        }
        
        if ( isValid ) {
            if ( pathName.match(RouteResponse.name) && !(!payload) ) {
                return RouteResponse.exampleResponse
            }
            else {
                let response = JSON.parse(RouteResponse.invalidRequest)
                response.errorMessage = validSchema.errors[0].message
                return response
            }
        }
        else {
            let response = JSON.parse(RouteResponse.unfulfillableRequest)
            response.errorMessage = validSchema.errors[0].message
            return response
        }
    }
}

export default PostResponse