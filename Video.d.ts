/** @noSelfInFile */

/** @compileMembersOnly */
declare enum PlayMode {
    NORMAL_MODE,
    FAST_FORWARD_2X_MODE,
    FAST_FORWARD_4X_MODE,
    FAST_FORWARD_8X_MODE,
    FAST_FORWARD_16X_MODE,
    FAST_FORWARD_32X_MODE
}

declare namespace Video {
    function init(): void;
    function term(): void;
    function open(
        filename: string, 
        loop?: boolean
    ): void;
    function close(): void;
    function getOutput(): number;
    function pause(): void;
    function resume(): void;
    function isPlaying(): boolean;
    function setVolume(volume: number): void;
    function getVolume(): number;
    function getTime(): number;
    function jumpToTime(
        time: number
    ): void;
    function setPlayMode(
        mode: PlayMode
    ): void;
    function openSubs(
        fname: string
    ): void;
    function closeSubs(): void;
    function getSubs(): string;
}