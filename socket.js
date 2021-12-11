let io;

module.exports = {
    init: httpServer => {
        io = require('socket.io')(httpServer, {
            cors: {
                origin: "*",
                credentials: true
            }
        });
        return io;
    },
    getIO: () => {
        if (!io) {
            throw new Error('Socket.io not initialized!');
        }
        return io;
    },
    getNoOfUserConnected: () => {
        if (!io) {
            throw new Error('Socket.io not initialized!');
        } 
        // console.log(">>>>>>ddddd>",io.engine.clientsCount);
        // console.log(">>>>>>>",io.sockets.sockets.length); 
        return io.engine.clientsCount;
    }
};
1