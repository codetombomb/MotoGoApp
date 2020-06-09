import React, { Component } from 'react';

class PostCard extends Component {
    constructor(props) {
        super(props)
    }

    goToShowPage(e) {
        console.log(e.target)
    }

    render() {
        return (
            <div>
                <div className="card" >
                    <a 
                    onClick={this.goToShowPage} 
                    style={{ cursor: "pointer" }}>
                        <img src="https://thumpertalk.com/applications/core/interface/imageproxy/imageproxy.php?img=http://www.zeta-racing.com/bikes/images/drz/pz04.jpg&key=c5a35e44fa9087e1d4b2c043c44ad31aebacf93a990c19b99211306a8adb18c3"
                        alt="Avatar"
                        style={{ width: 100 }}
                    />
                    </a>
                    <div className="">
                        <h4><b>${this.props.postInfo.price_per_day}/day</b></h4>
                        <p>{this.props.postInfo.bike.year} {this.props.postInfo.bike.make} {this.props.postInfo.bike.model}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default PostCard;