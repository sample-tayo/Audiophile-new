import PropTypes from "prop-types";

function PageType({ pagetype }) {
  const pageStyle = {
    padding: "7rem 0 5rem 0",
    fontSize: "2.8rem",
    fontWeight: "700",
    textAlign: "center",
    backgroundColor: "#191919",
    color: "#fff",
  };

  return (
    <div style={pageStyle}>
      <p>{pagetype}</p>
    </div>
  );
}

export default PageType;

PageType.propTypes = {
  pagetype: PropTypes.string.isRequired,
};
