export function requestFullscreen(elementId?: string){
    window.parent.postMessage({
        method: 'requestFullscreen'
    }, '*')

    if (elementId){
        document.getElementById(elementId)?.requestFullscreen()
    }
}