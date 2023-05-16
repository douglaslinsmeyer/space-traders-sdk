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


import ApiClient from "../ApiClient";
import GetFaction200Response from '../model/GetFaction200Response';
import GetFactions200Response from '../model/GetFactions200Response';

/**
* Factions service.
* @module api/FactionsApi
* @version 2.0.0
*/
export default class FactionsApi {

    /**
    * Constructs a new FactionsApi. 
    * @alias module:api/FactionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getFaction operation.
     * @callback module:api/FactionsApi~getFactionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetFaction200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Faction
     * View the details of a faction.
     * @param {String} factionSymbol The faction symbol
     * @param {module:api/FactionsApi~getFactionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetFaction200Response}
     */
    getFaction(factionSymbol, callback) {
      let postBody = null;
      // verify the required parameter 'factionSymbol' is set
      if (factionSymbol === undefined || factionSymbol === null) {
        throw new Error("Missing the required parameter 'factionSymbol' when calling getFaction");
      }

      let pathParams = {
        'factionSymbol': factionSymbol
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AgentToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetFaction200Response;
      return this.apiClient.callApi(
        '/factions/{factionSymbol}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFactions operation.
     * @callback module:api/FactionsApi~getFactionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetFactions200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Factions
     * List all discovered factions in the game.
     * @param {Object} opts Optional parameters
     * @param {Number} [page] What entry offset to request
     * @param {Number} [limit] How many entries to return per page
     * @param {module:api/FactionsApi~getFactionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetFactions200Response}
     */
    getFactions(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AgentToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetFactions200Response;
      return this.apiClient.callApi(
        '/factions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}