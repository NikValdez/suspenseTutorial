export const fetchData = () => {
  const playerPromise = fetchPlayer()
  return {
    player: wrapPromise(playerPromise)
  }
}

const wrapPromise = promise => {
  let status = 'pending'

  let result

  let suspender = promise.then(
    res => {
      status = 'success'
      result = res
    },
    err => {
      status = 'error'
      result = err
    }
  )
  return {
    read() {
      if (status === 'pending') {
        throw suspender
      } else if (status === 'error') {
        throw result
      }
      return result
    }
  }
}

const fetchPlayer = () => {
  return fetch('https://www.balldontlie.io/api/v1/players/237').then(response =>
    response.json()
  )
}
