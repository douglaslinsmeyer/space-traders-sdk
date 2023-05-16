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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SpaceTradersApi);
  }
}(this, function(expect, SpaceTradersApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SpaceTradersApi.MarketTradeGood();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('MarketTradeGood', function() {
    it('should create an instance of MarketTradeGood', function() {
      // uncomment below and update the code to test MarketTradeGood
      //var instance = new SpaceTradersApi.MarketTradeGood();
      //expect(instance).to.be.a(SpaceTradersApi.MarketTradeGood);
    });

    it('should have the property symbol (base name: "symbol")', function() {
      // uncomment below and update the code to test the property symbol
      //var instance = new SpaceTradersApi.MarketTradeGood();
      //expect(instance).to.be();
    });

    it('should have the property tradeVolume (base name: "tradeVolume")', function() {
      // uncomment below and update the code to test the property tradeVolume
      //var instance = new SpaceTradersApi.MarketTradeGood();
      //expect(instance).to.be();
    });

    it('should have the property supply (base name: "supply")', function() {
      // uncomment below and update the code to test the property supply
      //var instance = new SpaceTradersApi.MarketTradeGood();
      //expect(instance).to.be();
    });

    it('should have the property purchasePrice (base name: "purchasePrice")', function() {
      // uncomment below and update the code to test the property purchasePrice
      //var instance = new SpaceTradersApi.MarketTradeGood();
      //expect(instance).to.be();
    });

    it('should have the property sellPrice (base name: "sellPrice")', function() {
      // uncomment below and update the code to test the property sellPrice
      //var instance = new SpaceTradersApi.MarketTradeGood();
      //expect(instance).to.be();
    });

  });

}));
