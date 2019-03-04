export interface BaseUpdateProvider {
    getUpdates(callback: (update: any) => void): void
}