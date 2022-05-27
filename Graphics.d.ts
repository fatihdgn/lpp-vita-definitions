/** @noSelfInFile */

/** @compileMembersOnly */
declare enum ImageFilter {
    FILTER_POINT,
    FILTER_LINEAR
}

declare namespace Graphics {
    function initBlend(): void;
    function termBlend(): void;
    function debugPrint(
        x: number, 
        y: number, 
        text: string, 
        color: number
    ): void;
    function drawPixel(
        x: number, 
        y: number, 
        color: number, 
        image?: number
    ): void;
    function getPixel(
        x: number, 
        y: number, 
        img: number
    ): number;
    function drawLine(
        x1: number, 
        x2: number, 
        y1: number, 
        y2: number, 
        color: number
    ): void;
    function fillRect(
        x1: number, 
        x2: number, 
        y1: number, 
        y2: number, 
        color: number
    ): void;
    function fillEmptyRect(
        x1: number, 
        x2: number, 
        y1: number, 
        y2: number, 
        color: number
    ): void;
    function fillCircle(
        x1: number, 
        x2: number, 
        rad: number, 
        color: number
    ): void;
    function createImage(
        width: number, 
        height: number, 
        color?: number
    ): number;
    function loadImage(
        filename: string
    ): number;
    function loadImageAsync(
        filename: string
    ) : void;
    function loadAnimatedImage(
        filename: string
    ) : number;
    function getImageFramesNum(
        img: number
    ) : number;
    function setImageFrame(
        img: number, 
        frame: number
    ) : void;
    function freeImage(
        img: number
    ): void;
    function setImageFilters(
        img: number, 
        min_filter: ImageFilter, 
        mag_filter: ImageFilter
    ): void;
    function getImageWidth(
        img: number
    ): number;
    function getImageHeight(
        img: number
    ): number;
    function drawImage(
        x: number, 
        y: number, 
        img: number, 
        color?: number
    ): void;
    function drawRotateImage(
        x: number, 
        y: number, 
        img: number, 
        rad: number, 
        color?: number
    ): void;
    function drawScaleImage(
        x: number, 
        y: number, 
        img: number, 
        x_scale: number, 
        y_scale: number, 
        color?: number
    ): void;
    function drawPartialImage(
        x: number, 
        y: number, 
        img: number, 
        x_start: number, 
        y_start: number, 
        width: number, 
        height: number, 
        color?: number
    ): void;
    function drawImageExtended(
        x: number, 
        y: number, 
        img: number, 
        x_start: number, 
        y_start: number, 
        width: number, 
        height: number, 
        rad: number, 
        x_scale: number, 
        y_scale: number, 
        color?: number
    ): void;
    function initRescaler(
        x: number, 
        y: number, 
        x_scale: number, 
        y_scale: number
    ): void;
    function termRescaler(): void;
}