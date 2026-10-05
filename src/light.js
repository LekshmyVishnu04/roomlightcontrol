function Light(props) {

    return (
        <div>
            <button onClick={props.toggleLight}>
                {props.isOn ? 'Turn Off' : 'Turn On'}
            </button>
            <p> The room is {props.isOn ? 'Bright' : 'Dark'} </p>
        </div>
    );
}

export default Light;