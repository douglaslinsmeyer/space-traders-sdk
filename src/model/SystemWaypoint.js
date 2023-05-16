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
import WaypointType from './WaypointType';

/**
 * The SystemWaypoint model module.
 * @module model/SystemWaypoint
 * @version 2.0.0
 */
class SystemWaypoint {
    /**
     * Constructs a new <code>SystemWaypoint</code>.
     * @alias module:model/SystemWaypoint
     * @param symbol {String} 
     * @param type {module:model/WaypointType} 
     * @param x {Number} 
     * @param y {Number} 
     */
    constructor(symbol, type, x, y) { 
        
        SystemWaypoint.initialize(this, symbol, type, x, y);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, symbol, type, x, y) { 
        obj['symbol'] = symbol;
        obj['type'] = type;
        obj['x'] = x;
        obj['y'] = y;
    }

    /**
     * Constructs a <code>SystemWaypoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SystemWaypoint} obj Optional instance to populate.
     * @return {module:model/SystemWaypoint} The populated <code>SystemWaypoint</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SystemWaypoint();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = WaypointType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('x')) {
                obj['x'] = ApiClient.convertToType(data['x'], 'Number');
            }
            if (data.hasOwnProperty('y')) {
                obj['y'] = ApiClient.convertToType(data['y'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SystemWaypoint</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SystemWaypoint</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SystemWaypoint.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['symbol'] && !(typeof data['symbol'] === 'string' || data['symbol'] instanceof String)) {
            throw new Error("Expected the field `symbol` to be a primitive type in the JSON string but got " + data['symbol']);
        }

        return true;
    }


}

SystemWaypoint.RequiredProperties = ["symbol", "type", "x", "y"];

/**
 * @member {String} symbol
 */
SystemWaypoint.prototype['symbol'] = undefined;

/**
 * @member {module:model/WaypointType} type
 */
SystemWaypoint.prototype['type'] = undefined;

/**
 * @member {Number} x
 */
SystemWaypoint.prototype['x'] = undefined;

/**
 * @member {Number} y
 */
SystemWaypoint.prototype['y'] = undefined;






export default SystemWaypoint;
