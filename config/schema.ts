class Schema {
    public schemaName

    constructor(requestPath: string) {
        this.schemaName = this.retrieve(requestPath)
    }

    private retrieve(requestPath: string) {
        if ( requestPath === 'carrier' ) {
             return {
                "properties": {
                    "originCode": {
                        "type": "string",
                        "pattern": "DC1|DC2|DC3"
                    },
                    "businessCode": {
                        "type": "string",
                        "pattern": "MRP|NAP|JCH|TON"
                    },
                    "optionId": {},
                    "destination": {
                        "properties": {
                            "line1": {
                                "type": [
                                    "number",
                                    "string"
                                ]
                            },
                            "line2": {},
                            "line3": {},
                            "city": {
                                "pattern": "[a-z]"
                            },
                            "country": {
                                "type": "string",
                                "pattern": "AZ|PW|HN|CY|GI|AI|LC|UG|LS|FM|LI|MA|MO|IC|TZ|CR|LV|CW|MX|ME|PY|ID|SY|BM|VU|GH|JP|TH|GU|GP|NI|NP|CN|BG|AR|PG|IE|EE|UY|RU|TR|BO|QA|MP|GM|BB|AW|AN|ST|LA|AO|KN|BT|GT|TN|AS|TL|BS|LR|TO|PH|BY|MC|SR|PF|LB|EG|MU|VC|SC|GD|AL|HR|GG|ML|SN|PK|KY|EC|BN|MV|BA|CK|FI|MH|NZ|KZ|ES|KW|FK|GF|BD|PR|TC|MS|IS|TG|MG|WS|NL|GR|PA|SZ|FO|VI|TW|MW|JO|PL|GA|TT|DE|KP|CV|KR|DO|SG|CH|HK|BZ|RO|AD|IL|BL|DK|GB|TV|SL|BE|HT|MN|VE|IT|VG|HU|FR|CO|SA|CZ|UA|US|DZ|ZA|JM|SI|DM|PT|NA|GE|RE|KE|NC|GL|MQ|AE|PE|MZ|CA|MY|SB|KM|MT|ET|AM|FJ|VN|SM|JE|NO|OM|KH|SV|AU|RS|BR|LK|YE|BH|GY|SE|LU|SK|AG|MD|CM|MK|IN|CL|LT|BW|AT"
                            },
                            "division": {},
                            "postalCode": {}
                        }
                    }
                }
            }
        }
        else if ( requestPath === 'v2/book/shipment' ) {
            return {
                "properties": {
                    "origin": {
                        "type": "string",
                        "pattern": "DC1|DC2|DC3"
                    },
                    "businessCode": {
                        "type": "string",
                        "pattern": "MRP|NAP|JCH|TON"
                    },
                    "dimensionUnit": {
                        "type": "string",
                        "pattern": "IN|CM"
                    },
                    "items": {
                        "properties": {
                            "gtin": {},
                            "description": {},
                            "attributes": {
                                "type": "string",
                                "pattern": "JEWELLERY|NO_MID|HZMT_EQ|FISH_FARMED|HZMT_AERO|CITES|MIDDLEEAST|DO_NOT_EXP|SMN_BEAUTY|BIKE|NONHMB|HPANDSP|FISH_WILD|FIGURES|GOOSE|HZMT_LQ|FINE_JEWEL|LITHIUMBAT|HAZMAT|VHV|FISH_AND_WILDLIFE_NA|WILDLIFE|CH_ORIGIN"
                            },
                            "isDocument": {},
                            "hsCode": {}
                        }
                    },
                    "packages": {
                        "properties": {
                            "packageId": {
                                "type": "string"
                            },
                            "height": {
                                "type": "number"
                            },
                            "length": {
                                "type": "number"
                            },
                            "width": {
                                "type": "number"
                            },
                            "weight": {
                                "type": "number"
                            }
                        }
                    },
                    "weightUnit": {
                        "type": "string",
                        "pattern": "KGS|LBS"
                    },
                    "requestLogo": {
                        
                    },
                    "labelResolution": {
                        "type": "string",
                        "pattern": "203|300"
                    },
                    "orderId": {
                        "type": "string"
                    },
                    "releaseNumber": {
                        "type": "integer"
                    }
                }
            }
        }
        else {
            return {}
        }
    }
    
}

export default Schema