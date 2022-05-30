import React, { useState } from "react";
import "./Information.css";
import Tab from "../../components/Tab";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { setInformationTab, TabsSelectors } from "../../redux/reducers/tabsReducer";

const Information = () => {
  const TEXT_1 =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat odio, repellendus quis quasi doloremque praesentium dolor, aperiam at blanditiis eius perspiciatis officia eveniet. Ex voluptatum consequatur enim consequuntur! Blanditiis, porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem laboriosam ad architecto adipisci dolor deserunt ipsam. Totam, rerum! Minus laboriosam aut voluptatibus iusto, quam assumenda repellendus autem est excepturi?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores voluptas, aut, modi voluptate hic laborum unde, ad sit placeat ipsum vel tenetur est doloribus praesentium aliquid aliquam fuga consequuntur necessitatibus.";
  const TEXT_2 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim laudantium ipsam, assumenda sequi sint ipsa debitis esse inventore cupiditate cumque nesciunt. Libero, optio eius. Quidem culpa saepe qui quasi tempora?";
  const TEXT_3 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ad quisquam unde error porro corporis! Aliquid veniam asperiores, iste optio ex commodi facilis vero vel, dolorum itaque quia autem consequuntur.";
  const dispatch = useDispatch();
  const activeTab = useSelector(TabsSelectors.getInformationTab);
  const [activeText, setActiveText] = useState(TEXT_1);

  const onTabClick = (tab: string, text: string) => {
    dispatch(setInformationTab(tab));
    setActiveText(text);
  };

  return (
    <div className="information">
      <div className="information__container _container">
        <h1 className="information__title">Information</h1>
        <div className="information__tabs">
          <Tab
            onClick={() => onTabClick("TAB_1", TEXT_1)}
            className={classNames("tab", {
              ["_active"]: activeTab === "TAB_1",
            })}
            text="Tab1"
          ></Tab>
          <Tab
            onClick={() => onTabClick("TAB_2", TEXT_2)}
            className={classNames("tab", {
              ["_active"]: activeTab === "TAB_2",
            })}
            text="Tab2"
          ></Tab>
          <Tab
            onClick={() => onTabClick("TAB_3", TEXT_3)}
            className={classNames("tab", {
              ["_active"]: activeTab === "TAB_3",
            })}
            text="Tab3"
          ></Tab>
        </div>
        <div className="information__info">
          <p className="info__text">{activeText}</p>
        </div>
      </div>
    </div>
  );
};

export default Information;
