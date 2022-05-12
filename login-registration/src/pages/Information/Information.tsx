import React from "react";
import './Information.css'
import Button from "../../components/Button";

const Information = () => {
    // const 

    return (
        <div className="information">
            <div className="information__container _container">
                <h1 className="information__title">Information</h1>
                <div className="information__buttons">
                    <Button className="tab" text="Tab1"></Button>
                    <Button className="tab" text="Tab2"></Button>
                    <Button className="tab" text="Tab3"></Button>
                </div>
                <div className="information__info">
                    <p className="info__text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat odio, repellendus quis quasi doloremque praesentium dolor, aperiam at blanditiis eius perspiciatis officia eveniet. Ex voluptatum consequatur enim consequuntur! Blanditiis, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem laboriosam ad architecto adipisci dolor deserunt ipsam. Totam, rerum! Minus laboriosam aut voluptatibus iusto, quam assumenda repellendus autem est excepturi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores voluptas, aut, modi voluptate hic laborum unde, ad sit placeat ipsum vel tenetur est doloribus praesentium aliquid aliquam fuga consequuntur necessitatibus.
                    </p>
                    <h3 className="info__myList">My list:</h3>
                    <ul className="info__list">
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Information