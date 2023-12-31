export default class GotService {
    constructor() {
        this._apiBase = "https://www.anapioficeandfire.com/api";
    };

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        const some = await res.json();
        return some;
    };

    getAllCharacters = async () => {
        const characters = await this.getResource("/characters?page=5&pageSize=10");
        return characters.map(this._transformCharacter);
    };

    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    };

    getAllHouses = async () => {
        const houses = await this.getResource("/houses/");
        return houses.map(this._transformHouse);
    };

    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}`);
        return this._transformHouse(house);
    };

    getAllBooks = async () => {
        const books = await this.getResource('/books/');
        return books.map(this._transformBook);
    };

    getBook = async (id) => {
        const book = await this.getResource(`/books/${id}`);
        return this._transformBook(book);
    };

    isSet(data) {
        if(data) {
            return data;
        } else {
            return 'no Data =(';
        }
    };

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1];
    };

    _transformCharacter = (char) => {
        return {
            id: this._extractId(char),
            name: this.isSet(char.name),
            gender: this.isSet(char.gender),
            born: this.isSet(char.born),
            died: this.isSet(char.died),
            culture: this.isSet(char.culture),
            titles: this.isSet(char.titles)
        }
    };

    _transformBook = (book) => {
        return {
            id: this._extractId(book),
            name: this.isSet(book.name),
            numberOfPages: this.isSet(book.numberOfPages),
            publisher: this.isSet(book.publisher),
            released: this.isSet(book.released)
        }
    };

    _transformHouse = (house) => {
        return {
            id: this._extractId(house),
            name: this.isSet(house.name),
            region: this.isSet(house.region),
            words: this.isSet(house.words),
            titles: this.isSet(house.titles),
            overlord: this.isSet(house.overlord),
            ancestralWeapons: this.isSet(house.ancestralWeapons)
        }
    };
};