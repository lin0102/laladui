import React from 'react';
import './index.scss';

export default class Carousel extends React.Component {
    constructor() {
        super();
        this.state = {
            i: 1
        }
        this.startX = 0;
        this.endX = 0;
        this.isMoving = false;
        this.carouselButton = new Array(3).fill(<div></div>);
    }
    handStart = (e) => {
        this.startX = e.touches[0].clientX
    }
    handleMove = (e) => {
        this.endX = e.touches[0].clientX;
    }
    handleEnd = () => {
        const distance = Math.abs(this.startX - this.endX);
        if (distance > 100) {
            if (this.startX > this.endX) {
                this.carouselNext();
            }
            else {
                this.carouselLast();
            }
        }
    }
    carouselNext() {
        let i = this.state.i;
        if (i === 2 || this.isMoving) {
            return;
        } else {
            this.isMoving = true;
            setTimeout(() => {
                this.isMoving = false;
            }, 1000);
            i++;
            this.setState({ i: i });
        }
    }
    carouselLast() {
        let i = this.state.i;
        if (i === 0 || this.isMoving) {
            return;
        } else {
            this.isMoving = true;
            setTimeout(() => {
                this.isMoving = false;
            }, 1000);
            i--;
            this.setState({ i: i });
        }
    }
    render() {
        this.carouselButton = this.carouselButton.map((v, i) => {
            if (i === this.state.i) {
                return <div className="light-index" key={i}></div>;
            } else {
                return <div key={i}></div>
            }
        })
        const imgBox = [];
        for (let i = 0; i < 3; i++) {
            imgBox.push(
                <div
                    style={{
                        background: `url(${this.props.imgsrc[i]})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundColor: "#fdcfbf",
                    }}
                    onClick={() => {this.props.showImg(i)}}
                    key={i}
                ></div>
            )
        }
        return (
            <div className='carousel'>
                <div className='carousel-box'>
                    <div className='carousel-content'
                        onTouchStart={this.handStart}
                        onTouchMove={this.handleMove}
                        onTouchEnd={this.handleEnd}
                        style={{ transform: `translate(${-(this.state.i * 85.59 - 7.205)}vw, 0)` }}
                    >
                      
                        {imgBox}
                    </div>
                </div>
                <div className='carousel-index'>
                    {this.carouselButton}
                </div>
            </div>
        )
    }
}
