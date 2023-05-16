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
import PurchaseShip201ResponseData from './PurchaseShip201ResponseData';

/**
 * The PurchaseShip201Response model module.
 * @module model/PurchaseShip201Response
 * @version 2.0.0
 */
class PurchaseShip201Response {
    /**
     * Constructs a new <code>PurchaseShip201Response</code>.
     * 
     * @alias module:model/PurchaseShip201Response
     * @param data {module:model/PurchaseShip201ResponseData} 
     */
    constructor(data) { 
        
        PurchaseShip201Response.initialize(this, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data) { 
        obj['data'] = data;
    }

    /**
     * Constructs a <code>PurchaseShip201Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PurchaseShip201Response} obj Optional instance to populate.
     * @return {module:model/PurchaseShip201Response} The populated <code>PurchaseShip201Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PurchaseShip201Response();

            if (data.hasOwnProperty('data')) {
                obj['data'] = PurchaseShip201ResponseData.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PurchaseShip201Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PurchaseShip201Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PurchaseShip201Response.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `data`
        if (data['data']) { // data not null
          PurchaseShip201ResponseData.validateJSON(data['data']);
        }

        return true;
    }


}

PurchaseShip201Response.RequiredProperties = ["data"];

/**
 * @member {module:model/PurchaseShip201ResponseData} data
 */
PurchaseShip201Response.prototype['data'] = undefined;






export default PurchaseShip201Response;

