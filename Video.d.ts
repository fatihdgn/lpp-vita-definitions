/** @noSelfInFile */

declare namespace Video {
    function init(): void;
    function term(): void;
    function open(filename: string, loop: boolean): void;
    function close(): void;
    function getOutput(): number;
    function pause(): void;
    function resume(): void;
    function isPlaying(): boolean;
    function setVolume(volume: number): void;
    function getVolume(): number; 
}