const products = [
  {
    id: 1,
    name: 'Spirulina',
    image: '/products/spirulina.jpeg',
    description:
      'Rica em nutrientes e antioxidantes, auxilia na energia e no bem-estar.',
  },

  {
    id: 2,
    name: 'Aveia em Flocos',
    image: '/products/aveia.jpeg',
    description:
      'Fonte de fibras naturais que contribuem para uma alimentação equilibrada.',
  },

  {
    id: 3,
    name: 'Uva Passa',
    image: '/products/uva-passa.jpeg',
    description:
      'Doce natural rica em energia, perfeita para lanches e receitas.',
  },

  {
    id: 4,
    name: 'Tâmara Sem Caroço',
    image: '/products/tamara.jpeg',
    description:
      'Fruta naturalmente adocicada e nutritiva, ideal para o dia a dia.',
  },

  {
    id: 5,
    name: 'Semente de Abóbora',
    image: '/products/semente-abobora.jpeg',
    description:
      'Fonte de proteínas e minerais essenciais para uma rotina saudável.',
  },

  {
    id: 6,
    name: 'Granola Premium',
    image: '/products/granola.jpeg',
    description:
      'Mistura crocante e saborosa com ingredientes selecionados.',
  },

  {
    id: 7,
    name: 'Ameixa Sem Caroço',
    image: '/products/ameixa.jpeg',
    description:
      'Rica em fibras e sabor, excelente para alimentação equilibrada.',
  },

  {
    id: 8,
    name: 'Ervilha com Wasabi',
    image: '/products/ervilha-wasabi.jpeg',
    description:
      'Snack crocante e picante para quem busca sabor diferenciado.',
  },

  {
    id: 9,
    name: 'Castanha de Caju Caramelizada',
    image: '/products/castanha-caramelizada.jpeg',
    description:
      'Combinação perfeita entre crocância e toque adocicado.',
  },

  {
    id: 10,
    name: 'Cacau em Pó 100% Alcalino',
    image: '/products/cacau-alcalino.jpeg',
    description:
      'Sabor intenso e textura refinada para receitas especiais.',
  },

  {
    id: 11,
    name: 'Cacau em Pó 100% Orgânico',
    image: '/products/cacau-organico.jpeg',
    description:
      'Produto natural e puro, ideal para bebidas e preparos saudáveis.',
  },

  {
    id: 12,
    name: 'Milho Mostarda e Mel',
    image: '/products/milho-mel.jpeg',
    description:
      'Snack crocante com combinação agridoce irresistível.',
  },

  {
    id: 13,
    name: 'Castanha do Pará',
    image: '/products/castanha-para.jpeg',
    description:
      'Rica em selênio e nutrientes importantes para o organismo.',
  },

  {
    id: 14,
    name: 'Castanha de Caju Assada Sem Sal',
    image: '/products/castanha-sem-sal.jpeg',
    description:
      'Opção saudável e saborosa para qualquer momento do dia.',
  },

  {
    id: 15,
    name: 'Ginkgo Biloba',
    image: '/products/ginkgo.jpeg',
    description:
      'Tradicionalmente utilizado para auxiliar concentração e disposição.',
  },

  {
    id: 16,
    name: 'Maca Peruana Negra',
    image: '/products/maca.jpeg',
    description:
      'Conhecida por auxiliar energia, vitalidade e desempenho diário.',
  },

  {
    id: 17,
    name: 'Guaraná em Pó 100%',
    image: '/products/guarana.jpeg',
    description:
      'Fonte natural de energia e estímulo para a rotina.',
  },

  {
    id: 18,
    name: 'Tribulus Terrestris',
    image: '/products/tribulus.jpeg',
    description:
      'Muito procurado para complementar hábitos saudáveis e ativos.',
  },

  {
    id: 19,
    name: 'Marapuama',
    image: '/products/marapuama.jpeg',
    description:
      'Tradicional ingrediente natural utilizado há gerações.',
  },

  {
    id: 20,
    name: 'Ginseng em Pó',
    image: '/products/ginseng.jpeg',
    description:
      'Ingrediente natural conhecido por auxiliar disposição e equilíbrio.',
  },

  {
    id: 21,
    name: 'Catuaba em Pó',
    image: '/products/catuaba.jpeg',
    description:
      'Produto natural tradicional utilizado em diversas preparações.',
  },

  {
    id: 22,
    name: 'Óleo de Amêndoas',
    image: '/products/oleo-amendoas.jpeg',
    description:
      'Óleo vegetal nutritivo, conhecido por sua ação hidratante e suavizante para pele e cabelos.',
  },

  {
    id: 23,
    name: 'Guaraná e Tribulus em Cápsulas',
    image: '/products/guarana-tribulus.jpeg',
    description:
      'Suplemento de origem vegetal, muito utilizado em rotinas de bem-estar e disposição diaria.',
  },

  {
    id: 24,
    name: 'Óleo de Melaleuca',
    image: '/products/oleo-melaleuca.jpeg',
    description:
      'Óleo essencial natural conhecido por suas propriedades purificantes, muito utilizado nos cuidados com a pele, cabelos e higiene diária.',
  },

  {
    id: 25,
    name: 'Ozempic natural',
    image: '/products/ozempic.jpeg',
    description:
      'Produto à base de ingredientes vegetais, utilizado como apoio ao bem-estar e equilíbrio do organismo dentro de uma rotina saudável.',
  },

  {
    id: 26,
    name: 'Seca Barriga em Cápsulas',
    image: '/products/seca-barriga.jpeg',
    description:
      'Suplemento à base de ingredientes naturais tradicionalmente utilizados em rotinas de bem-estar, auxiliando no equilíbrio do organismo e na sensação de leveza.',
  },

  {
    id: 27,
    name: 'Gel Massageador',
    image: '/products/power-gel.jpeg',
    description:
      'Gel de uso tópico com ação refrescante, indicado para massagens corporais, proporcionando sensação de alívio e bem-estar após esforço físico ou cansaço muscular.',
  },

  {
    id: 28,
    name: 'Esfoliante Facial e Corporal',
    image: '/products/esfoliante.jpeg',
    description:
      'Produto de cuidado com a pele que auxilia na remoção de células mortas, promovendo limpeza profunda, renovação celular e deixando a pele mais macia e suave.',
  },

  {
    id: 29,
    name: 'Cápsulas Naturais Estimulantes',
    image: '/products/estimulantes.jpeg',
    description:
      'Combo de suplementos naturais à base de plantas tradicionalmente utilizadas em fórmulas de vitalidade, energia e bem-estar. Indicado para quem busca mais disposição e equilíbrio na rotina diária.',
  },

  {
    id: 30,
    name: 'Óleo de Copaíba',
    image: '/products/oleo-copaiba.jpeg',
    description:
      'Óleo vegetal natural tradicionalmente utilizado em cuidados com a pele, auxiliando na hidratação, regeneração e sensação de conforto, sendo muito aplicado em rotinas de bem-estar e uso cosmético.',
  },

  {
    id: 31,
    name: 'Kombucha',
    image: '/products/kombucha.jpeg',
    description:
      'Bebida fermentada natural à base de chá, conhecida por seu sabor levemente ácido e refrescante. Muito consumida em rotinas saudáveis como opção de bebida funcional e equilibrada.',
  }

]

export default products