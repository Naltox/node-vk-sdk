export type AsyncQueue<T> = { run(handler: () => Promise<T>): Promise<T> }

export function createQueue<T>(callsPerSec: number): AsyncQueue<T> {
    let queue: (() => void)[] = []

    setInterval(() => {
        if (queue.length !== 0) {
            const handler = queue.shift()
            if (handler)
                handler()
        }
    }, 1000 / callsPerSec)

    return {
        run: async function(handler: () => Promise<T>): Promise<T> {
            await new Promise(resolve => queue.push(resolve))
            return handler()
        }
    }
}

export function delay(ms: number) {
    return new Promise(resolve => setInterval(resolve, ms))
}