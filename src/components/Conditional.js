const callOrReturn = fn => {
  try {
    return typeof fn === "function" ? fn() : fn;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    return null;
  }
};

const Conditional = (props) =>
  props.if
    ? props.render
      ? callOrReturn(props.render)
      : props.children
    : props.else
      ? callOrReturn(props.else)
      : null;

export default Conditional;
