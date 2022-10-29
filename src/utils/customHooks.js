import { useEffect, useState } from "react";

export const useForm = () => {
  const [values, setValues] = useState({});

  const onHandleChange = (event) => {
    console.log("value changing");
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onHandleSubmit = (type) => {
    if (type == "signup") {
      console.log("signup");
    } else {
      console.log("Submit");
    }
  };

  return {
    values,
    onHandleChange,
    onHandleSubmit
  };
};

export const useTheme = () => {
  const [theme, setTheme] = useState("light");

  const onThemeChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const onbuttonRender = () => {
    return (
      <div>
        {theme == "light" && (
          <button
            style={{
              color: "yellow",
              backgroundColor: "black",
              border: "none"
            }}
            onClick={() => setTheme("dark")}
          >
            <i className="fa-solid fa-sun"></i>
          </button>
        )}
        {theme == "dark" && (
          <button
            style={{
              color: "black",
              backgroundColor: "grey",
              border: "none"
            }}
            onClick={() => setTheme("light")}
          >
            <i className="fa-solid fa-moon"></i>
          </button>
        )}
      </div>
    );
  };

  return {
    theme,
    setTheme,
    onThemeChange,
    onbuttonRender
  };
};

export const useFetch = (url, category) => {
  const [apiData, setApiData] = useState([]);

  const onFetch = async () => {
    await fetch(`${url}/${category}`)
      .then((response) => response.json())
      .then((json) => setApiData(json));
  };

  useEffect(() => {
    onFetch();
  }, [url, category]);

  return {
    apiData,
    setApiData
  }
};
