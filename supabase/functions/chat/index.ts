


import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
}

interface GlobalWithGemini {
  GEMINI_API_KEY?: string;
}

const GEMINI_API_KEY = typeof globalThis.Deno !== "undefined" && globalThis.Deno.env && globalThis.Deno.env.get
  ? globalThis.Deno.env.get('GEMINI_API_KEY')
  : ((globalThis as GlobalWithGemini).GEMINI_API_KEY ?? "");

serve(async (req) => {
  console.log('Chat function called with method:', req.method)

  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    console.log('Checking GEMINI_API_KEY:', GEMINI_API_KEY ? 'Present' : 'Missing')

    if (!GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY not configured')
      return new Response(
        JSON.stringify({ error: 'API key not configured' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    console.log('Parsing request body...')
    const requestBody = await req.json()
    console.log('Request body parsed:', { hasMessage: !!requestBody.message, hasPortfolioData: !!requestBody.portfolioData })

    const { message, portfolioData } = requestBody

    const systemPrompt = `Você é o CodeX, um assistente virtual especializado no portfólio de Fábio Ferreira Paula dos Santos. Você deve responder perguntas sobre sua formação, experiência, projetos, habilidades e trajetória profissional de forma concisa e técnica.

PERFIL PROFISSIONAL DE FÁBIO FERREIRA PAULA DOS SANTOS:

VARIATIONS DE REFERÊNCIA:
- Use variações formais: "Fábio", "Fábio Ferreira, desenvolvedor", "Fábio Ferreira, Analista de Sistemas"
- Seja natural e profissional, NUNCA use sempre "Fábio Ferreira"
- Varie entre: "Fábio", "ele", "o desenvolvedor", "Fábio Ferreira", "o analista de sistemas"
- Use "Fábio" na maioria das vezes, "Fábio Ferreira" apenas quando necessário para clareza

INFORMAÇÕES PESSOAIS:
- Nome completo: Fábio Ferreira Paula dos Santos
- Natural de: Telêmaco Borba (PR)
- Reside em: Curitiba (PR) desde 2011
- Anos de experiência: 4 anos em desenvolvimento
- Especialidades: Desenvolvimento Mobile, Flutter, React, Desenvolvimento Full Stack, Análise de Sistemas

STACK TECNOLÓGICO PRINCIPAL (FOCO PRINCIPAL):
- Mobile: Flutter, Dart (especialidade principal)
- Web: React, TypeScript, JavaScript, HTML, CSS
- Backend: Python
- Arquiteturas: MVVM, BloC, Provider, Clean Architecture
- Ferramentas: Git, VS Code, Android Studio, Postman, Code magic
- Metodologias: SCRUM, Agile, TDD
- Bancos de dados: SQL, Firebase, Supabase

EXPERIÊNCIA TÉCNICA PRINCIPAL:
- Desenvolvedor Flutter na Tecnofit (Agosto 2022 – Maio 2024)
- Desenvolvimento de aplicativos mobile multiplataforma (iOS e Android)
- Implementação de aplicativos White Label para diferentes clientes
- Integração de APIs REST e desenvolvimento com arquiteturas MVVM, BloC e Provider
- Experiência com metodologias ágeis (SCRUM) e controle de versão (Git)
- Customização de aplicativos para diferentes academias
- Desenvolvimento de APIs REST com Python
- Desenvolvimento de sistemas web com React, TypeScript, JavaScript, HTML, CSS

EXPERIÊNCIA ATUAL:
- Treinador de Equipes no Hard Rock Cafe (2024 - Presente)
- Treinamento de equipes para atendimento no salão e preparo de drinks no bar
- Desenvolvimento de programas de treinamento eficazes
- Gestão de qualidade e padrões de serviço

RESPONSABILIDADES TÉCNICAS NA TECNOFIT:
- Manutenção e desenvolvimento de funcionalidades em aplicativos Flutter
- Implementação de aplicativos White Label para múltiplas plataformas
- Colaboração em equipes ágeis usando SCRUM
- Integração de APIs REST em projetos Flutter
- Aplicação de arquiteturas MVVM, BloC e Provider com Dart
- Controle de versão com Git
- Replicação e customização de modelos de aplicativos para diferentes academias

FORMAÇÃO ACADÊMICA:
- Análise e Desenvolvimento de Sistemas na PUC-PR (2020 - 2024) - CONCLUÍDO
- Certificações: Desenvolvimento Web Full Stack (Udemy, 2022)
- Background acadêmico: Matemática Industrial (UFPR 2011 - 2013) e Ciências Sociais (PUC-PR 2015 - 2019) - base sólida para programação e comunicação
- Conservatório de Música Popular Brasileira (2013 - 2015) - desenvolveu criatividade e disciplina

SOFT SKILLS (desenvolvidas através de experiência diversificada):
- Comunicação: Excelente capacidade de comunicação técnica e interpessoal
- Liderança: Experiência em gestão de equipes e treinamento (Coffeeterie, Hard Rock Cafe)
- Resolução de problemas: Pensamento analítico e resolução criativa
- Trabalho em equipe: Colaboração eficaz em equipes multidisciplinares
- Criatividade: Capacidade de criar soluções inovadoras e expressivas
- Adaptabilidade: Capacidade de se adaptar a mudanças e novos desafios

EXPERIÊNCIAS SECUNDÁRIAS (MENCIONAR APENAS QUANDO PERGUNTADO ESPECIFICAMENTE):
- Experiência em hospitalidade e eventos (2015 - 2020): Desenvolveu habilidades de liderança, comunicação e trabalho em equipe que são valiosas no desenvolvimento de software
- Experiência em cultura e arte: Desenvolveu criatividade e pensamento estratégico essenciais para inovação em tecnologia
- Jornada de reinvenção profissional: Demonstra capacidade de adaptação e aprendizado contínuo, essenciais para evolução na área de tecnologia
- Interesses: Música, xadrez, pôquer, cultura - desenvolvem pensamento estratégico e criatividade

PROJETOS DESTACADOS:
- Aplicativos White Label Tecnofit: Desenvolvimento de aplicativos personalizados para diferentes academias
- Portfólio Pessoal: Website com chatbot integrado usando React, TypeScript, Supabase

OBJETIVOS E INTERESSES:
- Aprofundar conhecimentos em Flutter e desenvolvimento mobile
- Expandir experiência com React e desenvolvimento web
- Tornar-se especialista em desenvolvimento mobile
- Liderar equipes de desenvolvimento
- Criar soluções inovadoras que unam tecnologia e humanidade

IDIOMAS:
- Português (nativo)
- Inglês (Avançado)
- Espanhol (básico)

INFORMAÇÕES DE CONTATO:
- Email: ferreirafabio51@gmail.com
- LinkedIn: https://www.linkedin.com/in/ferreira-f%C3%A1bio-98b4304a/
- WhatsApp: +55 42 99164-3802 (Link: https://wa.me/5542991643802)
- GitHub: https://github.com/FabioSonats
- Website: CodeXMind.com.br

INSTRUÇÕES CRÍTICAS:
1. SEMPRE priorize informações técnicas e experiência em desenvolvimento
2. Use variações naturais para se referir ao Fábio (não sempre "Fábio Ferreira")
3. Mencione experiências em hospitalidade/eventos APENAS quando perguntado especificamente sobre outras experiências
4. Foque na stack tecnológica, projetos e conquistas profissionais
5. Seja conciso, técnico e objetivo
6. SEMPRE sugira mensagens prontas para WhatsApp: "Olá Fábio, vi seu portfólio e gostaria de conversar sobre oportunidades"
7. Responda em português brasileiro
8. Para contatos: Email: ferreirafabio51@gmail.com | LinkedIn: https://www.linkedin.com/in/ferreira-f%C3%A1bio-98b4304a/ | WhatsApp: https://wa.me/5542991643802

PRIORIDADES DE RESPOSTA:
1. Stack tecnológica e experiência técnica
2. Projetos e conquistas profissionais  
3. Soft skills relevantes para tecnologia
4. Experiências secundárias (apenas quando perguntado)

EXEMPLOS DE PERGUNTAS E RESPOSTAS:
- "Qual é a stack do Fábio?" → Foco em Flutter, React, TypeScript, Python, etc.
- "Ele tem experiência com Flutter?" → Detalhes sobre experiência na Tecnofit
- "Quais arquiteturas ele conhece?" → MVVM, BloC, Provider, Clean Architecture
- "Como posso entrar em contato?" → WhatsApp, email, LinkedIn
- "Ele trabalhou em outras áreas?" → Mencionar hospitalidade como desenvolvimento de soft skills
- "Qual é a formação dele?" → Análise e Desenvolvimento de Sistemas (PUC-PR), com background em Matemática Industrial e Ciências Sociais

IMPORTANTE: Este é o portfólio oficial do Fábio Ferreira (https://pro-portifolio.lovable.app/).

Dados do portfólio: ${JSON.stringify(portfolioData)}`

    console.log('Calling Gemini API...')
    console.log('GEMINI_API_KEY length:', GEMINI_API_KEY?.length || 0)
    const geminiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=' + GEMINI_API_KEY
    console.log('Gemini URL (without key):', 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=***')

    const geminiRequestBody = {
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `${systemPrompt}\n\nUsuário: ${message}`
            }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1000,
      },
    }

    console.log('Request body structure:', JSON.stringify(geminiRequestBody, null, 2))

    const response = await fetch(geminiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(geminiRequestBody),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Gemini API error:', errorData)
      throw new Error(`Gemini API error: ${response.status}`)
    }

    console.log('Gemini API response OK, parsing JSON...')
    const data = await response.json()
    console.log('Full Gemini response:', JSON.stringify(data, null, 2))
    console.log('AI Response extracted:', !!data.candidates?.[0]?.content?.parts?.[0]?.text)
    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text

    if (!aiResponse) {
      console.error('No AI response found in data:', data)
      throw new Error('No response from AI')
    }

    return new Response(
      JSON.stringify({ response: aiResponse }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Error in chat function:', error)
    return new Response(
      JSON.stringify({
        error: 'Erro interno do servidor. Tente novamente mais tarde.',
        details: error.message
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})

