async function startscan()  {
    console.log('オレンジ')
    try {
        const reader = new NDEFReader()
        await reader.scan()
      
        // Scanは起動しているが、NFCタグからデータが読み込めなかった
        reader.addEventListener('error', (event) => {
          console.log(error)
          divelement.textContent = 'エラー'
          //エラー画面に切り替える
        })
      
        // データを読み込んだ
        reader.addEventListener('reading', ({ serialNumber, message }) => {
            //成功画面に切り替える

            /*const record = message.records[0]
            const { dataRead, recordType } = record*/
            divelement.textContent = 'hello'
            // recordTypeごとにdecode処理を実行する
            
            let dataUser
            try {
              dataUser = localStorage.getItem(serialNumber)
            } catch (error) {
              //エラー画面に切り替える
            }
            if (dataUser) {
                const textSend = dataUser["name"] + "さんが" + dataUser["status"] ? "入室" : "退室" + "しました。"
                const dataSend = {
                    "to":dataUser["lineID"],
                    "messages":[{
                      "type":"text",
                      "text":textSend
                    }]
                }
                const req = new XMLHttpRequest()
                req.open("POST", "https://api.line.me/v2/bot/message/push")
                req.setRequestHeader("Content-Type", "application/json")
                req.setRequestHeader("Authorization", "Bearer {channel access token}")
                req.send(dataSend);
            }
        })
    } catch (error) {
      // Scan起動失敗
      console.error(error)
    }
  }
  