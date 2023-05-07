import { localStorageOnError } from "../utiles/errorhandler"

export function getUserInfo(nfcsc: string) {
    const data = localStorage.getItem(nfcsc)
    if (typeof data == "string") {
        return JSON.parse(data)
    }else {
        localStorageOnError(nfcsc)
    }
    
}

export function switchUserStat(userInfo: any, newstat: boolean) {
    userInfo["in"] = newstat
}