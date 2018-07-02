function validateRequest(obj) {
    let validMethod = ['GET', 'POST', 'DELETE', 'CONNECT']

    if (!(obj.method && validMethod.includes(obj.method))){
        throw new Error ('Invalid request header: Invalid Method')
    }

    let uriRgx = /^[\w.]+$/

    if (!(obj.uri && (uriRgx.test(obj.uri) || obj.uri === '*'))){
        throw new Error ('Invalid request header: Invalid URI')
    }

    let version = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']

    if (!(obj.version && version.includes(obj.version))){
        throw new Error ('Invalid request header: Invalid Version')
    }

    let messageRgx = /^[^<>\\&'"]*$/

    if (!(obj.hasOwnProperty("message") && (messageRgx.test(obj.message) || obj.message === ''))){
        throw new Error ('Invalid request header: Invalid Message')
    }
    return obj
}

console.log(validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));