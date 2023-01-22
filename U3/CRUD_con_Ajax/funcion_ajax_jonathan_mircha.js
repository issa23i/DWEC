const ajax = (options) => {
    // destructuración de options
    let {url, method, success, error, data} = options
    const xhr = new XMLHttpRequest()

    xhr.addEventListener('readystatechange', e => {
        if(xhr.readyState !== 4) return
        if(xhr.status >= 200 && xhr.status < 300){
            let json = JSON.parse(xhr.responseText)
            success(json)
        } else {
            let message = xhr.statusText || "Ocurrió un error"
            error(message)
        }
    })

    xhr.open(method || "GET", url)
    xhr.setRequestHeader('Content-Type','application/json; charset=utf-8')
    xhr.send(JSON.stringify(data))
}