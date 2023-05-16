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
 * The MarketTransaction model module.
 * @module model/MarketTransaction
 * @version 2.0.0
 */
class MarketTransaction {
    /**
     * Constructs a new <code>MarketTransaction</code>.
     * @alias module:model/MarketTransaction
     * @param waypointSymbol {String} The symbol of the waypoint where the transaction took place.
     * @param shipSymbol {String} The symbol of the ship that made the transaction.
     * @param tradeSymbol {String} The symbol of the trade good.
     * @param type {module:model/MarketTransaction.TypeEnum} The type of transaction.
     * @param units {Number} The number of units of the transaction.
     * @param pricePerUnit {Number} The price per unit of the transaction.
     * @param totalPrice {Number} The total price of the transaction.
     * @param timestamp {Date} The timestamp of the transaction.
     */
    constructor(waypointSymbol, shipSymbol, tradeSymbol, type, units, pricePerUnit, totalPrice, timestamp) { 
        
        MarketTransaction.initialize(this, waypointSymbol, shipSymbol, tradeSymbol, type, units, pricePerUnit, totalPrice, timestamp);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, waypointSymbol, shipSymbol, tradeSymbol, type, units, pricePerUnit, totalPrice, timestamp) { 
        obj['waypointSymbol'] = waypointSymbol;
        obj['shipSymbol'] = shipSymbol;
        obj['tradeSymbol'] = tradeSymbol;
        obj['type'] = type;
        obj['units'] = units;
        obj['pricePerUnit'] = pricePerUnit;
        obj['totalPrice'] = totalPrice;
        obj['timestamp'] = timestamp;
    }

    /**
     * Constructs a <code>MarketTransaction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MarketTransaction} obj Optional instance to populate.
     * @return {module:model/MarketTransaction} The populated <code>MarketTransaction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MarketTransaction();

            if (data.hasOwnProperty('waypointSymbol')) {
                obj['waypointSymbol'] = ApiClient.convertToType(data['waypointSymbol'], 'String');
            }
            if (data.hasOwnProperty('shipSymbol')) {
                obj['shipSymbol'] = ApiClient.convertToType(data['shipSymbol'], 'String');
            }
            if (data.hasOwnProperty('tradeSymbol')) {
                obj['tradeSymbol'] = ApiClient.convertToType(data['tradeSymbol'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('units')) {
                obj['units'] = ApiClient.convertToType(data['units'], 'Number');
            }
            if (data.hasOwnProperty('pricePerUnit')) {
                obj['pricePerUnit'] = ApiClient.convertToType(data['pricePerUnit'], 'Number');
            }
            if (data.hasOwnProperty('totalPrice')) {
                obj['totalPrice'] = ApiClient.convertToType(data['totalPrice'], 'Number');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MarketTransaction</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MarketTransaction</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of MarketTransaction.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['waypointSymbol'] && !(typeof data['waypointSymbol'] === 'string' || data['waypointSymbol'] instanceof String)) {
            throw new Error("Expected the field `waypointSymbol` to be a primitive type in the JSON string but got " + data['waypointSymbol']);
        }
        // ensure the json data is a string
        if (data['shipSymbol'] && !(typeof data['shipSymbol'] === 'string' || data['shipSymbol'] instanceof String)) {
            throw new Error("Expected the field `shipSymbol` to be a primitive type in the JSON string but got " + data['shipSymbol']);
        }
        // ensure the json data is a string
        if (data['tradeSymbol'] && !(typeof data['tradeSymbol'] === 'string' || data['tradeSymbol'] instanceof String)) {
            throw new Error("Expected the field `tradeSymbol` to be a primitive type in the JSON string but got " + data['tradeSymbol']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}

MarketTransaction.RequiredProperties = ["waypointSymbol", "shipSymbol", "tradeSymbol", "type", "units", "pricePerUnit", "totalPrice", "timestamp"];

/**
 * The symbol of the waypoint where the transaction took place.
 * @member {String} waypointSymbol
 */
MarketTransaction.prototype['waypointSymbol'] = undefined;

/**
 * The symbol of the ship that made the transaction.
 * @member {String} shipSymbol
 */
MarketTransaction.prototype['shipSymbol'] = undefined;

/**
 * The symbol of the trade good.
 * @member {String} tradeSymbol
 */
MarketTransaction.prototype['tradeSymbol'] = undefined;

/**
 * The type of transaction.
 * @member {module:model/MarketTransaction.TypeEnum} type
 */
MarketTransaction.prototype['type'] = undefined;

/**
 * The number of units of the transaction.
 * @member {Number} units
 */
MarketTransaction.prototype['units'] = undefined;

/**
 * The price per unit of the transaction.
 * @member {Number} pricePerUnit
 */
MarketTransaction.prototype['pricePerUnit'] = undefined;

/**
 * The total price of the transaction.
 * @member {Number} totalPrice
 */
MarketTransaction.prototype['totalPrice'] = undefined;

/**
 * The timestamp of the transaction.
 * @member {Date} timestamp
 */
MarketTransaction.prototype['timestamp'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
MarketTransaction['TypeEnum'] = {

    /**
     * value: "PURCHASE"
     * @const
     */
    "PURCHASE": "PURCHASE",

    /**
     * value: "SELL"
     * @const
     */
    "SELL": "SELL"
};



export default MarketTransaction;

