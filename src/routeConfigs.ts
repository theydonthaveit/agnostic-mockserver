import * as Yaml from 'yamljs';
import * as Fs from 'fs';

class RouteConfig {
    public Configs

    constructor() {
        this.Configs = this.readConfig()
    }

    private retrieveConfigs() {
        let files = Fs.readdirSync('.')
        return files
    }

    private readConfig() {
        const Files = this.retrieveConfigs()
        let currentFile
        let yamlFile

        for ( let file of Files ) {
            if ( file.match(/yml/) ) {
                currentFile = file
            }
        }
    
        return yamlFile = Yaml.load(`${currentFile}`)
    }
}

export default RouteConfig