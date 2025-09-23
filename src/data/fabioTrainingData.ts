// ARQUIVO PARA TREINAR A IA COM INFORMAÇÕES SOBRE FÁBIO FERREIRA
// Este arquivo pode ser editado para adicionar mais informações sobre sua vida e experiência

export interface TrainingData {
    // Informações pessoais e de carreira
    personalInfo: {
        fullName: string;
        currentRole: string;
        location: string;
        yearsOfExperience: number;
        specialties: string[];
    };

    // Experiências profissionais detalhadas
    workExperience: Array<{
        company: string;
        position: string;
        period: string;
        description: string;
        technologies: string[];
        achievements: string[];
        responsibilities: string[];
    }>;

    // Projetos pessoais e profissionais
    projects: Array<{
        name: string;
        type: 'professional' | 'personal' | 'academic';
        description: string;
        technologies: string[];
        highlights: string[];
        link?: string;
        status: 'completed' | 'in-progress' | 'planned';
    }>;

    // Experiências de vida que contribuíram para o desenvolvimento profissional
    lifeExperiences: Array<{
        area: string;
        period: string;
        description: string;
        skillsDeveloped: string[];
        relevanceToTech: string;
        mentionWhen: 'always' | 'when-asked' | 'never';
    }>;

    // Formação e certificações
    education: Array<{
        type: 'degree' | 'certification' | 'course' | 'bootcamp';
        name: string;
        institution: string;
        period: string;
        status: 'completed' | 'in-progress' | 'dropped';
        relevance: string;
    }>;

    // Habilidades técnicas organizadas por categoria
    technicalSkills: {
        programmingLanguages: string[];
        frameworks: string[];
        tools: string[];
        databases: string[];
        cloud: string[];
        methodologies: string[];
        other: string[];
    };

    // Soft skills e como foram desenvolvidas
    softSkills: Array<{
        skill: string;
        description: string;
        howDeveloped: string[];
        examples: string[];
    }>;

    // Objetivos e planos futuros
    goals: {
        shortTerm: string[];
        longTerm: string[];
        learning: string[];
        career: string[];
    };

    // Informações sobre personalidade e interesses
    personality: {
        workStyle: string[];
        interests: string[];
        values: string[];
        communicationStyle: string;
    };

  // Instruções específicas para a IA
  aiGuidelines: {
    tone: string;
    focus: string[];
    avoid: string[];
    examples: {
      goodResponses: string[];
      badResponses: string[];
    };
  };
  
  // Informações sobre o assistente
  assistant: {
    name: string;
    description: string;
    personality: string;
    capabilities: string[];
  };
}

// DADOS ATUAIS - PODE SER EXPANDIDO CONFORME NECESSÁRIO
export const fabioTrainingData: TrainingData = {
    personalInfo: {
        fullName: "Fábio Ferreira Paula dos Santos",
        currentRole: "Analista de Sistemas e Desenvolvedor",
        location: "Curitiba, PR",
        yearsOfExperience: 4,
        specialties: ["Desenvolvimento Mobile", "Flutter", "React", "Desenvolvimento Full Stack", "Análise de Sistemas"]
    },

    workExperience: [
        {
            company: "Tecnofit",
            position: "Desenvolvedor Flutter",
            period: "Agosto 2022 – Maio 2024",
            description: "Desenvolvimento de aplicativos mobile multiplataforma para o setor fitness",
            technologies: ["Flutter", "Dart", "REST APIs", "Git", "MVVM", "Bloc", "Provider"],
            achievements: [
                "Desenvolvimento de aplicativos para múltiplas plataformas (iOS e Android)",
                "Implementação bem-sucedida de arquiteturas escaláveis",
                "Contribuição para equipes ágeis com entregas consistentes"
            ],
            responsibilities: [
                "Manutenção e desenvolvimento de funcionalidades em aplicativos Flutter",
                "Implementação de aplicativos White Label para múltiplas plataformas",
                "Colaboração em equipes ágeis usando SCRUM",
                "Integração de APIs REST em projetos Flutter",
                "Aplicação de arquiteturas MVVM, BloC e Provider com Dart",
                "Controle de versão com Git",
                "Replicação e customização de modelos de aplicativos para diferentes academias"
            ]
        },
        {
            company: "Hard Rock Cafe",
            position: "Treinador de Equipes",
            period: "2024 - Presente",
            description: "Treinamento de equipes para atendimento no salão e preparo de drinks no bar",
            technologies: ["Liderança", "Gestão de Equipes", "Treinamento", "Atendimento ao Cliente"],
            achievements: [
                "Desenvolvimento de programas de treinamento eficazes",
                "Melhoria na qualidade do atendimento",
                "Formação de equipes de alta performance"
            ],
            responsibilities: [
                "Treinamento de funcionários para atendimento no salão",
                "Capacitação em preparo de drinks e coquetéis",
                "Desenvolvimento de protocolos de atendimento",
                "Gestão de qualidade e padrões de serviço"
            ]
        }
    ],

    projects: [
        {
            name: "Aplicativos White Label Tecnofit",
            type: "professional",
            description: "Desenvolvimento de aplicativos personalizados para diferentes academias",
            technologies: ["Flutter", "Dart", "REST APIs", "MVVM"],
            highlights: ["Multiplataforma", "Arquitetura escalável", "Customização por cliente"],
            status: "completed"
        },
        {
            name: "Portfólio Pessoal",
            type: "personal",
            description: "Website portfólio com chatbot integrado usando tecnologias modernas",
            technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
            highlights: ["Chatbot inteligente", "Design responsivo", "Integração com IA"],
            link: "https://pro-portifolio.lovable.app/",
            status: "completed"
        }
    ],

    lifeExperiences: [
        {
            area: "Hospitalidade e Eventos",
            period: "2015 - 2020",
            description: "Experiência diversificada em hospitalidade, eventos e gestão",
            skillsDeveloped: ["Liderança", "Comunicação", "Gestão de equipe", "Atendimento ao cliente", "Resolução de conflitos", "Criatividade", "Organização de eventos"],
            relevanceToTech: "Desenvolveu habilidades de liderança, comunicação e trabalho em equipe que são valiosas no desenvolvimento de software e gestão de projetos",
            mentionWhen: "when-asked"
        },
        {
            area: "Cultura e Arte",
            period: "2013 - 2020",
            description: "Experiência em música, eventos culturais e expressão artística",
            skillsDeveloped: ["Criatividade", "Expressão", "Trabalho em equipe", "Disciplina", "Pensamento estratégico"],
            relevanceToTech: "Desenvolveu criatividade e pensamento estratégico que são essenciais para resolução de problemas e inovação em tecnologia",
            mentionWhen: "when-asked"
        },
        {
            area: "Educação e Reinvenção",
            period: "2011 - 2024",
            description: "Jornada de reinvenção e aprendizado contínuo",
            skillsDeveloped: ["Adaptabilidade", "Resiliência", "Aprendizado contínuo", "Persistência", "Visão estratégica"],
            relevanceToTech: "Demonstra capacidade de adaptação e aprendizado contínuo, essenciais para evolução na área de tecnologia",
            mentionWhen: "when-asked"
        }
    ],

    education: [
        {
            type: "degree",
            name: "Análise e Desenvolvimento de Sistemas",
            institution: "PUC-PR",
            period: "2020 - 2024",
            status: "completed",
            relevance: "Formação técnica sólida em desenvolvimento de sistemas"
        },
        {
            type: "certification",
            name: "Desenvolvimento Web Full Stack",
            institution: "Udemy",
            period: "2022",
            status: "completed",
            relevance: "Fundamentos sólidos em desenvolvimento web moderno"
        },
        {
            type: "degree",
            name: "Matemática Industrial",
            institution: "UFPR",
            period: "2011 - 2013",
            status: "dropped",
            relevance: "Base matemática sólida para programação e algoritmos"
        },
        {
            type: "degree",
            name: "Ciências Sociais",
            institution: "PUC-PR",
            period: "2015 - 2019",
            status: "dropped",
            relevance: "Desenvolveu habilidades de análise crítica e comunicação"
        },
        {
            type: "course",
            name: "Conservatório de Música Popular Brasileira",
            institution: "Conservatório de Música",
            period: "2013 - 2015",
            status: "dropped",
            relevance: "Desenvolveu criatividade, disciplina e expressão artística"
        }
    ],

    technicalSkills: {
        programmingLanguages: ["Dart", "JavaScript", "TypeScript", "Python", "HTML", "CSS"],
        frameworks: ["Flutter", "React", "Provider", "Bloc", "MVVM"],
        tools: ["Git", "VS Code", "Android Studio", "Postman", "Figma"],
        databases: ["SQL", "Firebase", "Supabase"],
        cloud: ["Firebase", "Supabase"],
        methodologies: ["SCRUM", "Agile", "TDD", "Clean Architecture"],
        other: ["REST APIs", "Mobile Development", "Web Development"]
    },

    softSkills: [
        {
            skill: "Comunicação",
            description: "Excelente capacidade de comunicação técnica e interpessoal",
            howDeveloped: ["Experiência em atendimento ao cliente", "Trabalho em equipes ágeis", "Apresentação de soluções técnicas", "Experiência em eventos e hospitalidade"],
            examples: ["Comunicação com stakeholders", "Documentação técnica", "Mentoria de colegas", "Treinamento de equipes"]
        },
        {
            skill: "Liderança",
            description: "Liderança natural com experiência em gestão de equipes",
            howDeveloped: ["Gerência de cafeteria na Coffeeterie", "Treinamento de equipes no Hard Rock Cafe", "Coordenação de projetos", "Experiência em eventos"],
            examples: ["Liderança de equipes ágeis", "Treinamento de novos desenvolvedores", "Coordenação de projetos", "Gestão de equipes de atendimento"]
        },
        {
            skill: "Resolução de Problemas",
            description: "Pensamento analítico e resolução criativa de problemas",
            howDeveloped: ["Formação em Matemática Industrial", "Desenvolvimento de soluções técnicas", "Debugging e otimização", "Experiência em xadrez e pôquer"],
            examples: ["Debugging complexo", "Otimização de performance", "Soluções inovadoras", "Pensamento estratégico"]
        },
        {
            skill: "Trabalho em Equipe",
            description: "Colaboração eficaz em equipes multidisciplinares",
            howDeveloped: ["Metodologias ágeis (SCRUM)", "Experiência em atendimento", "Desenvolvimento colaborativo", "Experiência em música e eventos"],
            examples: ["Pair programming", "Code reviews", "Colaboração em sprints", "Trabalho em equipes de eventos"]
        },
        {
            skill: "Criatividade",
            description: "Capacidade de criar soluções inovadoras e expressivas",
            howDeveloped: ["Formação musical", "Experiência em eventos culturais", "Desenvolvimento de software", "Interesse em arte e cultura"],
            examples: ["Soluções criativas em código", "Design de interfaces", "Inovação em projetos", "Expressão artística"]
        },
        {
            skill: "Adaptabilidade",
            description: "Capacidade de se adaptar a mudanças e novos desafios",
            howDeveloped: ["Jornada de reinvenção profissional", "Mudanças de área", "Experiências diversas", "Aprendizado contínuo"],
            examples: ["Adaptação a novas tecnologias", "Mudanças de projeto", "Resiliência profissional", "Evolução constante"]
        }
    ],

    goals: {
        shortTerm: [
            "Aprofundar conhecimentos em Flutter e desenvolvimento mobile",
            "Expandir experiência com React e desenvolvimento web",
            "Contribuir para projetos open source",
            "Desenvolver aplicações inovadoras"
        ],
        longTerm: [
            "Tornar-se especialista em desenvolvimento mobile",
            "Liderar equipes de desenvolvimento",
            "Criar soluções inovadoras que unam tecnologia e humanidade",
            "Desenvolver projetos que impactem positivamente a sociedade"
        ],
        learning: [
            "Flutter avançado",
            "React Native",
            "Cloud computing",
            "DevOps",
            "Inteligência Artificial"
        ],
        career: [
            "Crescimento em desenvolvimento mobile",
            "Liderança técnica",
            "Inovação em tecnologia",
            "Soluções criativas que unam tecnologia e humanidade"
        ]
    },

    personality: {
        workStyle: ["Colaborativo", "Focado em resultados", "Adaptável", "Proativo", "Criativo"],
        interests: ["Desenvolvimento mobile", "Arquiteturas de software", "UX/UI Design", "Inteligência Artificial", "Música", "Xadrez", "Pôquer", "Cultura"],
        values: ["Qualidade", "Inovação", "Colaboração", "Aprendizado contínuo", "Humanidade", "Criatividade"],
        communicationStyle: "Direto, técnico, mas acessível e humano"
    },

  aiGuidelines: {
    tone: "Profissional, técnico, conciso e objetivo",
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
    examples: {
      goodResponses: [
        "Fábio é especialista em Flutter com experiência em aplicativos multiplataforma",
        "Ele tem sólida experiência em desenvolvimento mobile na Tecnofit",
        "Sua stack inclui Flutter, React, TypeScript e Node.js"
      ],
      badResponses: [
        "Fábio trabalhou em bares antes de ser programador",
        "Ele não terminou alguns cursos na faculdade",
        "Ele gosta de cerveja"
      ]
    }
  },
  
  // Informações sobre o assistente
  assistant: {
    name: "CodeX",
    description: "Assistente virtual especializado no portfólio de Fábio Ferreira",
    personality: "Profissional, técnico, conciso e objetivo",
    capabilities: [
      "Responder sobre stack tecnológica",
      "Informar sobre experiência profissional",
      "Detalhar projetos e conquistas",
      "Explicar soft skills relevantes",
      "Fornecer informações de contato"
    ]
  }
};

// Função para gerar prompt da IA baseado nos dados de treinamento
export const generateAIPrompt = (trainingData: TrainingData): string => {
    return `
PERFIL PROFISSIONAL DE ${trainingData.personalInfo.fullName.toUpperCase()}:

INFORMAÇÕES PESSOAIS:
- Nome: ${trainingData.personalInfo.fullName}
- Função atual: ${trainingData.personalInfo.currentRole}
- Localização: ${trainingData.personalInfo.location}
- Anos de experiência: ${trainingData.personalInfo.yearsOfExperience}
- Especialidades: ${trainingData.personalInfo.specialties.join(', ')}

STACK TECNOLÓGICO:
- Linguagens: ${trainingData.technicalSkills.programmingLanguages.join(', ')}
- Frameworks: ${trainingData.technicalSkills.frameworks.join(', ')}
- Ferramentas: ${trainingData.technicalSkills.tools.join(', ')}
- Bancos de dados: ${trainingData.technicalSkills.databases.join(', ')}
- Metodologias: ${trainingData.technicalSkills.methodologies.join(', ')}

EXPERIÊNCIA PROFISSIONAL:
${trainingData.workExperience.map(exp => `
- ${exp.position} na ${exp.company} (${exp.period})
  Descrição: ${exp.description}
  Tecnologias: ${exp.technologies.join(', ')}
  Responsabilidades: ${exp.responsibilities.join('; ')}
  Conquistas: ${exp.achievements.join('; ')}
`).join('')}

PROJETOS:
${trainingData.projects.map(proj => `
- ${proj.name} (${proj.type})
  Descrição: ${proj.description}
  Tecnologias: ${proj.technologies.join(', ')}
  Status: ${proj.status}
  ${proj.link ? `Link: ${proj.link}` : ''}
`).join('')}

SOFT SKILLS:
${trainingData.softSkills.map(skill => `
- ${skill.skill}: ${skill.description}
  Desenvolvida através de: ${skill.howDeveloped.join(', ')}
`).join('')}

OBJETIVOS:
- Curto prazo: ${trainingData.goals.shortTerm.join(', ')}
- Longo prazo: ${trainingData.goals.longTerm.join(', ')}
- Aprendizado: ${trainingData.goals.learning.join(', ')}

INSTRUÇÕES PARA A IA:
- Tom: ${trainingData.aiGuidelines.tone}
- Foco: ${trainingData.aiGuidelines.focus.join(', ')}
- Evitar: ${trainingData.aiGuidelines.avoid.join(', ')}
- Prioridades: Stack tecnológica > Projetos > Soft skills > Outras experiências
`;
};
