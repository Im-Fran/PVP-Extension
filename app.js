// Redirect url format: https://www.programasvirtualespc.net/out/?{KEY}

const isUrl = (url) => (!!new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i') // fragment locator
    .test(url));

document.addEventListener('click', (e) => {
    if((e.target.tagName || '').toLowerCase() === 'a') {
        if((window.location.hostname || '').includes('programasvirtualespc') && (e.target.href || '').includes('out/?')){
            e.preventDefault()
            let key = e.target.href
                .replaceAll('http://', '')
                .replaceAll('https://', '')
                .replaceAll('www.programasvirtualespc.net/out/?', '')
                .replaceAll('programasvirtualespc.net/out/?', '');
            // Decode base64
            let url = atob(key);
            // Redirect
            window.open(url, '_blank');
        } else if((window.location.hostname || '').includes('pastepvp') && e.target.parentNode.id === 'tab1') {
            e.preventDefault()
            if(isUrl(e.target.innerText)) {
                window.open(e.target.innerText, '_blank');
            }
        }
    }
})