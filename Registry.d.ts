/** @noSelfInFile */

/** @compileMembersOnly */
declare enum RegType {
    TYPE_STRING,
    TYPE_NUMBER,
    TYPE_BINARY,
}

declare namespace Registry {
    function getKey(
        category: string,
        name: string,
        type: RegType
    ): any;
    function getSysKey(
        id: number,
        type: RegType
    ): any;
    function getSysKey(
        category: string,
        name: string,
        type: RegType,
        value: any,
        size?: number
    ): void;
}