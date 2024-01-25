/**
 * Configure the application
 */
export const config = {
    ssh: {
        host: "192.168.0.1",
        port: 22,
        username: "admin",
        password: "admin",
    },
    otp: {
        service: "WiFi Generator",
        ssidSecret: "965c598c9abc666b1334d4483d8b0b4b8cab764c0284f6ed6072586585888fa02e961c310a",
        passwordSecret: "911484bddacd351cca6eafcd16884f338d712a2ddf1d4989f3f852d6728575b7039c9173a4",
        length: 32,
        // step every 5 minutes
        // step: 300,
        // step every 0 seconds for testing
        step: 20,
        hashAlgorithm: "sha512",
    },
};
