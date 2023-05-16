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
import Ship from './Ship';
import ShipyardTransaction from './ShipyardTransaction';

/**
 * The PurchaseShip201ResponseData model module.
 * @module model/PurchaseShip201ResponseData
 * @version 2.0.0
 */
class PurchaseShip201ResponseData {
    /**
     * Constructs a new <code>PurchaseShip201ResponseData</code>.
     * @alias module:model/PurchaseShip201ResponseData
     * @param agent {module:model/Agent} 
     * @param ship {module:model/Ship} 
     * @param transaction {module:model/ShipyardTransaction} 
     */
    constructor(agent, ship, transaction) { 
        
        PurchaseShip201ResponseData.initialize(this, agent, ship, transaction);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, agent, ship, transaction) { 
        obj['agent'] = agent;
        obj['ship'] = ship;
        obj['transaction'] = transaction;
    }

    /**
     * Constructs a <code>PurchaseShip201ResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PurchaseShip201ResponseData} obj Optional instance to populate.
     * @return {module:model/PurchaseShip201ResponseData} The populated <code>PurchaseShip201ResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PurchaseShip201ResponseData();

            if (data.hasOwnProperty('agent')) {
                obj['agent'] = Agent.constructFromObject(data['agent']);
            }
            if (data.hasOwnProperty('ship')) {
                obj['ship'] = Ship.constructFromObject(data['ship']);
            }
            if (data.hasOwnProperty('transaction')) {
                obj['transaction'] = ShipyardTransaction.constructFromObject(data['transaction']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PurchaseShip201ResponseData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PurchaseShip201ResponseData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PurchaseShip201ResponseData.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `agent`
        if (data['agent']) { // data not null
          Agent.validateJSON(data['agent']);
        }
        // validate the optional field `ship`
        if (data['ship']) { // data not null
          Ship.validateJSON(data['ship']);
        }
        // validate the optional field `transaction`
        if (data['transaction']) { // data not null
          ShipyardTransaction.validateJSON(data['transaction']);
        }

        return true;
    }


}

PurchaseShip201ResponseData.RequiredProperties = ["agent", "ship", "transaction"];

/**
 * @member {module:model/Agent} agent
 */
PurchaseShip201ResponseData.prototype['agent'] = undefined;

/**
 * @member {module:model/Ship} ship
 */
PurchaseShip201ResponseData.prototype['ship'] = undefined;

/**
 * @member {module:model/ShipyardTransaction} transaction
 */
PurchaseShip201ResponseData.prototype['transaction'] = undefined;






export default PurchaseShip201ResponseData;
