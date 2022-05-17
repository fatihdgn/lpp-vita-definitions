/** @noSelfInFile */

declare namespace Render {
    function createVertex(
        x: number, 
        y: number, 
        z: number, 
        u: number, 
        v: number, 
        n1: number, 
        n2: number, 
        n3: number
    ): number;
    function destroyVertex(
        v: number
    ): void;
    function loadModel(
        v: any, 
        texture: number
    ): number; // Investigate table
    function loadObject(
        filename: string, 
        texture: number
    ): number;
    function unloadModel(
        model: number
    ): void;
    function drawModel(
        model: number, 
        x: number, 
        y: number, 
        z: number, 
        angleX: number, 
        angleY: number, 
        angleZ: number, 
        unbind?: boolean
    ): void;
    function useTexture(
        model: number, 
        texture: number
    ): void;
    function setCamera(
        x: number, 
        y: number, 
        z: number, 
        rot_x: number, 
        rot_y: number, 
        rot_z: number
    ): void;
}