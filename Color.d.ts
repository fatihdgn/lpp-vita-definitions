/** @noSelfInFile */

declare namespace Color {
    /**
     * Create a new color.
     * 
     * Usage example:
     * ```
     * let my_color = Color.new(255, 200, 100, 255)
     * ```
     * @param r R channel value.
     * @param g G channel value.
     * @param b B channel value.
     * @param a A channel value (optional).
     * @returns The combined RGBA color.
     */
    function _new(
        r: number, 
        g: number, 
        b: number, 
        a?: number
    ): number;
    function getR(
        clr: number
    ): number;
    function getG(
        clr: number
    ): number;
    function getB(
        clr: number
    ): number;
    function getA(
        clr: number
    ): number;

    // https://stackoverflow.com/a/60053077
    export { 
        _new as new,
        getR,
        getG,
        getB,
        getA 
    }
}