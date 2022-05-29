/** @noSelfInFile */

/** @compileMembersOnly */
declare enum GuiTheme {
    DARK_THEME,
    LIGHT_THEME,
    CLASSIC_THEME
}

/** @compileMembersOnly */
declare enum WinFlags {
    FLAG_NONE,
    FLAG_NO_COLLAPSE,
    FLAG_NO_MOVE,
    FLAG_NO_RESIZE,
    FLAG_NO_SCROLLBAR,
    FLAG_NO_TITLEBAR,
    FLAG_HORIZONTAL_SCROLLBAR
}

/** @compileMembersOnly */
declare enum ConfigMode {
    SET_ONCE,
    SET_ALWAYS
}

declare namespace Gui {
    function init(): void;
    function term(): void;
    function initBlend(): void;
    function termBlend(): void;
    function setTheme(
        theme: GuiTheme
    ): void;
    function setInputMode(
        use_touch: boolean, 
        use_rear: boolean, 
        use_buttons: boolean, 
        indirect_touch: boolean
    ): void;
    function initMainMenubar(): boolean;
    function termMainMenubar(): void;
    function initMenu(
        label: string, 
        enabled?: boolean
    ): boolean;
    function termMenu(): void;
    function drawMenuItem(
        label: string, 
        selected?: boolean, 
        enabled?: boolean
    ): boolean;
    function drawText(
        label: string, 
        color: number
    ): void;
    function getTextSize(
        text: string
    ): LuaMultiReturn<[number, number]>;
    function drawDisabledText(
        label: string
    ): void;
    function drawWrappedText(
        label: string
    ): void;
    function drawButton(
        label: string, 
        width?: number, 
        height?: number
    ): boolean;
    function drawCheckbox(
        label: string, 
        status: boolean
    ): boolean;
    function drawRadioButton(
        label: string, 
        status: boolean
    ): boolean;
    function resetLine(): void;
    function initWindow(
        label: string, 
        flags: WinFlags
    ): void;
    function termWindow(): void;
    function setWindowPos(
        x: number, 
        y: number, 
        mode: ConfigMode
    ): void;
    function setWindowSize(
        w: number, 
        h: number, 
        mode: ConfigMode
    ): void;
    function drawSeperator(): void;
    function drawTooltip(
        label: string
    ): void;
    function drawSlider(
        label: string, 
        val_min: number, 
        val_max: number, 
        val1: number, 
        val2?: number, 
        val3?: number, 
        val4?: number
    ): LuaMultiReturn<[number, number?, number?, number?]>;
    function drawIntSlider(
        label: string, 
        val_min: number, 
        val_max: number, 
        val1: number, 
        val2?: number, 
        val3?: number, 
        val4?: number
    ): LuaMultiReturn<[number, number?, number?, number?]>;
    function drawComboBox(
        label: string, 
        index: number, 
        elements: any[]
    ): number;
    function drawListBox(
        label: string, 
        index: number, 
        elements: any[]
    ): number;
    function drawColorPicker(
        label: string, 
        color: number, 
        alpha?: boolean
    ): number;
    function drawProgressbar(
        fraction: number, 
        w?: number, 
        h?: number
    ): void;
    function drawImage(
        img: number, 
        width?: number, 
        height?: number,
        img_x?: number,
        img_y?: number,
        img_w?: number,
        img_h?: number,
        color?: number,
    ): void;
    function setWidgetPos(
        x: number, 
        y: number
    ): void;
    function setWidgetWidth(
        w: number
    ): void;
    function resetWidgetPos(): void;
}