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
import GetMyAgent200Response from '../model/GetMyAgent200Response';

/**
* Agents service.
* @module api/AgentsApi
* @version 2.0.0
*/
export default class AgentsApi {

    /**
    * Constructs a new AgentsApi. 
    * @alias module:api/AgentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getMyAgent operation.
     * @callback module:api/AgentsApi~getMyAgentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetMyAgent200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * My Agent Details
     * Fetch your agent's details.
     * @param {module:api/AgentsApi~getMyAgentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetMyAgent200Response}
     */
    getMyAgent(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = GetMyAgent200Response;
      return this.apiClient.callApi(
        '/my/agent', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}