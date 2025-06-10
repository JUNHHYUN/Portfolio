export interface TeamMember {
  name: string;
  role: string;
  description: string;
  skills: {
    FrontEnd?: string[];
    BackEnd?: string[];
    Tools?: string[];
  };
  image: string;
}

export const teamData: TeamMember[] = [
  {
    name: "박준현",
    role: "프론트엔드 개발자",
    description: "백엔드(Python, JAVA, MySQL)부터 프론트엔드(JavaScript, HTML, CSS), 그리고 Git과 Figma까지 폭넓게 다루며, 개발 전 과정에 능숙한 풀스택 개발자입니다.",
    skills: {
      BackEnd: ["Python", "JAVA", "Kotlin", ],
      FrontEnd: ["HTML", "CSS", "JavaScript"],
      DataBase: ["MySQL"],
      Tools: ["Git", "Figma"]
    },
    image: "src/assets/images/member1.png"
  },
  {
  "name": "김대기",
  "role": "풀스택 & LLM 서비스 개발자",
  "description": "새로운 기술 도입에 적극적이며, 사용자 경험을 고려한 풀스택 개발을 지향합니다. 특히 LLM(거대 언어 모델) 서비스를 개발하며 프롬프트 엔지니어링과 모델 활용에 강점을 가지고 있습니다.",
  "skills": {
    "Backend": ["Python", "FastAPI"],
    "Frontend": ["JavaScript", "React"],
    "LLM/AI": ["LangChain", "Hugging Face", "LangGraph", "Prompt Engineering"],
    "Database": ["MongoDB", "Pinecone"],
    "DevOps": ["Docker"]
  },
    image: "src/assets/images/member2.webp"
  },
  {
  name: "최성민",
  role: "풀스택 개발자",
  description: "백엔드 및 데이터베이스 설계를 중심으로 하는 풀스택 개발자입니다. C 계열 언어와 Kotlin을 주로 사용하며, 서버 구축과 데이터 관리에 강점을 갖고 있습니다. 다양한 API를 연동하여 최적화된 백엔드 아키텍처를 설계하며, 확장성과 유지보수를 고려한 안정적인 시스템 개발에 집중합니다.",
  skills: {
    FrontEnd: ["HTML", "CSS", "JavaScript"],
    BackEnd: ["C", "C++", "Python", "Kotlin", "PHP","RestApI"],
    DataBase: ["MySQL"],
    Tools: ["GitHub", "Notion"],
    API: ["공공데이터 포털 API", "OpenAI API", "Naver Clova API"],
  },
    image: "src/assets/images/member3.webp"
  }
];

export const teamIntro = {
  title: "WebProgramming Portfolio",
  subtitle: "혁신적인 디지털 솔루션을 만드는 팀",
  text: "우리는 사용자 중심의 혁신적인 디지털 솔루션을 만드는 것을 목표로 합니다.\n각자의 전문성을 바탕으로 협업하며, 최상의 결과물을 만들어내기 위해 노력합니다.\n프론트엔드, 백엔드, 디자인 각 분야의 전문가들이 모여 완성도 높은 프로젝트를 진행합니다."
}; 