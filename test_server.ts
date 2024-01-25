import { CodeGen } from './code_gen';
import { config } from './config';
import { exec } from 'child_process';

/**
 * A simple test server example
 */
const codeGen = new CodeGen(
    config.otp.ssidSecret,
    config.otp.passwordSecret,
    config.otp.service,
    config.otp.step,
    config.otp.length,
    config.otp.hashAlgorithm
);

/**
 *  Call update every n minutes
 * 
 * @param {number} setInterval how often to call update in milliseconds
 */
function Start(interval:number) {
    codeGen.Setup();
    console.log('start');
    // Update every n milliseconds
    setInterval(Update, interval);
}

/**
 * Generate a new username and password and set the router to use them
 */
function Update() {
    const time = codeGen.getTime(config.otp.step);
    console.log('OTP Update', time);
    // Only update if the time has changed
    if(time > lastTime) {
        lastTime = time;
        const credentials = codeGen.Generate();
        // Create the hotspot
        CreateHotspot(credentials.ssid, credentials.password);
    }
}

/**
 * Create a hotspot with the given ssid and password
 */
function CreateHotspot(ssid: string, password: string) {
    console.log('create hotspot', ssid, password);
    // Create hotspot using the given ssid and password on terminal
    exec(`netsh wlan set hostednetwork mode=allow ssid=${ssid} key=${password}`, (err, stdout, stderr) => {
        if (err) {
            // node couldn't execute the command
            console.log('error', err);
            return;
        }

        // the *entire* stdout and stderr (buffered)
        console.log('stdout', stdout);
        console.log('stderr', stderr);
    }
    );
}

/**
 * The last time the OTP was updated
 * this is time in seconds since epoch divided by the step
 */
let lastTime = 0;

// Start the application
Start(1000);