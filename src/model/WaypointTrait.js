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
 * The WaypointTrait model module.
 * @module model/WaypointTrait
 * @version 2.0.0
 */
class WaypointTrait {
    /**
     * Constructs a new <code>WaypointTrait</code>.
     * @alias module:model/WaypointTrait
     * @param symbol {module:model/WaypointTrait.SymbolEnum} The unique identifier of the trait.
     * @param name {String} The name of the trait.
     * @param description {String} A description of the trait.
     */
    constructor(symbol, name, description) { 
        
        WaypointTrait.initialize(this, symbol, name, description);
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
     * Constructs a <code>WaypointTrait</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WaypointTrait} obj Optional instance to populate.
     * @return {module:model/WaypointTrait} The populated <code>WaypointTrait</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WaypointTrait();

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
     * Validates the JSON data with respect to <code>WaypointTrait</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WaypointTrait</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WaypointTrait.RequiredProperties) {
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

WaypointTrait.RequiredProperties = ["symbol", "name", "description"];

/**
 * The unique identifier of the trait.
 * @member {module:model/WaypointTrait.SymbolEnum} symbol
 */
WaypointTrait.prototype['symbol'] = undefined;

/**
 * The name of the trait.
 * @member {String} name
 */
WaypointTrait.prototype['name'] = undefined;

/**
 * A description of the trait.
 * @member {String} description
 */
WaypointTrait.prototype['description'] = undefined;





/**
 * Allowed values for the <code>symbol</code> property.
 * @enum {String}
 * @readonly
 */
WaypointTrait['SymbolEnum'] = {

    /**
     * value: "UNCHARTED"
     * @const
     */
    "UNCHARTED": "UNCHARTED",

    /**
     * value: "MARKETPLACE"
     * @const
     */
    "MARKETPLACE": "MARKETPLACE",

    /**
     * value: "SHIPYARD"
     * @const
     */
    "SHIPYARD": "SHIPYARD",

    /**
     * value: "OUTPOST"
     * @const
     */
    "OUTPOST": "OUTPOST",

    /**
     * value: "SCATTERED_SETTLEMENTS"
     * @const
     */
    "SCATTERED_SETTLEMENTS": "SCATTERED_SETTLEMENTS",

    /**
     * value: "SPRAWLING_CITIES"
     * @const
     */
    "SPRAWLING_CITIES": "SPRAWLING_CITIES",

    /**
     * value: "MEGA_STRUCTURES"
     * @const
     */
    "MEGA_STRUCTURES": "MEGA_STRUCTURES",

    /**
     * value: "OVERCROWDED"
     * @const
     */
    "OVERCROWDED": "OVERCROWDED",

    /**
     * value: "HIGH_TECH"
     * @const
     */
    "HIGH_TECH": "HIGH_TECH",

    /**
     * value: "CORRUPT"
     * @const
     */
    "CORRUPT": "CORRUPT",

    /**
     * value: "BUREAUCRATIC"
     * @const
     */
    "BUREAUCRATIC": "BUREAUCRATIC",

    /**
     * value: "TRADING_HUB"
     * @const
     */
    "TRADING_HUB": "TRADING_HUB",

    /**
     * value: "INDUSTRIAL"
     * @const
     */
    "INDUSTRIAL": "INDUSTRIAL",

    /**
     * value: "BLACK_MARKET"
     * @const
     */
    "BLACK_MARKET": "BLACK_MARKET",

    /**
     * value: "RESEARCH_FACILITY"
     * @const
     */
    "RESEARCH_FACILITY": "RESEARCH_FACILITY",

    /**
     * value: "MILITARY_BASE"
     * @const
     */
    "MILITARY_BASE": "MILITARY_BASE",

    /**
     * value: "SURVEILLANCE_OUTPOST"
     * @const
     */
    "SURVEILLANCE_OUTPOST": "SURVEILLANCE_OUTPOST",

    /**
     * value: "EXPLORATION_OUTPOST"
     * @const
     */
    "EXPLORATION_OUTPOST": "EXPLORATION_OUTPOST",

    /**
     * value: "MINERAL_DEPOSITS"
     * @const
     */
    "MINERAL_DEPOSITS": "MINERAL_DEPOSITS",

    /**
     * value: "COMMON_METAL_DEPOSITS"
     * @const
     */
    "COMMON_METAL_DEPOSITS": "COMMON_METAL_DEPOSITS",

    /**
     * value: "PRECIOUS_METAL_DEPOSITS"
     * @const
     */
    "PRECIOUS_METAL_DEPOSITS": "PRECIOUS_METAL_DEPOSITS",

    /**
     * value: "RARE_METAL_DEPOSITS"
     * @const
     */
    "RARE_METAL_DEPOSITS": "RARE_METAL_DEPOSITS",

    /**
     * value: "METHANE_POOLS"
     * @const
     */
    "METHANE_POOLS": "METHANE_POOLS",

    /**
     * value: "ICE_CRYSTALS"
     * @const
     */
    "ICE_CRYSTALS": "ICE_CRYSTALS",

    /**
     * value: "EXPLOSIVE_GASES"
     * @const
     */
    "EXPLOSIVE_GASES": "EXPLOSIVE_GASES",

    /**
     * value: "STRONG_MAGNETOSPHERE"
     * @const
     */
    "STRONG_MAGNETOSPHERE": "STRONG_MAGNETOSPHERE",

    /**
     * value: "VIBRANT_AURORAS"
     * @const
     */
    "VIBRANT_AURORAS": "VIBRANT_AURORAS",

    /**
     * value: "SALT_FLATS"
     * @const
     */
    "SALT_FLATS": "SALT_FLATS",

    /**
     * value: "CANYONS"
     * @const
     */
    "CANYONS": "CANYONS",

    /**
     * value: "PERPETUAL_DAYLIGHT"
     * @const
     */
    "PERPETUAL_DAYLIGHT": "PERPETUAL_DAYLIGHT",

    /**
     * value: "PERPETUAL_OVERCAST"
     * @const
     */
    "PERPETUAL_OVERCAST": "PERPETUAL_OVERCAST",

    /**
     * value: "DRY_SEABEDS"
     * @const
     */
    "DRY_SEABEDS": "DRY_SEABEDS",

    /**
     * value: "MAGMA_SEAS"
     * @const
     */
    "MAGMA_SEAS": "MAGMA_SEAS",

    /**
     * value: "SUPERVOLCANOES"
     * @const
     */
    "SUPERVOLCANOES": "SUPERVOLCANOES",

    /**
     * value: "ASH_CLOUDS"
     * @const
     */
    "ASH_CLOUDS": "ASH_CLOUDS",

    /**
     * value: "VAST_RUINS"
     * @const
     */
    "VAST_RUINS": "VAST_RUINS",

    /**
     * value: "MUTATED_FLORA"
     * @const
     */
    "MUTATED_FLORA": "MUTATED_FLORA",

    /**
     * value: "TERRAFORMED"
     * @const
     */
    "TERRAFORMED": "TERRAFORMED",

    /**
     * value: "EXTREME_TEMPERATURES"
     * @const
     */
    "EXTREME_TEMPERATURES": "EXTREME_TEMPERATURES",

    /**
     * value: "EXTREME_PRESSURE"
     * @const
     */
    "EXTREME_PRESSURE": "EXTREME_PRESSURE",

    /**
     * value: "DIVERSE_LIFE"
     * @const
     */
    "DIVERSE_LIFE": "DIVERSE_LIFE",

    /**
     * value: "SCARCE_LIFE"
     * @const
     */
    "SCARCE_LIFE": "SCARCE_LIFE",

    /**
     * value: "FOSSILS"
     * @const
     */
    "FOSSILS": "FOSSILS",

    /**
     * value: "WEAK_GRAVITY"
     * @const
     */
    "WEAK_GRAVITY": "WEAK_GRAVITY",

    /**
     * value: "STRONG_GRAVITY"
     * @const
     */
    "STRONG_GRAVITY": "STRONG_GRAVITY",

    /**
     * value: "CRUSHING_GRAVITY"
     * @const
     */
    "CRUSHING_GRAVITY": "CRUSHING_GRAVITY",

    /**
     * value: "TOXIC_ATMOSPHERE"
     * @const
     */
    "TOXIC_ATMOSPHERE": "TOXIC_ATMOSPHERE",

    /**
     * value: "CORROSIVE_ATMOSPHERE"
     * @const
     */
    "CORROSIVE_ATMOSPHERE": "CORROSIVE_ATMOSPHERE",

    /**
     * value: "BREATHABLE_ATMOSPHERE"
     * @const
     */
    "BREATHABLE_ATMOSPHERE": "BREATHABLE_ATMOSPHERE",

    /**
     * value: "JOVIAN"
     * @const
     */
    "JOVIAN": "JOVIAN",

    /**
     * value: "ROCKY"
     * @const
     */
    "ROCKY": "ROCKY",

    /**
     * value: "VOLCANIC"
     * @const
     */
    "VOLCANIC": "VOLCANIC",

    /**
     * value: "FROZEN"
     * @const
     */
    "FROZEN": "FROZEN",

    /**
     * value: "SWAMP"
     * @const
     */
    "SWAMP": "SWAMP",

    /**
     * value: "BARREN"
     * @const
     */
    "BARREN": "BARREN",

    /**
     * value: "TEMPERATE"
     * @const
     */
    "TEMPERATE": "TEMPERATE",

    /**
     * value: "JUNGLE"
     * @const
     */
    "JUNGLE": "JUNGLE",

    /**
     * value: "OCEAN"
     * @const
     */
    "OCEAN": "OCEAN",

    /**
     * value: "STRIPPED"
     * @const
     */
    "STRIPPED": "STRIPPED"
};



export default WaypointTrait;

