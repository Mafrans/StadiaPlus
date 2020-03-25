import Logger from "./Logger";

export class Database {
    url: string;
    connected: boolean;
    connection: object;
    
    constructor(url: string) {
        this.url = url;
    }

    connect(callback?: (connection:object) => {}) {
        if(this.connected) {
            Logger.error('Error: Already connected to the database.');
            return;
        }

        const self = this;
        const xhr = new XMLHttpRequest();
        xhr.open("GET", this.url, true);
        xhr.onload = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    self.connected = true;
                    console.log(xhr);
                    self.connection = JSON.parse(xhr.responseText);
                    if(callback)
                        callback(self.connection);
                }
                else {
                    self.connected = false;
                    Logger.error('Error when connecting to database:', xhr.statusText);
                }
            }
        };
        xhr.onerror = function (e) {
            self.connected = false;
            Logger.error('Error when connecting to database:', xhr.statusText);
        };
        xhr.send(null); 
    }

    getConnection(): object {
        if(!this.connected) {
            Logger.error('Error: Not connected to the database');
            return null;
        }
        return this.connection;
    }

    disconnect() {
        this.connection = null;
        this.connected = false;
    }

    reconnect(callback?: (connection:object) => {}) {
        this.disconnect();
        this.connect(callback);
    }
}