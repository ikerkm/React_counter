import React, {
    Component
} from 'react';
class Stepper extends React.Component {
    constructor(props) {
        super(props);
        var the_checker = true;
        if (props.default > props.max || props.default < props.min) {
            the_checker = false;

        } else {
            the_checker = true;
        }
        console.log(the_checker);
        this.state = {
            text: props.text,
            min: props.min || 0,
            max: props.max || 0,
            num: parseInt(props.default),
            avaliable: the_checker,
        }




    }
    incrementador() {

        if (parseInt(this.state.num) < this.state.max) {

            this.setState({ num: this.state.num += 1 });

        } else {
            console.log('No puedo sumar más');
        }


    }
    decrementador() {
        if (parseInt(this.state.num) > this.state.min) {
            console.log(this.state.num);
            this.setState({ num: this.state.num -= 1 });

        }



    }
    render() {
        let style = "";
        if (!this.state.avaliable) {


            style = { pointerEvents: "none" }

        } else {


            style = { pointerEvents: true }
        }

        return (
            <div>
                <input style={style} onClick={() => this.incrementador()} type="button" value="+" />
                <input style={style} min={this.state.min} max={this.state.max} type="text" value={parseInt(this.state.num) + this.state.text} />
                <input style={style} onClick={() => this.decrementador()} type="button" value="-" />

            </div>



        )




    }




}


export default Stepper;