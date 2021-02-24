import styled from "style-components";

const border = ({ Comp }) => {
  const BorderedComp = styled(Comp)`
    border-width: ${(props) => {
      props.width || "3px";
    }};
    border-color: ${(props) => {
      props.color || "red";
    }};
    border-style: ${(props) => {
      props.style || "solid";
    }};
  `;
  return BorderedComp;
};
export default border;
