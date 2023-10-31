import GlobalButton from "components/GlobalButton";
import GlobalHeader from "components/GlobalHeader";
import { styled } from "styled-components";

const MyPage = () => {
  return (
    <HeaderWrapper>
      <GlobalHeader headText={"마이페이지"} leftChild={null} />
    </HeaderWrapper>
  );
};

export default MyPage;

const HeaderWrapper = styled.header`
  position: fixed;
  top: 38px;
  width: 375px;
`;
