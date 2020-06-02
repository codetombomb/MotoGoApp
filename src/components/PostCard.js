import React, { Component } from 'react';

class PostCard extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // debugger
        console.log(this.props.userInfo)
    }


    render() {
        return (
            <div>
                <div className="card" >
                    <img src="https://thumpertalk.com/applications/core/interface/imageproxy/imageproxy.php?img=http://www.zeta-racing.com/bikes/images/drz/pz04.jpg&key=c5a35e44fa9087e1d4b2c043c44ad31aebacf93a990c19b99211306a8adb18c3" alt="Avatar" style={{ width: 100 }} />
                    <div className="container">
                        <h4><b>${this.props.postInfo.price_per_day}/day</b></h4>
                        <p>{this.props.postInfo.bike.year} {this.props.postInfo.bike.make} {this.props.postInfo.bike.model}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default PostCard;