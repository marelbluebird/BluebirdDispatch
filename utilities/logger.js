const { addMsg } = require('jest-html-reporters/helper');

function generateCurlCommand(responseObject) {
    let request = JSON.parse(JSON.stringify(responseObject)).req;
    let requestMethod = request.method;
    let requestUrl = request.url;
    let requestHeaders = request.headers;
    let requestData = request.data;

    let curlCommand = `curl -i -X ${requestMethod} "${requestUrl}"\\\n`;
    for (let [key, value] of Object.entries(requestHeaders)) {
        curlCommand += ` -H "${key}: ${value}"\\\n`;
    }
    if (requestData) {
        curlCommand += ` -d \\\n'${JSON.stringify(requestData, undefined, 2)}'`;
    }
    return curlCommand;
}

async function logMessage(message) {
    await addMsg({
        message: `${message}`
    })
}

async function logRequest(responseObject, label = 'API') {
    await addMsg({
        message: `
____ REQUEST OF ${label} ____

${generateCurlCommand(responseObject)}
`
    })
}

async function logResponseCompletely(responseObject, label = 'API') {
    await addMsg({
        message: `
____ RESPONSE OF ${label} ____

STATUS CODE: ${responseObject.statusCode}
BODY:
${JSON.stringify(responseObject.body, undefined, 2)}
`
    })
}

async function logResponseMinimally(responseObject, label = 'API') {
    let responseBodyToBeLogged
    if (/^2\d{2}$/.test(responseObject.statusCode)) {
        responseBodyToBeLogged = 'JSON Object (not really important to be displayed)'
    } else {
        responseBodyToBeLogged = JSON.stringify(responseObject.body, undefined, 2)
    }

    await addMsg({
        message: `
____ RESPONSE OF ${label} ____

STATUS CODE: ${responseObject.statusCode}
RESPONSE BODY:
${responseBodyToBeLogged}
`
    })
}

async function logExpectation(expected_object) {
    await addMsg({
        message: `
____ EXPECTATION ____

STATUS CODE: ${expected_object.status_code}
BODY:
${JSON.stringify(expected_object.body, undefined, 2)}
`
    })
}


module.exports = {
    logMessage, logRequest, logResponseCompletely, logResponseMinimally, logExpectation
}
