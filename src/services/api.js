export function createUser(form) {
    console.log('createUser api reached')
    console.log('form passed: ', form)
    return fetch('/api/create', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form)
    }).then(res => res.json())
}

export function updateUser(form) {
    console.log('updateUser api reached')
    console.log('form passed: ', form)
    return fetch('/api/update', {
        method:'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form)
    }).then(res => res.json())
}

export function getUser(form) {
    console.log('getUser api reached')
    console.log('form passed: ', form)
    return fetch('/api/get', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form)
    }).then(res => res.json())
}