import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Eye, Database, UserCheck, Mail, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const content = {
    'pt-BR': {
      title: 'Política de Privacidade',
      lastUpdated: 'Última atualização: 22 de setembro de 2025',
      sections: [
        {
          icon: Shield,
          title: 'Informações Gerais',
          content: `Este portfólio é propriedade de **Fábio Ferreira**, desenvolvedor de software especializado em Flutter e desenvolvimento full-stack.

**Responsável pelo Tratamento:**
- Nome: Fábio Ferreira
- Email: ferreirafabio51@gmail.com
- LinkedIn: https://www.linkedin.com/in/ferreira-fábio-98b4304a/
- WhatsApp: +55 42 99164-3802`
        },
        {
          icon: Eye,
          title: 'Dados Coletados',
          content: `Este site coleta apenas dados essenciais para seu funcionamento:

**Dados Técnicos:**
- Endereço IP (anonimizado)
- Tipo de navegador e sistema operacional
- Páginas visitadas e tempo de permanência
- Dados de interação com o chatbot

**Dados de Contato:**
- Apenas quando você nos contata voluntariamente
- Email, nome e mensagem (se fornecidos)`
        },
        {
          icon: Database,
          title: 'Como Usamos Seus Dados',
          content: `Os dados coletados são utilizados exclusivamente para:

**Funcionamento do Site:**
- Análise de visitas para melhorar o portfólio
- Funcionamento do chatbot de atendimento
- Estatísticas de uso (anonimizadas)

**Comunicação:**
- Responder a mensagens enviadas
- Entrar em contato sobre oportunidades profissionais

**NÃO compartilhamos** seus dados com terceiros.`
        },
        {
          icon: UserCheck,
          title: 'Seus Direitos',
          content: `De acordo com a LGPD, você tem direito a:

**Acesso:** Solicitar informações sobre seus dados
**Correção:** Corrigir dados incorretos
**Exclusão:** Solicitar remoção de seus dados
**Portabilidade:** Receber seus dados em formato legível
**Oposição:** Opor-se ao tratamento de seus dados

Para exercer estes direitos, entre em contato: ferreirafabio51@gmail.com`
        }
      ],
      contact: {
        title: 'Contato',
        content: `**Dúvidas sobre Privacidade:**
Email: ferreirafabio51@gmail.com

**Contato Profissional:**
- Email: ferreirafabio51@gmail.com
- LinkedIn: https://www.linkedin.com/in/ferreira-fábio-98b4304a/
- WhatsApp: +55 42 99164-3802 (https://wa.me/5542991643802)

**Tempo de Resposta:** Até 48 horas úteis.`
      },
      termsSection: {
        title: 'Termos de Uso',
        content: `**Uso Permitido:**
- Visualização do portfólio para fins profissionais
- Compartilhamento de links para oportunidades de trabalho
- Contato para propostas de colaboração

**Uso Proibido:**
- Cópia não autorizada do conteúdo
- Uso comercial sem permissão
- Tentativas de acesso não autorizado

**Propriedade Intelectual:**
Todo o conteúdo deste portfólio é de propriedade de Fábio Ferreira, protegido pela Lei de Direitos Autorais (Lei 9.610/98).`
      }
    },
    'en': {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: September 22, 2025',
      sections: [
        {
          icon: Shield,
          title: 'General Information',
          content: `This portfolio belongs to **Fábio Ferreira**, a software developer specialized in Flutter and full-stack development.

**Data Controller:**
- Name: Fábio Ferreira
- Email: ferreirafabio51@gmail.com
- LinkedIn: https://www.linkedin.com/in/ferreira-fábio-98b4304a/
- WhatsApp: +55 42 99164-3802`
        },
        {
          icon: Eye,
          title: 'Data Collected',
          content: `This website collects only essential data for its operation:

**Technical Data:**
- IP address (anonymized)
- Browser type and operating system
- Pages visited and time spent
- Chatbot interaction data

**Contact Data:**
- Only when you voluntarily contact us
- Email, name and message (if provided)`
        },
        {
          icon: Database,
          title: 'How We Use Your Data',
          content: `The collected data is used exclusively for:

**Website Operation:**
- Visit analysis to improve the portfolio
- Chatbot functionality
- Usage statistics (anonymized)

**Communication:**
- Responding to sent messages
- Contacting about professional opportunities

We do **NOT share** your data with third parties.`
        },
        {
          icon: UserCheck,
          title: 'Your Rights',
          content: `According to GDPR/LGPD, you have the right to:

**Access:** Request information about your data
**Correction:** Correct incorrect data
**Deletion:** Request removal of your data
**Portability:** Receive your data in readable format
**Objection:** Object to processing of your data

To exercise these rights, contact: ferreirafabio51@gmail.com`
        }
      ],
      contact: {
        title: 'Contact',
        content: `**Privacy Questions:**
Email: ferreirafabio51@gmail.com

**Professional Contact:**
- Email: ferreirafabio51@gmail.com
- LinkedIn: https://www.linkedin.com/in/ferreira-fábio-98b4304a/
- WhatsApp: +55 42 99164-3802 (https://wa.me/5542991643802)

**Response Time:** Up to 48 business hours.`
      },
      termsSection: {
        title: 'Terms of Use',
        content: `**Permitted Use:**
- Viewing the portfolio for professional purposes
- Sharing links for job opportunities
- Contact for collaboration proposals

**Prohibited Use:**
- Unauthorized copying of content
- Commercial use without permission
- Unauthorized access attempts

**Intellectual Property:**
All content in this portfolio is owned by Fábio Ferreira, protected by Copyright Law.`
      }
    }
  };

  const currentContent = content[language as keyof typeof content] || content['pt-BR'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-4 text-green-400 hover:text-green-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === 'pt-BR' ? 'Voltar' : 'Back'}
          </Button>
          
          <h1 className="text-4xl font-bold mb-2 text-green-400">
            {currentContent.title}
          </h1>
          <p className="text-gray-400">{currentContent.lastUpdated}</p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {currentContent.sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <Card key={index} className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-green-400">
                    <IconComponent className="h-6 w-6" />
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-invert max-w-none">
                    {section.content.split('\n').map((line, lineIndex) => {
                      if (line.startsWith('**') && line.endsWith('**')) {
                        return (
                          <p key={lineIndex} className="font-semibold text-green-300 mb-2">
                            {line.replace(/\*\*/g, '')}
                          </p>
                        );
                      }
                      if (line.trim() === '') {
                        return <br key={lineIndex} />;
                      }
                      return (
                        <p key={lineIndex} className="mb-2 text-gray-300">
                          {line}
                        </p>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}

          {/* Contact Section */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-green-400">
                <Mail className="h-6 w-6" />
                {currentContent.contact.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-invert max-w-none">
                {currentContent.contact.content.split('\n').map((line, lineIndex) => {
                  if (line.startsWith('**') && line.endsWith('**')) {
                    return (
                      <p key={lineIndex} className="font-semibold text-green-300 mb-2">
                        {line.replace(/\*\*/g, '')}
                      </p>
                    );
                  }
                  if (line.trim() === '') {
                    return <br key={lineIndex} />;
                  }
                  return (
                    <p key={lineIndex} className="mb-2 text-gray-300">
                      {line}
                    </p>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Terms Section */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-green-400">
                <Shield className="h-6 w-6" />
                {currentContent.termsSection.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-invert max-w-none">
                {currentContent.termsSection.content.split('\n').map((line, lineIndex) => {
                  if (line.startsWith('**') && line.endsWith('**')) {
                    return (
                      <p key={lineIndex} className="font-semibold text-green-300 mb-2">
                        {line.replace(/\*\*/g, '')}
                      </p>
                    );
                  }
                  if (line.trim() === '') {
                    return <br key={lineIndex} />;
                  }
                  return (
                    <p key={lineIndex} className="mb-2 text-gray-300">
                      {line}
                    </p>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-400">
          <p>
            {language === 'pt-BR' 
              ? 'Esta política pode ser atualizada periodicamente. Recomendamos revisar regularmente.'
              : 'This policy may be updated periodically. We recommend reviewing regularly.'
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;