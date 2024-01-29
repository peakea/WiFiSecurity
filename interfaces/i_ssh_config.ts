/**
 * Interface for SSH configuration
 */
export interface ISshConfig {
    /**
     * Hostname
     */
    host: string;

    /**
     * Port
     */
    port: number;

    /**
     * Username
     */
    username: string;

    /**
     * Password
     */
    password: string;

    /**
     * Private key
     */
    privateKey: string;

    /**
     * Passphrase
     */
    passphrase: string;
}