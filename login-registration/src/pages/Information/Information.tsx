import React, { useState } from "react";
import "./Information.css";
import Tab from "../../components/Tab";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { setInformationTab, TabsSelectors } from "../../redux/reducers/tabsReducer";
import { TAB_1, TAB_2, TAB_3, TEXT_1, TEXT_2, TEXT_3 } from "../../constants/constants";

const Information = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector(TabsSelectors.getInformationTab);
  const [activeText, setActiveText] = useState(TEXT_1);

  const onTabClick = (tab: string, text: string) => {
    dispatch(setInformationTab(tab));
    setActiveText(text);
  };

  const TABS = [
    { tabName: "Tab1", id: Math.random(), tab: TAB_1, text: TEXT_1 },
    { tabName: "Tab2", id: Math.random(), tab: TAB_2, text: TEXT_2 },
    { tabName: "Tab3", id: Math.random(), tab: TAB_3, text: TEXT_3 },
  ];

  return (
    <div className="information">
      <div className="information__container _container">
        <h1 className="information__title">Information</h1>
        <div className="information__tabs">
          {TABS.map((item) => {
            return (
              <Tab
                onClick={() => onTabClick(item.tab, item.text)}
                className={classNames("tab", {
                  ["_active"]: activeTab === item.tab,
                })}
                text={item.tabName}
                key={item.id}
              ></Tab>
            );
          })}
        </div>
        <div className="information__info">
          <p className="info__text">{activeText}</p>
        </div>
      </div>
    </div>
  );
};

export default Information;
