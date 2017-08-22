"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
App_1.default.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${App_1.default.info.uri}`);
});
//# sourceMappingURL=server.js.map