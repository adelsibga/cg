let brands = ''

function readTextFile(file, callback) {
    let rawFile = new XMLHttpRequest()

    rawFile.overrideMimeType('application/json')
    rawFile.open('GET', file, true)
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == '200') {
            callback(rawFile.responseText)
        }
    }
    rawFile.send(null)
}

readTextFile('./brands.json', function (text) {
    brands = JSON.parse(text)
    
    for (let i = 0; i < brands.length; i++) {
        const iconName = brands[i].iconName
        const brandName = brands[i].brandName
        const color = brands[i].color

        console.log(iconName)
        console.log(brandName)
        console.log(color)
        console.log('----------------')
    }
})