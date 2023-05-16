# space_traders_api

SpaceTradersApi - JavaScript client for space_traders_api
SpaceTraders is an open-universe game and learning platform that offers a set of HTTP endpoints to control a fleet of ships and explore a multiplayer universe.

The API is documented using [OpenAPI](https://github.com/SpaceTradersAPI/api-docs). You can send your first request right here in your browser to check the status of the game server.

```json http
{
  \"method\": \"GET\",
  \"url\": \"https://api.spacetraders.io/v2\",
}
```

Unlike a traditional game, SpaceTraders does not have a first-party client or app to play the game. Instead, you can use the API to build your own client, write a script to automate your ships, or try an app built by the community.

We have a [Discord channel](https://discord.com/invite/jh6zurdWk5) where you can share your projects, ask questions, and get help from other players.



This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2.0.0
- Package version: 2.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install space_traders_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your space_traders_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SpaceTradersApi = require('space_traders_api');

var defaultClient = SpaceTradersApi.ApiClient.instance;
// Configure Bearer access token for authorization: AgentToken
var AgentToken = defaultClient.authentications['AgentToken'];
AgentToken.accessToken = "YOUR ACCESS TOKEN"

var api = new SpaceTradersApi.AgentsApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getMyAgent(callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.spacetraders.io/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SpaceTradersApi.AgentsApi* | [**getMyAgent**](docs/AgentsApi.md#getMyAgent) | **GET** /my/agent | My Agent Details
*SpaceTradersApi.ContractsApi* | [**acceptContract**](docs/ContractsApi.md#acceptContract) | **POST** /my/contracts/{contractId}/accept | Accept Contract
*SpaceTradersApi.ContractsApi* | [**deliverContract**](docs/ContractsApi.md#deliverContract) | **POST** /my/contracts/{contractId}/deliver | Deliver Contract
*SpaceTradersApi.ContractsApi* | [**fulfillContract**](docs/ContractsApi.md#fulfillContract) | **POST** /my/contracts/{contractId}/fulfill | Fulfill Contract
*SpaceTradersApi.ContractsApi* | [**getContract**](docs/ContractsApi.md#getContract) | **GET** /my/contracts/{contractId} | Get Contract
*SpaceTradersApi.ContractsApi* | [**getContracts**](docs/ContractsApi.md#getContracts) | **GET** /my/contracts | List Contracts
*SpaceTradersApi.DefaultApi* | [**register**](docs/DefaultApi.md#register) | **POST** /register | Register New Agent
*SpaceTradersApi.FactionsApi* | [**getFaction**](docs/FactionsApi.md#getFaction) | **GET** /factions/{factionSymbol} | Get Faction
*SpaceTradersApi.FactionsApi* | [**getFactions**](docs/FactionsApi.md#getFactions) | **GET** /factions | List Factions
*SpaceTradersApi.FleetApi* | [**createChart**](docs/FleetApi.md#createChart) | **POST** /my/ships/{shipSymbol}/chart | Create Chart
*SpaceTradersApi.FleetApi* | [**createShipShipScan**](docs/FleetApi.md#createShipShipScan) | **POST** /my/ships/{shipSymbol}/scan/ships | Scan Ships
*SpaceTradersApi.FleetApi* | [**createShipSystemScan**](docs/FleetApi.md#createShipSystemScan) | **POST** /my/ships/{shipSymbol}/scan/systems | Scan Systems
*SpaceTradersApi.FleetApi* | [**createShipWaypointScan**](docs/FleetApi.md#createShipWaypointScan) | **POST** /my/ships/{shipSymbol}/scan/waypoints | Scan Waypoints
*SpaceTradersApi.FleetApi* | [**createSurvey**](docs/FleetApi.md#createSurvey) | **POST** /my/ships/{shipSymbol}/survey | Create Survey
*SpaceTradersApi.FleetApi* | [**dockShip**](docs/FleetApi.md#dockShip) | **POST** /my/ships/{shipSymbol}/dock | Dock Ship
*SpaceTradersApi.FleetApi* | [**extractResources**](docs/FleetApi.md#extractResources) | **POST** /my/ships/{shipSymbol}/extract | Extract Resources
*SpaceTradersApi.FleetApi* | [**getMyShip**](docs/FleetApi.md#getMyShip) | **GET** /my/ships/{shipSymbol} | Get Ship
*SpaceTradersApi.FleetApi* | [**getMyShipCargo**](docs/FleetApi.md#getMyShipCargo) | **GET** /my/ships/{shipSymbol}/cargo | Get Ship Cargo
*SpaceTradersApi.FleetApi* | [**getMyShips**](docs/FleetApi.md#getMyShips) | **GET** /my/ships | List Ships
*SpaceTradersApi.FleetApi* | [**getShipCooldown**](docs/FleetApi.md#getShipCooldown) | **GET** /my/ships/{shipSymbol}/cooldown | Get Ship Cooldown
*SpaceTradersApi.FleetApi* | [**getShipNav**](docs/FleetApi.md#getShipNav) | **GET** /my/ships/{shipSymbol}/nav | Get Ship Nav
*SpaceTradersApi.FleetApi* | [**jettison**](docs/FleetApi.md#jettison) | **POST** /my/ships/{shipSymbol}/jettison | Jettison Cargo
*SpaceTradersApi.FleetApi* | [**jumpShip**](docs/FleetApi.md#jumpShip) | **POST** /my/ships/{shipSymbol}/jump | Jump Ship
*SpaceTradersApi.FleetApi* | [**navigateShip**](docs/FleetApi.md#navigateShip) | **POST** /my/ships/{shipSymbol}/navigate | Navigate Ship
*SpaceTradersApi.FleetApi* | [**orbitShip**](docs/FleetApi.md#orbitShip) | **POST** /my/ships/{shipSymbol}/orbit | Orbit Ship
*SpaceTradersApi.FleetApi* | [**patchShipNav**](docs/FleetApi.md#patchShipNav) | **PATCH** /my/ships/{shipSymbol}/nav | Patch Ship Nav
*SpaceTradersApi.FleetApi* | [**purchaseCargo**](docs/FleetApi.md#purchaseCargo) | **POST** /my/ships/{shipSymbol}/purchase | Purchase Cargo
*SpaceTradersApi.FleetApi* | [**purchaseShip**](docs/FleetApi.md#purchaseShip) | **POST** /my/ships | Purchase Ship
*SpaceTradersApi.FleetApi* | [**refuelShip**](docs/FleetApi.md#refuelShip) | **POST** /my/ships/{shipSymbol}/refuel | Refuel Ship
*SpaceTradersApi.FleetApi* | [**sellCargo**](docs/FleetApi.md#sellCargo) | **POST** /my/ships/{shipSymbol}/sell | Sell Cargo
*SpaceTradersApi.FleetApi* | [**shipRefine**](docs/FleetApi.md#shipRefine) | **POST** /my/ships/{shipSymbol}/refine | Ship Refine
*SpaceTradersApi.FleetApi* | [**transferCargo**](docs/FleetApi.md#transferCargo) | **POST** /my/ships/{shipSymbol}/transfer | Transfer Cargo
*SpaceTradersApi.FleetApi* | [**warpShip**](docs/FleetApi.md#warpShip) | **POST** /my/ships/{shipSymbol}/warp | Warp Ship
*SpaceTradersApi.SystemsApi* | [**getJumpGate**](docs/SystemsApi.md#getJumpGate) | **GET** /systems/{systemSymbol}/waypoints/{waypointSymbol}/jump-gate | Get Jump Gate
*SpaceTradersApi.SystemsApi* | [**getMarket**](docs/SystemsApi.md#getMarket) | **GET** /systems/{systemSymbol}/waypoints/{waypointSymbol}/market | Get Market
*SpaceTradersApi.SystemsApi* | [**getShipyard**](docs/SystemsApi.md#getShipyard) | **GET** /systems/{systemSymbol}/waypoints/{waypointSymbol}/shipyard | Get Shipyard
*SpaceTradersApi.SystemsApi* | [**getSystem**](docs/SystemsApi.md#getSystem) | **GET** /systems/{systemSymbol} | Get System
*SpaceTradersApi.SystemsApi* | [**getSystemWaypoints**](docs/SystemsApi.md#getSystemWaypoints) | **GET** /systems/{systemSymbol}/waypoints | List Waypoints
*SpaceTradersApi.SystemsApi* | [**getSystems**](docs/SystemsApi.md#getSystems) | **GET** /systems | List Systems
*SpaceTradersApi.SystemsApi* | [**getWaypoint**](docs/SystemsApi.md#getWaypoint) | **GET** /systems/{systemSymbol}/waypoints/{waypointSymbol} | Get Waypoint


## Documentation for Models

 - [SpaceTradersApi.AcceptContract200Response](docs/AcceptContract200Response.md)
 - [SpaceTradersApi.AcceptContract200ResponseData](docs/AcceptContract200ResponseData.md)
 - [SpaceTradersApi.Agent](docs/Agent.md)
 - [SpaceTradersApi.Chart](docs/Chart.md)
 - [SpaceTradersApi.ConnectedSystem](docs/ConnectedSystem.md)
 - [SpaceTradersApi.Contract](docs/Contract.md)
 - [SpaceTradersApi.ContractDeliverGood](docs/ContractDeliverGood.md)
 - [SpaceTradersApi.ContractPayment](docs/ContractPayment.md)
 - [SpaceTradersApi.ContractTerms](docs/ContractTerms.md)
 - [SpaceTradersApi.Cooldown](docs/Cooldown.md)
 - [SpaceTradersApi.CreateChart201Response](docs/CreateChart201Response.md)
 - [SpaceTradersApi.CreateChart201ResponseData](docs/CreateChart201ResponseData.md)
 - [SpaceTradersApi.CreateShipShipScan201Response](docs/CreateShipShipScan201Response.md)
 - [SpaceTradersApi.CreateShipShipScan201ResponseData](docs/CreateShipShipScan201ResponseData.md)
 - [SpaceTradersApi.CreateShipSystemScan201Response](docs/CreateShipSystemScan201Response.md)
 - [SpaceTradersApi.CreateShipSystemScan201ResponseData](docs/CreateShipSystemScan201ResponseData.md)
 - [SpaceTradersApi.CreateShipWaypointScan201Response](docs/CreateShipWaypointScan201Response.md)
 - [SpaceTradersApi.CreateShipWaypointScan201ResponseData](docs/CreateShipWaypointScan201ResponseData.md)
 - [SpaceTradersApi.CreateSurvey201Response](docs/CreateSurvey201Response.md)
 - [SpaceTradersApi.CreateSurvey201ResponseData](docs/CreateSurvey201ResponseData.md)
 - [SpaceTradersApi.DeliverContract200Response](docs/DeliverContract200Response.md)
 - [SpaceTradersApi.DeliverContract200ResponseData](docs/DeliverContract200ResponseData.md)
 - [SpaceTradersApi.DeliverContractRequest](docs/DeliverContractRequest.md)
 - [SpaceTradersApi.DockShip200Response](docs/DockShip200Response.md)
 - [SpaceTradersApi.ExtractResources201Response](docs/ExtractResources201Response.md)
 - [SpaceTradersApi.ExtractResources201ResponseData](docs/ExtractResources201ResponseData.md)
 - [SpaceTradersApi.ExtractResourcesRequest](docs/ExtractResourcesRequest.md)
 - [SpaceTradersApi.Extraction](docs/Extraction.md)
 - [SpaceTradersApi.ExtractionYield](docs/ExtractionYield.md)
 - [SpaceTradersApi.Faction](docs/Faction.md)
 - [SpaceTradersApi.FactionTrait](docs/FactionTrait.md)
 - [SpaceTradersApi.FulfillContract200Response](docs/FulfillContract200Response.md)
 - [SpaceTradersApi.GetContract200Response](docs/GetContract200Response.md)
 - [SpaceTradersApi.GetContracts200Response](docs/GetContracts200Response.md)
 - [SpaceTradersApi.GetFaction200Response](docs/GetFaction200Response.md)
 - [SpaceTradersApi.GetFactions200Response](docs/GetFactions200Response.md)
 - [SpaceTradersApi.GetJumpGate200Response](docs/GetJumpGate200Response.md)
 - [SpaceTradersApi.GetMarket200Response](docs/GetMarket200Response.md)
 - [SpaceTradersApi.GetMyAgent200Response](docs/GetMyAgent200Response.md)
 - [SpaceTradersApi.GetMyShip200Response](docs/GetMyShip200Response.md)
 - [SpaceTradersApi.GetMyShipCargo200Response](docs/GetMyShipCargo200Response.md)
 - [SpaceTradersApi.GetMyShips200Response](docs/GetMyShips200Response.md)
 - [SpaceTradersApi.GetShipCooldown200Response](docs/GetShipCooldown200Response.md)
 - [SpaceTradersApi.GetShipNav200Response](docs/GetShipNav200Response.md)
 - [SpaceTradersApi.GetShipyard200Response](docs/GetShipyard200Response.md)
 - [SpaceTradersApi.GetSystem200Response](docs/GetSystem200Response.md)
 - [SpaceTradersApi.GetSystemWaypoints200Response](docs/GetSystemWaypoints200Response.md)
 - [SpaceTradersApi.GetSystems200Response](docs/GetSystems200Response.md)
 - [SpaceTradersApi.GetWaypoint200Response](docs/GetWaypoint200Response.md)
 - [SpaceTradersApi.Jettison200Response](docs/Jettison200Response.md)
 - [SpaceTradersApi.Jettison200ResponseData](docs/Jettison200ResponseData.md)
 - [SpaceTradersApi.JettisonRequest](docs/JettisonRequest.md)
 - [SpaceTradersApi.JumpGate](docs/JumpGate.md)
 - [SpaceTradersApi.JumpShip200Response](docs/JumpShip200Response.md)
 - [SpaceTradersApi.JumpShip200ResponseData](docs/JumpShip200ResponseData.md)
 - [SpaceTradersApi.JumpShipRequest](docs/JumpShipRequest.md)
 - [SpaceTradersApi.Market](docs/Market.md)
 - [SpaceTradersApi.MarketTradeGood](docs/MarketTradeGood.md)
 - [SpaceTradersApi.MarketTransaction](docs/MarketTransaction.md)
 - [SpaceTradersApi.Meta](docs/Meta.md)
 - [SpaceTradersApi.NavigateShip200Response](docs/NavigateShip200Response.md)
 - [SpaceTradersApi.NavigateShip200ResponseData](docs/NavigateShip200ResponseData.md)
 - [SpaceTradersApi.NavigateShipRequest](docs/NavigateShipRequest.md)
 - [SpaceTradersApi.OrbitShip200Response](docs/OrbitShip200Response.md)
 - [SpaceTradersApi.OrbitShip200ResponseData](docs/OrbitShip200ResponseData.md)
 - [SpaceTradersApi.PatchShipNavRequest](docs/PatchShipNavRequest.md)
 - [SpaceTradersApi.PurchaseCargo201Response](docs/PurchaseCargo201Response.md)
 - [SpaceTradersApi.PurchaseCargoRequest](docs/PurchaseCargoRequest.md)
 - [SpaceTradersApi.PurchaseShip201Response](docs/PurchaseShip201Response.md)
 - [SpaceTradersApi.PurchaseShip201ResponseData](docs/PurchaseShip201ResponseData.md)
 - [SpaceTradersApi.PurchaseShipRequest](docs/PurchaseShipRequest.md)
 - [SpaceTradersApi.RefuelShip200Response](docs/RefuelShip200Response.md)
 - [SpaceTradersApi.RefuelShip200ResponseData](docs/RefuelShip200ResponseData.md)
 - [SpaceTradersApi.Register201Response](docs/Register201Response.md)
 - [SpaceTradersApi.Register201ResponseData](docs/Register201ResponseData.md)
 - [SpaceTradersApi.RegisterRequest](docs/RegisterRequest.md)
 - [SpaceTradersApi.ScannedShip](docs/ScannedShip.md)
 - [SpaceTradersApi.ScannedShipEngine](docs/ScannedShipEngine.md)
 - [SpaceTradersApi.ScannedShipFrame](docs/ScannedShipFrame.md)
 - [SpaceTradersApi.ScannedShipMountsInner](docs/ScannedShipMountsInner.md)
 - [SpaceTradersApi.ScannedShipReactor](docs/ScannedShipReactor.md)
 - [SpaceTradersApi.ScannedSystem](docs/ScannedSystem.md)
 - [SpaceTradersApi.ScannedWaypoint](docs/ScannedWaypoint.md)
 - [SpaceTradersApi.SellCargo201Response](docs/SellCargo201Response.md)
 - [SpaceTradersApi.SellCargo201ResponseData](docs/SellCargo201ResponseData.md)
 - [SpaceTradersApi.SellCargoRequest](docs/SellCargoRequest.md)
 - [SpaceTradersApi.Ship](docs/Ship.md)
 - [SpaceTradersApi.ShipCargo](docs/ShipCargo.md)
 - [SpaceTradersApi.ShipCargoItem](docs/ShipCargoItem.md)
 - [SpaceTradersApi.ShipCrew](docs/ShipCrew.md)
 - [SpaceTradersApi.ShipEngine](docs/ShipEngine.md)
 - [SpaceTradersApi.ShipFrame](docs/ShipFrame.md)
 - [SpaceTradersApi.ShipFuel](docs/ShipFuel.md)
 - [SpaceTradersApi.ShipFuelConsumed](docs/ShipFuelConsumed.md)
 - [SpaceTradersApi.ShipModule](docs/ShipModule.md)
 - [SpaceTradersApi.ShipMount](docs/ShipMount.md)
 - [SpaceTradersApi.ShipNav](docs/ShipNav.md)
 - [SpaceTradersApi.ShipNavFlightMode](docs/ShipNavFlightMode.md)
 - [SpaceTradersApi.ShipNavRoute](docs/ShipNavRoute.md)
 - [SpaceTradersApi.ShipNavRouteWaypoint](docs/ShipNavRouteWaypoint.md)
 - [SpaceTradersApi.ShipNavStatus](docs/ShipNavStatus.md)
 - [SpaceTradersApi.ShipReactor](docs/ShipReactor.md)
 - [SpaceTradersApi.ShipRefine200Response](docs/ShipRefine200Response.md)
 - [SpaceTradersApi.ShipRefine200ResponseData](docs/ShipRefine200ResponseData.md)
 - [SpaceTradersApi.ShipRefine200ResponseDataProducedInner](docs/ShipRefine200ResponseDataProducedInner.md)
 - [SpaceTradersApi.ShipRefineRequest](docs/ShipRefineRequest.md)
 - [SpaceTradersApi.ShipRegistration](docs/ShipRegistration.md)
 - [SpaceTradersApi.ShipRequirements](docs/ShipRequirements.md)
 - [SpaceTradersApi.ShipRole](docs/ShipRole.md)
 - [SpaceTradersApi.ShipType](docs/ShipType.md)
 - [SpaceTradersApi.Shipyard](docs/Shipyard.md)
 - [SpaceTradersApi.ShipyardShip](docs/ShipyardShip.md)
 - [SpaceTradersApi.ShipyardShipTypesInner](docs/ShipyardShipTypesInner.md)
 - [SpaceTradersApi.ShipyardTransaction](docs/ShipyardTransaction.md)
 - [SpaceTradersApi.Survey](docs/Survey.md)
 - [SpaceTradersApi.SurveyDeposit](docs/SurveyDeposit.md)
 - [SpaceTradersApi.System](docs/System.md)
 - [SpaceTradersApi.SystemFaction](docs/SystemFaction.md)
 - [SpaceTradersApi.SystemType](docs/SystemType.md)
 - [SpaceTradersApi.SystemWaypoint](docs/SystemWaypoint.md)
 - [SpaceTradersApi.TradeGood](docs/TradeGood.md)
 - [SpaceTradersApi.TradeSymbol](docs/TradeSymbol.md)
 - [SpaceTradersApi.TransferCargo200Response](docs/TransferCargo200Response.md)
 - [SpaceTradersApi.TransferCargoRequest](docs/TransferCargoRequest.md)
 - [SpaceTradersApi.Waypoint](docs/Waypoint.md)
 - [SpaceTradersApi.WaypointFaction](docs/WaypointFaction.md)
 - [SpaceTradersApi.WaypointOrbital](docs/WaypointOrbital.md)
 - [SpaceTradersApi.WaypointTrait](docs/WaypointTrait.md)
 - [SpaceTradersApi.WaypointType](docs/WaypointType.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### AgentToken

- **Type**: Bearer authentication

