function getEmoji(){
    const emojies = ['🍒', '🍊', '🍇'];
    return emojies[Math.floor(Math.random() * emojies.length)];
}


class Machine extends React.Component {
    render() {
        const spin = [getEmoji(), getEmoji(), getEmoji()]
        let msg;
        if(spin.includes('🍒') && spin.includes('🍊')){
            msg = <h3>You Lose!</h3>
        } else if(spin.includes('🍒') && spin.includes('🍇')) {
            msg = <h3>You Lose!</h3>
        } else if(spin.includes('🍊') && spin.includes('🍇')){
            msg = <h3>You Lose!</h3>
        } else {
            msg = <h3>You Win!</h3>
        }
        return (
            <div>
                {/* <p>{getEmoji()} {getEmoji()} {getEmoji()}</p> */}
                {spin}
                {msg}
            </div>
        )
    };
}