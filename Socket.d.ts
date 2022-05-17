/** @noSelfInFile */

/** @compileMembersOnly */
declare enum NetProtocol {
    TCP_SOCKET,
    UDP_SOCKET
}

declare namespace Socket {
    function createServerSocket(
        port: number, 
        protocol?: NetProtocol
    ): number;
    function connect(
        host: string, 
        port: number, 
        protocol?: NetProtocol
    ): number;
    function send(
        sock: number, 
        data: string
    ): number;
    function receive(
        sock: number, 
        size: number
    ) : string;
    function accept(
        sock: number
    ): number;
    function close(
        sock: number
    ): void;
}