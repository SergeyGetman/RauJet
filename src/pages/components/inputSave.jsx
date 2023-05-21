import React from 'react';
import Card from "@/components/ui/Card.jsx";
import Textinput from "@/components/ui/Textinput.jsx";
import Textarea from "@/components/ui/Textarea.jsx";
import Select from "@/components/ui/Select.jsx";

const InputSave = () => {
    return (
        <div>
            <Card title="Basic Inputs">
                <div className="space-y-3">
                    <Textinput
                        label="Project Name*"
                        id="pn"
                        type="text"
                        placeholder="Management dashboard "
                    />
                    <Textinput
                        label="Readonly Input"
                        id="pn2"
                        readonly
                        type="text"
                        placeholder="You can't update me :P"
                    />
                    <Textinput
                        label=" Disabled Input"
                        id="pn3"
                        placeholder=" Disabled Input"
                        disabled
                        type="text"
                    />
                    <Textarea
                        label="Project description"
                        id="pn4"
                        placeholder="Type here"
                    />
                    <Select
                        options={["Option 1", "Option 2", "Option 3"]}
                        label="Select Option's"
                    />
                </div>
            </Card>
        </div>
    );
};

export default InputSave;