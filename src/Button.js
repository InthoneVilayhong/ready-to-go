const Button = (props) => {
    return (
        <div>
            <button
                onClick={() => {
                    props.setSwitch(true);
                }}
                className={props.switch ? "activate" : ""}
            >
                ON
            </button>
            <button
                onClick={() => {
                    props.setSwitch(false);
                }}
                className={!props.switch ? "activate" : ""}
            >
                OFF
            </button>
        </div>
    );
};

export default Button;
