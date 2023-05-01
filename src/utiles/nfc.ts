export async function nfcScan()  {
    try {
        const reader = new NDEFReader()

        await reader.scan()
      
        // Scanは起動しているが、NFCタグからデータが読み込めなかった
        reader.addEventListener('error', (event) => {
            //エラー画面に切り替える
            return {
                'status': 501,
                'detail': 'Unreadable',
                'trace': event
            }
        })

        // データを読み込んだ
        reader.addEventListener('reading', (event) => { 
            const { serialNumber } = event as NDEFReadingEvent

            return {
                'status': 200,
                'data': serialNumber
            }
        })
    } catch (error) {
        console.error(error)
        return {
            'status': 500,
            'detail': 'Unreadable',
            'trace': error
        }
    }
  }