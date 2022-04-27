import Button from "./Button";
import { useState } from "react";
const Board = () => {
    const [switch1, setSwitch1] = useState(false);
    const [switch2, setSwitch2] = useState(false);
    const [switch3, setSwitch3] = useState(false);
    console.log(switch1);
    return (
        <div className="bloc-main">
            <div className="bloc-buttons">
                <Button switch={switch1} setSwitch={setSwitch1} />
                <Button switch={switch2} setSwitch={setSwitch2} />
                <Button switch={switch3} setSwitch={setSwitch3} />
            </div>
            <div>
                <button
                    className="button-reset"
                    onClick={() => {
                        setSwitch1(false);
                        setSwitch2(false);
                        setSwitch3(false);
                    }}
                >
                    OFF-MODE
                </button>
            </div>
            <div>
                {switch1 & switch2 & switch3 ? (
                    <button className="button-go">GO!</button>
                ) : (
                    <button className="button-noway">NO WAY!</button>
                )}
            </div>
        </div>
    );
};

export default Board;
