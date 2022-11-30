import axios from "axios";

export default class DBService {
    static async getPlayers() {
        return await axios.get('http://127.0.0.1:3001/players');
    }
    static async getBracket() {
        return await axios.get('http://127.0.0.1:3001/bracket');
    }
}