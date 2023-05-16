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
import ShipyardShip from './ShipyardShip';
import ShipyardShipTypesInner from './ShipyardShipTypesInner';
import ShipyardTransaction from './ShipyardTransaction';

/**
 * The Shipyard model module.
 * @module model/Shipyard
 * @version 2.0.0
 */
class Shipyard {
    /**
     * Constructs a new <code>Shipyard</code>.
     * 
     * @alias module:model/Shipyard
     * @param symbol {String} The symbol of the shipyard. The symbol is the same as the waypoint where the shipyard is located.
     * @param shipTypes {Array.<module:model/ShipyardShipTypesInner>} The list of ship types available for purchase at this shipyard.
     */
    constructor(symbol, shipTypes) { 
        
        Shipyard.initialize(this, symbol, shipTypes);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, symbol, shipTypes) { 
        obj['symbol'] = symbol;
        obj['shipTypes'] = shipTypes;
    }

    /**
     * Constructs a <code>Shipyard</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Shipyard} obj Optional instance to populate.
     * @return {module:model/Shipyard} The populated <code>Shipyard</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Shipyard();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('shipTypes')) {
                obj['shipTypes'] = ApiClient.convertToType(data['shipTypes'], [ShipyardShipTypesInner]);
            }
            if (data.hasOwnProperty('transactions')) {
                obj['transactions'] = ApiClient.convertToType(data['transactions'], [ShipyardTransaction]);
            }
            if (data.hasOwnProperty('ships')) {
                obj['ships'] = ApiClient.convertToType(data['ships'], [ShipyardShip]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Shipyard</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Shipyard</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Shipyard.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['symbol'] && !(typeof data['symbol'] === 'string' || data['symbol'] instanceof String)) {
            throw new Error("Expected the field `symbol` to be a primitive type in the JSON string but got " + data['symbol']);
        }
        if (data['shipTypes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['shipTypes'])) {
                throw new Error("Expected the field `shipTypes` to be an array in the JSON data but got " + data['shipTypes']);
            }
            // validate the optional field `shipTypes` (array)
            for (const item of data['shipTypes']) {
                ShipyardShipTypesInner.validateJSON(item);
            };
        }
        if (data['transactions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['transactions'])) {
                throw new Error("Expected the field `transactions` to be an array in the JSON data but got " + data['transactions']);
            }
            // validate the optional field `transactions` (array)
            for (const item of data['transactions']) {
                ShipyardTransaction.validateJSON(item);
            };
        }
        if (data['ships']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['ships'])) {
                throw new Error("Expected the field `ships` to be an array in the JSON data but got " + data['ships']);
            }
            // validate the optional field `ships` (array)
            for (const item of data['ships']) {
                ShipyardShip.validateJSON(item);
            };
        }

        return true;
    }


}

Shipyard.RequiredProperties = ["symbol", "shipTypes"];

/**
 * The symbol of the shipyard. The symbol is the same as the waypoint where the shipyard is located.
 * @member {String} symbol
 */
Shipyard.prototype['symbol'] = undefined;

/**
 * The list of ship types available for purchase at this shipyard.
 * @member {Array.<module:model/ShipyardShipTypesInner>} shipTypes
 */
Shipyard.prototype['shipTypes'] = undefined;

/**
 * The list of recent transactions at this shipyard.
 * @member {Array.<module:model/ShipyardTransaction>} transactions
 */
Shipyard.prototype['transactions'] = undefined;

/**
 * The ships that are currently available for purchase at the shipyard.
 * @member {Array.<module:model/ShipyardShip>} ships
 */
Shipyard.prototype['ships'] = undefined;






export default Shipyard;

