// Conteúdo traduzido para diferentes idiomas
var bcase = "💼";
var grad = "🎓";
var abac = "🧮️";
var study = "📖";
var nerd = "🤓";
var certs = "🏅";
var links = "💻";
var inters = "💡";
var check = "✅";

const translations = {
    pt: {
        professionalTitle: "Desenvolvedor de Software",
        experienceTitle: "Experiência Profissional " + bcase,
        educationTitle: "Formação Acadêmica " + grad,
        skillsTitle: "Habilidades " + abac,
        knowledgeTitle: "Conhecimento " + study,
        certificatesTitle: "Certificados " + certs,
        interestsTitle: "Interesses " + inters,
        additionalUrls: "Contato " + links,
        alreadyGraduated: "Formado",
        notGraduated: "Quase lá",
        university: "Universidade Federal do ABC",
        course1: "Bacharelado em Ciência e Tecnologia - [2018-2023]",
        course2: "Bacharelado em Ciência da Computação - [2023-2025]",

        knowledgeList: [
            "Programação Orientada a Objetos",
            "Programação Funcional",
            "Engenharia de Software",
            "Aprendizado de Máquina",
            "Algoritmos e estruturas de dados",
            "Desenvolvimento low e no code"
        ],

        interestsList: [
            "Paradigma de programação funcional " + check,
            "Modelos preditivos aplicados à mobilidade urbana " + check,
            "Ensino de lógica na educação " + check
        ]
    },
    en: {
        professionalTitle: "Software Developer",
        experienceTitle: "Professional Experience " + bcase,
        educationTitle: "Academic Background " + grad,
        skillsTitle: "Skills " + abac,
        knowledgeTitle: "Knowledge " + study,
        certificatesTitle: "Certificates " + certs,
        interestsTitle: "Interests " + inters,
        additionalUrls: "Contact " + links,
        alreadyGraduated: "Graduated",
        notGraduated: "Almost there",
        university: "Federal University of ABC",
        course1: "Bachelor in Science and Technology - [2018-2023]",
        course2: "Bachelor in Computer Science - [2023-2025]",

        knowledgeList: [
            "Object-Oriented Programming",
            "Functional Programming",
            "Software Engineering",
            "Machine Learning",
            "Algorithms and Data Structures",
            "Low/No Code Development"
        ],

        interestsList: [
            "Functional Programming " + check,
            "ML models applied to urban mobility " + check,
            "Logic teaching in education " + check
        ]
    },
    es: {
        professionalTitle: "Desarollador de Software",
        experienceTitle: "Experiencia Profesional " + bcase,
        educationTitle: "Formación Académica " + grad,
        skillsTitle: "Habilidades " + abac,
        knowledgeTitle: "Conocimientos " + study,
        certificatesTitle: "Certificados " + certs,
        interestsTitle: "Entereses " + inters,
        additionalUrls: "Contacto " + links,
        alreadyGraduated: "Graduado",
        notGraduated: "En curso",
        university: "Universidad Federal del ABC",
        course1: "Licenciatura en Ciencia y Tecnología - [2018-2023]",
        course2: "Licenciatura en Ciencia de la Computación - [2023-2025]",

        knowledgeList: [
            "Programación Orientada a Objetos",
            "Programación Funcional",
            "Ingeniería de Software",
            "Aprendizaje Automático",
            "Algoritmos y Estructuras de Datos",
            "Desarrollo de Código Bajo/No Code"
        ],

        interestsList: [
            "Paradigma de Programación Funcional " + check,
            "Modelos predictivos aplicados a la mobilidad urbana " + check,
            "Ensino de lógica en la educación " + check
        ]
    }
};

// Função para trocar o idioma
function changeLanguage(language) {
    const content = translations[language];

    document.getElementById("professional-title").textContent = content.professionalTitle;
    document.getElementById("experience-title").textContent = content.experienceTitle;
    document.getElementById("education-title").textContent = content.educationTitle;
    document.getElementById("skills-title").textContent = content.skillsTitle;
    document.getElementById("knowledge-title").textContent = content.knowledgeTitle;
    document.getElementById("certificates-title").textContent = content.certificatesTitle;
    document.getElementById("additional-urls").textContent = content.additionalUrls;
    document.getElementById("already-graduated").textContent = content.alreadyGraduated;
    document.getElementById("not-graduated").textContent = content.notGraduated;
    document.getElementById("university-name0").textContent = content.university;
    document.getElementById("university-name1").textContent = content.university;
    document.getElementById("course-1").textContent = content.course1;
    document.getElementById("course-2").textContent = content.course2;
    document.getElementById("interests-title").textContent = content.interestsTitle;
    document.getElementById("know0").textContent = content.knowledgeList[0]
    document.getElementById("know1").textContent = content.knowledgeList[1]
    document.getElementById("know2").textContent = content.knowledgeList[2]
    document.getElementById("know3").textContent = content.knowledgeList[3]
    document.getElementById("ints0").textContent = content.interestsList[0]
    document.getElementById("ints1").textContent = content.interestsList[1]
    document.getElementById("ints2").textContent = content.interestsList[2]
}
