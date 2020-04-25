/** @noSelfInFile */

declare namespace Timer {
    function _new(): number;
    function getTime(timer: number): number;
    function setTime(timer: number, msecs: number): void;
    function destroy(timer: number): void;
    function pause(timer: number): void;
    function resume(timer: number): void;
    function reset(timer: number): void;
    function isPlaying(timer: number): boolean;

    export {
        _new as new,
        getTime,
        setTime,
        destroy,
        pause,
        resume,
        reset,
        isPlaying
    }
}