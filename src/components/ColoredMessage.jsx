export const ColoredMessage = (props) => {
  // Props を分割代入
  const { color, children } = props;

  const contentStyle = {
    color,
    fontSize: "20px"
  };

  return <p style={contentStyle}>{children}</p>;
};
