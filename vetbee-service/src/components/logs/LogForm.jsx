import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Field } from "../../organisms/Field";

export const LogForm = ({ log, onUpdate, className, disabled }) => {

  let { petId } = useParams();
  console.log({ petId });

  const [name, setName] = useState(log.name);
  const [description, setDescription] = useState(log.description);
  const [status, setStatus] = useState(log.status);

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeDescription = (e) => {
    setDescription(e.target.value);
  };

  const changeStatus = (e) => {
    setStatus(e.target.value);
  };

  useEffect(() => {
    onUpdate({
      description: description,
      status: status,
      pet_id: petId
    });
  }, [description, status, petId]);

  return (
    <form className={className || ""}>
      <Field name="description" defaultValue={description} disabled={disabled} onChange={changeDescription} />
      <Field name="status" disabled={disabled} defaultValue={status} onChange={changeStatus} />
    </form>
  );
};
