// Function to change the language
function changeLanguage(lang) {
    // Set the language preference in local storage
    localStorage.setItem('language', lang);
    // Loop through all elements with data-translate-key attribute
    document.querySelectorAll('[data-translate-key]').forEach(element => {
        const key = element.getAttribute('data-translate-key');
        // Update the element's content with the translation
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}

// Object containing all translations
const translations = {
    en: {
        pageTitle: "Franklin Xia | Personal Portfolio",
        featuredProjectsTitle: "Featured Projects",
        project1Title: "AI Text-to-Image Project",
        project1Desc: "A cutting-edge AI project that generates images from textual descriptions, leveraging advanced deep learning models.",
        navHome: "Home",
        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        navContact: "Contact",
        heroTitle: "Hi, I'm Franklin Xia",
        heroSubtitle: "Full Stack Developer",
        heroDescription: "I build exceptional digital experiences with modern technologies. Passionate about creating solutions that make an impact.",
        heroButton1: "Get In Touch",
        heroButton2: "View Work",
        aboutTitle: "About Me",
        aboutSubtitle: "Who I Am",
        aboutDesc1: "Over 14 years of experience in full-stack technology management, a senior software architect who has led teams of 40+ people and delivered multiple large-scale projects, deeply integrating technical strategy with business goals.",
        aboutDesc2: "Proficient in software architecture, including client-side (Windows, MacOS, Linux, browser), mobile development (iOS, React Native, Flutter), and AI application architecture (AIGC, RAG, Agent). Familiar with server-side architecture, including distributed microservices and AWS cloud computing. Led multiple enterprise-level technology architecture transformations, capable of building robust and efficient system architectures for businesses.",
        aboutDesc3: "Familiar with streaming media protocols, including WebRTC, RTMP, and HLS, capable of supporting high-performance, low-latency multimedia transmission and real-time interactive application development.",
        aboutDesc4: "Mastery of deep learning algorithms such as Transformer, RNN, and CNN, and proficient in using AI tools like PyTorch and Langchain, with the ability to quickly build and deploy intelligent solutions.",
        aboutDesc5: "Skilled in building technology systems from scratch (0 to 1), successfully reduced the average monthly bug count from 100+ to under 10, and improved R&D efficiency by over 40%, providing strong support for product quality and stability.",
        aboutDesc6: "As a serial entrepreneur, I have technology management experience from leading companies like Zoom and various startups. I have received multiple industry honors, including the Excellent Application Software Award at the Suzhou Mobile Internet Innovation Competition (for the Suzhoudào app), demonstrating excellent market insight and innovation capabilities.",
        aboutLocation: "Suzhou, China",
        aboutResume: "Download Resume",
        experienceTitle: "Experience",
        exp1Title: "Technical Vice President (Acting Director)",
        exp1Company: "Suzhou Landhigh Cloud Network Technology Co., Ltd.",
        exp1Desc: "<strong>AI Digital Content Generation Platform:</strong> Overall planning of AI computing power platform and multi-modal engine R&D, building a digital content matrix covering live streaming, film and television, VR, etc., supporting the intelligent transformation of 20+ industry clients; used cluster distributed rendering technology to generate special effects rendering for \"Ne Zha Reborn\".<br><br><strong>Technology Management:</strong> Reported directly to the CTO, led requirements analysis, technical problem-solving, team recruitment, and process optimization, driving a 90% reduction in the monthly average bug count.<br><br><strong>Key Achievements:</strong> Completed the NDI to WebRTC reconstruction for the streaming media protocol, maintaining the same latency while improving stability by 50%; led the team to optimize the performance of the UE real-time rendering system, reducing GPU resource consumption by 30%; reconstructed the distributed cloud rendering platform, reducing the bug rate by 90% and improving performance by 20%; led the AI team to complete the training and fine-tuning of large models such as AI digital humans, TTS, and ASR, as well as the engineering of AI products; promoted DevOps, standardized the CI/CD process, completed the deployment and launch of Jenkins pipeline, achieving automated code compilation, automatic generation of version numbers, packaging, and signing, reducing the version release time by 70%.",
        exp2Title: "Founding Partner / Technical Director",
        exp2Company: "Suzhou Morefuse Technology Co., Ltd.",
        exp2Desc: "<strong>AI Enterprise Service Product Line:</strong> Built an LLM knowledge base question and answer system (LLM + Langchain + Django + Vue + Redis + Celery + Milvus + Myqsl + Docker) and launched the POC within 30 days; developed AI marketing/training robots (AI agents), increasing customer signing rate by 35%.<br><br><strong>Technical Architecture:</strong> Adopted Docker Compose containerized deployment, achieving a system stability of 99.9%.",
        exp3Title: "Senior Software Engineer",
        exp3Company: "ZOOM Video Communications (US-funded)",
        exp3Desc: "<strong>Core Feature Development:</strong> Led the development of the Mac platform ZR Meeting IM system and ZR Meeting Polling system, completed patented features such as sensitive word filtering and dynamic emoticon feedback.<br><br><strong>Technical Influence:</strong> Promoted the architectural design of the digital signage system, helping to increase the enterprise customer coverage rate by 20%.",
        exp4Title: "Mobile Platform Technical Manager",
        exp4Company: "Codyy Education Technology",
        exp4Desc: "<strong>0 to 1 Technology Breakthrough:</strong> Independently developed the Gstreamer streaming media player, supporting online teaching for 26,000 schools nationwide, achieving a playback success rate of 99.5%, and obtained the Suzhou City Shortage Talent Certification in 2017.<br><br><strong>Team Building:</strong> Established iOS/Android dual-platform teams, led the R&D and iteration of the education cloud APP for 10+ versions, increasing user retention rate by 45%.",
        skillsTitle: "My Skills",
        skill1Title: "Frontend Development",
        skill1Desc: "Crafting beautiful, responsive interfaces with modern frameworks and libraries.",
        skill2Title: "Backend Development",
        skill2Desc: "Building robust APIs and server-side applications with scalable architectures.",
        skill3Title: "DevOps & Cloud",
        skill3Desc: "Deploying and managing applications in cloud environments with CI/CD pipelines.",
        skillBarsTitle: "Technical Proficiency",
        project2Title: "RAG Project",
        project2Desc: "An advanced RAG system that enhances large language models with external knowledge retrieval for more accurate and informative responses.",
        project3Desc: "An intelligent agent system capable of autonomous task execution, learning, and decision-making in complex environments.",
        contactTitle: "Get In Touch",
        contactSubTitle: "Let's Talk",
        contactDesc: "Have a project in mind or want to discuss potential opportunities? Feel free to reach out and I'll get back to you as soon as possible.",
        // Add other English translations here
    },
    zh: {
        pageTitle: "Franklin Xia | 个人作品集",
        featuredProjectsTitle: "精选项目",
        project1Title: "AI文生图项目",
        project1Desc: "一个前沿的人工智能项目，利用先进的深度学习模型从文本描述生成图像。",
        navHome: "首页",
        navAbout: "关于",
        navSkills: "技能",
        navProjects: "项目",
        navContact: "联系",
        heroTitle: "你好，我是 Franklin Xia",
        heroSubtitle: "全栈开发者",
        heroDescription: "我用现代技术构建卓越的数字体验。热衷于创造有影响力的解决方案。",
        heroButton1: "联系我",
        heroButton2: "查看作品",
        aboutTitle: "关于我",
        aboutSubtitle: "我是谁",
        aboutDesc1: "超过14年全栈技术管理经验，资深软件架构师，曾带领40+人团队，交付多个大型项目，深度融合技术战略与业务目标。",
        aboutDesc2: "精通软件架构，包括客户端（Windows、MacOS、Linux、浏览器）、移动端开发（iOS、React Native、Flutter）及AI应用架构（AIGC、RAG、Agent）。熟悉服务端架构，包括分布式微服务及AWS云计算。主导多次企业级技术架构转型，能为企业构建稳健高效的系统架构。",
        aboutDesc3: "熟悉流媒体协议，包括WebRTC、RTMP、HLS，能支持高性能、低延迟的多媒体传输和实时互动应用开发。",
        aboutDesc4: "掌握Transformer、RNN、CNN等深度学习算法，熟练运用PyTorch、Langchain等AI工具，能快速构建并部署智能化解决方案。",
        aboutDesc5: "擅长从0到1搭建技术体系，曾成功将月均Bug数从100+降至10以内，研发效能提升40%以上，为产品质量与稳定性提供坚实保障。",
        aboutDesc6: "作为连续创业者，拥有Zoom等头部企业及多家创业公司的技术管理经验。曾获苏州移动互联网创新大赛优秀应用软件奖（苏格拉底App）等多项行业荣誉，展现了优秀市场洞察与创新能力。",
        aboutLocation: "中国，苏州",
        aboutResume: "下载简历",
        experienceTitle: "工作经历",
        exp1Title: "技术副总裁（代理总监）",
        exp1Company: "苏州创意云科技有限公司",
        exp1Desc: "<strong>AI数字内容生成平台:</strong> 整体规划AI算力平台及多模态引擎研发，构建覆盖直播、影视、VR等领域的数字内容矩阵，支撑20+行业客户智能化转型；曾用集群分布式渲染技术生成《哪吒重生》特效渲染。<br><br><strong>技术管理:</strong> 直接向CTO汇报，主导需求分析、技术攻坚、团队招募及流程优化，推动月均Bug数降低90%。<br><br><strong>关键成就:</strong> 完成流媒体协议NDI转WebRTC重构，同等延迟下稳定性提升50%；带领团队优化UE实时渲染系统性能，GPU资源消耗降低30%；重构分布式云渲染平台，Bug率降低90%，性能提升20%；带领AI团队完成AI数字人、TTS、ASR等大模型训练调优及AI产品工程化落地；推行DevOps，规范CI/CD流程，完成Jenkins流水线部署上线，实现代码自动化编译、自动生成版本号、打包、签名，版本发布时间缩短70%。",
        exp2Title: "创始合伙人/技术总监",
        exp2Company: "苏州墨融科技有限公司",
        exp2Desc: "<strong>AI企业服务产品线:</strong> 搭建LLM知识库问答系统（LLM+Langchain+Django+Vue+Redis+Celery+Milvus+Myqsl+Docker）并于30天内上线POC；研发AI营销/培训机器人（AI Agent），提升客户签约率35%。<br><br><strong>技术架构:</strong> 采用Docker Compose容器化部署，实现系统稳定性99.9%。",
        exp3Title: "高级软件工程师",
        exp3Company: "ZOOM Video Communications (美资)",
        exp3Desc: "<strong>核心功能研发:</strong> 主导Mac平台ZR Meeting IM系统、ZR Meeting Polling系统研发，完成敏感词过滤、动态表情反馈等专利功能。<br><br><strong>技术影响力:</strong> 推动数字标牌系统架构设计，助力企业客户覆盖率提升20%。",
        exp4Title: "移动平台技术经理",
        exp4Company: "阔地教育科技",
        exp4Desc: "<strong>0到1技术突破:</strong> 独立研发Gstreamer流媒体播放器，支撑全国2.6万所学校在线教学，播放成功率达99.5%，并于2017年获苏州市紧缺人才认证。<br><br><strong>团队建设:</strong> 组建iOS/Android双平台团队，主导教育云APP十余版本迭代研发，用户留存率提升45%。",
        skillsTitle: "我的技能",
        skill1Title: "前端开发",
        skill1Desc: "使用现代框架和库打造美观、响应迅速的界面。",
        skill2Title: "后端开发",
        skill2Desc: "构建强大的API和具有可扩展架构的服务器端应用程序。",
        skill3Title: "DevOps与云计算",
        skill3Desc: "在云环境中使用CI/CD管道部署和管理应用程序。",
        skillBarsTitle: "技术熟练度",
        project2Title: "RAG项目",
        project2Desc: "一个先进的RAG系统，通过外部知识检索增强大型语言模型，以提供更准确和信息丰富的响应。",
        project3Desc: "一个智能代理系统，能够在复杂环境中自主执行任务、学习和决策。",
        contactTitle: "联系我",
        contactSubTitle: "欢迎交流",
        contactDesc: "有项目合作意向或想探讨潜在机会？欢迎随时联系，我会尽快回复您。",
    }
};

// Function to set the initial language based on localStorage or browser settings
function setInitialLanguage() {
    const preferredLanguage = localStorage.getItem('language') || navigator.language.split('-')[0];
    if (translations[preferredLanguage]) {
        changeLanguage(preferredLanguage);
    } else {
        changeLanguage('en'); // Default to English if preferred language is not supported
    }
}

// Call setInitialLanguage when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', setInitialLanguage);