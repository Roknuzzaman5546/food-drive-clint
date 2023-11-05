const FeaturedfoodsDetails = ({ foods }) => {
    const { foodphoto, foodname, foodquantity, pickuplocation, expiredtime, additionalnotes, useremail, username, userphoto } = foods;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={foodphoto} className="w-96 h-48" alt="Movie" /></figure>
                <div className="card-body flex flex-col items-center">
                    <div className=" flex items-center gap-5">
                        <img className="w-14 rounded-full" src={userphoto} alt="" />
                        <p>{username}</p>
                    </div>
                    <h2 className="card-title">{foodname}</h2>
                    <p>Foodquantity: {foodquantity}</p>
                    <p>Expiredtime: {expiredtime}</p>
                    <p>Location: {pickuplocation}</p>
                    <p>{additionalnotes}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedfoodsDetails;