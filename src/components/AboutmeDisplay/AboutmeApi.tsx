import axios from 'axios';

interface AboutmeData {
  title: string;
  description: string;
  imageSrc: string;
}

const fetchAboutmeData = async (): Promise<AboutmeData> => {
  const response = await axios.get('https://django-server-production-0db9.up.railway.app/api/me/10/?format=json');
  const response2 = await axios.get('https://django-server-production-0db9.up.railway.app/api/me/1/?format=json');
  const { description, title } = response.data;
  const { galery: galery2 } = response2.data;
  return { title: title, description, imageSrc: galery2 };
};

export default fetchAboutmeData;
