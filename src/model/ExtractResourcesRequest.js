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
import Survey from './Survey';

/**
 * The ExtractResourcesRequest model module.
 * @module model/ExtractResourcesRequest
 * @version 2.0.0
 */
class ExtractResourcesRequest {
    /**
     * Constructs a new <code>ExtractResourcesRequest</code>.
     * @alias module:model/ExtractResourcesRequest
     */
    constructor() { 
        
        ExtractResourcesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExtractResourcesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExtractResourcesRequest} obj Optional instance to populate.
     * @return {module:model/ExtractResourcesRequest} The populated <code>ExtractResourcesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExtractResourcesRequest();

            if (data.hasOwnProperty('survey')) {
                obj['survey'] = Survey.constructFromObject(data['survey']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExtractResourcesRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExtractResourcesRequest</code>.
     */
    static validateJSON(data) {
        // validate the optional field `survey`
        if (data['survey']) { // data not null
          Survey.validateJSON(data['survey']);
        }

        return true;
    }


}



/**
 * @member {module:model/Survey} survey
 */
ExtractResourcesRequest.prototype['survey'] = undefined;






export default ExtractResourcesRequest;

