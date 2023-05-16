# SpaceTradersApi.Contract

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**factionSymbol** | **String** | The symbol of the faction that this contract is for. | 
**type** | **String** |  | 
**terms** | [**ContractTerms**](ContractTerms.md) |  | 
**accepted** | **Boolean** | Whether the contract has been accepted by the agent | [default to false]
**fulfilled** | **Boolean** | Whether the contract has been fulfilled | [default to false]
**expiration** | **Date** | The time at which the contract expires | 



## Enum: TypeEnum


* `PROCUREMENT` (value: `"PROCUREMENT"`)

* `TRANSPORT` (value: `"TRANSPORT"`)

* `SHUTTLE` (value: `"SHUTTLE"`)




