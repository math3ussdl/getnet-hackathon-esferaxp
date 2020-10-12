const exec = require('child_process').exec;
const os = require('os');

if (os.type() === 'Linux') {
  exec("BROWSER='google-chrome-stable' react-scripts start");
} else if (os.type() === 'Darwin') {
  exec("BROWSER='google chrome' react-scripts start");
} else if (os.type() === 'Windows_NT') {
  exec("BROWSER='chrome' react-scripts start");
} else {
  throw new Error(`Unsupported OS found: ${os.type()}`);
}
