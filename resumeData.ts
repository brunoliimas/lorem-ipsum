interface Experience {
    occupation: string;
    level: string;
    companyName: string;
    entry: string;
    exit: string;
    knowledge: string[];
    tools: string[];
    roles: string[];
}

interface AcademicEducation {
    specialization: string;
    schoolName: string;
    time: string;
    status: string;
}

interface Certification {
    specialization: string;
    schoolName: string;
    duration: string;
    status: string;
}

interface SocialLink {
    icon: string;
    url: string;
    name: string;
}

interface Profile {
    name: string;
    occupation: string;
    city: string;
    summary: string;
    description: string[];
    socialLinks: SocialLink[];
}

export interface ResumeData {
    profile: Profile;
    works: Experience[];
    academicEducation: AcademicEducation[];
    certifications: Certification[];
}

export const resumeData: ResumeData = {
    profile: {
        name: "Bruno Lima",
        occupation: "Desenvolvedor Full Stack",
        city: "São Paulo/SP",
        description: [
            "Desenvolvedor Full Stack JavaScript com mais de 6 anos de experiência, especializado em ReactJS, Next.js, Node.js e TypeScript. Experiência comprovada em projetos de alto impacto no setor de saúde (Havas Life, McCann Health), com foco em interfaces performáticas, acessíveis e animadas.",

            "Forte interesse em Inteligência Artificial e automações, aplicando IA generativa como ferramenta de produtividade no desenvolvimento de soluções — incluindo o uso de assistentes de IA como apoio técnico em projetos pessoais.",

            "Domínio em Tailwind CSS, GSAP, Framer Motion, Jest e Cypress, além de experiência com AWS e Docker/Kubernetes. Também possuo conhecimentos em Python, Flask, PostgreSQL e MongoDB.",

            "Busco novas oportunidades — fixas ou freelas — para colaborar com soluções modernas, eficazes e com propósito."
        ],
        summary: "Desenvolvedor Full Stack JavaScript com mais de 6 anos de experiência, especializado em ReactJS, Next.js, Node.js e TypeScript, com foco em interfaces performáticas, acessíveis e animadas.",
        socialLinks: [
            {
                name: "+55 11 9 6074 4779",
                url: "https://wa.me/5511960744779",
                icon: "BsWhatsapp",
            },
            {
                name: "ibrunoliimas@gmail.com",
                url: "mailto:ibrunoliimas@gmail.com",
                icon: "HiOutlineMail",
            },
            {
                name: "/in/brunoliimas",
                url: "https://linkedin.com/in/brunoliimas",
                icon: "BsLinkedin",
            },
            {
                name: "/brunoliimas",
                url: "http://github.com/brunoliimas",
                icon: "BsGithub",
            },
        ],
    },

    works: [
        {
            companyName: "Havas Life",
            occupation: "Desenvolvedor Full Stack",
            level: "Jr",
            entry: "2023-11",
            exit: "2025-06",
            roles: [
                "Desenvolvi interfaces web modernas e acessíveis para campanhas digitais do setor de saúde, com foco no ecossistema Veeva CRM.",
                "Criei plugins para Figma que automatizaram processos de design, acelerando o fluxo de trabalho entre equipes.",
                "Implementei projetos em ReactJS e Next.js com integração de APIs RESTful e animações interativas usando GSAP e Framer Motion.",
                "Gerenciei deploy e infraestrutura utilizando AWS (S3, CloudFront, Lambda) e containerização com Docker/Kubernetes."
            ],
            knowledge: [
                "Domínio em ReactJS, Next.js, TypeScript e Tailwind CSS.",
                "Experiência aprofundada no desenvolvimento para Veeva CRM e ferramentas associadas.",
                "Conhecimento em desenvolvimento de plugins para Figma visando automação e otimização.",
                "Práticas de testes unitários e integração contínua.",
                "Familiaridade com serviços da AWS como S3, Lambda, CloudFront e EC2.",
                "Conhecimento em Docker para containerização e Kubernetes para orquestração."
            ],
            tools: [
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "GSAP",
                "Framer Motion",
                "Node.js",
                "Jest",
                "Cypress",
                "Git",
                "API REST",
                "Figma",
                "Veeva CRM",
                "AWS (S3, Lambda, CloudFront, EC2)",
                "Docker",
                "Kubernetes"
            ]
        },
        {
            companyName: "McCann Health",
            occupation: "Desenvolvedor Front End",
            level: "Pleno",
            entry: "2020-06",
            exit: "2023-04",
            roles: [
                "Entreguei soluções digitais responsivas e acessíveis para clientes da área da saúde por quase 3 anos.",
                "Desenvolvi e-mails marketing e materiais interativos (Veeva Visual Aids) com animações em GSAP.",
                "Participei de revisões de código, integração com APIs RESTful e versionamento com Git."
            ],
            knowledge: [
                "Desenvolvimento front-end com foco em responsividade, escalabilidade e UX.",
                "Domínio em ReactJS, Hooks, Context API, ciclo de vida de componentes e integração com APIs.",
                "Práticas de versionamento com Git e organização de tarefas em ambientes ágeis (Kanban)."
            ],
            tools: [
                "HTML",
                "CSS",
                "Sass",
                "Tailwind CSS",
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "GSAP",
                "Git",
                "Veeva",
                "Adobe Photoshop",
                "Adobe Illustrator",
                "Adobe XD"
            ]
        },
        {
            companyName: "Tango Tech",
            occupation: "Desenvolvedor Front End e UI Designer",
            level: "Júnior",
            entry: "2019-10",
            exit: "2020-04",
            roles: [
                "Desenvolvi frontend de marketplace e dashboard usando ReactJS, VueJS e Sass.",
                "Implementei testes automatizados com Cypress e práticas de CI/CD."
            ],
            knowledge: [
                "Domínio em JavaScript (ES6), ReactJS, VueJS e práticas modernas de front-end.",
                "Experiência com testes automatizados (Cypress) e integração contínua (CI/CD).",
                "Uso de metodologias ágeis como SCRUM e Kanban, além de versionamento com Git e Gitflow."
            ],
            tools: [
                "HTML",
                "CSS",
                "Sass",
                "Styled Components",
                "JavaScript",
                "ReactJS",
                "VueJS",
                "Git",
                "Gitflow",
                "Cypress",
                "Redux",
                "Adobe XD"
            ]
        },
        {
            companyName: "Agência MadGo",
            occupation: "Desenvolvedor Front End",
            level: "Júnior",
            entry: "2019-06",
            exit: "2019-10",
            roles: [
                "Desenvolvi websites responsivos, landing pages e e-mails marketing com WordPress."
            ],
            knowledge: [
                "HTML5, CSS3 e JavaScript.",
                "Lógica de programação e fundamentos básicos de desenvolvimento.",
                "Trabalho em equipe e planejamento de campanhas de marketing."
            ],
            tools: [
                "HTML",
                "CSS",
                "Sass",
                "JavaScript",
                "WordPress",
                "Adobe Photoshop",
                "Adobe Illustrator",
                "Adobe XD"
            ]
        }
    ],

    academicEducation: [
        {
            schoolName: "Descomplica Faculdade Digital",
            specialization: "Ciências da Computação",
            time: "2023 - 2027",
            status: "Em andamento"
        },
        {
            schoolName: "Mastertech",
            specialization: "Imersivo de Programação Fullstack",
            time: "2018",
            status: "Concluído"
        }
    ],

    certifications: [
        {
            schoolName: "Veeva Systems",
            specialization: "Approved Email Business/Technical v3, CLM Business/Technical v3, Vault PromoMats",
            duration: "",
            status: "Concluído"
        },
        {
            schoolName: "Rocketseat",
            specialization: "Desafio IA Para Todos, Fundamentos DevOps, Fundamentos React, Gestão de Tempo",
            duration: "",
            status: "Concluído"
        },
        {
            schoolName: "Udemy/Coodesh",
            specialization: "Next.js e React Completo (30h), Projeto Full Stack Node/React/React Native (24h), React.JS, Flutter",
            duration: "",
            status: "Concluído"
        }
    ]
};