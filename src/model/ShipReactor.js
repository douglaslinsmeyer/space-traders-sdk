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
import ShipRequirements from './ShipRequirements';

/**
 * The ShipReactor model module.
 * @module model/ShipReactor
 * @version 2.0.0
 */
class ShipReactor {
    /**
     * Constructs a new <code>ShipReactor</code>.
     * The reactor of the ship. The reactor is responsible for powering the ship&#39;s systems and weapons.
     * @alias module:model/ShipReactor
     * @param symbol {module:model/ShipReactor.SymbolEnum} 
     * @param name {String} 
     * @param description {String} 
     * @param powerOutput {Number} 
     * @param requirements {module:model/ShipRequirements} 
     */
    constructor(symbol, name, description, powerOutput, requirements) { 
        
        ShipReactor.initialize(this, symbol, name, description, powerOutput, requirements);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, symbol, name, description, powerOutput, requirements) { 
        obj['symbol'] = symbol;
        obj['name'] = name;
        obj['description'] = description;
        obj['powerOutput'] = powerOutput;
        obj['requirements'] = requirements;
    }

    /**
     * Constructs a <code>ShipReactor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShipReactor} obj Optional instance to populate.
     * @return {module:model/ShipReactor} The populated <code>ShipReactor</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ShipReactor();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('condition')) {
                obj['condition'] = ApiClient.convertToType(data['condition'], 'Number');
            }
            if (data.hasOwnProperty('powerOutput')) {
                obj['powerOutput'] = ApiClient.convertToType(data['powerOutput'], 'Number');
            }
            if (data.hasOwnProperty('requirements')) {
                obj['requirements'] = ShipRequirements.constructFromObject(data['requirements']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ShipReactor</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShipReactor</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ShipReactor.RequiredProperties) {
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
        // validate the optional field `requirements`
        if (data['requirements']) { // data not null
          ShipRequirements.validateJSON(data['requirements']);
        }

        return true;
    }


}

ShipReactor.RequiredProperties = ["symbol", "name", "description", "powerOutput", "requirements"];

/**
 * @member {module:model/ShipReactor.SymbolEnum} symbol
 */
ShipReactor.prototype['symbol'] = undefined;

/**
 * @member {String} name
 */
ShipReactor.prototype['name'] = undefined;

/**
 * @member {String} description
 */
ShipReactor.prototype['description'] = undefined;

/**
 * Condition is a range of 0 to 100 where 0 is completely worn out and 100 is brand new.
 * @member {Number} condition
 */
ShipReactor.prototype['condition'] = undefined;

/**
 * @member {Number} powerOutput
 */
ShipReactor.prototype['powerOutput'] = undefined;

/**
 * @member {module:model/ShipRequirements} requirements
 */
ShipReactor.prototype['requirements'] = undefined;





/**
 * Allowed values for the <code>symbol</code> property.
 * @enum {String}
 * @readonly
 */
ShipReactor['SymbolEnum'] = {

    /**
     * value: "REACTOR_SOLAR_I"
     * @const
     */
    "SOLAR_I": "REACTOR_SOLAR_I",

    /**
     * value: "REACTOR_FUSION_I"
     * @const
     */
    "FUSION_I": "REACTOR_FUSION_I",

    /**
     * value: "REACTOR_FISSION_I"
     * @const
     */
    "FISSION_I": "REACTOR_FISSION_I",

    /**
     * value: "REACTOR_CHEMICAL_I"
     * @const
     */
    "CHEMICAL_I": "REACTOR_CHEMICAL_I",

    /**
     * value: "REACTOR_ANTIMATTER_I"
     * @const
     */
    "ANTIMATTER_I": "REACTOR_ANTIMATTER_I"
};



export default ShipReactor;

