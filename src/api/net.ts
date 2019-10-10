const req = require('tiny_request')

export async function postRequest(url: string, query: { [key: string]: any }, timeout = 5000): Promise<{ body: any, response: any, err: Error }> {
    return new Promise<any>((resolve, reject) => {
        req.post({ url, form: query, json: true, timeout }, (body: any, response: any, err: Error) => {
            resolve({ body, response, err })
        })
    })
}
