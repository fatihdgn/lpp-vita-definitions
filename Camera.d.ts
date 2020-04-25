/** @noSelfInFile */

/** @compileMembersOnly */
declare enum CameraType {
    INNER_CAM,
    OUTER_CAM
}

/** @compileMembersOnly */
declare enum CameraRes {
    VGA_RES,
    QVGA_RES,
    QQVGA_RES,
    CIF_RES,
    QCIF_RES,
    PSP_RES,
    NGP_RES
}

/** @compileMembersOnly */
declare enum CameraAntiFlick {
    ANTIFLICKER_AUTO,
    ANTIFLICKER_50HZ,
    ANTIFLICKER_60HZ
}

/** @compileMembersOnly */
declare enum CameraISO {
    ISO_AUTO,
    ISO_100,
    ISO_200,
    ISO_400
}

/** @compileMembersOnly */
declare enum CameraWB {
    WB_AUTO,
    WB_DAYLIGHT,
    WB_CWF,
    WB_SLSA
}

/** @compileMembersOnly */
declare enum CameraBacklight {
    BACKLIGHT_OFF,
    BACKLIGHT_ON
}

/** @compileMembersOnly */
declare enum CameraNightmode {
    NIGHTMODE_OFF,
    NIGHTMODE_LOW,
    NIGHTMODE_MED,
    NIGHTMODE_HIGH
}

/** @compileMembersOnly */
declare enum CameraReverse {
    REVERSE_OFF,
    REVERSE_MIRROR,
    REVERSE_FLIP,
    REVERSE_BOTH
}

/** @compileMembersOnly */
declare enum CameraEffect {
    EFFECT_NONE,
    EFFECT_NEGATIVE,
    EFFECT_BLACKWHITE,
    EFFECT_SEPIA,
    EFFECT_BLUE,
    EFFECT_RED,
    EFFECT_GREEN
}

declare namespace Camera {
    function init(type: CameraType, resolution: CameraRes, framerate: number): void;
    function term(): void;
    function getOutput(): number;
    function setBrightness(value: number): void;
    function getBrightness(): number;
    function setSaturation(value: number): void;
    function getSaturation(): number;
    function setSharpness(value: number): void;
    function getSharpness(): number;
    function setContrast(value: number): void;
    function getContrast(): number;
    function setReverse(mode: CameraReverse): void;
    function getReverse(): CameraReverse;
    function setEffect(effect: CameraEffect): void;
    function getEffect(): CameraEffect;
    function setZoom(value: number): void;
    function getZoom(): number;
    function setAntiFlicker(mode: CameraAntiFlick): void;
    function getAntiFlicker(): CameraAntiFlick;
    function setISO(mode: CameraISO): void;
    function getISO(): CameraISO;
    function setGain(value: number): void;
    function getGain(): number;
    function setWhiteBalance(mode: CameraWB): void;
    function getWhiteBalance(): CameraWB;
    function setBacklight(mode: CameraBacklight): void;
    function getBacklight(): CameraBacklight;
    function setNightmode(value: CameraNightmode): void;
    function getNightmode(): CameraNightmode;
}