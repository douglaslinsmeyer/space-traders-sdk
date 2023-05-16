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
import Agent from './Agent';
import MarketTransaction from './MarketTransaction';
import ShipCargo from './ShipCargo';

/**
 * The SellCargo201ResponseData model module.
 * @module model/SellCargo201ResponseData
 * @version 2.0.0
 */
class SellCargo201ResponseData {
    /**
     * Constructs a new <code>SellCargo201ResponseData</code>.
     * @alias module:model/SellCargo201ResponseData
     * @param agent {module:model/Agent} 
     * @param cargo {module:model/ShipCargo} 
     * @param transaction {module:model/MarketTransaction} 
     */
    constructor(agent, cargo, transaction) { 
        
        SellCargo201ResponseData.initialize(this, agent, cargo, transaction);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, agent, cargo, transaction) { 
        obj['agent'] = agent;
        obj['cargo'] = cargo;
        obj['transaction'] = transaction;
    }

    /**
     * Constructs a <code>SellCargo201ResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SellCargo201ResponseData} obj Optional instance to populate.
     * @return {module:model/SellCargo201ResponseData} The populated <code>SellCargo201ResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SellCargo201ResponseData();

            if (data.hasOwnProperty('agent')) {
                obj['agent'] = Agent.constructFromObject(data['agent']);
            }
            if (data.hasOwnProperty('cargo')) {
                obj['cargo'] = ShipCargo.constructFromObject(data['cargo']);
            }
            if (data.hasOwnProperty('transaction')) {
                obj['transaction'] = MarketTransaction.constructFromObject(data['transaction']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SellCargo201ResponseData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SellCargo201ResponseData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SellCargo201ResponseData.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `agent`
        if (data['agent']) { // data not null
          Agent.validateJSON(data['agent']);
        }
        // validate the optional field `cargo`
        if (data['cargo']) { // data not null
          ShipCargo.validateJSON(data['cargo']);
        }
        // validate the optional field `transaction`
        if (data['transaction']) { // data not null
          MarketTransaction.validateJSON(data['transaction']);
        }

        return true;
    }


}

SellCargo201ResponseData.RequiredProperties = ["agent", "cargo", "transaction"];

/**
 * @member {module:model/Agent} agent
 */
SellCargo201ResponseData.prototype['agent'] = undefined;

/**
 * @member {module:model/ShipCargo} cargo
 */
SellCargo201ResponseData.prototype['cargo'] = undefined;

/**
 * @member {module:model/MarketTransaction} transaction
 */
SellCargo201ResponseData.prototype['transaction'] = undefined;






export default SellCargo201ResponseData;
