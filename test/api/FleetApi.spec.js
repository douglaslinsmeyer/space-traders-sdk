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
    instance = new SpaceTradersApi.FleetApi();
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

  describe('FleetApi', function() {
    describe('createChart', function() {
      it('should call createChart successfully', function(done) {
        //uncomment below and update the code to test createChart
        //instance.createChart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createShipShipScan', function() {
      it('should call createShipShipScan successfully', function(done) {
        //uncomment below and update the code to test createShipShipScan
        //instance.createShipShipScan(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createShipSystemScan', function() {
      it('should call createShipSystemScan successfully', function(done) {
        //uncomment below and update the code to test createShipSystemScan
        //instance.createShipSystemScan(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createShipWaypointScan', function() {
      it('should call createShipWaypointScan successfully', function(done) {
        //uncomment below and update the code to test createShipWaypointScan
        //instance.createShipWaypointScan(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createSurvey', function() {
      it('should call createSurvey successfully', function(done) {
        //uncomment below and update the code to test createSurvey
        //instance.createSurvey(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dockShip', function() {
      it('should call dockShip successfully', function(done) {
        //uncomment below and update the code to test dockShip
        //instance.dockShip(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('extractResources', function() {
      it('should call extractResources successfully', function(done) {
        //uncomment below and update the code to test extractResources
        //instance.extractResources(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMyShip', function() {
      it('should call getMyShip successfully', function(done) {
        //uncomment below and update the code to test getMyShip
        //instance.getMyShip(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMyShipCargo', function() {
      it('should call getMyShipCargo successfully', function(done) {
        //uncomment below and update the code to test getMyShipCargo
        //instance.getMyShipCargo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getMyShips', function() {
      it('should call getMyShips successfully', function(done) {
        //uncomment below and update the code to test getMyShips
        //instance.getMyShips(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getShipCooldown', function() {
      it('should call getShipCooldown successfully', function(done) {
        //uncomment below and update the code to test getShipCooldown
        //instance.getShipCooldown(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getShipNav', function() {
      it('should call getShipNav successfully', function(done) {
        //uncomment below and update the code to test getShipNav
        //instance.getShipNav(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('jettison', function() {
      it('should call jettison successfully', function(done) {
        //uncomment below and update the code to test jettison
        //instance.jettison(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('jumpShip', function() {
      it('should call jumpShip successfully', function(done) {
        //uncomment below and update the code to test jumpShip
        //instance.jumpShip(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('navigateShip', function() {
      it('should call navigateShip successfully', function(done) {
        //uncomment below and update the code to test navigateShip
        //instance.navigateShip(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('orbitShip', function() {
      it('should call orbitShip successfully', function(done) {
        //uncomment below and update the code to test orbitShip
        //instance.orbitShip(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchShipNav', function() {
      it('should call patchShipNav successfully', function(done) {
        //uncomment below and update the code to test patchShipNav
        //instance.patchShipNav(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('purchaseCargo', function() {
      it('should call purchaseCargo successfully', function(done) {
        //uncomment below and update the code to test purchaseCargo
        //instance.purchaseCargo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('purchaseShip', function() {
      it('should call purchaseShip successfully', function(done) {
        //uncomment below and update the code to test purchaseShip
        //instance.purchaseShip(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('refuelShip', function() {
      it('should call refuelShip successfully', function(done) {
        //uncomment below and update the code to test refuelShip
        //instance.refuelShip(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sellCargo', function() {
      it('should call sellCargo successfully', function(done) {
        //uncomment below and update the code to test sellCargo
        //instance.sellCargo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('shipRefine', function() {
      it('should call shipRefine successfully', function(done) {
        //uncomment below and update the code to test shipRefine
        //instance.shipRefine(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('transferCargo', function() {
      it('should call transferCargo successfully', function(done) {
        //uncomment below and update the code to test transferCargo
        //instance.transferCargo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('warpShip', function() {
      it('should call warpShip successfully', function(done) {
        //uncomment below and update the code to test warpShip
        //instance.warpShip(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
