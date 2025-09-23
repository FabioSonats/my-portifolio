export interface FabioProfile {
    // Variações formais para referência
    nameVariations: {
        formal: string[];
        casual: string[];
        professional: string[];
    };

    // Stack tecnológica principal (foco principal)
    techStack: {
        primary: string[];
        secondary: string[];
        frameworks: string[];
        tools: string[];
        databases: string[];
        methodologies: string[];
    };

    // Experiência profissional detalhada
    professionalExperience: {
        current: {
            company: string;
            position: string;
            period: string;
            responsibilities: string[];
            achievements: string[];
            technologies: string[];
        };
        previous: Array<{
            company: string;
            position: string;
            period: string;
            responsibilities: string[];
            technologies: string[];
        }>;
    };

    // Experiências secundárias (mencionar apenas quando perguntado)
    secondaryExperience: {
        hospitality: {
            positions: string[];
            skills: string[];
            period: string;
            relevance: string; // Como isso contribui para soft skills
        };
        other: Array<{
            area: string;
            description: string;
            skills: string[];
        }>;
    };

    // Formação acadêmica expandida
    education: {
        current: {
            degree: string;
            institution: string;
            status: string;
        };
        previous: Array<{
            degree: string;
            institution: string;
            status: string;
            relevance: string;
        }>;
        certifications: Array<{
            name: string;
            provider: string;
            year: string;
            relevance: string;
        }>;
    };

    // Soft skills e como foram desenvolvidas
    softSkills: {
        communication: {
            description: string;
            development: string[];
        };
        leadership: {
            description: string;
            development: string[];
        };
        problemSolving: {
            description: string;
            development: string[];
        };
        teamwork: {
            description: string;
            development: string[];
        };
    };

    // Projetos e portfólio
    projects: {
        featured: Array<{
            name: string;
            description: string;
            technologies: string[];
            link?: string;
            highlights: string[];
        }>;
        personal: Array<{
            name: string;
            description: string;
            technologies: string[];
            purpose: string;
        }>;
    };

    // Objetivos e interesses
    goals: {
        shortTerm: string[];
        longTerm: string[];
        interests: string[];
        learning: string[];
    };

    // Informações de contato e preferências
    contact: {
        email: string;
        linkedin: string;
        github: string;
        website: string;
        whatsapp: string;
        whatsappLink: string;
        preferredContact: string[];
        responseTime: string;
    };

    // Instruções para a IA
    aiInstructions: {
        focus: string[];
        avoid: string[];
        tone: string;
        priorities: string[];
        examples: {
            good: string[];
            bad: string[];
        };
    };
}

export const getFabioProfile = (): FabioProfile => ({
    nameVariations: {
        formal: [
            "Fábio Ferreira",
            "Fábio Ferreira, desenvolvedor",
            "Fábio Ferreira, analista de sistemas"
        ],
        casual: [
            "Fábio",
            "Fábio Ferreira"
        ],
        professional: [
            "Fábio Ferreira",
            "Fábio Ferreira, desenvolvedor Flutter",
            "Fábio Ferreira, desenvolvedor mobile"
        ]
    },

    techStack: {
        primary: ["Flutter", "Dart", "React", "TypeScript", "JavaScript"],
        secondary: ["Node.js", "Python", "HTML", "CSS"],
        frameworks: ["Flutter", "React", "Provider", "Bloc", "MVVM"],
        tools: ["Git", "VS Code", "Android Studio", "Postman"],
        databases: ["SQL", "Firebase", "Supabase"],
        methodologies: ["SCRUM", "Agile", "TDD", "Clean Architecture"]
    },

    professionalExperience: {
        current: {
            company: "Tecnofit",
            position: "Desenvolvedor Flutter",
            period: "Agosto 2022 – Maio 2024",
            responsibilities: [
                "Desenvolvimento e manutenção de aplicativos Flutter multiplataforma",
                "Implementação de aplicativos White Label para diferentes clientes",
                "Integração de APIs REST em projetos Flutter",
                "Aplicação de arquiteturas MVVM, BloC e Provider",
                "Colaboração em equipes ágeis usando metodologia SCRUM",
                "Controle de versão com Git",
                "Customização de aplicativos para diferentes academias"
            ],
            achievements: [
                "Desenvolvimento de aplicativos para múltiplas plataformas (iOS e Android)",
                "Implementação bem-sucedida de arquiteturas escaláveis",
                "Contribuição para equipes ágeis com entregas consistentes"
            ],
            technologies: ["Flutter", "Dart", "REST APIs", "Git", "MVVM", "Bloc", "Provider"]
        },
        previous: []
    },

    secondaryExperience: {
        hospitality: {
            positions: ["Gerente de bar", "Garçom", "Treinador de equipe"],
            skills: ["Liderança", "Comunicação", "Gestão de equipe", "Atendimento ao cliente"],
            period: "Experiência anterior",
            relevance: "Desenvolveu habilidades de liderança, comunicação e trabalho em equipe que são valiosas no desenvolvimento de software"
        },
        other: []
    },

    education: {
        current: {
            degree: "Análise e Desenvolvimento de Sistemas",
            institution: "PUC-PR",
            status: "Concluído"
        },
        previous: [
            {
                degree: "Matemática Industrial",
                institution: "UFPR",
                status: "Incompleto",
                relevance: "Base matemática sólida para programação e algoritmos"
            },
            {
                degree: "Ciências Sociais",
                institution: "PUC-PR",
                status: "Incompleto",
                relevance: "Desenvolveu habilidades de análise crítica e comunicação"
            }
        ],
        certifications: [
            {
                name: "Desenvolvimento Web Full Stack",
                provider: "Udemy",
                year: "2022",
                relevance: "Fundamentos sólidos em desenvolvimento web moderno"
            }
        ]
    },

    softSkills: {
        communication: {
            description: "Excelente capacidade de comunicação técnica e interpessoal",
            development: ["Experiência em atendimento ao cliente", "Trabalho em equipes ágeis", "Apresentação de soluções técnicas"]
        },
        leadership: {
            description: "Liderança natural com experiência em gestão de equipes",
            development: ["Gerência de bar e restaurante", "Treinamento de equipes", "Coordenação de projetos"]
        },
        problemSolving: {
            description: "Pensamento analítico e resolução criativa de problemas",
            development: ["Formação em Matemática Industrial", "Desenvolvimento de soluções técnicas", "Debugging e otimização"]
        },
        teamwork: {
            description: "Colaboração eficaz em equipes multidisciplinares",
            development: ["Metodologias ágeis (SCRUM)", "Experiência em atendimento", "Desenvolvimento colaborativo"]
        }
    },

    projects: {
        featured: [
            {
                name: "Aplicativos White Label Tecnofit",
                description: "Desenvolvimento de aplicativos personalizados para diferentes academias",
                technologies: ["Flutter", "Dart", "REST APIs", "MVVM"],
                highlights: ["Multiplataforma", "Arquitetura escalável", "Customização por cliente"]
            }
        ],
        personal: [
            {
                name: "Portfólio Pessoal",
                description: "Website portfólio com chatbot integrado",
                technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
                purpose: "Demonstrar habilidades em desenvolvimento web moderno"
            }
        ]
    },

    goals: {
        shortTerm: [
            "Aprofundar conhecimentos em Flutter e desenvolvimento mobile",
            "Expandir experiência com React e desenvolvimento web",
            "Contribuir para projetos open source"
        ],
        longTerm: [
            "Tornar-se especialista em desenvolvimento mobile",
            "Liderar equipes de desenvolvimento",
            "Criar soluções inovadoras em tecnologia"
        ],
        interests: [
            "Desenvolvimento mobile",
            "Arquiteturas de software",
            "UX/UI Design",
            "Inteligência Artificial"
        ],
        learning: [
            "Flutter avançado",
            "React Native",
            "Cloud computing",
            "DevOps"
        ]
    },

    contact: {
        email: "ferreirafabio51@gmail.com",
        linkedin: "https://www.linkedin.com/in/ferreira-f%C3%A1bio-98b4304a/",
        github: "https://github.com/FabioSonats",
        website: "ferreirafabio.dev",
        whatsapp: "+55 42 99164-3802",
        whatsappLink: "https://wa.me/5542991643802",
        preferredContact: ["WhatsApp", "Email", "LinkedIn"],
        responseTime: "Até 24 horas"
    },

    aiInstructions: {
        focus: [
            "Stack tecnológica e experiência em desenvolvimento",
            "Projetos e conquistas técnicas",
            "Habilidades de programação e arquitetura",
            "Experiência profissional em tecnologia"
        ],
        avoid: [
            "Detalhes excessivos sobre experiências não-técnicas",
            "Informações pessoais desnecessárias",
            "Opiniões políticas ou controversas"
        ],
        tone: "Profissional, técnico, conciso e objetivo",
        priorities: [
            "1. Stack tecnológica e experiência técnica",
            "2. Projetos e conquistas profissionais",
            "3. Soft skills relevantes para tecnologia",
            "4. Experiências secundárias (apenas quando perguntado)"
        ],
        examples: {
            good: [
                "Fábio é especialista em Flutter com experiência em aplicativos multiplataforma",
                "Ele tem sólida experiência em desenvolvimento mobile na Tecnofit",
                "Sua stack inclui Flutter, React, TypeScript e Node.js"
            ],
            bad: [
                "Fábio trabalhou em bares antes de ser programador",
                "Ele não terminou alguns cursos na faculdade",
                "Ele gosta de cerveja"
            ]
        }
    }
});
