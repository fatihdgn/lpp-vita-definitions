/** @noSelfInFile */

/** @compileMembersOnly */
declare enum HTTPMethod {
    GET_METHOD,
    POST_METHOD,
    HEAD_METHOD,
    OPTIONS_METHOD,
    PUT_METHOD,
    DELETE_METHOD,
    TRACE_METHOD,
    CONNECT_METHOD
}

declare namespace Network {
    function init(): void;
    function term(): void;
    function initFTP(): void;
    function termFTP(): void;
    function getIPAddress(): string;
    function getMacAdddress(): string;
    function isWifiEnabled(): boolean;
    function getWifiLevel(): number;
    function downloadFile(url: string, file: string, useragent?: string, method?: HTTPMethod, postdata?: string): void;
    function downloadFileAsync(url: string, file: string, useragent?: string, method?: HTTPMethod, postdata?: string): void;
    function requestString(url: string, useragent?: string, method?: HTTPMethod, postdata?: string): void;
    function requestStringAsync(url: string, useragent?: string, method?: HTTPMethod, postdata?: string): void;

}