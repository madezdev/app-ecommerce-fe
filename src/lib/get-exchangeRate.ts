export async function getExchangeRate () {
  return fetch('https://criptoya.com/api/dolar', { headers: { 'Content-Type': 'application/json' } })
    .then(response => response.json())
    .then(data => data)
    .catch((error) => console.error('Error fetching:', error))
}
