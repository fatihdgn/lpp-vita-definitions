/** @noSelfInFile */

declare namespace Database {
    /**
     * Open/Create an SQLite database.
     * 
     * Usage example:
     * ```
     * let db = Database.open("ur0:shell/db/app.db")
     * ```
     * @param filename Filename of the database to open.
     * @returns A valid database handle.
     */
    function open(filename: string): number;

    /**
     * Close an opened database.
     * 
     * Usage example:
     * ```
     * Database.close(db)
     * ```
     * @param db A valid database handle.
     */
    function close(db: number): void;

    /**
     * Execute a query.
     * 
     * Usage example:
     * ```
     * let results = Database.execQuery(db, "SELECT columnName FROM tableName")
     * Graphics.debugPrint(0, 0, results[0].columnName, Color.new(255, 255, 255))
     * ```
     * @param db A valid database handle.
     * @param query An SQL query to execute.
     * @returns An array with the results of the executed query.
     */
    function execQuery<T>(db: number, query: string) : Array<T>;
}