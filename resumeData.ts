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
        occupation: "Desenvolvedor de Software Pleno",
        city: "São Paulo/SP",
        description: [
            "Desenvolvedor Full Stack JavaScript com mais de 6 anos de experiência, especializado em ReactJS, Next.js, Node.js e TypeScript. Atuo com foco em interfaces performáticas, acessíveis e animadas, utilizando ferramentas como Tailwind CSS, GSAP, Framer Motion, Jest e Cypress.",

            "Tenho vivência em projetos de alto impacto no setor de saúde, atuando em agências como McCann Health e Havas Life. Possuo experiência com WordPress, integração de APIs RESTful e aplicações escaláveis usando AWS (S3, Lambda, CloudFront) e Docker/Kubernetes.",

            "Sou criativo, proativo e atento à experiência do usuário. Curso Ciências da Computação e sigo me aprimorando em Python, IA e cloud, participando ativamente de comunidades tech e formações práticas como as da Rocketseat.",

            "Busco novas oportunidades — fixas ou freelas — para colaborar com soluções modernas, eficazes e com propósito."
        ],
        summary: "Desenvolvedor Full Stack pleno, especializado em ReactJS, Next.js e soluções digitais focadas em performance e UX, com ampla experiência no setor de saúde.",
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
            level: "Pleno",
            entry: "2023-11",
            exit: "2025-06",
            roles: [
                "Desenvolvimento de interfaces web modernas e acessíveis para campanhas digitais do setor de saúde, com foco no ecossistema Veeva.",
                "Atuação ativa no desenvolvimento e manutenção de soluções para Veeva CRM, incluindo e-mails marketing e Visual Aids.",
                "Criação de plugins para Figma que automatizam processos e aceleram o fluxo de trabalho das equipes de design e desenvolvimento.",
                "Implementação de projetos utilizando ReactJS, Next.js e integração com APIs RESTful.",
                "Aplicação de animações com GSAP e Framer Motion para melhorar a interatividade e experiência do usuário.",
                "Gerenciamento e deploy de aplicações com uso de serviços da AWS, como S3 para armazenamento, CloudFront para distribuição de conteúdo e Lambda para funções serverless.",
                "Containerização e orquestração de aplicações com Docker e Kubernetes para garantir escalabilidade e portabilidade."
            ],
            knowledge: [
                "Domínio em ReactJS, Next.js, TypeScript e Tailwind CSS.",
                "Experiência aprofundada no desenvolvimento para Veeva CRM e ferramentas associadas.",
                "Conhecimento em desenvolvimento de plugins para Figma visando automação e otimização.",
                "Práticas de testes unitários e integração contínua.",
                "Boas práticas de acessibilidade e performance web.",
                "Metodologias ágeis para desenvolvimento colaborativo e iterativo.",
                "Familiaridade com serviços da AWS como S3, Lambda, CloudFront e EC2 para hosting e processamento de aplicações.",
                "Conhecimento em Docker para containerização e Kubernetes para orquestração de ambientes de produção."
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
                "Git",
                "API REST",
                "Figma",
                "Veeva",
                "AWS (S3, Lambda, CloudFront, EC2)",
                "Docker",
                "Kubernetes",
                "Adobe Photoshop",
                "Adobe Illustrator"
            ]
        },
        {
            companyName: "McCann Health",
            occupation: "Desenvolvedor Front End",
            level: "Pleno",
            entry: "2020-06",
            exit: "2023-04",
            roles: [
                "Atuei como desenvolvedor front-end focado em entregar soluções digitais responsivas e acessíveis para clientes da área da saúde.",
                "Participei de revisões de código, integração com APIs RESTful e versionamento com Git.",
                "Desenvolvi e-mails marketing e materiais interativos (Veeva VA) utilizando GSAP.",
                "Implementei landing pages e websites com HTML, CSS, JavaScript, ReactJS e Next.js (projetos pessoais).",
            ],
            knowledge: [
                "Desenvolvimento front-end com foco em responsividade, escalabilidade e UX.",
                "Domínio em ReactJS, Hooks, Context API, ciclo de vida de componentes e integração com APIs.",
                "Práticas de versionamento com Git e organização de tarefas em ambientes ágeis (Kanban).",
            ],
            tools: [
                "HTML",
                "CSS",
                "Sass",
                "Tailwind CSS",
                "Bootstrap",
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Axios",
                "GSAP",
                "Git",
                "Veeva",
                "Adobe Photoshop",
                "Adobe Illustrator",
                "Adobe XD",
            ],
        },
        {
            companyName: "Tango Tech",
            occupation: "Desenvolvedor Front End e UI Designer",
            level: "Júnior",
            entry: "2019-10",
            exit: "2020-04",
            roles: [
                "Desenvolvimento frontend de marketplace e dashboard usando ReactJS, VueJS e Sass, com foco em responsividade e design escalável.",
                "Criação de funcionalidades integradas a APIs RESTful, garantindo qualidade e manutenibilidade.",
                "Colaboração ativa com equipes de desenvolvimento e design para definir arquitetura e usabilidade das soluções.",
            ],
            knowledge: [
                "Domínio em JavaScript (ES6), ReactJS, VueJS e práticas modernas de front-end.",
                "Experiência com testes automatizados (Cypress) e integração contínua (CI/CD).",
                "Uso de metodologias ágeis como SCRUM e Kanban, além de versionamento com Git e Gitflow.",
                "Prototipação e design de interfaces usando Adobe XD.",
            ],
            tools: [
                "HTML",
                "CSS",
                "Sass",
                "StyledComponents",
                "JavaScript",
                "ReactJS",
                "VueJS",
                "Git",
                "Gitflow",
                "Cypress",
                "Redux",
                "Adobe Photoshop",
                "Adobe Illustrator",
                "Adobe XD",
            ],
        },
        {
            companyName: "Agência MadGo",
            occupation: "Desenvolvedor Front End",
            level: "Júnior",
            entry: "2019-06",
            exit: "2019-10",
            roles: [
                "Desenvolvimento websites responsivos, landing pages e e-mails marketing",
                "Manutenção em sites com Wordpress",
                "Criativos para mídias sociais",
            ],
            knowledge: [
                "HTML5, CSS3, e JavaScript;",
                "Lógica de programação e fundamentos básicos de desenvolvimento",
                "Trabalho em equipe",
                "Planejamento de campanhas de marketing e criativos",
                "Cronogramas e Prazos",
            ],
            tools: [
                "HTML",
                "CSS",
                "Sass",
                "JavaScript",
                "WordPress",
                "Adobe Photoshop",
                "Adobe Illustrator",
                "Adobe XD",
            ],
        }
    ],

    academicEducation: [
        {
            schoolName: "Rocketseat",
            specialization: "React",
            time: "19h",
            status: "Em andamento",
        },
        {
            schoolName: "Rocketseat",
            specialization: "Python com Flask - Curso Introdutório",
            time: "10h",
            status: "Em andamento",
        },
        {
            schoolName: "Descomplica Faculdade Digital",
            specialization: "Ciências da Computação",
            time: "2023 - 2027",
            status: "Em andamento",
        },
        {
            schoolName: "Mastertech",
            specialization: "Imersivo de Programação Fullstack",
            time: "2018",
            status: "Concluído",
        },
        {
            schoolName: "Senac - Ribeirão Preto",
            specialization: "Técnico em Logística",
            time: "2014 - 2015",
            status: "Concluído",
        },
    ],

    certifications: [
        {
            schoolName: "Leonardo Moura Leitao - Udemy",
            specialization: "Next.js e React - Curso Completo",
            duration: "30 horas",
            status: "Concluído",
        },
        {
            schoolName: "Matheus Fraga - Udemy",
            specialization: "Projeto Completo (NodeJS, React, React Native, TypeScript)",
            duration: "24 horas",
            status: "Concluído",
        },
        {
            schoolName: "Veeva",
            specialization: "Promomats, CLM e Approved Email",
            duration: "80 horas",
            status: "Concluído",
        },
    ],
};