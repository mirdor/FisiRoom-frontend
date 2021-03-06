type Props = {
  id: number;
  title?: string;
  btnTitle: string;
  children: React.ReactNode;
  onConfirm: Function;
  buttonContent: React.ReactNode;
};

const ConfirmationModal = ({
  id,
  title = '',
  btnTitle,
  children,
  onConfirm,
  buttonContent,
}: Props) => {
  return (
    <div>
      {/* Button trigger modal */}
      <button
        title={btnTitle}
        type="button"
        className={`btn btn-light`}
        data-bs-toggle="modal"
        data-bs-target={`#confirmationModal-${id}`}
      >
        {buttonContent}
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id={`confirmationModal-${id}`}
        tabIndex={-1}
        aria-labelledby={`confirmationModal-${id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {title && (
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
            )}

            <div className="modal-body">{children}</div>
            <div className="modal-footer d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={() => {
                  onConfirm(id);
                }}
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
