export function createUser(item) {
    return fetch('/api/create', {
        method: 'POST',
        body: JSON.stringify(item)
    }).then(res => res.json())
}