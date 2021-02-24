import styled from "styled-components";
import border from "../styled/border";
const SearchWrap = border({
  Comp: styled.div`
    padding: 0.1ren 0.15rem;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0.4rem;
    color: #666;
    background: #fff;
    img {
      width: 0.3rem;
      height: 0.3rem;
      margin-right: 0.05rem;
    }
  `,
});

export { BorderSearchWrap };
