export interface AppdataManifest {
    'cache-version': number;
    'clear-keys': {
        local: string[];
        sync: string[];
    };
}
