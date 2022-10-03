import "./Test.css";

function Test() {
    return (
        <div className="product-item">
            <div className="date">
                <div className="date__month">August</div>
                <div className="date__year">2020</div>
                <div className="date__day">14</div>
            </div>
            <div className="description">
                <h2 className="description__title">Toilet Paper</h2>
                <div className="description__price">$94.12</div>
            </div>
        </div>
    );
}

export default Test;