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
      description: 'Juan Oliveira de Carvalho — Mestrando em Ciência da Computação na UFABC. Pesquisa em Visão Computacional e Machine Learning aplicados a Cidades Inteligentes e Agricultura.',
      themeLabel: 'Alternar tema claro/escuro'
    },

    skip_link: 'Pular para o conteúdo',
    nav_about: 'Sobre',
    nav_education: 'Formação',
    nav_projects: 'Projetos',
    nav_contact: 'Contato',

    hero_eyebrow: 'Visão Computacional & Machine Learning',
    hero_role: 'Mestrando em Ciência da Computação · UFABC',
    about_text: `<p>Olá! Sou Juan Carvalho. Concluí o <b>Bacharelado em Ciência da Computação</b> pela
      <a href="https://www.ufabc.edu.br" target="_blank" rel="noopener noreferrer">Universidade Federal do ABC</a>
      em maio de 2026 e atualmente curso o <b>Mestrado em Ciência da Computação</b> na mesma instituição, sob orientação do
      <a href="https://www.ufabc.edu.br/ensino/docentes/raphael-yokoingawa-de-camargo" target="_blank" rel="noopener noreferrer">Prof. Raphael Yokoingawa de Camargo</a>,
      coordenador do Centro Estratégico de Pesquisa em Ciência de Dados (DATAS).</p>
      <p>Em 2025 participei de um intercâmbio acadêmico na
      <a href="https://www.jcu.cz/en/" target="_blank" rel="noopener noreferrer">Universidade da Boêmia do Sul</a>, na Chéquia,
      onde pesquisei inteligência artificial aplicada a tecnologias agrícolas por meio de modelos de visão computacional.</p>`,

    tag_cv: 'Visão Computacional',
    tag_ml: 'Machine Learning',
    tag_smart: 'Cidades Inteligentes',
    tag_agri: 'Agricultura',

    education_header: 'Formação',
    status_ongoing: 'em andamento',
    status_done: 'concluído',
    ufabc: 'Universidade Federal do ABC',
    usb: 'Universidade da Boêmia do Sul',
    edu_1_degree: 'Mestrado em Ciência da Computação',
    edu_1_desc: 'Pesquisa em visão computacional e aprendizado de máquina, sob orientação do Prof. Raphael Yokoingawa de Camargo (DATAS).',
    edu_2_degree: 'Intercâmbio acadêmico UNIGOU — Winter 2025',
    edu_2_desc: 'Pesquisa em inteligência artificial aplicada a tecnologias agrícolas por meio de modelos de visão computacional.',
    edu_3_degree: 'Bacharelado em Ciência da Computação',
    edu_3_desc: 'Inclui o Bacharelado em Ciência e Tecnologia (BC&T), também concluído na UFABC.',

    project_header: 'Projetos',
    project_title_1: 'Análise de Calçadas',
    project_text_1: 'Estimativa automática da largura de calçadas e detecção de obstáculos usando Segmentação Panóptica e Estimativa de Profundidade em imagens do Street View brasileiro.',
    project_title_2: 'Gerador de Grafos 2D',
    project_text_2: 'Gerador de grafos aleatórios 2D criado para facilitar o entendimento da teoria dos grafos, especialmente na aplicação de redes neurais a grafos.',
    view_on_github: 'Ver no GitHub',

    contact_title: 'Contato',
    contact_text: 'Para minha trajetória profissional completa, veja meu perfil no LinkedIn. Para conversar sobre pesquisa, colaborações ou oportunidades, o e-mail é o caminho mais direto.'
  },

  en: {
    _meta: {
      htmlLang: 'en',
      title: 'Juan Carvalho — Personal Portfolio',
      description: 'Juan Oliveira de Carvalho — MSc student in Computer Science at UFABC. Research on Computer Vision and Machine Learning applied to Smart Cities and Agriculture.',
      themeLabel: 'Toggle light/dark theme'
    },

    skip_link: 'Skip to content',
    nav_about: 'About',
    nav_education: 'Education',
    nav_projects: 'Projects',
    nav_contact: 'Contact',

    hero_eyebrow: 'Computer Vision & Machine Learning',
    hero_role: 'MSc student in Computer Science · UFABC',
    about_text: `<p>Hi there! I'm Juan Carvalho. I completed my <b>BSc in Computer Science</b> at the
      <a href="https://www.ufabc.edu.br" target="_blank" rel="noopener noreferrer">Federal University of ABC</a>
      in May 2026, and I'm currently an <b>MSc student in Computer Science</b> at the same university, under the supervision of
      <a href="https://www.ufabc.edu.br/ensino/docentes/raphael-yokoingawa-de-camargo" target="_blank" rel="noopener noreferrer">Prof. Raphael Yokoingawa de Camargo</a>,
      coordinator of the Strategic Research Center for Data Science (DATAS).</p>
      <p>In 2025 I joined an academic exchange program at the
      <a href="https://www.jcu.cz/en/" target="_blank" rel="noopener noreferrer">University of South Bohemia</a>, in Czechia,
      where I researched artificial intelligence applied to agricultural technologies through computer vision models.</p>`,

    tag_cv: 'Computer Vision',
    tag_ml: 'Machine Learning',
    tag_smart: 'Smart Cities',
    tag_agri: 'Agriculture',

    education_header: 'Education',
    status_ongoing: 'in progress',
    status_done: 'completed',
    ufabc: 'Federal University of ABC',
    usb: 'University of South Bohemia',
    edu_1_degree: 'MSc in Computer Science',
    edu_1_desc: 'Research on computer vision and machine learning, supervised by Prof. Raphael Yokoingawa de Camargo (DATAS).',
    edu_2_degree: 'UNIGOU academic exchange — Winter 2025',
    edu_2_desc: 'Research on artificial intelligence applied to agricultural technologies through computer vision models.',
    edu_3_degree: 'BSc in Computer Science',
    edu_3_desc: 'Includes the BSc in Science and Technology (BC&T), also completed at UFABC.',

    project_header: 'Projects',
    project_title_1: 'Sidewalk Analysis',
    project_text_1: 'Automatic sidewalk width estimation and obstacle detection using Panoptic Segmentation and Depth Estimation on Brazilian Street View imagery.',
    project_title_2: '2D Graph Generator',
    project_text_2: '2D random graph generator built to make graph theory easier to grasp, especially when applying neural networks to graphs.',
    view_on_github: 'View on GitHub',

    contact_title: 'Contact',
    contact_text: 'For my full work history, check out my LinkedIn profile. To talk about research, collaborations or opportunities, email is the most direct way to reach me.'
  },

  es: {
    _meta: {
      htmlLang: 'es',
      title: 'Juan Carvalho — Portafolio Personal',
      description: 'Juan Oliveira de Carvalho — estudiante de maestría en Ciencias de la Computación en la UFABC. Investigación en Visión por Computadora y Machine Learning aplicados a Ciudades Inteligentes y Agricultura.',
      themeLabel: 'Cambiar tema claro/oscuro'
    },

    skip_link: 'Saltar al contenido',
    nav_about: 'Sobre mí',
    nav_education: 'Formación',
    nav_projects: 'Proyectos',
    nav_contact: 'Contacto',

    hero_eyebrow: 'Visión por Computadora & Machine Learning',
    hero_role: 'Estudiante de maestría en Ciencias de la Computación · UFABC',
    about_text: `<p>¡Hola! Soy Juan Carvalho. Concluí la <b>Licenciatura en Ciencias de la Computación</b> en la
      <a href="https://www.ufabc.edu.br" target="_blank" rel="noopener noreferrer">Universidad Federal del ABC</a>
      en mayo de 2026 y actualmente curso la <b>Maestría en Ciencias de la Computación</b> en la misma universidad, bajo la supervisión del
      <a href="https://www.ufabc.edu.br/ensino/docentes/raphael-yokoingawa-de-camargo" target="_blank" rel="noopener noreferrer">Prof. Raphael Yokoingawa de Camargo</a>,
      coordinador del Centro Estratégico de Investigación en Ciencia de Datos (DATAS).</p>
      <p>En 2025 participé en un programa de intercambio académico en la
      <a href="https://www.jcu.cz/en/" target="_blank" rel="noopener noreferrer">Universidad de Bohemia del Sur</a>, en Chequia,
      donde investigué la inteligencia artificial aplicada a tecnologías agrícolas mediante modelos de visión por computadora.</p>`,

    tag_cv: 'Visión por Computadora',
    tag_ml: 'Machine Learning',
    tag_smart: 'Ciudades Inteligentes',
    tag_agri: 'Agricultura',

    education_header: 'Formación',
    status_ongoing: 'en curso',
    status_done: 'completado',
    ufabc: 'Universidad Federal del ABC',
    usb: 'Universidad de Bohemia del Sur',
    edu_1_degree: 'Maestría en Ciencias de la Computación',
    edu_1_desc: 'Investigación en visión por computadora y aprendizaje automático, bajo la supervisión del Prof. Raphael Yokoingawa de Camargo (DATAS).',
    edu_2_degree: 'Intercambio académico UNIGOU — Winter 2025',
    edu_2_desc: 'Investigación en inteligencia artificial aplicada a tecnologías agrícolas mediante modelos de visión por computadora.',
    edu_3_degree: 'Licenciatura en Ciencias de la Computación',
    edu_3_desc: 'Incluye la Licenciatura en Ciencia y Tecnología (BC&T), también completada en la UFABC.',

    project_header: 'Proyectos',
    project_title_1: 'Análisis de Aceras',
    project_text_1: 'Estimación automática del ancho de aceras y detección de obstáculos utilizando Segmentación Panóptica y Estimación de Profundidad en imágenes de Street View brasileño.',
    project_title_2: 'Generador de Grafos 2D',
    project_text_2: 'Generador de grafos aleatorios 2D creado para facilitar la comprensión de la teoría de grafos, especialmente en la aplicación de redes neuronales a grafos.',
    view_on_github: 'Ver en GitHub',

    contact_title: 'Contacto',
    contact_text: 'Para conocer mi trayectoria profesional completa, visita mi perfil de LinkedIn. Para hablar sobre investigación, colaboraciones u oportunidades, el correo es la vía más directa.'
  }
};
