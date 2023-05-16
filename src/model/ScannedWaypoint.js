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
import Chart from './Chart';
import WaypointFaction from './WaypointFaction';
import WaypointOrbital from './WaypointOrbital';
import WaypointTrait from './WaypointTrait';
import WaypointType from './WaypointType';

/**
 * The ScannedWaypoint model module.
 * @module model/ScannedWaypoint
 * @version 2.0.0
 */
class ScannedWaypoint {
    /**
     * Constructs a new <code>ScannedWaypoint</code>.
     * A waypoint is a location that ships can travel to such as a Planet, Moon or Space Station.
     * @alias module:model/ScannedWaypoint
     * @param symbol {String} 
     * @param type {module:model/WaypointType} 
     * @param systemSymbol {String} 
     * @param x {Number} 
     * @param y {Number} 
     * @param orbitals {Array.<module:model/WaypointOrbital>} 
     * @param traits {Array.<module:model/WaypointTrait>} The traits of the waypoint.
     */
    constructor(symbol, type, systemSymbol, x, y, orbitals, traits) { 
        
        ScannedWaypoint.initialize(this, symbol, type, systemSymbol, x, y, orbitals, traits);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, symbol, type, systemSymbol, x, y, orbitals, traits) { 
        obj['symbol'] = symbol;
        obj['type'] = type;
        obj['systemSymbol'] = systemSymbol;
        obj['x'] = x;
        obj['y'] = y;
        obj['orbitals'] = orbitals;
        obj['traits'] = traits;
    }

    /**
     * Constructs a <code>ScannedWaypoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScannedWaypoint} obj Optional instance to populate.
     * @return {module:model/ScannedWaypoint} The populated <code>ScannedWaypoint</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ScannedWaypoint();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = WaypointType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('systemSymbol')) {
                obj['systemSymbol'] = ApiClient.convertToType(data['systemSymbol'], 'String');
            }
            if (data.hasOwnProperty('x')) {
                obj['x'] = ApiClient.convertToType(data['x'], 'Number');
            }
            if (data.hasOwnProperty('y')) {
                obj['y'] = ApiClient.convertToType(data['y'], 'Number');
            }
            if (data.hasOwnProperty('orbitals')) {
                obj['orbitals'] = ApiClient.convertToType(data['orbitals'], [WaypointOrbital]);
            }
            if (data.hasOwnProperty('faction')) {
                obj['faction'] = WaypointFaction.constructFromObject(data['faction']);
            }
            if (data.hasOwnProperty('traits')) {
                obj['traits'] = ApiClient.convertToType(data['traits'], [WaypointTrait]);
            }
            if (data.hasOwnProperty('chart')) {
                obj['chart'] = Chart.constructFromObject(data['chart']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ScannedWaypoint</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ScannedWaypoint</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ScannedWaypoint.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['symbol'] && !(typeof data['symbol'] === 'string' || data['symbol'] instanceof String)) {
            throw new Error("Expected the field `symbol` to be a primitive type in the JSON string but got " + data['symbol']);
        }
        // ensure the json data is a string
        if (data['systemSymbol'] && !(typeof data['systemSymbol'] === 'string' || data['systemSymbol'] instanceof String)) {
            throw new Error("Expected the field `systemSymbol` to be a primitive type in the JSON string but got " + data['systemSymbol']);
        }
        if (data['orbitals']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['orbitals'])) {
                throw new Error("Expected the field `orbitals` to be an array in the JSON data but got " + data['orbitals']);
            }
            // validate the optional field `orbitals` (array)
            for (const item of data['orbitals']) {
                WaypointOrbital.validateJSON(item);
            };
        }
        // validate the optional field `faction`
        if (data['faction']) { // data not null
          WaypointFaction.validateJSON(data['faction']);
        }
        if (data['traits']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['traits'])) {
                throw new Error("Expected the field `traits` to be an array in the JSON data but got " + data['traits']);
            }
            // validate the optional field `traits` (array)
            for (const item of data['traits']) {
                WaypointTrait.validateJSON(item);
            };
        }
        // validate the optional field `chart`
        if (data['chart']) { // data not null
          Chart.validateJSON(data['chart']);
        }

        return true;
    }


}

ScannedWaypoint.RequiredProperties = ["symbol", "type", "systemSymbol", "x", "y", "orbitals", "traits"];

/**
 * @member {String} symbol
 */
ScannedWaypoint.prototype['symbol'] = undefined;

/**
 * @member {module:model/WaypointType} type
 */
ScannedWaypoint.prototype['type'] = undefined;

/**
 * @member {String} systemSymbol
 */
ScannedWaypoint.prototype['systemSymbol'] = undefined;

/**
 * @member {Number} x
 */
ScannedWaypoint.prototype['x'] = undefined;

/**
 * @member {Number} y
 */
ScannedWaypoint.prototype['y'] = undefined;

/**
 * @member {Array.<module:model/WaypointOrbital>} orbitals
 */
ScannedWaypoint.prototype['orbitals'] = undefined;

/**
 * @member {module:model/WaypointFaction} faction
 */
ScannedWaypoint.prototype['faction'] = undefined;

/**
 * The traits of the waypoint.
 * @member {Array.<module:model/WaypointTrait>} traits
 */
ScannedWaypoint.prototype['traits'] = undefined;

/**
 * @member {module:model/Chart} chart
 */
ScannedWaypoint.prototype['chart'] = undefined;






export default ScannedWaypoint;

