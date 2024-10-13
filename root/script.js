// Conteúdo traduzido para diferentes idiomas
var bcase = "💼";
var grad = "🎓"; 
var abac = "🧮️";
var study = "📖"; 
var nerd = "🤓";
var certs = "🏅";
var links = "💻"


const translations = {
    pt: {
        professionalTitle: "Desenvolvedor de Software",
        experienceTitle: "Experiência Profissional " + bcase,
        educationTitle: "Formação Acadêmica " + grad,
        skillsTitle: "Habilidades " + abac,
        knowledgeTitle: "Conhecimentos " + study,
        certificatesTitle: "Certificados " + certs,
        additionalUrls: "Links Adicionais " + links,
        alreadyGraduated: "Formado",
        notGraduated: "Quase lá",

        knowledgeList: [
            "Programação Orientada a Objetos",
            "Programação Funcional",
            "Engenharia de Software",
            "Aprendizado de Máquina",
            "Algoritmos e estruturas de dados",
            "Desenvolvimento low e no code"
        ]
    },
    en: {
        professionalTitle: "Software Developer",
        experienceTitle: "Professional Experience " + bcase,
        educationTitle: "Academic Background " + grad,
        skillsTitle: "Skills " + abac,
        knowledgeTitle: "Knowledge " + study,
        certificatesTitle: "Certificates " + certs,
        additionalUrls: "Additional URLs " + links,
        alreadyGraduated: "Graduated",
        notGraduated: "Almost there",

        knowledgeList: [
            "Object-Oriented Programming",
            "Functional Programming",
            "Software Engineering",
            "Machine Learning",
            "Algorithms and Data Structures",
            "Low/No Code Development"
        ]
    },
    es: {
        professionalTitle: "Desarollador de Software",
        experienceTitle: "Experiencia Profesional " + bcase,
        educationTitle: "Formación Académica " + grad,
        skillsTitle: "Habilidades " + abac,
        knowledgeTitle: "Conocimientos " + study,
        certificatesTitle: "Certificados " + certs,
        additionalUrls: "Enlaces Adicionales " + links,
        alreadyGraduated: "Graduado",
        notGraduated: "En curso",

        knowledgeList: [
            "Programación Orientada a Objetos",
            "Programación Funcional",
            "Ingeniería de Software",
            "Aprendizaje Automático",
            "Algoritmos y Estructuras de Datos",
            "Desarrollo de Código Bajo/No Code"
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

    // Atualiza a lista de conhecimentos
    const knowledgeList = document.querySelector(".knowledge");
    knowledgeList.innerHTML = ''; // Limpa os itens atuais da lista

    // Recria os itens da lista com base na tradução
    content.knowledgeList.forEach(function(item) {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.className = "btn btn-dark";
        button.textContent = item;
        li.appendChild(button);
        knowledgeList.appendChild(li);
    });
}