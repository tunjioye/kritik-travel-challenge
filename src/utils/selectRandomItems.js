export const selectRandomItems = (array, number) => {
  if (array.length <= number) return array;

  const selectedItems = []
  for (let i = 0; i < array.length; i++) {
    if (selectedItems.length === number) break
    const randomIndex = Math.round(Math.random() * array.length)
    const randomItem = array.splice(randomIndex, 1)[0]
    selectedItems.push(randomItem)
  }
  return selectedItems
}

export default selectRandomItems
