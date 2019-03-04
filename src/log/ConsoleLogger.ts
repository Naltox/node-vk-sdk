import {format} from 'util'
import {BaseLogger} from "./BaseLogger";

class ColorCodes {
    static RED = '\x1b[31m'
    static CYAN = '\x1b[36m'
    static YELLOW = '\x1b[33m'
    static RESET = '\x1b[0m'
}

export class ConsoleLogger implements BaseLogger {
    public log(prefix: string, data?: any) {
        this.prepareLog(ColorCodes.CYAN, 'log', prefix, data)
    }

    public warn(prefix: string, data?: any) {
        this.prepareLog(ColorCodes.YELLOW, 'warn', prefix, data)
    }

    public error(prefix: string, data?: any) {
        this.prepareLog(ColorCodes.RED, 'error', prefix, data)
    }

    private prepareLog(color: ColorCodes, tag: string, prefix: string, data?: any) {
        const time = new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1')
        process.stdout.write(`${time} ${color}[${tag}]${ColorCodes.RESET} ${prefix} ${format(data || '')} \n`)
    }
}