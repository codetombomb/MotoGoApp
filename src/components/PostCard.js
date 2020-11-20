import React from 'react';

function PostCard() {
    return (
        <div>
            <div className="card" >
                <a

                    onClick={() => this.props.handlePostCardClick(this.props.postInfo)}
                    style={{ cursor: "pointer" }}>
                    <img src="https://thumpertalk.com/applications/core/interface/imageproxy/imageproxy.php?img=http://www.zeta-racing.com/bikes/images/drz/pz04.jpg&key=c5a35e44fa9087e1d4b2c043c44ad31aebacf93a990c19b99211306a8adb18c3"
                        alt="Avatar"
                        style={{ width: "250px" }}
                    />
                </a>
                <div style={{ display: "inline-block" }}>
                    <h4 style={{ fontSize: "30px" }}><b>${this.props.postInfo.price_per_day}/day</b></h4>
                </div>
                <p style={{ fontSize: "20px" }}>{this.props.postInfo.bike.year} {this.props.postInfo.bike.make} {this.props.postInfo.bike.model}</p>
            </div>
        </div>
    )
}
export default PostCard;
