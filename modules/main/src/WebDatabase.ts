import Logger from './logger';

export class WebDatabase {
    url: string;
    connected = false;
    connection: unknown;

    constructor(url: string) {
        this.url = url;
    }

    connect(): Promise<unknown> {
        return new Promise((resolve, reject) => {
            if (this.connected) {
                Logger.error('Error: Already connected to the database.');
                return;
            }

            const xhr = new XMLHttpRequest();
            xhr.open('GET', this.url, true);
            xhr.onload = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        this.connected = true;
                        this.connection = JSON.parse(xhr.responseText);
                        resolve(this.connection);
                    } else {
                        this.connected = false;
                        reject();
                        Logger.error('Error when connecting to database:', xhr.statusText);
                    }
                }
            };

            xhr.onerror = () => {
                this.connected = false;
                reject();
                Logger.error('Error when connecting to database:', xhr.statusText);
            };

            xhr.send(null);
        });
    }

    getConnection(): unknown {
        if (!this.connected) {
            Logger.error('Error: Not connected to the database');
            return null;
        }
        return this.connection;
    }

    disconnect(): void {
        this.connection = null;
        this.connected = false;
    }

    async reconnect(): Promise<unknown> {
        this.disconnect();
        return this.connect();
    }
}
