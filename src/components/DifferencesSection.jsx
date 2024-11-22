import Button from "./Button/Button"
import { useState } from "react";
import { differences } from "../data";

export default function Differences() {
    const [contentType, setContentType] = useState(null);

    console.log('App rendered')
    let tabContent = null;
  
    function handleClick(type) {
      setContentType(type);
      console.log(contentType);
    }
  
    if (contentType) {
      tabContent = <p>{differences[contentType]}</p>;
    } else {
      tabContent = <p>Нажми на кнопку</p>;
    }
    return (
        <section>
        <h3>Чем мы отличаемся от других </h3>
        <Button
          isActive={contentType === "way"}
          onClick={() => handleClick("way")}
        >
          Подход
        </Button>
        <Button
          isActive={contentType === "easy"}
          onClick={() => handleClick("easy")}
        >
          Доступность
        </Button>
        <Button
          isActive={contentType === "program"}
          onClick={() => handleClick("program")}
        >
          Концентрация
        </Button>

        {tabContent}
      </section>
    )  
}