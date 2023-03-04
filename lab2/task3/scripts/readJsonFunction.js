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

readTextFile('../brands.json', function (text) {
    brands = JSON.parse(text)
    console.log(brands)

    console.log(brands[0].iconName)
})