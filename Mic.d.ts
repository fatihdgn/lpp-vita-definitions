/** @noSelfInFile */

declare namespace Mic {
    function start(
        time: number, 
        samplerate: number
    ): number;
    function stop(
        filename: string
    ): void;
    function pause(): void;
    function resume(): void;
    function isRecording(): boolean;
}