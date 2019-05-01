import React from 'react'

class Times extends React.Component {
    dayRef = React.createRef();
    monthRef = React.createRef();
    yearRef = React.createRef()
    hourRef = React.createRef();
    minuteRef = React.createRef();
    secondRef = React.createRef();
    locationRef = React.createRef();


    getInfo = (e) => {
        e.preventDefault();


        const collectedTimes = {
            day: this.dayRef.current.value,
            month: this.monthRef.current.value,
            year: this.yearRef.current.value,
            hour: this.hourRef.current.value,
            minute: this.minuteRef.current.value,
            second: this.secondRef.current.value,
            location: this.locationRef.current.value,
        }

        e.target.reset();
        this.props.formInput(collectedTimes);
        console.log(collectedTimes);

    }
    render() {

        return (
            <div className="times">
                <form onSubmit={this.getInfo}>
                    <div className="times__date">
                        <div>
                            <p>Day</p>
                            <input placeholder="dd" type="text" ref={this.dayRef} /> /
                    </div>
                        <div>
                            <p>month</p>
                            <input placeholder="mm" type="text" ref={this.monthRef} /> /
                    </div>
                        <div>
                            <p>year</p>
                            <input placeholder="year" type="text" ref={this.yearRef} />
                        </div>
                    </div>

                    <div className="times__date">
                        <div>
                            <p>Hour</p>
                            <input placeholder="hh" type="text" ref={this.hourRef} /> /
                    </div>
                        <div>
                            <p>Minute</p>
                            <input placeholder="mm" type="text" ref={this.minuteRef} /> /
                    </div>
                        <div>
                            <p>Second</p>
                            <input placeholder="ss" type="text" ref={this.secondRef} />
                        </div>
                    </div>



                    <div className="times__event">
                        <p>location</p>
                        <input type="text" placeholder="London" ref={this.locationRef} />
                    </div>

                    <input type="radio" id="contactChoice1"
                        name="contact" value="email" />
                    <label>Email</label>
                    <br></br>
                    <input type="radio" id="contactChoice1"
                        name="contact" value="email" />
                    <label>Email</label>

                    <button type="submit" >Button</button>
                </form>

            </div>
        )
    }
}

export default Times;