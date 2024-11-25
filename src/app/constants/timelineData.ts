export interface TimelineEvent {
  date: string;
  title: string;
  description?: string;
  imageUrl?: string;
}

export const timelineEvents: TimelineEvent[] = [
  {
    date: '2024-09 - Atual',
    title: 'Junção de conceitos: Inclusive Journey e Tourlink',
    description: 'Vimos que a plataforma Tourlink tem potencial para auxiliar turistas com deficiência a viajar e conhecer novos lugares, por meio das informações fornecidas pelos guias no app. Decidimos nichar para este público e seguimos o desenvolvimento da versão Mobile.',
    imageUrl: '/timeline/juncao.png'
  },
  {
    date: '2024-08 - Atual',
    title: 'Início do desenvolvimento da versão mobile',
    description: 'Começamos a desenvolver a versão mobile do aplicativo.',
    imageUrl: '/timeline/tl mobile.png'
  },
  {
    date: '2024-07',
    title: 'Primeira banca',
    description: 'Apresentação da versão web do aplicativo para a banca avaliadora no IFPR. O projeto foi aprovado com sucesso.',
    imageUrl: '/timeline/tourlink banca.jpg'
  },
  {
    date: '2024-05',
    title: 'Inclusive Journey',
    description: 'Desenvolvemos a extensão "Inclusive Journey" focada em reunir informações sobre acessibilidade em pontos turísticos. O projeto foi vencedor em segundo lugar. ',
    imageUrl: '/timeline/inclusive journey.png'
  },
  {
    date: '2024-02',
    title: 'Início do desenvolvimento',
    description: 'Atualizações no conceito inicial do projeto, agora focando em criar conexões entre turistas e guias nativos na cidade de destino.',
    imageUrl: '/timeline/tourlink logo png.png'
  },
  {
    date: '2023-09',
    title: 'Primeiras ideias',
    description: 'Concepção inicial do projeto, um sistema voltado para turismo e divulgação de descontos.',
    imageUrl: '/timeline/roteiro-promo.png'
  }
];
