import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import { isMobile } from '../../../utils/isMobile';
import SocialLinkList from '../../../components/main/SocialList';
import ScrollArrow from '../../../components/main/ScrollArrow';
import { ANI_TRANSITION, OPACITY_0, OPACITY_1 } from '../../../utils/constant/constant';
import TextWrap from '../../../components/main/TextWrap';
import { MainComponent } from './Main.styled';
import MainBackground from '../../../components/atoms/background/MainBackground';
import { teamIntro } from '../../../data/teamData';

function Main() {
  const { pathname } = useLocation();
  const vhRef = useRef(0);
  const mainRef = useRef<HTMLDivElement>(null);
  const isPosition = useSelector((state: RootState) => state.position.isPosition);
  const ismobile = isMobile ? 'true' : 'false';

  // 모바일 환경에서 높이 딱 맞춰 나오도록
  useEffect(() => {
    if (isMobile) {
      vhRef.current = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vhRef.current}px`);
    }
  }, []);

  // 애니메이션이 이루어 지는 동안에는 스크롤 금지, 메인 화면에서만 동작 되도록
  useEffect(() => {
    const mainSection = mainRef.current?.getBoundingClientRect();
    if (mainSection?.top === 0) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => {
        if (pathname === '/') {
          document.body.style.overflow = ''
        }
      }, 3000)
    }
  }, [pathname])

  const goToTarget = () => {
    const aboutme = document.querySelector('#aboutme');
    aboutme?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  return (
    <motion.div className={`top-0 ${isPosition}`}>
      <MainComponent ref={mainRef} ismobile={ismobile}>
        <MainBackground
          initial={{ ...OPACITY_0, scale: 1.25 }}
          animate={{ ...OPACITY_1, scale: 1 }}
          transition={{ ...ANI_TRANSITION, delay: 3 }}
        />

        <ScrollArrow delay={3.9} />

        <SocialLinkList delay={3} width='w-full' />

        <TextWrap
          title={teamIntro.title}
          text={teamIntro.text}
        />

        {/* <TeamIntro teamAboutData={teamAboutData} /> */}

      </MainComponent>
    </motion.div>
  )
}

export default Main;
