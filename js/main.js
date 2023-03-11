async function startscan()  {
    console.log('オレンジ')
    try {
      const reader = new NDEFReader()
      await reader.scan()
  
      // Scanは起動しているが、NFCタグからデータが読み込めなかった
      reader.addEventListener('error', (event) => {
        console.log(error)
        divelement.textContent = 'エラー'
      })
  
      // データを読み込んだ
      reader.addEventListener('reading', ({ serialNumber, message }) => {
        const record = message.records[0]
        const { data, recordType } = record
        divelement.textContent = 'hello'
        // recordTypeごとにdecode処理を実行する
      })
    } catch (error) {
      // Scan起動失敗
      console.error(error)
    }
  }
  