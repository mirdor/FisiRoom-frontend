import { postCourse } from 'api/postCourse';
import {
  courseCreationInputs,
  courseCreationSelects,
  courseCreationTextAreas,
} from 'common/constants';
import { CourseData } from 'common/types';
import Form from 'components/Form/Form';
import Header from 'components/Header/Header';
import Wrapper from 'containers/Wrapper/Wrapper';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { AxiosError } from 'axios';

const CrearCurso = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data: CourseData) => {
    console.log(data);
    postCourse({
      title: data.title,
      day: data.day,
      description: data.description,
      time_end: data.time_end,
      time_start: data.time_start,
      image: data.image,
    })
      .then((res) => {
        console.log(res);
        toast.success('Curso creado con éxito');
        navigate('/cursos-creados');
      })
      .catch((e: AxiosError) => {
        console.error('Error: ', e.response?.data.message);
        toast.error('Ocurrio un error:', e.response?.data.message);
      });
  };
  return (
    <Wrapper>
      <div className="py-4 w-100 d-flex flex-column justify-content-center align-items-center">
        <div
          style={{ maxWidth: '600px' }}
          className="w-100 d-flex flex-column justify-content-center align-items-center"
        >
          <Header centered>Cursos</Header>
          <div style={{ maxWidth: '500px' }} className="card my-3 p-2 w-100">
            <Header variant="secondary" centered>
              Crear Curso
            </Header>
            <div className="px-4">
              <Form
                inputs={courseCreationInputs}
                textAreas={courseCreationTextAreas}
                selects={courseCreationSelects}
                callback={handleSubmit}
                btnLabel="Guardar"
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CrearCurso;
