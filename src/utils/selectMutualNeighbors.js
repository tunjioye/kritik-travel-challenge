export const selectMutualNeighbors = (responses) => {
  return responses.reduce((combinedNeighbors, response) => {
    const { names, neighbors = [] } = response.body || {}
    const { name: countryName } = names || {}

    const isMutualNeighbor = responses.some((response) => {
      const { names, neighbors: thisNeighbors = [] } = response.body || {}
      const { name: thisCountryName } = names || {}
      if (thisCountryName === countryName) return false
      return (
        thisNeighbors.some((country) => country.name === countryName) &&
        neighbors.some((country) => country.name === thisCountryName)
      )
    })

    if (isMutualNeighbor) {
      return [...combinedNeighbors, { name: countryName }]
    }

    return combinedNeighbors
  }, [])
}

export default selectMutualNeighbors
