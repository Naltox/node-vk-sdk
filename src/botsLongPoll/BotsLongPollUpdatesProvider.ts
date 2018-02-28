import {BaseUpdateProvider} from "./BaseUpdateProvider";
import {VKApi} from "../VKApi";
const req = require('tiny_request')

export class BotsLongPollUpdatesProvider implements BaseUpdateProvider {
    private server: string
    private key: string
    private ts: number
    private updatesCallback: (update: any) => void

    constructor(
        private api: VKApi,
        private groupId: number
    ) {
        this.init()
    }

    public getUpdates(callback: (update: any) => void) {
        this.updatesCallback = callback
    }

    private async init() {
        let longPollServer = await this.api.groupsGetLongPollServer({
            group_id: this.groupId
        })

        this.server = longPollServer.server
        this.key = longPollServer.key
        this.ts = longPollServer.ts

        this.poll()
    }

    private poll() {
        req.get(
            {
                url: `${this.server}?act=a_check&key=${this.key}&ts=${this.ts}&wait=25`,
                json: true
            },
            (body, response, err) => {
                if (!err && response.statusCode == 200) {
                    this.ts = body.ts

                    if (this.updatesCallback)
                        this.updatesCallback(body.updates)

                    this.poll()
                    return
                }

                this.poll()
            }
        )
    }
}