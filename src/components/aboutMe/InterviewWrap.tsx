import tw from "tailwind-styled-components";
import PointText from "../atoms/text/PointText";
import BoldText from "../atoms/text/BoldText";

const RightContainer = tw.div`
  flex
  flex-col
  flex-1
  gap-20
`;

const Tit = tw.h3`
  text-4xl
  font-black
  text-superLightGray
  pb-[2rem]
`;

const SubTit = tw.h5`
  text-2xl
  font-bold
  pb-6
`;

const MyMind = tw.div`
  flex
  flex-col
  gap-3
`;

const MyMindTxt = tw.div`
  relative
  text-base
  mb-5
  bg-lightGray
  p-5
  rounded-tl-2xl
  rounded-tr-2xl  
  rounded-bl-2xl
  text-white
`;

const InterviewWrap = () => {
  return (
    <RightContainer id="Interview">
      <MyMind>
        <Tit>Interview</Tit>
        <MyMindTxt>
          <SubTit>Q. 이 프로젝트를 시작하게 된 계기는 무엇인가요?</SubTit>
          김대기:  컴퓨터공학을 전공하다 보니 GPT를 자주 쓰게 됐는데, 어느 순간 <PointText>‘내가 AI에게 맞춰 말하고 있네?’</PointText>라는 생각이 들더라고요.<br />
          원래는 AI가 사람을 도와야 하는데, 오히려 사람이 프롬프트를 고치며 <PointText>AI를 돕고 있는 구조</PointText>가 이상했어요.<br />
          게다가 대화가 길어질수록 GPT는 느려지고, 기억도 못 해서 결과 품질이 점점 떨어지더라고요.<br />
          그래서 <PointText>사용자가 주도하고, 시간이 지날수록 작업이 구체화되는 도구</PointText>를 만들고 싶었습니다.
        </MyMindTxt>

        <MyMindTxt>
          <SubTit>Q. 이 프로젝트를 하면서 어떤 점을 느꼈나요?</SubTit>
          박준현:  기술적으로도 많이 배웠지만, 그보다 더 크게 느낀 점은 <PointText>사용자를 고려하는 시각</PointText>이 얼마나 중요한지였습니다.<br />
          처음엔 기능 구현에만 집중했는데, 점차 “사용자가 이걸 쉽게 쓸 수 있을까?”라는 고민을 하게 되면서<br />
          앱의 구조나 <PointText>UI/UX</PointText>에 더 신경 쓰게 되었고, 사용자 중심 개발의 본질을 조금은 이해하게 된 계기가 되었습니다.
        </MyMindTxt>

        <MyMindTxt>
          <SubTit>Q. 자기계발을 위해 어떤 것들을 해왔는지?</SubTit>
          지속적인 학습을 위해 스터디와 온라인 강의에 적극 참여하고, <PointText>낯선 기술에도 포기 하지 않고 메타인지 방식을 활용</PointText>해 문제 해결 능력을 쌓고 있습니다.<br />
          <BoldText>열린 마음으로 피드백을 소중히 여기고,</BoldText>개발 과정에서 항상 개선할 점을 찾기 위해 노력하고 있습니다.
        </MyMindTxt>
      </MyMind>
    </RightContainer>
  );
};

export default InterviewWrap;