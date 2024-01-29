# WiFiSecurity

Authenticators, which utilize lengthy security keys to generate numbers, present an intriguing concept that can be adapted to domestic WiFi networks, prompting a system that periodically changes the SSID and password keys. Envision this a security system with the capability to evolve persistently by utilizing one time bound code for the SSID and a separate time bound code for the password. This would allow devices to swiftly correlate a real-time dynamic SSID and WiFi key, valid for a specific and fixed time constraint. The result would be a formidable shield of dynamically evolving WiFi security. Even though attackers might still manage to eavesdrop on traffic after transmission, the constantly shifting nature of this system would hinder their attempts to gain real time network access. In essence, these key evolutions could switch faster than they can feasibly be cracked. Further, with the SSID changing each interval it becomes harder for attackers to target specific networks especially when other networks also utilize this technology in their proximity.

Copy defaultConfig.json to config.json in the dist folder to get started

The Windows hotspot server test must be run with administrative privileges.

I plan to make a PI test server after I create a working test client.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
