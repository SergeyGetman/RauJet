import React, { useRef, useState } from "react";
import Card from "@/components/ui/Card.jsx";
import Textinput from "@/components/ui/Textinput.jsx";
import Button from "@/components/ui/Button.jsx";
import "./style.scss";
import VidgetCounters from "@/pages/components/redisignedComponents/vidgetCounters.jsx";

const InputSave = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  function copyToClipboard() {
    textAreaRef.current.select();
    navigator.clipboard
      .writeText(textAreaRef.current.value)
      .then(() => {
        setCopySuccess(textAreaRef.current.value);
      })
      .catch((error) => {
        console.error("Copy to clipboard failed:", error);
      });
  }

  return (
    <div className="links-save">
      <Card title="copy links" className="card-body">
        <div className="card-body__tooltip">
          <Textinput
            label="Ссылка"
            id="pn"
            type="text"
            placeholder="https://t.me/+x0q6LjYD4BxjYWMy"
            inputRef={textAreaRef}
            defaultValue={copySuccess}
            className="input-hol"
          />
          <Button onClick={(e) => copyToClipboard(e)}>Copy</Button>
        </div>
        <div className="card-body__tooltip">
          <Textinput
            label="Завернутая ссылка:"
            id="pn"
            type="text"
            placeholder="https://raulnk.com/getLink?id=216&type=channel"
            inputRef={textAreaRef}
            defaultValue={copySuccess}
            className="input-hol"
          />
          <Button onClick={(e) => copyToClipboard(e)}>Copy</Button>
        </div>
        <div className="card-body__tooltip">
          <Textinput
            label="Прямая ссылка на бота:"
            id="pn"
            type="text"
            placeholder="https://raulnk.com/getLink?id=216&type=bot"
            inputRef={textAreaRef}
            defaultValue={copySuccess}
            className="input-hol"
          />
          <Button onClick={(e) => copyToClipboard(e)}>Copy</Button>
        </div>
      </Card>
      <div>
        <VidgetCounters />
      </div>
      <div>
        <div className="lg:col-span-2 col-span-1">
          <Card title="Окупаемость">
            <div className="space-y-4">
              <h3>0.02%</h3>
              <h5>Процент окупаемости</h5>
              <p className="text-sm font-light text-primary-500">
                Styling for common inline HTML5 elements.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InputSave;
