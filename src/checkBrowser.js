var userAgent = window.navigator.userAgent.toLowerCase();

if(userAgent.indexOf('msie') != -1 || userAgent.indexOf('trident') != -1) {
    window.location.href = '../changeBrowser.html'
} else if(userAgent.indexOf('edge') != -1) {
    window.location.href = '../changeBrowser.html'
} else if(userAgent.indexOf('chrome') != -1) {
    window.location.href = '../changeBrowser.html'
}
