/**
 * Conteúdo traduzível do site.
 *
 * Cada chave corresponde a um atributo `data-i18n` (texto puro) ou
 * `data-i18n-html` (HTML permitido) no index.html. Para adicionar um novo
 * texto basta criar a chave nos três idiomas e referenciá-la no HTML —
 * nenhuma alteração em main.js é necessária.
 */
const TRANSLATIONS = {
  pt: {
    _meta: {
      htmlLang: 'pt-BR',
      title: 'Juan Carvalho — Portfólio Pessoal',
      description: 'Juan Oliveira de Carvalho — Mestrando em Ciência da Computação na UFABC.',
      themeLabel: 'Alternar tema claro/escuro'
    },

    hero_role: 'Mestrando em Ciência da Computação | Cientista de Dados',
    interests_text: 'Meus interesses de pesquisa são visão computacional e machine learning aplicados a cidades inteligentes, computação de alta performance e agricultura.',
    about_text: `<p>Olá! Sou formado nos Bacharelados em <b>Ciência e Tecnologia e em Ciência da Computação</b> pela
      <a href="https://www.ufabc.edu.br" target="_blank" rel="noopener noreferrer">Universidade Federal do ABC</a> e atualmente curso o <b>Mestrado em Ciência da Computação</b> 
      na mesma instituição, sob orientação do <a href="https://www.ufabc.edu.br/ensino/docentes/raphael-yokoingawa-de-camargo" target="_blank" rel="noopener noreferrer">Prof. Raphael 
      Yokoingawa de Camargo</a>, coordenador do Centro Estratégico de Pesquisa em Ciência de Dados (DATAS).</p>
      <p>Em 2025 participei de um intercâmbio acadêmico na <a href="https://www.jcu.cz/en/" target="_blank" rel="noopener noreferrer">Universidade da Boêmia do Sul</a>, na Chéquia,
      onde pesquisei inteligência artificial aplicada a tecnologias agrícolas por meio de modelos de visão computacional.</p>`,

    education_header: 'Formação',
    status_ongoing: 'em andamento',
    ufabc: 'Universidade Federal do ABC',
    usb: 'Universidade da Boêmia do Sul',
    edu_1_degree: 'Mestrado em Ciência da Computação',
    edu_1_desc: 'Pesquisa em treinamento por reforço aplicado a problemas de escalonamento em HPC.',
    edu_2_degree: 'Intercâmbio Acadêmico UNIGOU — Winter 2025',
    edu_2_desc: 'Pesquisa em inteligência artificial aplicada a tecnologias agrícolas por meio de modelos de visão computacional.',
    edu_3_degree: 'Bacharelado em Ciência da Computação',
    edu_3_desc: 'Tese sobre a aplicação de visão computacional e machine learning na acessibilidade de vias e calçadas',
    edu_4_degree: 'Bacharelado em Ciência e Tecnologia',
    edu_4_desc: 'Tese sobre o papel da lógica na ciência e sua relevância no desenvolvimento acadêmico-pessoal.',

    project_header: 'Projetos',
    project_title_1: 'Análise de Calçadas',
    project_text_1: 'Estimativa automática da largura de calçadas e detecção de obstáculos usando Segmentação Panóptica e Estimativa de Profundidade em imagens do Street View brasileiro.',
    project_title_2: 'Gerador de Grafos 2D',
    project_text_2: 'Gerador de grafos aleatórios 2D criado para facilitar o entendimento da teoria dos grafos, especialmente na aplicação de redes neurais a grafos.',

    contact_title: 'Contato',
    contact_text: 'Para minha trajetória profissional completa, veja meu perfil no LinkedIn. Para conversar sobre pesquisa, colaborações ou oportunidades, envie um e-mail.'
  },

  en: {
    _meta: {
      htmlLang: 'en',
      title: 'Juan Carvalho — Personal Portfolio',
      description: 'Juan Oliveira de Carvalho — MSc student in Computer Science at UFABC.',
      themeLabel: 'Toggle light/dark theme'
    },

    hero_role: 'M.Sc. Candidate in Computer Science | Data Scientist',
    interests_text: 'My research interests are computer vision and machine learning applied to smart cities, high-performance computing and agriculture.',
    about_text: `<p>Hi there! I hold a <b>BSc in Science and Technology and in Computer Science</b> from the
      <a href="https://www.ufabc.edu.br" target="_blank" rel="noopener noreferrer">Federal University of ABC</a>
      and am currently an <b>MSc student in Computer Science</b> at the same university, under the supervision of
      <a href="https://www.ufabc.edu.br/ensino/docentes/raphael-yokoingawa-de-camargo" target="_blank" rel="noopener noreferrer">Prof. Raphael Yokoingawa de Camargo</a>,
      coordinator of the Strategic Research Center for Data Science (DATAS).</p>
      <p>In 2025 I joined an academic exchange program at the
      <a href="https://www.jcu.cz/en/" target="_blank" rel="noopener noreferrer">University of South Bohemia</a>, in Czechia,
      where I researched artificial intelligence applied to agricultural technologies through computer vision models.</p>`,

    education_header: 'Education',
    status_ongoing: 'in progress',
    ufabc: 'Federal University of ABC',
    usb: 'University of South Bohemia',
    edu_1_degree: 'M.Sc. in Computer Science',
    edu_1_desc: 'Research on reinforcement learning applied to scheduling problems in HPC.',
    edu_2_degree: 'UNIGOU Exchange Program — Winter 2025',
    edu_2_desc: 'Research on artificial intelligence applied to agricultural technologies through computer vision models.',
    edu_3_degree: 'BSc in Computer Science',
    edu_3_desc: 'Thesis on the application of computer vision in accessibility of roads and sidewalks.',
    edu_4_degree: 'BSc in Science and Technology',
    edu_4_desc: 'Thesis on the role of logic in science and its relevance in academic-personal development',

    project_header: 'Projects',
    project_title_1: 'Sidewalk Analysis',
    project_text_1: 'Automatic sidewalk width estimation and obstacle detection using Panoptic Segmentation and Depth Estimation on Brazilian Street View imagery.',
    project_title_2: '2D Graph Generator',
    project_text_2: '2D random graph generator built to make graph theory easier to grasp, especially when applying neural networks to graphs.',

    contact_title: 'Contact',
    contact_text: 'For my full work history, check out my LinkedIn profile. To talk about research, collaborations or opportunities, email is the most direct way to reach me.'
  },

  es: {
    _meta: {
      htmlLang: 'es',
      title: 'Juan Carvalho — Portafolio Personal',
      description: 'Juan Oliveira de Carvalho — estudiante de maestría en Ciencias de la Computación en la UFABC.',
      themeLabel: 'Cambiar tema claro/oscuro'
    },

    hero_role: 'Maestrando en Ciencias de la Computación en UFABC | Científico de Datos',
    interests_text: 'Mis intereses de investigación son la visión por computadora y el machine learning aplicados a ciudades inteligentes, computación de alto rendimiento y agricultura.',
    about_text: `<p>¡Hola! Soy <b>graduado en Ciencia y Tecnología y en Ciencias de la Computación</b> por la
      <a href="https://www.ufabc.edu.br" target="_blank" rel="noopener noreferrer">Universidad Federal del ABC</a>
      y actualmente curso la <b>Maestría en Ciencias de la Computación</b> en la misma universidad, bajo la supervisión del
      <a href="https://www.ufabc.edu.br/ensino/docentes/raphael-yokoingawa-de-camargo" target="_blank" rel="noopener noreferrer">Prof. Raphael Yokoingawa de Camargo</a>,
      coordinador del Centro Estratégico de Investigación en Ciencia de Datos (DATAS).</p>
      <p>En 2025 participé en un programa de intercambio académico en la
      <a href="https://www.jcu.cz/en/" target="_blank" rel="noopener noreferrer">Universidad de Bohemia del Sur</a>, en Chequia,
      donde investigué la inteligencia artificial aplicada a tecnologías agrícolas mediante modelos de visión por computadora.</p>`,

    education_header: 'Formación',
    status_ongoing: 'en curso',
    ufabc: 'Universidad Federal del ABC',
    usb: 'Universidad de Bohemia del Sur',
    edu_1_degree: 'Maestría en Ciencias de la Computación',
    edu_1_desc: 'Investigación en entrenamiento por reforzo aplicado a problemas de escalonamiento en HPC.',
    edu_2_degree: 'Intercambio Académico UNIGOU — Winter 2025',
    edu_2_desc: 'Investigación en inteligencia artificial aplicada a tecnologías agrícolas mediante modelos de visión por computadora.',
    edu_3_degree: 'Licenciatura en Ciencias de la Computación',
    edu_3_desc: 'Tesis sobre la aplicación de la visión por computadora a la accesibilidad de carreteras y aceras.',
    edu_4_degree: 'Licenciatura en Ciencia y Tecnología',
    edu_4_desc: 'Tesis sobre la lógica en la ciencia y su relevancia en el desarrollo académico y personal.',

    project_header: 'Proyectos',
    project_title_1: 'Análisis de Aceras',
    project_text_1: 'Estimación automática del ancho de aceras y detección de obstáculos utilizando Segmentación Panóptica y Estimación de Profundidad en imágenes de Street View brasileño.',
    project_title_2: 'Generador de Grafos 2D',
    project_text_2: 'Generador de grafos aleatorios 2D creado para facilitar la comprensión de la teoría de grafos, especialmente en la aplicación de redes neuronales a grafos.',

    contact_title: 'Contacto',
    contact_text: 'Para conocer mi trayectoria profesional completa, visita mi perfil de LinkedIn. Para hablar sobre investigación, colaboraciones u oportunidades, el correo es la vía más directa.'
  }
};
