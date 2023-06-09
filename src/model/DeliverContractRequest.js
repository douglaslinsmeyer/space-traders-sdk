/**
 * SpaceTraders API
 * SpaceTraders is an open-universe game and learning platform that offers a set of HTTP endpoints to control a fleet of ships and explore a multiplayer universe.  The API is documented using [OpenAPI](https://github.com/SpaceTradersAPI/api-docs). You can send your first request right here in your browser to check the status of the game server.  ```json http {   \"method\": \"GET\",   \"url\": \"https://api.spacetraders.io/v2\", } ```  Unlike a traditional game, SpaceTraders does not have a first-party client or app to play the game. Instead, you can use the API to build your own client, write a script to automate your ships, or try an app built by the community.  We have a [Discord channel](https://discord.com/invite/jh6zurdWk5) where you can share your projects, ask questions, and get help from other players.   
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: joel@spacetraders.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DeliverContractRequest model module.
 * @module model/DeliverContractRequest
 * @version 2.0.0
 */
class DeliverContractRequest {
    /**
     * Constructs a new <code>DeliverContractRequest</code>.
     * @alias module:model/DeliverContractRequest
     * @param shipSymbol {String} 
     * @param tradeSymbol {String} 
     * @param units {Number} 
     */
    constructor(shipSymbol, tradeSymbol, units) { 
        
        DeliverContractRequest.initialize(this, shipSymbol, tradeSymbol, units);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, shipSymbol, tradeSymbol, units) { 
        obj['shipSymbol'] = shipSymbol;
        obj['tradeSymbol'] = tradeSymbol;
        obj['units'] = units;
    }

    /**
     * Constructs a <code>DeliverContractRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeliverContractRequest} obj Optional instance to populate.
     * @return {module:model/DeliverContractRequest} The populated <code>DeliverContractRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeliverContractRequest();

            if (data.hasOwnProperty('shipSymbol')) {
                obj['shipSymbol'] = ApiClient.convertToType(data['shipSymbol'], 'String');
            }
            if (data.hasOwnProperty('tradeSymbol')) {
                obj['tradeSymbol'] = ApiClient.convertToType(data['tradeSymbol'], 'String');
            }
            if (data.hasOwnProperty('units')) {
                obj['units'] = ApiClient.convertToType(data['units'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeliverContractRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeliverContractRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeliverContractRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['shipSymbol'] && !(typeof data['shipSymbol'] === 'string' || data['shipSymbol'] instanceof String)) {
            throw new Error("Expected the field `shipSymbol` to be a primitive type in the JSON string but got " + data['shipSymbol']);
        }
        // ensure the json data is a string
        if (data['tradeSymbol'] && !(typeof data['tradeSymbol'] === 'string' || data['tradeSymbol'] instanceof String)) {
            throw new Error("Expected the field `tradeSymbol` to be a primitive type in the JSON string but got " + data['tradeSymbol']);
        }

        return true;
    }


}

DeliverContractRequest.RequiredProperties = ["shipSymbol", "tradeSymbol", "units"];

/**
 * @member {String} shipSymbol
 */
DeliverContractRequest.prototype['shipSymbol'] = undefined;

/**
 * @member {String} tradeSymbol
 */
DeliverContractRequest.prototype['tradeSymbol'] = undefined;

/**
 * @member {Number} units
 */
DeliverContractRequest.prototype['units'] = undefined;






export default DeliverContractRequest;

