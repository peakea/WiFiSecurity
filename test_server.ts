import { CodeGen } from './code_gen';
import { config } from './config';

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
    Update();
    setInterval(Update, interval);
}

/**
 * Generate a new username and password and set the router to use them
 */
function Update() {
    console.log('OTP Update');
    codeGen.Generate();
}

// Start the application
Start(config.otp.step * 1000);