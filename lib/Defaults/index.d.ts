/// <reference types="node" />
import { proto } from '../../WAProto';
import type { MediaType, SocketConfig } from '../Types';
export declare const UNAUTHORIZED_CODES: number[];
export declare const PHONENUMBER_MCC: {
    "93": number;
    "355": number;
    "213": number;
    "1-684": number;
    "376": number;
    "244": number;
    "1-264": number;
    "1-268": number;
    "54": number;
    "374": number;
    "297": number;
    "61": number;
    "43": number;
    "994": number;
    "1-242": number;
    "973": number;
    "880": number;
    "1-246": number;
    "375": number;
    "32": number;
    "501": number;
    "229": number;
    "1-441": number;
    "975": number;
    "591": number;
    "387": number;
    "267": number;
    "55": number;
    "1-284": number;
    "673": number;
    "359": number;
    "226": number;
    "257": number;
    "855": number;
    "237": number;
    "238": number;
    "1-345": number;
    "236": number;
    "235": number;
    "56": number;
    "86": number;
    "57": number;
    "269": number;
    "682": number;
    "506": number;
    "385": number;
    "53": number;
    "357": number;
    "420": number;
    "243": number;
    "45": number;
    "253": number;
    "1-767": number;
    "1-809": number;
    "1-849": number;
    "1-829": number;
    "593": number;
    "20": number;
    "503": number;
    "240": number;
    "291": number;
    "372": number;
    "251": number;
    "500": number;
    "298": number;
    "679": number;
    "358": number;
    "33": number;
    "689": number;
    "241": number;
    "220": number;
    "995": number;
    "49": number;
    "233": number;
    "350": number;
    "30": number;
    "299": number;
    "1-473": number;
    "1-671": number;
    "502": number;
    "224": number;
    "592": number;
    "509": number;
    "504": number;
    "852": number;
    "36": number;
    "354": number;
    "91": number;
    "62": number;
    "98": number;
    "964": number;
    "353": number;
    "972": number;
    "39": number;
    "225": number;
    "1-876": number;
    "81": number;
    "962": number;
    "254": number;
    "686": number;
    "383": number;
    "965": number;
    "371": number;
    "961": number;
    "266": number;
    "231": number;
    "218": number;
    "423": number;
    "370": number;
    "352": number;
    "389": number;
    "261": number;
    "265": number;
    "60": number;
    "960": number;
    "223": number;
    "356": number;
    "692": number;
    "222": number;
    /** from: https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url */
    "230": number;
    "52": number;
    "691": number;
    "373": number;
    "377": number;
    "976": number;
    "382": number;
    "1-664": number;
    "212": number;
    "258": number;
    "95": number;
    "264": number;
    "674": number;
    "977": number;
    "31": number;
    "687": number;
    "64": number;
    "505": number;
    "227": number;
    "234": number;
    "683": number;
    "1-670": number;
    "47": number;
    "968": number;
    "92": number;
    "680": number;
    "970": number;
    "507": number;
    "675": number;
    "595": number;
    "51": number;
    "63": number;
    "48": number;
    "351": number;
    "1-787, 1-939": number;
    "974": number;
    "242": number;
    "40": number;
    "7": number;
    "250": number;
    "290": number;
    "1-869": number;
    "1-758": number;
    "508": number;
    "1-784": number;
    "685": number;
    "378": number;
    "239": number;
    "966": number;
    "221": number;
    "381": number;
    "248": number;
    "232": number;
    "65": number;
    "386": number;
    "677": number;
    "27": number;
    "211": number;
    "34": number;
    "94": number;
    "249": number;
    "597": number;
    "268": number;
    "46": number;
    "41": number;
    "963": number;
    "886": number;
    "992": number;
    "255": number;
    "66": number;
    "228": number;
    "690": number;
    "676": number;
    "1-868": number;
    "216": number;
    "90": number;
    "993": number;
    "1-649": number;
    "688": number;
    "1-340": number;
    "256": number;
    "380": number;
    "971": number;
    "44": number;
    "1": number;
    "598": number;
    "998": number;
    "678": number;
    "379": number;
    "58": number;
    "681": number;
    "967": number;
    "260": number;
    "263": number;
    "670": number;
    "245": number;
    "856": number;
    "599": number;
    "850": number;
    "262": number;
    "82": number;
    "84": number;
};
export declare const DEFAULT_ORIGIN = "https://web.whatsapp.com";
export declare const MOBILE_ENDPOINT = "g.whatsapp.net";
export declare const MOBILE_PORT = 443;
export declare const DEF_CALLBACK_PREFIX = "CB:";
export declare const DEF_TAG_PREFIX = "TAG:";
export declare const PHONE_CONNECTION_CB = "CB:Pong";
export declare const WA_DEFAULT_EPHEMERAL: number;
export declare const MOBILE_TOKEN: Buffer;
export declare const MOBILE_REGISTRATION_ENDPOINT = "https://v.whatsapp.net/v2";
export declare const MOBILE_USERAGENT = "WhatsApp/2.22.24.81 iOS/15.3.1 Device/Apple-iPhone_7";
export declare const REGISTRATION_PUBLIC_KEY: Buffer;
export declare const NOISE_MODE = "Noise_XX_25519_AESGCM_SHA256\0\0\0\0";
export declare const DICT_VERSION = 2;
export declare const KEY_BUNDLE_TYPE: Buffer;
export declare const NOISE_WA_HEADER: Buffer;
export declare const PROTOCOL_VERSION: number[];
export declare const MOBILE_NOISE_HEADER: Buffer;
/** from: https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url */
export declare const URL_REGEX: RegExp;
export declare const URL_EXCLUDE_REGEX: RegExp;
export declare const WA_CERT_DETAILS: {
    SERIAL: number;
};
export declare const PROCESSABLE_HISTORY_TYPES: proto.Message.HistorySyncNotification.HistorySyncType[];
export declare const DEFAULT_CONNECTION_CONFIG: SocketConfig;
export declare const MEDIA_PATH_MAP: {
    [T in MediaType]?: string;
};
export declare const MEDIA_HKDF_KEY_MAPPING: {
    audio: string;
    document: string;
    gif: string;
    image: string;
    ppic: string;
    product: string;
    ptt: string;
    sticker: string;
    video: string;
    'thumbnail-document': string;
    'thumbnail-image': string;
    'thumbnail-video': string;
    'thumbnail-link': string;
    'md-msg-hist': string;
    'md-app-state': string;
    'product-catalog-image': string;
    'payment-bg-image': string;
};
export declare const MEDIA_KEYS: ("ppic" | "product" | "image" | "video" | "sticker" | "audio" | "gif" | "ptt" | "thumbnail-document" | "thumbnail-image" | "thumbnail-link" | "thumbnail-video" | "md-app-state" | "md-msg-hist" | "document" | "product-catalog-image" | "payment-bg-image")[];
export declare const MIN_PREKEY_COUNT = 5;
export declare const INITIAL_PREKEY_COUNT = 30;
export declare const DEFAULT_CACHE_TTLS: {
    SIGNAL_STORE: number;
    MSG_RETRY: number;
    CALL_OFFER: number;
    USER_DEVICES: number;
};
