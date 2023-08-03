interface Experience {
    occupation: string;
    level: string;
    companyName: string;
    entry: string;
    exit: string;
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
                "Criação de Visual Aid para Veeva",
                "Desenvolvimento de sites, landing Pages e e-mails marketing",
                "Manutenção em sites com Wordpress"
            ],
            tools: ["HTML", "CSS", "SASS", "JAVASCRIPT", "REACT", "GIT", "VEEVA", "PHOTOSHOP", "ILLUSTRATOR", "XD", "WORDPRESS"]
        },
        {
            companyName: "Tango Tech",
            occupation: "Desenvolvedor Front End e UI Designer",
            level: "Júnior",
            entry: "Outubro de 2019",
            exit: "Abril de 2020",
            roles: [
                "Desenvolvimento de marketplace",
                "Criação de interfaces para aplicações internas"
            ],
            tools: ["HTML", "CSS", "SASS", "JAVASCRIPT", "REACT", "GIT", "GITFLOW", "CYPRESS", "REDUX", "VUE", "XD"]
        },
        {
            companyName: "Agência Mad Go",
            occupation: "Desenvolvedor Front End",
            level: "Júnior",
            entry: "Junho de 2019",
            exit: "Outubro de 2019",
            roles: [
                "Desenvolvimento de sites e landing Pages e e-mails marketing",
                "Manutenção em sites com Wordpress",
                "Criativos para mídias sociais"
            ],
            tools: ["HTML", "CSS", "SASS", "JAVASCRIPT", "WORDPRESS", "PHOTOSHOP", "ILLUSTRATOR", "XD"]
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
            tools: ["EXCEL", "PHOTOSHOP", "ILLUSTRATOR"]
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