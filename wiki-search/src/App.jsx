import { useEffect, useState } from "react";
import { wikiGet } from "./api/wikiRequest";
import { SearchInput } from "./components/SearchInput/SearchInput";
import { SearchButton } from "./components/SearchButton/SearchButton";
import "./index.scss";
import { Link } from "./components/Link/Link";

function App() {
  const [value, setValue] = useState("");
  const [keys, setKeys] = useState([]);
  const [request, setRequest] = useState({});
  const [emptyAns, setEmptyAns] = useState(false);
  const [reqError, setReqError] = useState("");

  // useEffect(() => {
  //   console.log(keys, Object.values(request));
  // }, [keys, request]);

  useEffect(() => {
    setEmptyAns(false);
  }, [value]);

  const handleInputChange = (newValue) => {
    setValue(newValue);
  };

  const getRequests = () => {
    wikiGet(value)
      .then((respone) => {
        const ans = respone.data;
        setRequest(ans);
        const localKeys = Object.keys(ans);
        setKeys(localKeys);
        if (localKeys.length === 0) {
          setEmptyAns(true);
        }
      })
      .catch((error) => {
        console.log(error);
        setReqError("Ошибка получения данных с сервера...");
      });
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="wrap">
        <h1>Wiki Searcher</h1>
        <div className="wrap__bar">
          <SearchInput
            onChange={handleInputChange}
            value={value}
            onSearch={getRequests}
          />
          <SearchButton onClick={getRequests}>Найти</SearchButton>
        </div>
        {!emptyAns ? (
          keys.map((key) => {
            return <Link key={key} text={key} link={request[key]} />;
          })
        ) : (
          <p>Результатов не найдено!</p>
        )}
        {reqError ? <p>{reqError}</p> : null}
      </div>
    </div>
  );
}

export default App;
