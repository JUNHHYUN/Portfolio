import tw from 'tailwind-styled-components';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

import { positionActions } from '../../../store/position-slice';
import { isMobile } from '../../../utils/isMobile';
import ScrollAni from '../../../styles/ScrollAni';
import useScrollAnimation from '../../../hooks/useScrollAnimation';
import TeamMembers from '../../../components/main/TeamMembers';

const IntroComponent = tw.main`
  relative
  flex
  items-center
  flex-col
  justify-center
  bg-mainBlack
  px-10
  pt-10
  z-1
  max-lg:h-auto
  max-lg:py-20
`;

const Content = tw.section`
  flex
  flex-col
  gap-20
  items-center
  text-mainGray
  items-center
  py-20
`;

const SubJectTit = tw.h2`
  absolute
  top-10
  left-10
  text-superLightGray
  font-black
  text-6xl

  max-lg:flex-col 
  max-lg:static 
  max-lg:w-full
`;

function AboutMe() {
  const dispatch = useDispatch()
  const moScrollRef = useRef<HTMLDivElement>(null);

  const { scrollRef, scrollEl } = useScrollAnimation();

  const { scrollYProgress } = useScroll({
    target: moScrollRef,
    offset: ['0 1', `${isMobile ? '0.8 1' : '1 1'}`]
  });

  useTransform(scrollYProgress, (pos) => {
    if (pos) {
      return dispatch(positionActions.PositionStyle(pos === 1 ? 'relative' : 'sticky'));
    }
  });

  return (
    <motion.div ref={moScrollRef}>
      <IntroComponent id='aboutme'>
        <SubJectTit>About us</SubJectTit>
        <ScrollAni className={`${scrollEl ? 'fadeAn fadeIn' : 'fadeOut'}`} ref={scrollRef}>
          <Content>
            <TeamMembers />
          </Content>
        </ScrollAni>
      </IntroComponent >
    </motion.div>
  );
}

export default AboutMe;
