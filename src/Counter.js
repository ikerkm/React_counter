import React, {
    Component
} from 'react';
class Counter extends React.Component {
    constructor(props) {
        super(props);

        let background_color = "";
        //  console.log(props.back_color)
        if (!props.back_color) {
            background_color = "none";

        } else {
            background_color = props.back_color;
        }
        if (!props.startFrom) {
            this.state = { count: 0, back_color: background_color, fontSize: 0 }




        } else {
            this.state = { count: props.startFrom, back_color: background_color, fontSize: 0 }


        }




    }
    increment() {
        //  this.state.count += this.props.step || 1;
        this.setState({ count: this.state.count += this.props.step || 1, fontSize: this.state.fontSize += this.props.step || 1 });
        //    this.setState({ count: this.state.count });


    }



    render() {
        let style = { backgroundColor: this.state.back_color, fontSize: this.state.fontSize + "px" }
        return (
            <button style={style} onClick={() => this.increment()}>{this.state.count}</button>
        )
    }


}
export default Counter;