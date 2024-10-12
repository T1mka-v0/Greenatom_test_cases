import axios from "axios";

const wikiURL = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json';
const url_test = `http://localhost:8000/wikipedia`
const wikiRequest = axios.create({
  baseURL: url_test
})

const wikiGet = (search) => {
  return wikiRequest.get(`/${search}`);
}
export {wikiGet};