export interface BaseLogger {
    log(prefix: string, data?: any)
    warn(prefix: string, data?: any)
    error(prefix: string, data?: any)
}