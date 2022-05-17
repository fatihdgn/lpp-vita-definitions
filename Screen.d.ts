/** @noSelfInFile */

declare namespace Screen {
    function clear(
        clr?: number
    ): void;
    function flip(): void;
    function getPixel(
        x: number, 
        y: number
    ): number;
    function waitVblankStart(): void;
}