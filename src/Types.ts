export interface CryptoResponse {
  status: Status;
  data:   CryptoData;
}

export interface CryptoData {
  id:                        string;
  symbol:                    string;
  name:                      string;
  slug:                      string;
  _internal_temp_agora_id:   string;
  market_data:               MarketData;
  marketcap:                 Marketcap;
  supply:                    Supply;
  blockchain_stats_24_hours: { [key: string]: number };
  market_data_liquidity:     MarketDataLiquidity;
  all_time_high:             AllTimeHigh;
  cycle_low:                 CycleLow;
  token_sale_stats:          TokenSaleStats;
  staking_stats:             StakingStats;
  mining_stats:              MiningStats;
  developer_activity:        DeveloperActivity;
  roi_data:                  { [key: string]: number };
  roi_by_year:               { [key: string]: number };
  risk_metrics:              RiskMetrics;
  misc_data:                 MiscData;
  lend_rates:                LendRates;
  borrow_rates:              BorrowRates;
  loan_data:                 LoanData;
  reddit:                    Reddit;
  on_chain_data:             { [key: string]: number };
  exchange_flows:            ExchangeFlows;
  alert_messages:            null;
}

export interface AllTimeHigh {
  price:              number;
  at:                 string;
  days_since:         number;
  percent_down:       number;
  breakeven_multiple: number;
}

export interface BorrowRates {
  coinlist: number;
}

export interface CycleLow {
  price:      number;
  at:         string;
  percent_up: number;
  days_since: number;
}

export interface DeveloperActivity {
  stars:                       number;
  watchers:                    number;
  commits_last_3_months:       number;
  commits_last_1_year:         number;
  lines_added_last_3_months:   number;
  lines_added_last_1_year:     number;
  lines_deleted_last_3_months: number;
  lines_deleted_last_1_year:   number;
}

export interface ExchangeFlows {
  supply_exchange_usd:                      number;
  flow_in_exchange_native_units_inclusive:  number;
  flow_in_exchange_usd_inclusive:           number;
  flow_in_exchange_native_units:            number;
  flow_in_exchange_usd:                     number;
  flow_out_exchange_native_units_inclusive: number;
  flow_out_exchange_usd_inclusive:          number;
  flow_out_exchange_native_units:           number;
  flow_out_exchange_usd:                    number;
}

export interface LendRates {
  bitfinex:  number;
  blockfi:   number;
  celsius:   number;
  coinlist:  number;
  cryptocom: number;
  poloniex:  number;
}

export interface LoanData {
  originated_last_24_hours_usd:            null;
  outstanding_debt_usd:                    null;
  repaid_last_24_hours_usd:                null;
  collateralized_last_24_hours_usd:        null;
  collateral_liquidated_last_24_hours_usd: null;
}

export interface MarketData {
  price_usd:                                   number;
  price_btc:                                   number;
  price_eth:                                   number;
  volume_last_24_hours:                        number;
  real_volume_last_24_hours:                   number;
  volume_last_24_hours_overstatement_multiple: number;
  percent_change_usd_last_24_hours:            number;
  percent_change_btc_last_24_hours:            number;
  percent_change_eth_last_24_hours:            number;
  ohlcv_last_1_hour:                           OhlcvLastHour;
  ohlcv_last_24_hour:                          OhlcvLastHour;
  last_trade_at:                               string;
}

export interface OhlcvLastHour {
  open:   number;
  high:   number;
  low:    number;
  close:  number;
  volume: number;
}

export interface MarketDataLiquidity {
  clearing_prices_to_sell: null;
  marketcap:               null;
  asset_bid_depth:         null;
  usd_bid_depth:           null;
  updated_at:              string;
}

export interface Marketcap {
  marketcap_dominance_percent:           number;
  current_marketcap_usd:                 number;
  y_2050_marketcap_usd:                  number;
  y_plus10_marketcap_usd:                number;
  liquid_marketcap_usd:                  number;
  realized_marketcap_usd:                number;
  volume_turnover_last_24_hours_percent: number;
}

export interface MiningStats {
  mining_algo:                   string;
  network_hash_rate:             string;
  available_on_nicehash_percent: number;
  "1_hour_attack_cost":          number;
  "24_hours_attack_cost":        number;
  attack_appeal:                 number;
  mining_revenue_native:         number;
  mining_revenue_usd:            number;
  average_difficulty:            number;
}

export interface MiscData {
  private_market_price_usd:                null;
  vladimir_club_cost:                      number;
  btc_current_normalized_supply_price_usd: number;
  btc_y2050_normalized_supply_price_usd:   number;
  asset_created_at:                        string;
  asset_age_days:                          number;
  categories:                              string[];
  sectors:                                 string[];
  tags:                                    string[];
}

export interface Reddit {
  active_user_count: number;
  subscribers:       number;
}

export interface RiskMetrics {
  sharpe_ratios:    SharpeRatios;
  volatility_stats: VolatilityStats;
}

export interface SharpeRatios {
  last_30_days: number;
  last_90_days: number;
  last_1_year:  number;
  last_3_years: number;
}

export interface VolatilityStats {
  volatility_last_30_days: number;
  volatility_last_90_days: number;
  volatility_last_1_year:  number;
  volatility_last_3_years: number;
}

export interface StakingStats {
  staking_yield_percent:      null;
  staking_type:               null;
  staking_minimum:            null;
  tokens_staked:              null;
  tokens_staked_percent:      null;
  real_staking_yield_percent: null;
}

export interface Supply {
  y_2050:                   number;
  y_plus10:                 number;
  liquid:                   number;
  circulating:              number;
  y_2050_issued_percent:    number;
  annual_inflation_percent: number;
  stock_to_flow:            number;
  y_plus10_issued_percent:  number;
}

export interface TokenSaleStats {
  sale_proceeds_usd:          null;
  sale_start_date:            null;
  sale_end_date:              null;
  roi_since_sale_usd_percent: null;
  roi_since_sale_btc_percent: null;
  roi_since_sale_eth_percent: null;
}

export interface Status {
  elapsed:   number;
  timestamp: string;
}
