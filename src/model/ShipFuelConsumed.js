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
 * The ShipFuelConsumed model module.
 * @module model/ShipFuelConsumed
 * @version 2.0.0
 */
class ShipFuelConsumed {
    /**
     * Constructs a new <code>ShipFuelConsumed</code>.
     * @alias module:model/ShipFuelConsumed
     * @param amount {Number} The amount of fuel consumed by the most recent transit or action.
     * @param timestamp {Date} The time at which the fuel was consumed.
     */
    constructor(amount, timestamp) { 
        
        ShipFuelConsumed.initialize(this, amount, timestamp);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, timestamp) { 
        obj['amount'] = amount;
        obj['timestamp'] = timestamp;
    }

    /**
     * Constructs a <code>ShipFuelConsumed</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShipFuelConsumed} obj Optional instance to populate.
     * @return {module:model/ShipFuelConsumed} The populated <code>ShipFuelConsumed</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShipFuelConsumed();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('timestamp')) {
                obj['timestamp'] = ApiClient.convertToType(data['timestamp'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShipFuelConsumed</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShipFuelConsumed</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ShipFuelConsumed.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

ShipFuelConsumed.RequiredProperties = ["amount", "timestamp"];

/**
 * The amount of fuel consumed by the most recent transit or action.
 * @member {Number} amount
 */
ShipFuelConsumed.prototype['amount'] = undefined;

/**
 * The time at which the fuel was consumed.
 * @member {Date} timestamp
 */
ShipFuelConsumed.prototype['timestamp'] = undefined;






export default ShipFuelConsumed;
