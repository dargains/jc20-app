import React, {useState} from 'react'
import cx from "classnames"
import {SlideDown} from 'react-slidedown'

function MyDropdown(props) {
  return (
    <SlideDown className={"my-dropdown-slidedown"}>
      {props.open ? props.children : null}
    </SlideDown>
  );
}

const Accordion = ({header, children, inverted}) => {
  const [open, setOpen] = useState(false)
  return (
    <article>
      <header
        className={cx(
          "flex items-center justify-between py-1 pr-2 mt-3 border-b",
          {
            "text-green08 border-green08": !inverted,
            "border-white text-white": inverted
          }
        )}
        onClick={() => setOpen(!open)}
      >
        <p>{header}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          className={cx("transform transition-transform duration-200", {
            "rotate-180": open,
          })}
        >
          <path
            d="M5,0l5,6H0Z"
            transform="translate(10 6) rotate(180)"
            fill={inverted ? "#FFFFFF" : "#022B25"}
          />
        </svg>
      </header>
      <MyDropdown open={open}>{children}</MyDropdown>
    </article>
  );
}

export default Accordion
