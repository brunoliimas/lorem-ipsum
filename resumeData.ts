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
    description: string;
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
        occupation: "Desenvolvedor de Software - Front End",
        city: "São Paulo/SP",
        description: "Desenvolvedor Front End com conhecimentos em ReactJS e NextJS, com habilidades avançadas em HTML, CSS e JavaScript. Paixão por criar interfaces interativas e responsivas, entregando soluções de qualidade. Abordagem focada no usuário, trabalhando em equipe para cumprir prazos e garantir a qualidade. Sempre atualizado nas últimas tendências de design e desenvolvimento.",
        socialLinks: [
            {
                name: "+55 11 9 6074 4779",
                url: "https://wa.me/5511960744779",
                icon: "BsWhatsapp"
            },
            {
                name: "ibrunoliimas@gmail.com",
                url: "mailto:ibrunoliimas@gmail.com",
                icon: "HiOutlineMail"
            },
            {
                name: "/in/brunoliimas",
                url: "https://linkedin.com/in/brunoliimas",
                icon: "BsLinkedin"
            },
            {
                name: "/brunoliimas",
                url: "http://github.com/brunoliimas",
                icon: "BsGithub"
            },

        ],
    },
    works: [
        {
            companyName: "McCann Health",
            occupation: "Desenvolvedor Front End",
            level: "Pleno",
            entry: "Junho de 2020",
            exit: "Abril de 2023",
            roles: [
                "Desenhar soluções práticas para resolver problemas apresentados pelos clientes da agência;",
                "Participar de revisões de código;",
                "Desenvolvimento de e-mails marketing e VA (Visual Aid para CRM Veeva) utilizando o GSAP (biblioteca de animações javascript);",
                "Desenvolvimento websites responsivos e landing pages usando ReactJS e NextJS*; (*Projetos pessoais);",
                "Integração com APIs RESTful;",
                "Experiência com HTML5, CSS3, Sass, TailwindCSS, StyledComponents, JavaScript e TypeScript em projetos diversos;",
                "Conhecimento de design responsivo e habilidade para criar interfaces de usuário flexíveis e escaláveis fiel ao design apresentado pela equipe de UX/UI;",
                "Versionamento de código com ferramentas de controle de versão, como Git.",
            ],
            knowledge: [
                "Fundamentos de Front End e lógica de programação;",
                "Conhecimento em programação orientada a objetos e padrões de design;",
                "Responsividade e Frameworks (NextJs, TailwindCSS/Bootstrap);",
                "Ciclo de vida de componentes e aplicação - ReactJS;",
                "Hooks e Components - ReactJS;",
                "React Context API e Redux - ReactJS;",
                "Consumo de API - Fetch e Axios;",
                "Formulários;",
                "Geolocalização, interação com usuário (microfone, câmera);",
                "Build e Deploy;",
                "GIT e Versionamento.",
                "Kanban - Metodologia ágei"
            ],
            tools: ["Html", "Css", "Sass", "Tailwindcss", "Bootstrap", "Javascript", "React", "Next", "Axios", "Gsap", "Git", "Api", "Veeva", "Photoshop", "Illustrator", "Xd", "Cms"]
        },
        {
            companyName: "Tango Tech",
            occupation: "Desenvolvedor Front End e UI Designer",
            level: "Júnior",
            entry: "Outubro de 2019",
            exit: "Abril de 2020",
            roles: [
                "Desenvolvimento Frontend em aplicação de marketplace usando o ReactJS e Sass para estilização e responsividade;",
                "Desenvolvimento Frontend de dashboard para sistema com comunicação SAP usando o VueJS;",
                "Criação de funcionalidades para as aplicações com qualidade, manutenibilidade e escalável e design responsivo;",
                "Integração com APIs RESTful e CRUD API."
            ],
            knowledge: [
                "Conhecimento e prática usando Javascript(ES6) puro e com framework de front end: ReactJS e VueJS;",
                "HTML5, CSS3, Sass, StyledComponents e JavaScript, VueJS;",
                "Git e gitflow;",
                "Testes de unidade e integrados(E2E) usando o Cypress;",
                "Fluxos de CI e CD;",
                "Experiência em integrações com APIs;",
                "Comunicação ativa com a equipe de desenvolvedores e designers para definição de arquitetura da solução e melhor usabilidade;",
                "Gerenciamento de Pacotes - NPM e Yarn",
                "UI e Prototipação de interfaces usando o Adobe XD.",
                "SCRUM e Kanban - Metodologias ágeis"


            ],
            tools: ["Html", "Css", "Sass", "Styledcomponent", "Javascript", "ReactJS", "VueJS", "Git", "Gitflow", "Cypress", "Redux", "Xd"]
        },
        {
            companyName: "Agência Mad Go",
            occupation: "Desenvolvedor Front End",
            level: "Júnior",
            entry: "Junho de 2019",
            exit: "Outubro de 2019",
            roles: [
                "Desenvolvimento websites responsivos, landing pages e e-mails marketing",
                "Manutenção em sites com Wordpress",
                "Criativos para mídias sociais"
            ],
            knowledge: [
                "HTML5, CSS3, e JavaScript;",
                "Lógica de programação e fundamentos básicos de desenolvimento",
                "Trabalho em equipe",
                "Planejamento de campanhas de marketing e critivos",
                "Cronogramas e Prazos",
            ],
            tools: ["Html", "Css", "Sass", "Javascript", "Wordpress", "Photoshop", "Illustrator", "Xd"]
        },
        {
            companyName: "McCann Health",
            occupation: "Corporate Sales",
            level: "Júnior",
            entry: "Junho de 2018",
            exit: "Março de 2019",
            roles: [
                "Funções administrativas"
            ],
            knowledge: [
                "Trabalho em equipe",
                "Excel intermediário",
                "SCRUM"
                ],
            tools: ["Excel", "Photoshop", "Illustrator"]
        },
    ],
    academicEducation: [
        {
            schoolName: "Descomplica Faculdade Digital",
            specialization: "Ciências da Computação",
            time: "2023 - 2027",
            status: "em andamento"
        },
        {
            schoolName: "Mastertech",
            specialization: "Imersivo de Programação Fullstack",
            time: "2018",
            status: "Concluído"
        },
        {
            schoolName: "Senac - Ribeirão Preto",
            specialization: "Técnico em Logística",
            time: "2014 - 2015",
            status: "Concluído"
        }
    ],
    certifications: [
        {
            schoolName: "Leonardo Moura Leitao - Udemy",
            specialization: "Next.js e React - Curso Completo",
            duration: "30 horas",
        },
        {
            schoolName: "Matheus Fraga - Udemy",
            specialization: "Projeto Completo (NodeJS, React, React Native, TypeScript)",
            duration: "24 horas",
        },
        {
            schoolName: "Veeva",
            specialization: "Promomats, CLM e Approved Email",
            duration: "80 horas",
        },
    ],
}