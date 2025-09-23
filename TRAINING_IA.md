# 🤖 Sistema de Treinamento da IA do Portfólio

Este documento explica como treinar a IA do seu portfólio para ter mais informações sobre você, o Fábio Ferreira.

## 📁 Arquivos do Sistema

### 1. `src/data/fabioProfile.ts`
- Estrutura completa do seu perfil
- Dados organizados por categoria
- Interface TypeScript para tipagem

### 2. `src/data/fabioTrainingData.ts`
- Dados de treinamento da IA
- Informações detalhadas sobre sua vida e carreira
- Instruções específicas para a IA

### 3. `supabase/functions/chat/index.ts`
- Função do Supabase que processa as mensagens
- Prompt da IA com suas informações
- Lógica de priorização de respostas

## 🎯 Como Funciona

### Priorização de Informações
1. **PRIMÁRIO**: Stack tecnológica e experiência em desenvolvimento
2. **SECUNDÁRIO**: Projetos e conquistas profissionais
3. **TERCIÁRIO**: Soft skills relevantes para tecnologia
4. **QUANDO PERGUNTADO**: Experiências em bares/restaurantes

### Variações de Referência
A IA usa diferentes formas de se referir a você:
- "Fábio Ferreira"
- "Fábio Ferreira, desenvolvedor"
- "Fábio Ferreira, desenvolvedor Flutter"
- "Fábio" (em contextos mais casuais)

## ✏️ Como Adicionar Novas Informações

### 1. Editar `fabioTrainingData.ts`

```typescript
// Adicionar nova experiência profissional
workExperience: [
  // ... experiências existentes
  {
    company: "Nova Empresa",
    position: "Desenvolvedor Senior",
    period: "2024 - Presente",
    description: "Descrição da experiência",
    technologies: ["React", "Node.js"],
    achievements: ["Conquista 1", "Conquista 2"],
    responsibilities: ["Responsabilidade 1", "Responsabilidade 2"]
  }
]

// Adicionar novo projeto
projects: [
  // ... projetos existentes
  {
    name: "Novo Projeto",
    type: "personal",
    description: "Descrição do projeto",
    technologies: ["Flutter", "Firebase"],
    highlights: ["Destaque 1", "Destaque 2"],
    status: "completed"
  }
]
```

### 2. Adicionar Experiências de Vida

```typescript
lifeExperiences: [
  // ... experiências existentes
  {
    area: "Nova Área",
    period: "Período",
    description: "Descrição da experiência",
    skillsDeveloped: ["Habilidade 1", "Habilidade 2"],
    relevanceToTech: "Como isso contribui para a carreira tech",
    mentionWhen: "when-asked" // ou "always" ou "never"
  }
]
```

### 3. Atualizar Habilidades Técnicas

```typescript
technicalSkills: {
  programmingLanguages: ["Dart", "JavaScript", "TypeScript", "Nova Linguagem"],
  frameworks: ["Flutter", "React", "Novo Framework"],
  // ... outras categorias
}
```

## 🔄 Como Aplicar as Mudanças

### 1. Atualizar o Prompt da IA
Após editar os dados, você precisa atualizar o prompt no arquivo `supabase/functions/chat/index.ts`:

```typescript
// Substituir a seção do systemPrompt com as novas informações
const systemPrompt = `
// ... prompt atualizado com suas novas informações
`;
```

### 2. Deploy da Função
```bash
# Deploy da função atualizada
supabase functions deploy chat
```

## 📝 Exemplos de Perguntas e Respostas

### ✅ Respostas Boas (Foco em Tech)
- **Pergunta**: "Qual é a stack do Fábio?"
- **Resposta**: "Fábio é especialista em Flutter e Dart, com experiência sólida em React, TypeScript e Node.js. Ele trabalhou como Desenvolvedor Flutter na Tecnofit, desenvolvendo aplicativos multiplataforma para iOS e Android."

### ✅ Respostas Boas (Quando Perguntado)
- **Pergunta**: "Ele trabalhou em outras áreas além de tecnologia?"
- **Resposta**: "Sim, Fábio tem experiência em hospitalidade (bares e restaurantes), onde desenvolveu habilidades valiosas de liderança, comunicação e trabalho em equipe que são muito relevantes para o desenvolvimento de software."

### ❌ Respostas Ruins
- **Pergunta**: "Qual é a stack do Fábio?"
- **Resposta**: "Fábio trabalhou em bares antes de ser programador e agora desenvolve apps." (Muito foco em experiências não-técnicas)

## 🎛️ Configurações da IA

### Tom e Estilo
- **Tom**: Profissional, técnico, conciso e objetivo
- **Idioma**: Português brasileiro
- **Foco**: Sempre priorizar competências técnicas

### Instruções Especiais
1. **SEMPRE** sugerir mensagem pronta para WhatsApp
2. **NUNCA** mencionar experiências não-técnicas sem ser perguntado
3. **SEMPRE** focar na stack tecnológica primeiro
4. **SEMPRE** ser específico e técnico nas respostas

## 🚀 Próximos Passos

1. **Teste o chatbot** com diferentes perguntas
2. **Adicione mais informações** conforme necessário
3. **Ajuste o prompt** baseado nas respostas da IA
4. **Monitore as conversas** para melhorar continuamente

## 📞 Contato

Para dúvidas sobre o sistema de treinamento:
- Email: ferreirafabio51@gmail.com
- WhatsApp: +55 42 99164-3802

---

**Lembre-se**: O objetivo é sempre focar nas suas competências técnicas e experiência em desenvolvimento, mencionando outras experiências apenas quando relevante ou quando perguntado especificamente.
