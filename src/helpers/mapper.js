export const mapper = (images) => {
    return images.map(({id, webformatURL, largeImageURL, tags })=>({id, webformatURL, largeImageURL, tags}))
}