export const fetchImgQuery = (searchQuery, page) => {
    
    const API_KEY = '24011086-928385de9f6ca9cb6056973c7';
    const BASE_URL = 'https://pixabay.com/api/';
    const per_page = 12;
    
    let url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=${per_page}&key=${API_KEY}`;
    
      const response =  fetch(url);
      const data =  response.json();
      this.incrementPage();
      return data;
    
    
}