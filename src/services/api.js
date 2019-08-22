export function createUser(item) {
    console.log('service api reached', '   item passed: ', item)
    return fetch('/api/create', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(item)
    }).then(res => res.json())
}