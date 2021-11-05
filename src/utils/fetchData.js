export const fetchData = async (params, callback) => {
  const { url, options = {} } = params || {}

  try {
    const response = await fetch(url, options).then((res) => {
      if (!res.ok) {
        return res.text().then((text) => {
          throw new Error(text)
        })
      }

      return new Promise((resolve) => {
        res.json().then((json) =>
          resolve({
            headers: Object.fromEntries(res.headers.entries()),
            body: json,
          })
        )
      })
    })

    if (callback?.success) callback.success(response)
  } catch (error) {
    if (callback?.error) callback.error(error)
  } finally {
    if (callback?.done) callback.done()
  }
}

export default fetchData
