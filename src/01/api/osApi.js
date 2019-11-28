const os = require("os");
const freeMen = os.freemem();
const totalMen = os.totalmem();
console.log(`${((freeMen / totalMen) * 100).toFixed(2)}%`);
console.log(os.cpus());
