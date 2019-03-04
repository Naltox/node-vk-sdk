export interface BaseLogger {
    log(prefix: string, data?: any): void
    warn(prefix: string, data?: any): void
    error(prefix: string, data?: any): void
}