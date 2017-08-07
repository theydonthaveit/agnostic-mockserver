import RouteConfigs from './routeConfigs'

class GetResponse {
    
}

export default GetResponse

// // determine the method used ( achieve by using separate methods )
    // // determind the request path
    // // validate the payload for all requests except GET
    // // validate payload is JSON
    // // ensure the the required fields have legit fields
    // // retrieve the example responsenpm par

    // public retrieveGetResponse(path: string) {
    //     for ( let endpoint of this.Configs.endpoints ) {
    //         if ( endpoint.name === path ) {
    //             return endpoint.exampleResponse
    //         }
    //     }
    // }

    // public retrievePayloadResponse(path: string, payload: any) {
    //     const payloadManipulate = payload

    //     for ( let endpoint of this.Configs.endpoints ) {
    //         if ( endpoint.name === path ) {
    //             if ( path === 'carrier') {
    //                 if (payloadManipulate.originCode.match(/DC2|DC3|DC1|DC4/)
    //                     && payloadManipulate.businessCode.match(/MRP|NAP|JCH|TON/)
    //                     && payloadManipulate.destination.country.match(/AZ/)
    //                 ) {
    //                     return endpoint.exampleResponse
    //                 }
    //                 else {
    //                     return endpoint.unfulfillableRequest
    //                 }
    //             }
    //             if ( path === '/v2/book/shipment' ) {
    //                 if ()
    //             }
    //         }
    //         else {
    //             return endpoint.invalidRequest
    //         }
    //     }
    // }
