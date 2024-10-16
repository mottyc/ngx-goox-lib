import { Tuple } from '.';
export declare enum CurrencyCode {
    UNDEFINED = 0,
    ILS = 1,
    USD = 2,
    EUR = 3
}
export declare function GetCurrencyCodes(): Tuple<CurrencyCode, string>[];
export declare function MapCurrencyCodes(): Map<CurrencyCode, string>;
