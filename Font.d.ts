/** @noSelfInFile */

declare namespace Font{
    function load(filename: string): number;
    function unload(font: number): void;
    function setPixelSizes(font: number, size: number): void;
    function print(font: number, x: number, y: number, text: string, color: number): void;
}