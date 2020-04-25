/** @noSelfInFile */

/** @compileMembersOnly */
declare enum KeyMode {
    MODE_TEXT,
    MODE_PASSWORD
}

/** @compileMembersOnly */
declare enum LVKeyType {
    TYPE_DEFAULT,
    TYPE_LATIN,
    TYPE_NUMBER,
    TYPE_NUMBER_EXT
}

/** @compileMembersOnly */
declare enum KeyOption {
    OPT_MULTILINE,
    OPT_NO_AUTOCAP,
    OPT_NO_ASSISTANCE
}

declare namespace Keyboard {
    function start(title: string, text: string, length?: number, type?: LVKeyType, mode?: KeyMode, opt?: KeyOption): void;
    function getState(): DlgState;
    function getInput(): string;
    function clear(): void;
}