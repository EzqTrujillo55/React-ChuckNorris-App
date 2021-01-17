export const getRandomJoke = async () => {
  return await fetch('https://api.chucknorris.io/jokes/random').then(response => response.json())
}

export const searchByText = async (text) => {
  return await fetch(`https://api.chucknorris.io/jokes/search?query=${text}`).then(response => response.json())
}

export const searchByCategory = async (text) => {
  return await fetch(`https://api.chucknorris.io/jokes/random?category=${text}`).then(response => response.json())
}


export const getCategories = async () => {
  return await fetch('https://api.chucknorris.io/jokes/categories').then(response => response.json())
}