import { getCourseDetails } from 'api/getCourseDetails';
import { AxiosResponse } from 'axios';
import { Curso, UserData } from 'common/types';
import Button from 'components/Button/Button';
import PopupConfirmaciónAcción from 'components/PopupConfirmaciónAcción/PopupConfirmaciónAcción';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PopupListaAlumnos from '../components/PopupListaAlumnos/PopupListaAlumnos';
import { inviteUser } from 'api/inviteUser';

import { InvitationData } from 'common/types';

import { CourseContext } from 'context/CourseContext';
import { useContext } from 'react';
import { toast } from 'react-toastify';

const CursoGestionarAlumnos = () => {
  const [alumnos, setAlumnos] = useState<UserData[]>([]);
  const { cursoId } = useParams();
  const { course } = useContext(CourseContext);
  useEffect(() => {
    getCourseDetails(cursoId ? cursoId : '').then(
      (response: AxiosResponse<Curso>) => {
        console.log('alumnos');
        console.log(response.data.enrolled);
        setAlumnos(response.data.enrolled as UserData[]);
      }
    );
  }, []);

  const sendInvitation = (data: InvitationData) => {
    inviteUser(course.id, data)
      .then((response: AxiosResponse) => {
        toast.success('Se envió un correo de invitación al usuario');
      })
      .catch(() => {
        toast.error('Ocurrió un error');
      });
  };

  return (
    <>
      <div className="col-12 border border-light p-3">
        <div className="row d-flex align-items-center border-bottom border-light">
          <div className="col-6">
            <h2>Mis alumnos</h2>
          </div>
          <div className="col-6 d-flex justify-content-end py-3 border-bottom">
            <PopupListaAlumnos
              btnlabelPopup={'Invitar Alumnos'}
              title={'Invite a un nuevo alumno a su clase'}
              callback={sendInvitation}
            />
          </div>
        </div>
        <div className="row">
          <div className="table-responsive">
            <table className="table ">
              <thead>
                <tr>
                  <th scope="col">Nombres</th>
                  <th scope="col">Apellidos</th>
                  <th scope="col">Correo</th>
                  <th scope="col">
                    <div className="d-flex justify-content-center">
                      Opciones
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {alumnos.map((alumno: UserData) => {
                  return (
                    <>
                      <tr>
                        <td>{alumno.first_name}</td>
                        <td>{alumno.last_name}</td>
                        <td>{alumno.email}</td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <Button
                              type="button"
                              className="mx-1"
                              color="primary"
                              elevated
                            >
                              Revisar
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <p>Alumnos registrados</p>
      </div>
    </>
  );
};
export default CursoGestionarAlumnos;
