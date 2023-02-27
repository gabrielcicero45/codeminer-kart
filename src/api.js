const baseUrl = 'http://localhost:3000/racers'

export const getRacerData = async () => {
  try {
      const response = await fetch(baseUrl)
      return await response.json()
  } catch (error) {
      console.log("error: ", error)
  }
}

export const setRacerData = async (racer) => {
  console.log(JSON.stringify(racer))
  try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(racer)
      })
      console.log(response.json())
  } catch (error) {
      console.log("error: ", error)
  }
}