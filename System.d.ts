/** @noSelfInFile */

/** @compileMembersOnly */
declare enum IOFlags {
    FREAD,
    FWRITE,
    FRDWR,
    FCREATE
}

/** @compileMembersOnly */
declare enum IOSeek {
    SET,
    CUR,
    END
}

/** @compileMembersOnly */
declare enum PowerTimer {
    AUTO_SUSPEND_TIMER,
    SCREEN_OFF_TIMER,
    SCREEN_DIMMING_TIMER
}

/** @compileMembersOnly */
declare enum ImgFmt {
    FORMAT_BMP,
    FORMAT_JPG,
    FORMAT_PNG
}

/** @compileMembersOnly */
declare enum BtnMode {
    BUTTON_NONE,
    BUTTON_OK,
    BUTTON_CANCEL,
    BUTTON_OK_CANCEL,
    BUTTON_YES_NO
}

/** @compileMembersOnly */
declare enum DlgState {
    RUNNING,
    FINISHED,
    CANCELED
}

/** @compileMembersOnly */
declare enum MntPerm {
    READ_ONLY,
    READ_WRITE
}

declare interface SFO {
    version: string;
    title: string;
    category: string;
    titleid: string;
}

declare interface FileStats {
    access_time: LPPVDate;
    creation_time: LPPVDate;
    mod_time: LPPVDate;
    size: number;
    directory: boolean;
}

declare interface DirEntryStats {
    name: string;
    size: number;
    directory: boolean;
}

declare interface LPPVDate {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
}

declare namespace System {
    function openFile(
        filename: string,
        flags: IOFlags
    ): number;
    function writeFile(
        handle: number,
        text: string,
        len: number
    ): void;
    function readFile(
        handle: number,
        len: number
    ): string;
    function seekFile(
        handle: number,
        pos: number,
        seek: IOSeek
    ): void;
    function sizeFile(
        handle: number
    ): number;
    function statFile(
        filename: string
    ): FileStats;
    function statOpenedFile(
        handle: number
    ): FileStats;
    function closeFile(
        handle: number
    ): void;
    function doesFileExists(
        filename: string
    ): boolean;
    function doesDirExists(
        dirname: string
    ): boolean;
    function rename(
        filename: string,
        filename2: string
    ): void;
    function copyFile(
        filename: string,
        filename2: string
    ): void;
    function deleteFile(
        filename: string
    ): void;
    function deleteDirectory(
        dirname: string
    ): void;
    function createDirectory(
        dirname: string
    ): void;
    function listDirectory(
        dirname: string
    ): { [index: number]: DirEntryStats }
    function exit(): void;
    function getFirmware(): string;
    function getSpoofedFirmware(): string;
    function getFactoryFirmware(): string;
    function wait(msecs: number): void;
    function isBatteryCharging(): boolean;
    function getBatteryPercentage(): number;
    function getBatteryLife(): number;
    function getBatteryCapacity(): number;
    function getBatteryFullCapacity(): number;
    function getBatteryTemp(): number;
    function getBatteryVolt(): number;
    function getBatteryHealth(): number;
    function getBatteryCycles(): number;
    function disableTimer(timer: PowerTimer): void;
    function enableTimer(timer: PowerTimer): void;
    function setCpuSpeed(clock: number): void;
    function setGpuSpeed(clock: number): void;
    function setBusSpeed(clock: number): void;
    function getCpuSpeed(): number;
    function getGpuSpeed(): number;
    function getBusSpeed(): number;
    function getGpuXbarSpeed(): number;
    function launchEboot(filename: string): void;
    function launchApp(titleid: string): void;
    function getFreeSpace(dev: string): number;
    function getTotalSpace(dev: string): number;
    function getTime(): LuaMultiReturn<[number, number, number]>;
    function getDate(): LuaMultiReturn<[number, number, number, number]>;
    function getUsername(): string;
    function getLanguage(): number;
    function getModel(): number;
    function getPsId(): string;
    function getTitle(): string;
    function getTitleId(): string;
    function extractSfo(
        filename: string
    ): SFO;
    function extractZip(
        filename: string,
        dirname: string
    ): number;
    function extractFromZip(
        filename: string,
        file: string,
        destname: string,
    ): void;
    function extractZipAsync(
        filename: string,
        dirname: string
    ): void;
    function extractFromZipAsync(
        filename: string,
        file: string,
        destname: string
    ): void;
    function compressZip(
        path: string,
        filename: string,
        ratio?: number
    ): void;
    function addToZip(
        path: string,
        filename: string,
        parent: string,
        ratio?: number
    ): void;
    function getAsyncState(): number;
    function getAsyncResult(): string;
    function takeScreenshot(
        filename: string,
        format?: ImgFmt,
        ratio?: number
    ): void;
    function executeUri(
        uri: string
    ): void;
    function reboot(): number;
    function shutdown(): number;
    function standby(): number;
    function isSafeMode(): boolean;
    function setMessage(
        text: string,
        progressbar: boolean,
        buttons?: BtnMode
    ): void;
    function getMessageState(): DlgState;
    function setMessageProgress(
        progress: number
    ): void;
    function setMessageProgMsg(
        text: string
    ): void;
    function closeMessage(): void;
    function unmountPartition(
        idx: number
    ): void;
    function mountPartition(
        idx: number,
        perms: MntPerm
    ): void;
    function uninstallApp(
        titleid: string
    ): void;
    function doesAppExist(
        titleid: string
    ): boolean;
    function getBootParams(): string;
    function loadUserPlugin(
        path: string
    ): number;
    function loadKernelPlugin(
        path: string
    ): number;
    function unloadUserPlugin(
        plug_id: number
    ): void;
    function unmountMountpoint(
        mnt: string
    ): void;
}