import { IOtpConfig } from "./i_otp_config";
import { ISshConfig } from "./i_ssh_config";

/**
 * Interface for server configuration
 */
export interface IServerConfig {
    /**
     * SSH configuration
     */
    ssh: ISshConfig;

    /**
     * OTP configuration
     */
    otp: IOtpConfig;
}