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
import ContractTerms from './ContractTerms';

/**
 * The Contract model module.
 * @module model/Contract
 * @version 2.0.0
 */
class Contract {
    /**
     * Constructs a new <code>Contract</code>.
     * 
     * @alias module:model/Contract
     * @param id {String} 
     * @param factionSymbol {String} The symbol of the faction that this contract is for.
     * @param type {module:model/Contract.TypeEnum} 
     * @param terms {module:model/ContractTerms} 
     * @param accepted {Boolean} Whether the contract has been accepted by the agent
     * @param fulfilled {Boolean} Whether the contract has been fulfilled
     * @param expiration {Date} The time at which the contract expires
     */
    constructor(id, factionSymbol, type, terms, accepted, fulfilled, expiration) { 
        
        Contract.initialize(this, id, factionSymbol, type, terms, accepted, fulfilled, expiration);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, factionSymbol, type, terms, accepted, fulfilled, expiration) { 
        obj['id'] = id;
        obj['factionSymbol'] = factionSymbol;
        obj['type'] = type;
        obj['terms'] = terms;
        obj['accepted'] = accepted || false;
        obj['fulfilled'] = fulfilled || false;
        obj['expiration'] = expiration;
    }

    /**
     * Constructs a <code>Contract</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Contract} obj Optional instance to populate.
     * @return {module:model/Contract} The populated <code>Contract</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Contract();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('factionSymbol')) {
                obj['factionSymbol'] = ApiClient.convertToType(data['factionSymbol'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('terms')) {
                obj['terms'] = ContractTerms.constructFromObject(data['terms']);
            }
            if (data.hasOwnProperty('accepted')) {
                obj['accepted'] = ApiClient.convertToType(data['accepted'], 'Boolean');
            }
            if (data.hasOwnProperty('fulfilled')) {
                obj['fulfilled'] = ApiClient.convertToType(data['fulfilled'], 'Boolean');
            }
            if (data.hasOwnProperty('expiration')) {
                obj['expiration'] = ApiClient.convertToType(data['expiration'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Contract</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Contract</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Contract.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['factionSymbol'] && !(typeof data['factionSymbol'] === 'string' || data['factionSymbol'] instanceof String)) {
            throw new Error("Expected the field `factionSymbol` to be a primitive type in the JSON string but got " + data['factionSymbol']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // validate the optional field `terms`
        if (data['terms']) { // data not null
          ContractTerms.validateJSON(data['terms']);
        }

        return true;
    }


}

Contract.RequiredProperties = ["id", "factionSymbol", "type", "terms", "accepted", "fulfilled", "expiration"];

/**
 * @member {String} id
 */
Contract.prototype['id'] = undefined;

/**
 * The symbol of the faction that this contract is for.
 * @member {String} factionSymbol
 */
Contract.prototype['factionSymbol'] = undefined;

/**
 * @member {module:model/Contract.TypeEnum} type
 */
Contract.prototype['type'] = undefined;

/**
 * @member {module:model/ContractTerms} terms
 */
Contract.prototype['terms'] = undefined;

/**
 * Whether the contract has been accepted by the agent
 * @member {Boolean} accepted
 * @default false
 */
Contract.prototype['accepted'] = false;

/**
 * Whether the contract has been fulfilled
 * @member {Boolean} fulfilled
 * @default false
 */
Contract.prototype['fulfilled'] = false;

/**
 * The time at which the contract expires
 * @member {Date} expiration
 */
Contract.prototype['expiration'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Contract['TypeEnum'] = {

    /**
     * value: "PROCUREMENT"
     * @const
     */
    "PROCUREMENT": "PROCUREMENT",

    /**
     * value: "TRANSPORT"
     * @const
     */
    "TRANSPORT": "TRANSPORT",

    /**
     * value: "SHUTTLE"
     * @const
     */
    "SHUTTLE": "SHUTTLE"
};



export default Contract;

