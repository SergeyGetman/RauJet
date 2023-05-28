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
          <Card>
            <div className="space-y-4">
              <h5>Окупаемость</h5>
              <h3>0.02%</h3>
              <h5>Процент окупаемости</h5>
              <p className="text-sm font-light text-primary-500">
                Styling for common inline HTML5 elements.
              </p>
            </div>
          </Card>
        </div>
        <div className="grid grid-cols-3 gap-2 m-10 ">
          <Card>
            <div className="font-bold">
              подписчики:
              <div className="font-light">Новых подписчиков: 1</div>
            </div>
          </Card>
          <Card>
            <div className="font-bold">
              регистрация:
              <div className="font-light"> Кол-во регистраций: 2</div>
            </div>
          </Card>
          <Card>
            <div className="font-bold ">
              депозиты:
              <div className="font-light "> Кол-во депозитов: 0</div>
            </div>
          </Card>
          <Card>
            <div className="font-bold">
              отписки:
              <div className="font-light"> Отписалось по данной ссылке:</div>
            </div>
          </Card>
          <Card>
            <div className="font-bold">
              СРА:
              <div className="font-light"> Количество CPA квалификаций</div>
            </div>
          </Card>
          <Card>
            <div className="font-bold">
              Доход:
              <div className="font-light"> Примерный доход: 748$</div>
            </div>
          </Card>

          {/*<Card title="Доход" subtitle="Примерный доход: 748$"></Card>*/}
        </div>
      </div>
    </div>
  );
};

export default InputSave;
