import { CRYPTO_CURRENCY_MAP } from './currency';

export enum GlobalFilterEnum {
    OpenMarkets = 'OpenMarkets',
    ResolvedMarkets = 'ResolvedMarkets',
    Canceled = 'Canceled',
    Archived = 'ArchivedMarkets',
    All = 'AllMarkets',
    YourPositions = 'YourPositions',
    Claim = 'Claim',
    History = 'History',
}

export enum SortDirection {
    NONE,
    ASC,
    DESC,
}

export enum MarketType {
    TICKET,
    OPEN_BID,
}

export enum SportFilterEnum {
    All = 'All',
    Soccer = 'Soccer',
    Football = 'Football',
    UFC = 'UFC',
    Baseball = 'Baseball',
    Formula1 = 'Formula1',
    MotoGP = 'MotoGP',
    Hockey = 'Hockey',
    Basketball = 'Basketball',
    // Tennis = 'Tennis',
}

export const COLLATERALS = [
    CRYPTO_CURRENCY_MAP.sUSD,
    CRYPTO_CURRENCY_MAP.DAI,
    CRYPTO_CURRENCY_MAP.USDC,
    CRYPTO_CURRENCY_MAP.USDT,
];

export const DEFAULT_SORT_BY = 1;

export const DEFAULT_POSITIONING_DURATION = 10 * 24 * 60 * 60 * 1000; // 10 days

export const MINIMUM_POSITIONS = 2;
export const MAXIMUM_POSITIONS = 5;
export const MAXIMUM_TAGS = 5;
export const MINIMUM_TICKET_PRICE = 10;
export const MAXIMUM_TICKET_PRICE = 1000;

export const DATE_PICKER_MAX_LENGTH_MONTHS = 1;
export const TODAYS_DATE = new Date();
export const DATE_PICKER_MIN_DATE = TODAYS_DATE; // today's date

const maxDate = new Date();
maxDate.setMonth(maxDate.getMonth() + DATE_PICKER_MAX_LENGTH_MONTHS);
export const DATE_PICKER_MAX_DATE = maxDate; // 2 month from now

export const MAXIMUM_INPUT_CHARACTERS = 200;

export enum MarketStatus {
    Open = 'open',
    CancelledPendingConfirmation = 'cancelled-pending-confirmation',
    CancelledDisputed = 'cancelled-disputed',
    CancelledConfirmed = 'cancelled-confirmed',
    Paused = 'paused',
    ResolvePending = 'resolve-pending',
    ResolvePendingDisputed = 'resolve-pending-disputed',
    ResolvedPendingConfirmation = 'resolved-pending-confirmation',
    ResolvedDisputed = 'resolved-disputed',
    ResolvedConfirmed = 'resolved-confirmed',
}

export enum OddsType {
    American = 'american-odds',
    Decimal = 'decimal-odds',
    AMM = 'normalized-implied-odds',
}

export const ODDS_TYPES = [OddsType.AMM, OddsType.Decimal, OddsType.American];

export const MAX_TOKEN_SLIPPAGE = 0.995;
export const MAX_USD_SLIPPAGE = 0.99;
export const APPROVAL_BUFFER = 0.01;

export const APEX_GAME_MIN_TAG = 9100;

export enum ApexBetType {
    H2H = 0,
    TOP3 = 1,
    TOP5 = 2,
    TOP10 = 3,
}

export const ApexBetTypeKeyMapping = {
    [ApexBetType.H2H]: 'h2h',
    [ApexBetType.TOP3]: 'top3',
    [ApexBetType.TOP5]: 'top5',
    [ApexBetType.TOP10]: 'top10',
};
