import React from "react";
import Card from "./Card";

const CardSection = () => {
    return(
        <div>
        <section className="contact bg-success ">
        <div className="container ">
        <h2 className="text-white">
        We love new friends!
        </h2>
        <div className="row">
        <div className="col-4">
            <Card title="Basket Ball" buttonText="Get Explore"/>
        </div>
        <div className="col-4">
            <Card title="Cricket" buttonText="Let's Go!"/>
        </div>
        <div className="col-4">
            <Card title="Hockey" buttonText="Click here!"/>
        </div>
        </div>
    </div>
    </section>
        </div>
    )
}

export default CardSection;