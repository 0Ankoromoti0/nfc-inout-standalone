import { getUserInfo } from "../api/userinfo"
import { nfcOnError } from "./errorhandler"

export async function nfcScan() {
    
    try {
        const reader = new NDEFReader()
        
        await reader.scan()
      
        // Scanは起動しているが、NFCタグからデータが読み込めなかった
        reader.addEventListener('error', (event) => {
            //エラー画面に切り替える
            nfcOnError(
                'Unreadable',
                event
            )
        })

        // データを読み込んだ
        reader.addEventListener('reading', (event) => { 
            const { serialNumber } = event as NDEFReadingEvent
            nfcOnRead(
                serialNumber
            )
        })
    } catch (error) {
        console.error(error)
        nfcOnError(
            'Unavailable',
            error
        )
    }
}
export function nfcOnRead(serialNumber: string) {
    const userInfo = getUserInfo(serialNumber)
    userInfo["lineID"]
}
