import React, { useState } from 'react';
import './FeatureProducts.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const featureProductNav = [
  {
    id: "featureProductNav_1",
    img: "https://rukminim1.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100",
    name: "Mobiles",
    link: "",
    subNavigation: false,
  },
  {
    id: "featureProductNav_2",
    img: "https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100",
    name: "Fashion",
    link: "",
    subNavigation: true,
    subNavItems: [
      { id: "subNav_1", name: "Men's Top Wear", subList: ["T-shirt", "Shirt", "Jacket"] },
      { id: "subNav_2", name: "Men's Bottom Wear", subList: ["Jeans", "Trousers", "Shorts"] },
      { id: "subNav_3", name: "Women Ethic", subList: ["Saree", "Kurti", "Lehenga"] },
      { id: "subNav_4", name: "Women Western", subList: ["Dress", "Tops", "Skirts"] },
      { id: "subNav_5", name: "Men Footwear", subList: ["Sports Shoes", "Formal Shoes", "Casual Shoes"] },
    ],
  },
  {
    id: "featureProductNav_3",
    img: "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
    name: "Electronics",
    link: "",
    subNavigation: true,
    subNavItems: [
      { id: "subNav_3", name: "Mobile Phones sam", subList: ["Samsung", "iPhone", "OnePlus"] },
    ],
  },
  {
    id: "featureProductNav_4",
    img: "https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",
    name: "Home & Furniture",
    link: "",
    subNavigation: true,
    subNavItems: [
      { id: "subNav_5", name: "Living Room Furniture", subList: ["Sofa", "Table", "Chair"] },
    ],
  },
  {
    id: "featureProductNav_5",
    img: "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
    name: "Appliances",
    link: "",
    subNavigation: false,
  },
  {
    id: "featureProductNav_6",
    img: "https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
    name: "Beauty, Toys & More",
    link: "",
    subNavigation: true,
    subNavItems: [
      { id: "subNav_7", name: "Makeup & Skincare", subList: ["Lipstick", "Foundation", "Moisturizer"] },
    ],
  },
  {
    id: "featureProductNav_7",
    img: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100",
    name: " Two Wheelers",
    link: "",
    subNavigation: true,
    subNavItems: [
      { id: "subNav_9", name: "Bikes", subList: ["Sports Bikes", "Cruiser Bikes", "Dirt Bikes"] },
    ],
  }
];

const FeatureProducts = () => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [subExpandedItem, setSubExpandedItem] = useState(null);
  const [subListItems, setSubListItems] = useState([]);

  const toggleItem = (itemId) => {
    if (expandedItem === itemId) {
      setExpandedItem(null);
    } else {
      setExpandedItem(itemId);
    }
  };

  const toggleSubItem = (subItemId, subList) => {
    if (subExpandedItem === subItemId) {
      setSubExpandedItem(null);
      setSubListItems([]);
    } else {
      setSubExpandedItem(subItemId);
      setSubListItems(subList);
    }
  };

  const handleIconClick = (e, itemId) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedItem(itemId);
  };

  const handleListItemClick = (itemId, subList) => {
    setSubExpandedItem(itemId);
    setSubListItems(subList);
  };

  const handleMouseLeave = () => {
    setExpandedItem(null);
    setSubExpandedItem(null);
    setSubListItems([]);
  };

  return (
    <div className="featureProducts">
      <div className="featureProduct_list" onMouseLeave={handleMouseLeave}>
        {featureProductNav.map((el) => (
          <div key={el.id} className="featureProduct_item">
            <a
              href={el.link}
              onMouseEnter={() => setExpandedItem(el.id)}
              onClick={() => toggleItem(el.id)}
              className={el.subNavigation ? "hasSubNavigation" : ""}
              style={{ cursor: "pointer" }}
            >
              <div className="featureProduct_image">
                <img src={el.img} alt={el.name} />
              </div>
              <p className="featureProduct_name">
                {el.name}
                {el.subNavigation && (
                  <FontAwesomeIcon
                    icon={expandedItem === el.id ? faAngleUp : faAngleDown}
                    className="featureProduct_icon_more"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleItem(el.id);
                    }}
                  />
                )}
              </p>
            </a>
            {/* Conditionally render the sub-navigation items */}
            {expandedItem === el.id && el.subNavigation && (
              <div className="subNavigationItems">
                <ul>
                  {/* Logic to display the subNavigation items */}
                  {el.subNavItems.map((subNavItem) => (
                    <li key={subNavItem.id}>
                      <a href={`#${subNavItem.id}`} onClick={() => toggleSubItem(subNavItem.id, subNavItem.subList)} style={{ cursor: "pointer" }}>
                        {subNavItem.name}&nbsp;
                        <FontAwesomeIcon icon={faAngleRight} className="angleRightIcon" />
                      </a>
                      {/* Additional list for subNavigation items */}
                      {subExpandedItem === subNavItem.id && (
                        <ul>
                          {subListItems.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProducts;
