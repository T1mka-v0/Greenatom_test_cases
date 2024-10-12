import axios from "axios";

// Предоставленный url не работает из за ненастроенной корс политики на localhost, поэтому мы сделали собственный небольшой сервер для перенаправления запросов

const url = 'https://api.forismatic.com/api/1.0/?method=getQuote&key=random&format=jsonp&lang=ru&jsonp=?';
const url_test = `http://localhost:8000/quotations`

export const getNewQuote = () => {
  return axios.get(url_test)
}