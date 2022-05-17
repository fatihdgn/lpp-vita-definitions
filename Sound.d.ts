/** @noSelfInFile */

/** @compileMembersOnly */
declare enum ShutterId {
    IMAGE_CAPTURE,
    VIDEO_CAPTURE_START,
    VIDEO_CAPTURE_END,
}

declare namespace Sound {
    function init(): void;
    function term(): void;
    function open(
        filename: string
    ): number;
    function play(
        music: number, 
        loop?: boolean
    ): void;
    function pause(
        music: number
    ): void;
    function resume(
        music: number
    ): void;
    function close(
        music: number
    ): void;
    function isPlaying(
        music: number
    ): boolean;
    function setVolume(
        music: number, 
        volume: number
    ): void;
    function getVolume(
        music: number
    ) : number;
    function getTitle(
        music: number
    ) : string;
    function getAuthor(
        music: number
    ) : string;
    function playShutter(
        id: ShutterId
    ) : void;
}