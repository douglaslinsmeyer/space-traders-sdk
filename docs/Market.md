# SpaceTradersApi.Market

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**symbol** | **String** | The symbol of the market. The symbol is the same as the waypoint where the market is located. | 
**exports** | [**[TradeGood]**](TradeGood.md) | The list of goods that are exported from this market. | 
**imports** | [**[TradeGood]**](TradeGood.md) | The list of goods that are sought as imports in this market. | 
**exchange** | [**[TradeGood]**](TradeGood.md) | The list of goods that are bought and sold between agents at this market. | 
**transactions** | [**[MarketTransaction]**](MarketTransaction.md) | The list of recent transactions at this market. Visible only when a ship is present at the market. | [optional] 
**tradeGoods** | [**[MarketTradeGood]**](MarketTradeGood.md) | The list of goods that are traded at this market. Visible only when a ship is present at the market. | [optional] 


