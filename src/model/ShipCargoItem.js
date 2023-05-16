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
 * The ShipCargoItem model module.
 * @module model/ShipCargoItem
 * @version 2.0.0
 */
class ShipCargoItem {
    /**
     * Constructs a new <code>ShipCargoItem</code>.
     * The type of cargo item and the number of units.
     * @alias module:model/ShipCargoItem
     * @param symbol {String} The unique identifier of the cargo item type.
     * @param name {String} The name of the cargo item type.
     * @param description {String} The description of the cargo item type.
     * @param units {Number} The number of units of the cargo item.
     */
    constructor(symbol, name, description, units) { 
        
        ShipCargoItem.initialize(this, symbol, name, description, units);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, symbol, name, description, units) { 
        obj['symbol'] = symbol;
        obj['name'] = name;
        obj['description'] = description;
        obj['units'] = units;
    }

    /**
     * Constructs a <code>ShipCargoItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShipCargoItem} obj Optional instance to populate.
     * @return {module:model/ShipCargoItem} The populated <code>ShipCargoItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShipCargoItem();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('units')) {
                obj['units'] = ApiClient.convertToType(data['units'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShipCargoItem</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShipCargoItem</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ShipCargoItem.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['symbol'] && !(typeof data['symbol'] === 'string' || data['symbol'] instanceof String)) {
            throw new Error("Expected the field `symbol` to be a primitive type in the JSON string but got " + data['symbol']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }

        return true;
    }


}

ShipCargoItem.RequiredProperties = ["symbol", "name", "description", "units"];

/**
 * The unique identifier of the cargo item type.
 * @member {String} symbol
 */
ShipCargoItem.prototype['symbol'] = undefined;

/**
 * The name of the cargo item type.
 * @member {String} name
 */
ShipCargoItem.prototype['name'] = undefined;

/**
 * The description of the cargo item type.
 * @member {String} description
 */
ShipCargoItem.prototype['description'] = undefined;

/**
 * The number of units of the cargo item.
 * @member {Number} units
 */
ShipCargoItem.prototype['units'] = undefined;






export default ShipCargoItem;

