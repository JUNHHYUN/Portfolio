export const project7 = {
   name: 'CarePaws',
  pointcolor: 'before:bg-[#7c29a7]',
  title: '반려견 헬스 기록 관리 앱: CarePaws',
  subject: '반려견의 건강 정보를 통합 관리할 수 있는 헬스케어 앱 프로젝트로, 앱 기획부터 디자인, 일부 구현까지 주도했습니다.',
  data: '2024.09 - 2025.05 약 8개월',
  team: '기여도 80%',
  tag: ['반려견', '헬스케어', 'Android 앱'],
  giturl: 'https://github.com/JUNHHYUN/CarePaws',
  tools: [
    {
      title: 'Android Studio',
      detail: 'XML 기반 UI 설계 및 Kotlin 언어를 활용해 반려견 건강 정보 등록, 수정, 일정 관리 기능을 구현했습니다.',
    },
    {
      title: 'Firebase',
      detail: 'Firebase Authentication, Firestore DB를 통해 사용자 인증과 실시간 데이터 저장 기능을 적용했습니다.',
    },
    {
      title: 'Figma',
      detail: '앱 UI/UX 디자인을 기획하고 Figma로 프로토타입 제작 및 팀원과 공유하며 협업했습니다.',
    },
  ],

  featinfo: ['반려견 정보 등록 및 수정', '건강 체크 및 일정 관리', '병원 찾기 및 커뮤니티 기능', '달력 기반 건강 이력 확인'],

  parts: [
    {
      title: '직접 소통을 통해 반려견 보호자 요구사항 파악',
      detailList: [
        '실제 사용자 대상 인터뷰를 진행하여 필요한 기능을 도출하고 우선순위를 설정함.',
        '디자인, 기능 구현 과정에서 지속적으로 피드백을 반영하여 앱의 실용성 향상.',
      ],
    },
    {
      title: '앱 구조 설계 및 주요 기능 기획',
      detailList: [
        '보호자와 반려견 프로필을 나누어 설계하고, 병원 찾기, 커뮤니티, 건강 체크 등 기능을 명확히 구분하여 모듈화.',
        '화면 전환, Fragment 구조, BottomNavigation 등 앱 아키텍처 전반 설계 주도.',
      ],
    },
    {
      title: 'UI/UX 디자인 및 반응형 레이아웃 구현',
      detailList: [
        '다양한 화면 크기를 고려해 XML로 반응형 UI 설계, 각 컴포넌트의 정렬 및 비율 최적화.',
        '사용자 편의를 고려한 건강 캘린더, 병원 검색 화면 디자인 기획 및 구현.',
      ],
    },
    {
      title: 'Firebase 연동 및 사용자 인증/데이터 저장',
      detailList: [
        'Firebase Authentication으로 사용자 계정 관리 기능을 구현하고, Firestore를 이용해 반려견 건강 기록 저장.',
        '사용자별 데이터를 안전하게 분리하여 저장하고, 실시간 반영되는 구조 설계.',
      ],
    },
    {
      title: '테스트 및 유지보수성을 위한 코드 리팩토링',
      detailList: [
        'Fragment 간 데이터 전달 구조를 안전하게 개선하고 ViewBinding, ViewModel 도입 검토.',
        '사용자 피드백을 바탕으로 불편한 인터페이스 요소 지속 개선.',
      ],
    },
    {
      title: '릴리즈 준비 및 GitHub 배포 관리',
      detailList: [
        '릴리즈용 APK 생성 및 .gitignore를 활용한 파일 관리, GitHub에 코드 및 문서 정리 업로드.',
      ],
    },
  ],
};
