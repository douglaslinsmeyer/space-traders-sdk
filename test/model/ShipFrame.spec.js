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
    instance = new SpaceTradersApi.ShipFrame();
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

  describe('ShipFrame', function() {
    it('should create an instance of ShipFrame', function() {
      // uncomment below and update the code to test ShipFrame
      //var instance = new SpaceTradersApi.ShipFrame();
      //expect(instance).to.be.a(SpaceTradersApi.ShipFrame);
    });

    it('should have the property symbol (base name: "symbol")', function() {
      // uncomment below and update the code to test the property symbol
      //var instance = new SpaceTradersApi.ShipFrame();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new SpaceTradersApi.ShipFrame();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new SpaceTradersApi.ShipFrame();
      //expect(instance).to.be();
    });

    it('should have the property condition (base name: "condition")', function() {
      // uncomment below and update the code to test the property condition
      //var instance = new SpaceTradersApi.ShipFrame();
      //expect(instance).to.be();
    });

    it('should have the property moduleSlots (base name: "moduleSlots")', function() {
      // uncomment below and update the code to test the property moduleSlots
      //var instance = new SpaceTradersApi.ShipFrame();
      //expect(instance).to.be();
    });

    it('should have the property mountingPoints (base name: "mountingPoints")', function() {
      // uncomment below and update the code to test the property mountingPoints
      //var instance = new SpaceTradersApi.ShipFrame();
      //expect(instance).to.be();
    });

    it('should have the property fuelCapacity (base name: "fuelCapacity")', function() {
      // uncomment below and update the code to test the property fuelCapacity
      //var instance = new SpaceTradersApi.ShipFrame();
      //expect(instance).to.be();
    });

    it('should have the property requirements (base name: "requirements")', function() {
      // uncomment below and update the code to test the property requirements
      //var instance = new SpaceTradersApi.ShipFrame();
      //expect(instance).to.be();
    });

  });

}));
