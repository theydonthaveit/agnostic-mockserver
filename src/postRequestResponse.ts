import * as console from 'console';
import RouteConfigs from './routeConfigs'
import SchemaConfigs from '../config/schema'
import * as Ajv from 'ajv';

class PostResponse {
    public AJV

    constructor() {
        this.AJV = new Ajv()
    }

    public retrieveResponse(requestPath: string, payload: any) {
        const RouteResponse = new RouteConfigs()
        const SchemaResponse = new SchemaConfigs(requestPath)

        let validate =
            this.AJV.validate(SchemaResponse.schemaName, payload)

        for ( const endpoint of RouteResponse.Configs.endpoints ) {
            if ( validate ) {
                if ( endpoint.name === requestPath ) {
                    return endpoint.exampleResponse
                }
                else {
                    return endpoint.invalidRequest
                }
            }
            else {
                return endpoint.unfulfillableRequest
            }
        }
    }
}

export default PostResponse