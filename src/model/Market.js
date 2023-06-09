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
import MarketTradeGood from './MarketTradeGood';
import MarketTransaction from './MarketTransaction';
import TradeGood from './TradeGood';

/**
 * The Market model module.
 * @module model/Market
 * @version 2.0.0
 */
class Market {
    /**
     * Constructs a new <code>Market</code>.
     * 
     * @alias module:model/Market
     * @param symbol {String} The symbol of the market. The symbol is the same as the waypoint where the market is located.
     * @param exports {Array.<module:model/TradeGood>} The list of goods that are exported from this market.
     * @param imports {Array.<module:model/TradeGood>} The list of goods that are sought as imports in this market.
     * @param exchange {Array.<module:model/TradeGood>} The list of goods that are bought and sold between agents at this market.
     */
    constructor(symbol, exports, imports, exchange) { 
        
        Market.initialize(this, symbol, exports, imports, exchange);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, symbol, exports, imports, exchange) { 
        obj['symbol'] = symbol;
        obj['exports'] = exports;
        obj['imports'] = imports;
        obj['exchange'] = exchange;
    }

    /**
     * Constructs a <code>Market</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Market} obj Optional instance to populate.
     * @return {module:model/Market} The populated <code>Market</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Market();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('exports')) {
                obj['exports'] = ApiClient.convertToType(data['exports'], [TradeGood]);
            }
            if (data.hasOwnProperty('imports')) {
                obj['imports'] = ApiClient.convertToType(data['imports'], [TradeGood]);
            }
            if (data.hasOwnProperty('exchange')) {
                obj['exchange'] = ApiClient.convertToType(data['exchange'], [TradeGood]);
            }
            if (data.hasOwnProperty('transactions')) {
                obj['transactions'] = ApiClient.convertToType(data['transactions'], [MarketTransaction]);
            }
            if (data.hasOwnProperty('tradeGoods')) {
                obj['tradeGoods'] = ApiClient.convertToType(data['tradeGoods'], [MarketTradeGood]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Market</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Market</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Market.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['symbol'] && !(typeof data['symbol'] === 'string' || data['symbol'] instanceof String)) {
            throw new Error("Expected the field `symbol` to be a primitive type in the JSON string but got " + data['symbol']);
        }
        if (data['exports']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['exports'])) {
                throw new Error("Expected the field `exports` to be an array in the JSON data but got " + data['exports']);
            }
            // validate the optional field `exports` (array)
            for (const item of data['exports']) {
                TradeGood.validateJSON(item);
            };
        }
        if (data['imports']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['imports'])) {
                throw new Error("Expected the field `imports` to be an array in the JSON data but got " + data['imports']);
            }
            // validate the optional field `imports` (array)
            for (const item of data['imports']) {
                TradeGood.validateJSON(item);
            };
        }
        if (data['exchange']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['exchange'])) {
                throw new Error("Expected the field `exchange` to be an array in the JSON data but got " + data['exchange']);
            }
            // validate the optional field `exchange` (array)
            for (const item of data['exchange']) {
                TradeGood.validateJSON(item);
            };
        }
        if (data['transactions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['transactions'])) {
                throw new Error("Expected the field `transactions` to be an array in the JSON data but got " + data['transactions']);
            }
            // validate the optional field `transactions` (array)
            for (const item of data['transactions']) {
                MarketTransaction.validateJSON(item);
            };
        }
        if (data['tradeGoods']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tradeGoods'])) {
                throw new Error("Expected the field `tradeGoods` to be an array in the JSON data but got " + data['tradeGoods']);
            }
            // validate the optional field `tradeGoods` (array)
            for (const item of data['tradeGoods']) {
                MarketTradeGood.validateJSON(item);
            };
        }

        return true;
    }


}

Market.RequiredProperties = ["symbol", "exports", "imports", "exchange"];

/**
 * The symbol of the market. The symbol is the same as the waypoint where the market is located.
 * @member {String} symbol
 */
Market.prototype['symbol'] = undefined;

/**
 * The list of goods that are exported from this market.
 * @member {Array.<module:model/TradeGood>} exports
 */
Market.prototype['exports'] = undefined;

/**
 * The list of goods that are sought as imports in this market.
 * @member {Array.<module:model/TradeGood>} imports
 */
Market.prototype['imports'] = undefined;

/**
 * The list of goods that are bought and sold between agents at this market.
 * @member {Array.<module:model/TradeGood>} exchange
 */
Market.prototype['exchange'] = undefined;

/**
 * The list of recent transactions at this market. Visible only when a ship is present at the market.
 * @member {Array.<module:model/MarketTransaction>} transactions
 */
Market.prototype['transactions'] = undefined;

/**
 * The list of goods that are traded at this market. Visible only when a ship is present at the market.
 * @member {Array.<module:model/MarketTradeGood>} tradeGoods
 */
Market.prototype['tradeGoods'] = undefined;






export default Market;

