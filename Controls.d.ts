/** @noSelfInFile */

/** @compileMembersOnly */
declare enum DevType {
    UNPAIRED_DEV,
    VITA_DEV,
    VIRTUAL_DEV,
    DS3_DEV,
    DS4_DEV
}

/** @compileMembersOnly */
declare enum Ctrl {
    SCE_CTRL_UP,
    SCE_CTRL_DOWN,
    SCE_CTRL_LEFT,
    SCE_CTRL_RIGHT,
    SCE_CTRL_CROSS,
    SCE_CTRL_CIRCLE,
    SCE_CTRL_SQUARE,
    SCE_CTRL_TRIANGLE,
    SCE_CTRL_LTRIGGER,
    SCE_CTRL_RTRIGGER,
    SCE_CTRL_START,
    SCE_CTRL_SELECT,
    SCE_CTRL_POWER,
    SCE_CTRL_VOLUP,
    SCE_CTRL_VOLDOWN,
    SCE_CTRL_PSBUTTON
}

declare namespace Controls {
    function read(): number;
    /** @tupleReturn */
    function readLeftAnalog(): [number, number];
    /** @tupleReturn */
    function readRightAnalog(): [number, number];
    /** @tupleReturn */
    function readTouch(): [number, number, number, number];
    /** @tupleReturn */
    function readRetroTouch(): [number, number, number, number];
    function check(bitmask: number, value: Ctrl): boolean;
    function rumble(port: number, small: number, large: number): void;
    function setLightbar(port: number, color: number): void;
    function lockHomeButton(): void;
    function unlockHomeButton(): void;
    function getDeviceInfo(): any; // TODO: Investigate getDeviceInfo
    function headsetStatus(): boolean;
    function getEnterButton(): Ctrl;
    function enableGyro(): void;
    function enableAccel(): void;
    function disableGyro(): void;
    function disableAccel(): void;
    /** @tupleReturn */
    function readGyro(): [number, number, number];
    /** @tupleReturn */
    function readAccel(): [number, number, number];
}