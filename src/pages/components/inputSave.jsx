import React, {useRef, useState} from 'react';
import Card from "@/components/ui/Card.jsx";
import Textinput from "@/components/ui/Textinput.jsx";
import Button from "@/components/ui/Button.jsx";
import "./style.scss"


const InputSave = () => {

    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    function copyToClipboard() {
        textAreaRef.current.select();
        navigator.clipboard.writeText(textAreaRef.current.value)
            .then(() => {
                setCopySuccess(textAreaRef.current.value);
            })
            .catch((error) => {
                console.error('Copy to clipboard failed:', error);
            });
    }


    return (
        <div className="fromGroup" >
            <Card title="copy links" className="card-body">
                <div className="card-body__tooltip">
                    <Textinput
                        label="Project Name*"
                        id="pn"
                        type="text"
                        placeholder="link copy "
                        inputRef={textAreaRef}
                        defaultValue={copySuccess}
                        className="input-hol"
                    />
                    <Button onClick={(e) => copyToClipboard(e)}>Copy</Button>


                </div>
            </Card>



        </div>
    );
};

export default InputSave;