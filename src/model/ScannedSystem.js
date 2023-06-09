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
import SystemType from './SystemType';

/**
 * The ScannedSystem model module.
 * @module model/ScannedSystem
 * @version 2.0.0
 */
class ScannedSystem {
    /**
     * Constructs a new <code>ScannedSystem</code>.
     * 
     * @alias module:model/ScannedSystem
     * @param symbol {String} 
     * @param sectorSymbol {String} 
     * @param type {module:model/SystemType} 
     * @param x {Number} 
     * @param y {Number} 
     * @param distance {Number} 
     */
    constructor(symbol, sectorSymbol, type, x, y, distance) { 
        
        ScannedSystem.initialize(this, symbol, sectorSymbol, type, x, y, distance);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, symbol, sectorSymbol, type, x, y, distance) { 
        obj['symbol'] = symbol;
        obj['sectorSymbol'] = sectorSymbol;
        obj['type'] = type;
        obj['x'] = x;
        obj['y'] = y;
        obj['distance'] = distance;
    }

    /**
     * Constructs a <code>ScannedSystem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScannedSystem} obj Optional instance to populate.
     * @return {module:model/ScannedSystem} The populated <code>ScannedSystem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScannedSystem();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('sectorSymbol')) {
                obj['sectorSymbol'] = ApiClient.convertToType(data['sectorSymbol'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = SystemType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('x')) {
                obj['x'] = ApiClient.convertToType(data['x'], 'Number');
            }
            if (data.hasOwnProperty('y')) {
                obj['y'] = ApiClient.convertToType(data['y'], 'Number');
            }
            if (data.hasOwnProperty('distance')) {
                obj['distance'] = ApiClient.convertToType(data['distance'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ScannedSystem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ScannedSystem</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ScannedSystem.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['symbol'] && !(typeof data['symbol'] === 'string' || data['symbol'] instanceof String)) {
            throw new Error("Expected the field `symbol` to be a primitive type in the JSON string but got " + data['symbol']);
        }
        // ensure the json data is a string
        if (data['sectorSymbol'] && !(typeof data['sectorSymbol'] === 'string' || data['sectorSymbol'] instanceof String)) {
            throw new Error("Expected the field `sectorSymbol` to be a primitive type in the JSON string but got " + data['sectorSymbol']);
        }

        return true;
    }


}

ScannedSystem.RequiredProperties = ["symbol", "sectorSymbol", "type", "x", "y", "distance"];

/**
 * @member {String} symbol
 */
ScannedSystem.prototype['symbol'] = undefined;

/**
 * @member {String} sectorSymbol
 */
ScannedSystem.prototype['sectorSymbol'] = undefined;

/**
 * @member {module:model/SystemType} type
 */
ScannedSystem.prototype['type'] = undefined;

/**
 * @member {Number} x
 */
ScannedSystem.prototype['x'] = undefined;

/**
 * @member {Number} y
 */
ScannedSystem.prototype['y'] = undefined;

/**
 * @member {Number} distance
 */
ScannedSystem.prototype['distance'] = undefined;






export default ScannedSystem;

