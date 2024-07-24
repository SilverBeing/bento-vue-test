export async function getBooks() {
  try {
    const response = await fetch('https://stephen-king-api.onrender.com/api/books')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching books from API:', error)
    throw error
  }
}
