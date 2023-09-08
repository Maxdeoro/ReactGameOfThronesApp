export default class GotService {
    constructor() {
        this._apiBase = "https://www.anapioficeandfire.com/api";
    };

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        const some = await res.json();
        return some;
    };

    getAllCharacters() {
        return this.getResource("/characters?page=9&pageSize=15");
    };

    getCharacter(id) {
        return this.getResource(`/characters/${id}`);
    };

    getAllHouses() {
        return this.getResource("/houses/");
    };

    getHouse(id) {
        return this.getResource(`/houses/${id}`);
    };

    getAllBooks() {
        return this.getResource('/books/');
    };

    getBook(id) {
        return this.getResource(`/books/${id}`);
    };
};