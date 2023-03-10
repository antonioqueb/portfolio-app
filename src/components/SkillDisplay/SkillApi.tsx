import axios from 'axios';

// Define la interfaz de las imágenes
interface Skill {
  id: number;
  name: string;
  logo_url: string;
  experience: string;
}

// Obtiene las habilidades con Axios
export const getSkills = async (): Promise<Skill[]> => {
  try {
    const response = await axios.get<Skill[]>('https://django-server-production-0db9.up.railway.app/api/skill/');
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
