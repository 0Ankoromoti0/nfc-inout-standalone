declare module '*/test-data.json' {
    interface TestData {
        "to" : string,
        "messages" : [{
          "type" : "text",
          "text" : string
        }]
    }
  
    const value: TestData;
    export = value;
  }