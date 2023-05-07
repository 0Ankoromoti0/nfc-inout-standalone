export function nfcOnError(status: string, trace: Event | unknown) {
    switch (status) {
        case "Unavailable":
            
            break;
    
        case "Unreadable":

            console.log(trace)
            break;
            
        default:

            break;
    }
}

export function localStorageOnError(sc: string) {
    sc
}