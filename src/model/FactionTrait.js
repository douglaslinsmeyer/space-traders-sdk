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

/**
 * The FactionTrait model module.
 * @module model/FactionTrait
 * @version 2.0.0
 */
class FactionTrait {
    /**
     * Constructs a new <code>FactionTrait</code>.
     * @alias module:model/FactionTrait
     * @param symbol {module:model/FactionTrait.SymbolEnum} The unique identifier of the trait.
     * @param name {String} The name of the trait.
     * @param description {String} A description of the trait.
     */
    constructor(symbol, name, description) { 
        
        FactionTrait.initialize(this, symbol, name, description);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, symbol, name, description) { 
        obj['symbol'] = symbol;
        obj['name'] = name;
        obj['description'] = description;
    }

    /**
     * Constructs a <code>FactionTrait</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FactionTrait} obj Optional instance to populate.
     * @return {module:model/FactionTrait} The populated <code>FactionTrait</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FactionTrait();

            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FactionTrait</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FactionTrait</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of FactionTrait.RequiredProperties) {
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

        return true;
    }


}

FactionTrait.RequiredProperties = ["symbol", "name", "description"];

/**
 * The unique identifier of the trait.
 * @member {module:model/FactionTrait.SymbolEnum} symbol
 */
FactionTrait.prototype['symbol'] = undefined;

/**
 * The name of the trait.
 * @member {String} name
 */
FactionTrait.prototype['name'] = undefined;

/**
 * A description of the trait.
 * @member {String} description
 */
FactionTrait.prototype['description'] = undefined;





/**
 * Allowed values for the <code>symbol</code> property.
 * @enum {String}
 * @readonly
 */
FactionTrait['SymbolEnum'] = {

    /**
     * value: "BUREAUCRATIC"
     * @const
     */
    "BUREAUCRATIC": "BUREAUCRATIC",

    /**
     * value: "SECRETIVE"
     * @const
     */
    "SECRETIVE": "SECRETIVE",

    /**
     * value: "CAPITALISTIC"
     * @const
     */
    "CAPITALISTIC": "CAPITALISTIC",

    /**
     * value: "INDUSTRIOUS"
     * @const
     */
    "INDUSTRIOUS": "INDUSTRIOUS",

    /**
     * value: "PEACEFUL"
     * @const
     */
    "PEACEFUL": "PEACEFUL",

    /**
     * value: "DISTRUSTFUL"
     * @const
     */
    "DISTRUSTFUL": "DISTRUSTFUL",

    /**
     * value: "WELCOMING"
     * @const
     */
    "WELCOMING": "WELCOMING",

    /**
     * value: "SMUGGLERS"
     * @const
     */
    "SMUGGLERS": "SMUGGLERS",

    /**
     * value: "SCAVENGERS"
     * @const
     */
    "SCAVENGERS": "SCAVENGERS",

    /**
     * value: "REBELLIOUS"
     * @const
     */
    "REBELLIOUS": "REBELLIOUS",

    /**
     * value: "EXILES"
     * @const
     */
    "EXILES": "EXILES",

    /**
     * value: "PIRATES"
     * @const
     */
    "PIRATES": "PIRATES",

    /**
     * value: "RAIDERS"
     * @const
     */
    "RAIDERS": "RAIDERS",

    /**
     * value: "CLAN"
     * @const
     */
    "CLAN": "CLAN",

    /**
     * value: "GUILD"
     * @const
     */
    "GUILD": "GUILD",

    /**
     * value: "DOMINION"
     * @const
     */
    "DOMINION": "DOMINION",

    /**
     * value: "FRINGE"
     * @const
     */
    "FRINGE": "FRINGE",

    /**
     * value: "FORSAKEN"
     * @const
     */
    "FORSAKEN": "FORSAKEN",

    /**
     * value: "ISOLATED"
     * @const
     */
    "ISOLATED": "ISOLATED",

    /**
     * value: "LOCALIZED"
     * @const
     */
    "LOCALIZED": "LOCALIZED",

    /**
     * value: "ESTABLISHED"
     * @const
     */
    "ESTABLISHED": "ESTABLISHED",

    /**
     * value: "NOTABLE"
     * @const
     */
    "NOTABLE": "NOTABLE",

    /**
     * value: "DOMINANT"
     * @const
     */
    "DOMINANT": "DOMINANT",

    /**
     * value: "INESCAPABLE"
     * @const
     */
    "INESCAPABLE": "INESCAPABLE",

    /**
     * value: "INNOVATIVE"
     * @const
     */
    "INNOVATIVE": "INNOVATIVE",

    /**
     * value: "BOLD"
     * @const
     */
    "BOLD": "BOLD",

    /**
     * value: "VISIONARY"
     * @const
     */
    "VISIONARY": "VISIONARY",

    /**
     * value: "CURIOUS"
     * @const
     */
    "CURIOUS": "CURIOUS",

    /**
     * value: "DARING"
     * @const
     */
    "DARING": "DARING",

    /**
     * value: "EXPLORATORY"
     * @const
     */
    "EXPLORATORY": "EXPLORATORY",

    /**
     * value: "RESOURCEFUL"
     * @const
     */
    "RESOURCEFUL": "RESOURCEFUL",

    /**
     * value: "FLEXIBLE"
     * @const
     */
    "FLEXIBLE": "FLEXIBLE",

    /**
     * value: "COOPERATIVE"
     * @const
     */
    "COOPERATIVE": "COOPERATIVE",

    /**
     * value: "UNITED"
     * @const
     */
    "UNITED": "UNITED",

    /**
     * value: "STRATEGIC"
     * @const
     */
    "STRATEGIC": "STRATEGIC",

    /**
     * value: "INTELLIGENT"
     * @const
     */
    "INTELLIGENT": "INTELLIGENT",

    /**
     * value: "RESEARCH_FOCUSED"
     * @const
     */
    "RESEARCH_FOCUSED": "RESEARCH_FOCUSED",

    /**
     * value: "COLLABORATIVE"
     * @const
     */
    "COLLABORATIVE": "COLLABORATIVE",

    /**
     * value: "PROGRESSIVE"
     * @const
     */
    "PROGRESSIVE": "PROGRESSIVE",

    /**
     * value: "MILITARISTIC"
     * @const
     */
    "MILITARISTIC": "MILITARISTIC",

    /**
     * value: "TECHNOLOGICALLY_ADVANCED"
     * @const
     */
    "TECHNOLOGICALLY_ADVANCED": "TECHNOLOGICALLY_ADVANCED",

    /**
     * value: "AGGRESSIVE"
     * @const
     */
    "AGGRESSIVE": "AGGRESSIVE",

    /**
     * value: "IMPERIALISTIC"
     * @const
     */
    "IMPERIALISTIC": "IMPERIALISTIC",

    /**
     * value: "TREASURE_HUNTERS"
     * @const
     */
    "TREASURE_HUNTERS": "TREASURE_HUNTERS",

    /**
     * value: "DEXTEROUS"
     * @const
     */
    "DEXTEROUS": "DEXTEROUS",

    /**
     * value: "UNPREDICTABLE"
     * @const
     */
    "UNPREDICTABLE": "UNPREDICTABLE",

    /**
     * value: "BRUTAL"
     * @const
     */
    "BRUTAL": "BRUTAL",

    /**
     * value: "FLEETING"
     * @const
     */
    "FLEETING": "FLEETING",

    /**
     * value: "ADAPTABLE"
     * @const
     */
    "ADAPTABLE": "ADAPTABLE",

    /**
     * value: "SELF_SUFFICIENT"
     * @const
     */
    "SELF_SUFFICIENT": "SELF_SUFFICIENT",

    /**
     * value: "DEFENSIVE"
     * @const
     */
    "DEFENSIVE": "DEFENSIVE",

    /**
     * value: "PROUD"
     * @const
     */
    "PROUD": "PROUD",

    /**
     * value: "DIVERSE"
     * @const
     */
    "DIVERSE": "DIVERSE",

    /**
     * value: "INDEPENDENT"
     * @const
     */
    "INDEPENDENT": "INDEPENDENT",

    /**
     * value: "SELF_INTERESTED"
     * @const
     */
    "SELF_INTERESTED": "SELF_INTERESTED",

    /**
     * value: "FRAGMENTED"
     * @const
     */
    "FRAGMENTED": "FRAGMENTED",

    /**
     * value: "COMMERCIAL"
     * @const
     */
    "COMMERCIAL": "COMMERCIAL",

    /**
     * value: "FREE_MARKETS"
     * @const
     */
    "FREE_MARKETS": "FREE_MARKETS",

    /**
     * value: "ENTREPRENEURIAL"
     * @const
     */
    "ENTREPRENEURIAL": "ENTREPRENEURIAL"
};



export default FactionTrait;

