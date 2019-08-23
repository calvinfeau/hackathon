export function createUser(item) {
    console.log('service api reached')
    console.log('item passed: ', item)
    return fetch('/api/create', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(item)
    }).then(res => res.json())
}

export function updateUser(item) {
    console.log('updateUser api reached')
    console.log('item passed: ', item)
    return fetch('/api/update', {
        method:'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(item)
    }).then(res => res.json())
}

