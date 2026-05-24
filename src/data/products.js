const products = [
  {
    id: 1,
    name: 'Sucos Naturais',
    image: '/products/sucos.jpeg',
    description:
      'Bebidas refrescantes preparadas com frutas selecionadas, ideais para acompanhar a rotina com mais sabor, leveza e naturalidade.',
  },
  {
    id: 2,
    name: 'Sanduíches Naturais',
    image: '/products/sanduiches.jpeg',
    description:
      'Opção prática e saborosa preparada com ingredientes frescos e selecionados, ideal para refeições leves e equilibradas no dia a dia.',
  },
  
  {
    id: 3,
    name: 'Mix de Frutas Liofilizadas',
    image: '/products/mix-liofilizadas.jpeg',
    description:
      'Seleção deliciosa de frutas crocantes e naturais, preservadas pelo processo de liofilização para manter sabor, aroma e praticidade no dia a dia.',
  },
  {
    id: 4,
    name: 'Mix de Frutas Desidratadas',
    image: '/products/mix-desidratadas.jpeg',
    description:
      'Combinação saborosa de frutas selecionadas, ideal para lanches práticos, nutritivos e cheios de sabor a qualquer hora do dia.',
  },
  {
    id: 5,
    name: 'Mix de Vegetais Desidratados',
    image: '/products/mix-vegetais.jpeg',
    description:
      'Combinação prática e saborosa de vegetais selecionados, ideal para complementar receitas, lanches e uma rotina alimentar equilibrada.',
  },
  {
    id: 6,
    name: 'Cupuaçu Desidratado',
    image: '/products/cupuacu.jpeg',
    description:
      'Fruta desidratada com sabor marcante e tropical, ideal para lanches práticos, nutritivos e cheios de sabor no dia a dia.',
  },
  
  {
    id: 7,
    name: 'Spirulina',
    image: '/products/spirulina.jpeg',
    description:
      'Rica em nutrientes e antioxidantes, auxilia na energia e no bem-estar.',
  },

  {
    id: 8,
    name: 'Aveia em Flocos',
    image: '/products/aveia.jpeg',
    description:
      'Fonte de fibras naturais que contribuem para uma alimentação equilibrada.',
  },

  {
    id: 9,
    name: 'Uva Passa',
    image: '/products/uva-passa.jpeg',
    description:
      'Doce natural rica em energia, perfeita para lanches e receitas.',
  },
   {
    id: 10,
    name: 'Granola Premium',
    image: '/products/granola.jpeg',
    description:
      'Mistura crocante e saborosa com ingredientes selecionados.',
  },

  

  {
    id: 11,
    name: 'Semente de Abóbora',
    image: '/products/semente-abobora.jpeg',
    description:
      'Fonte de proteínas e minerais essenciais para uma rotina saudável.',
  },

 
  {
    id: 12,
    name: 'Tâmara Sem Caroço',
    image: '/products/tamara.jpeg',
    description:
      'Fruta naturalmente adocicada e nutritiva, ideal para o dia a dia.',
  },

  {
    id: 13,
    name: 'Ameixa Sem Caroço',
    image: '/products/ameixa.jpeg',
    description:
      'Rica em fibras e sabor, excelente para alimentação equilibrada.',
  },

  {
    id: 14,
    name: 'Ervilha com Wasabi',
    image: '/products/ervilha-wasabi.jpeg',
    description:
      'Snack crocante e picante para quem busca sabor diferenciado.',
  },

  {
    id: 15,
    name: 'Castanha de Caju Caramelizada',
    image: '/products/castanha-caramelizada.jpeg',
    description:
      'Combinação perfeita entre crocância e toque adocicado.',
  },

  {
    id: 16,
    name: 'Cacau em Pó 100% Alcalino',
    image: '/products/cacau-alcalino.jpeg',
    description:
      'Sabor intenso e textura refinada para receitas especiais.',
  },

  {
    id: 17,
    name: 'Cacau em Pó 100% Orgânico',
    image: '/products/cacau-organico.jpeg',
    description:
      'Produto natural e puro, ideal para bebidas e preparos saudáveis.',
  },

  {
    id: 18,
    name: 'Milho Mostarda e Mel',
    image: '/products/milho-mel.jpeg',
    description:
      'Snack crocante com combinação agridoce irresistível.',
  },
   {
    id: 19,
    name: 'Guaraná em Pó 100%',
    image: '/products/guarana.jpeg',
    description:
      'Fonte natural de energia e estímulo para a rotina.',
  },

  

  {
    id: 20,
    name: 'Castanha de Caju Assada Sem Sal',
    image: '/products/castanha-sem-sal.jpeg',
    description:
      'Opção saudável e saborosa para qualquer momento do dia.',
  },

 

  {
    id: 21,
    name: 'Maca Peruana Negra',
    image: '/products/maca.jpeg',
    description:
      'Conhecida por auxiliar energia, vitalidade e desempenho diário.',
  },
   {
    id: 22,
    name: 'Ginkgo Biloba',
    image: '/products/ginkgo.jpeg',
    description:
      'Tradicionalmente utilizado para auxiliar concentração e disposição.',
  },

  {
    id: 23,
    name: 'Castanha do Pará',
    image: '/products/castanha-para.jpeg',
    description:
      'Rica em selênio e nutrientes importantes para o organismo.',
  },

 

  {
    id: 24,
    name: 'Tribulus Terrestris',
    image: '/products/tribulus.jpeg',
    description:
      'Muito procurado para complementar hábitos saudáveis e ativos.',
  },

  {
    id: 25,
    name: 'Marapuama',
    image: '/products/marapuama.jpeg',
    description:
      'Tradicional ingrediente natural utilizado há gerações.',
  },

  {
    id: 26,
    name: 'Ginseng em Pó',
    image: '/products/ginseng.jpeg',
    description:
      'Ingrediente natural conhecido por auxiliar disposição e equilíbrio.',
  },

  {
    id: 27,
    name: 'Catuaba em Pó',
    image: '/products/catuaba.jpeg',
    description:
      'Produto natural tradicional utilizado em diversas preparações.',
  },

  {
    id: 28,
    name: 'Óleo de Amêndoa',
    image: '/products/oleo-amendoas.jpeg',
    description:
      'Óleo vegetal nutritivo, conhecido por sua ação hidratante e suavizante para pele e cabelos.',
  },

  
  
  {
    id: 29,
    name: 'Óleo de Melaleuca',
    image: '/products/oleo-melaleuca.jpeg',
    description:
      'Óleo essencial natural conhecido por suas propriedades purificantes, muito utilizado nos cuidados com a pele, cabelos e higiene diária.',
  },

  {
    id: 30,
    name: 'Ozempic natural',
    image: '/products/ozempic.jpeg',
    description:
      'Produto à base de ingredientes vegetais, utilizado como apoio ao bem-estar e equilíbrio do organismo dentro de uma rotina saudável.',
  },

  {
    id: 31,
    name: 'Óleo de Copaíba',
    image: '/products/oleo-copaiba.jpeg',
    description:
      'Óleo vegetal natural tradicionalmente utilizado em cuidados com a pele, auxiliando na hidratação, regeneração e sensação de conforto, sendo muito aplicado em rotinas de bem-estar e uso cosmético.',
  },

  {
    id: 32,
    name: 'Kombucha',
    image: '/products/kombucha.jpeg',
    description:
      'Bebida fermentada natural à base de chá, conhecida por seu sabor levemente ácido e refrescante. Muito consumida em rotinas saudáveis como opção de bebida funcional e equilibrada.',
  },
  {
    id: 33,
    name: 'Gel Massageador',
    image: '/products/power-gel.jpeg',
    description:
      'Gel de uso tópico com ação refrescante, indicado para massagens corporais, proporcionando sensação de alívio e bem-estar após esforço físico ou cansaço muscular.',
  },
   {
    id: 34,
    name: 'Seca Barriga em Cápsulas',
    image: '/products/seca-barriga.jpeg',
    description:
      'Suplemento à base de ingredientes naturais tradicionalmente utilizados em rotinas de bem-estar, auxiliando no equilíbrio do organismo e na sensação de leveza.',
  },

  {
    id: 35,
    name: 'Cápsulas Naturais Estimulantes',
    image: '/products/estimulantes.jpeg',
    description:
      'Combo de suplementos naturais à base de plantas tradicionalmente utilizadas em fórmulas de vitalidade, energia e bem-estar. Indicado para quem busca mais disposição e equilíbrio na rotina diária.',
  },
   {
    id: 36,
    name: 'Esfoliante Facial e Corporal',
    image: '/products/esfoliante.jpeg',
    description:
      'Produto de cuidado com a pele que auxilia na remoção de células mortas, promovendo limpeza profunda, renovação celular e deixando a pele mais macia e suave.',
  },

  {
    id: 37,
    name: 'Drageado de Banana',
    image: '/products/drageado-banana.jpeg',
    description:
      'Deliciosa banana coberta com camada crocante e saborosa, ideal para lanches, sobremesas e momentos de indulgência no dia a dia.',
  },

  {
    id: 38,
    name: 'Drageado de Castanha de Caju',
    image: '/products/drageado-castanhacaju.jpeg',
    description:
      'Castanha de caju envolvida em uma deliciosa cobertura crocante, combinando sabor e textura para um snack irresistível e especial.',
  },

  {
    id: 39,
    name: 'Drageado de Cereja',
    image: '/products/drageado-cereja.jpeg',
    description:
      'Cereja envolvida em uma saborosa cobertura crocante, perfeita para quem busca um doce sofisticado e cheio de sabor para qualquer momento do dia.',
  },

  {
    id: 40,
    name: 'Drageado de Cupuaçu',
    image: '/products/drageado-cupuaçu.jpeg',
    description:
      'Delicioso cupuaçu coberto com uma camada crocante e saborosa, unindo o sabor marcante da fruta amazônica a uma experiência irresistível.',
  },

  {
    id: 41,
    name: 'Drageado de Morango',
    image: '/products/drageado-morango.jpeg',
    description:
      'Morango envolvido em uma deliciosa cobertura crocante, trazendo uma combinação irresistível de sabor, doçura e textura em cada mordida.',
  },

  {
    id: 42,
    name: 'Chá Menopausa',
    image: '/products/cha-menopauzam.jpg',
    description:
      'Blend de ervas naturais tradicionalmente utilizado para proporcionar bem-estar e conforto feminino durante a rotina diária.',
  },

  {
    id: 43,
    name: 'Chá de Amora Miúra',
    image: '/products/cha-amora.jpg',
    description:
      'Infusão natural tradicionalmente apreciada pelo sabor suave e muito utilizada em rotinas de bem-estar e equilíbrio do organismo.',
  },

  {
    id: 44,
    name: 'Chá Diabeticol',
    image: '/products/cha-diabeticol.jpg',
    description:
      'Blend de ervas naturais tradicionalmente utilizado em rotinas de bem-estar, apreciado como complemento a hábitos saudáveis do dia a dia.',
  },

  {
    id: 45,
    name: 'Chá Columax',
    image: '/products/cha-columax.jpg',
    description:
      'Blend natural de ervas cuidadosamente selecionadas, tradicionalmente utilizado em rotinas de bem-estar e equilíbrio do organismo.',
  },

  {
    id: 46,
    name: 'Chá Cura Tudo',
    image: '/products/cha-curatudo.jpg',
    description:
      'Blend tradicional de ervas naturais, apreciado pelo sabor marcante e muito utilizado em rotinas de bem-estar e cuidados naturais do dia a dia.',
  },

  {
    id: 47,
    name: 'Chá de Valeriana',
    image: '/products/cha-valeriana.jpg',
    description:
      'Infusão natural tradicionalmente apreciada por proporcionar momentos de relaxamento e bem-estar na rotina diária.',
  },

  {
    id: 48,
    name: 'Chá de Cardo Mariano',
    image: '/products/cha-cardomariano.jpg',
    description:
      'Infusão natural tradicionalmente utilizada em rotinas de bem-estar, apreciada por quem busca hábitos naturais e equilíbrio no dia a dia.',
  },


  {
    id: 49,
    name: 'Chá Intestino Preso',
    image: '/products/cha-intestinopreso.jpg',
    description:
      'Blend de ervas naturais tradicionalmente utilizado em rotinas de bem-estar digestivo, auxiliando na sensação de leveza e equilíbrio do organismo.',
  },

  {
    id: 50,
    name: 'Chá de Uxi Amarelo com Unha-de-Gato',
    image: '/products/cha-uxiamarelo.jpg',
    description:
      'Blend natural de ervas tradicionalmente utilizado em rotinas de bem-estar, muito apreciado pelos cuidados naturais e equilíbrio do organismo.',
  },
  {
    id: 51,
    name: 'Guaraná e Tribulus em Cápsulas',
    image: '/products/guarana-tribulus.jpeg',
    description:
      'Suplemento de origem vegetal, muito utilizado em rotinas de bem-estar e disposição diaria.',
  },
  
  


  

  

  
]

export default products