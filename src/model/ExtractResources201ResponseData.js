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
import Cooldown from './Cooldown';
import Extraction from './Extraction';
import ShipCargo from './ShipCargo';

/**
 * The ExtractResources201ResponseData model module.
 * @module model/ExtractResources201ResponseData
 * @version 2.0.0
 */
class ExtractResources201ResponseData {
    /**
     * Constructs a new <code>ExtractResources201ResponseData</code>.
     * @alias module:model/ExtractResources201ResponseData
     * @param cooldown {module:model/Cooldown} 
     * @param extraction {module:model/Extraction} 
     * @param cargo {module:model/ShipCargo} 
     */
    constructor(cooldown, extraction, cargo) { 
        
        ExtractResources201ResponseData.initialize(this, cooldown, extraction, cargo);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cooldown, extraction, cargo) { 
        obj['cooldown'] = cooldown;
        obj['extraction'] = extraction;
        obj['cargo'] = cargo;
    }

    /**
     * Constructs a <code>ExtractResources201ResponseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExtractResources201ResponseData} obj Optional instance to populate.
     * @return {module:model/ExtractResources201ResponseData} The populated <code>ExtractResources201ResponseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExtractResources201ResponseData();

            if (data.hasOwnProperty('cooldown')) {
                obj['cooldown'] = Cooldown.constructFromObject(data['cooldown']);
            }
            if (data.hasOwnProperty('extraction')) {
                obj['extraction'] = Extraction.constructFromObject(data['extraction']);
            }
            if (data.hasOwnProperty('cargo')) {
                obj['cargo'] = ShipCargo.constructFromObject(data['cargo']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExtractResources201ResponseData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExtractResources201ResponseData</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExtractResources201ResponseData.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `cooldown`
        if (data['cooldown']) { // data not null
          Cooldown.validateJSON(data['cooldown']);
        }
        // validate the optional field `extraction`
        if (data['extraction']) { // data not null
          Extraction.validateJSON(data['extraction']);
        }
        // validate the optional field `cargo`
        if (data['cargo']) { // data not null
          ShipCargo.validateJSON(data['cargo']);
        }

        return true;
    }


}

ExtractResources201ResponseData.RequiredProperties = ["cooldown", "extraction", "cargo"];

/**
 * @member {module:model/Cooldown} cooldown
 */
ExtractResources201ResponseData.prototype['cooldown'] = undefined;

/**
 * @member {module:model/Extraction} extraction
 */
ExtractResources201ResponseData.prototype['extraction'] = undefined;

/**
 * @member {module:model/ShipCargo} cargo
 */
ExtractResources201ResponseData.prototype['cargo'] = undefined;






export default ExtractResources201ResponseData;

