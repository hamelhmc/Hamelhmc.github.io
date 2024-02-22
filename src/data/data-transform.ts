import type { Portafolio, Job, Study, RelevantLink, Project } from './model/manfred.interface';
import type { PortafolioNuevo, Education, SocialMedia, Project as Proyecto } from './model/portafolio.interface';

export function convertirPortafolio(portafolioAntiguo: Portafolio): PortafolioNuevo {

  const aboutDescriptionParagraph = portafolioAntiguo.aboutMe.profile.description.split('\n\n')[0];

  const portafolioNuevo: PortafolioNuevo = {
    baseUrl: portafolioAntiguo.settings.MACVersion, // Utiliza la versión de MAC como baseUrl
    name: `${portafolioAntiguo.aboutMe.profile.name} ${portafolioAntiguo.aboutMe.profile.surnames}`, // Concatena el nombre y apellidos
    jobDescription: portafolioAntiguo.manfredSpecificData.desiredJobDescription, // Utiliza la descripción del trabajo deseado
    about: aboutDescriptionParagraph, // Utiliza la descripción personal
    experience: convertirExperiencia(portafolioAntiguo.experience.jobs), // Convierte la experiencia laboral
    education: convertirEducacion(portafolioAntiguo.knowledge.studies), // Convierte los estudios
    socialMedia: convertirRedesSociales(portafolioAntiguo.careerPreferences.contact.publicProfiles), // Convierte los perfiles públicos
    projects: convertirProyectos(portafolioAntiguo.experience.projects) // Convierte los proyectos
  };
  return portafolioNuevo;
}

function convertirExperiencia(jobs: Job[]): Education[] {
  const options: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' };
  const locale: string = 'es-ES';


  const experience: Education[] = jobs.map(job => {
    return {
      name: job.organization.name,
      location: "",
      startDate: new Date(job.roles[0].startDate).toLocaleDateString(locale, options), // Formato de fecha "Nov 2020"
      endDate: job.roles[0].finishDate ? new Date(job.roles[0].finishDate).toLocaleDateString(locale, options) : "Presente",
      description: job.roles.map(role => role.challenges?.map(challenge => challenge.description.split('\n\n📌 Tecnologías')[0])).flat()
    };
  });
  return experience;
}


function convertirEducacion(studies: Study[]): Education[] {
  const education: Education[] = studies.map(study => {
    return {
      name: study.name,
      location: study.institution.name,
      startDate: study.startDate.toString(),
      endDate: study.finishDate.toString(),
      description: [study.institution.description] // No hay descripción disponible en los estudios
    };
  });
  return education;
}

function convertirRedesSociales(publicProfiles: RelevantLink[]): SocialMedia {
  const socialMedia: SocialMedia = {
    facebook: "",
    twitter: "",
    github: "",
    email: "",
    linkedin: ""
  };
  publicProfiles.forEach(profile => {
    console.log('🐛 ➜ convertirRedesSociales ➜ profile➜', profile);
    switch (profile.type) {
      case "facebook":
        socialMedia.facebook = profile.URL;
        break;
      case "twitter":
        socialMedia.twitter = profile.URL;
        break;
      case "github":
        socialMedia.github = profile.URL;
        break;
      case "email":
        socialMedia.email = "Hamiltonmercadocuellar@gmail.com";
        break;
      case "linkedin":
        socialMedia.linkedin = profile.URL;
        break;
      default:
        break;
    }
  });

  return socialMedia;
}

function convertirProyectos(projects: Project[]): Proyecto[] {
  const convertedProjects: Proyecto[] = projects.map(project => {
    return {
      title: project.details.name,
      isFeatured: false, // No hay información sobre si un proyecto está destacado en el modelo antiguo
      thumbnail: project.details.image?.link || "", // Utiliza el enlace de la imagen si está disponible como miniatura
      githubUrl: project.details.URL || "", // Utiliza la URL del proyecto si está disponible
      liveUrl: "" // No hay información sobre la URL en vivo en el modelo antiguo
    };
  });
  return convertedProjects;
}
