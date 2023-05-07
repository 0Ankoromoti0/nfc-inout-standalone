export async function apiLineSend(data: any) {
    await fetch("https://api.line.me/v2/bot/message/push", {
        'headers': {
            "Content-Type": "application/json",
            "Authorization": "Bearer {channel access token}"
        },
        'body': JSON.stringify(data)
    })
}