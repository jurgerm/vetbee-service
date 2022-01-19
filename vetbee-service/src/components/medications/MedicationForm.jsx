import { useEffect, useState } from "react";
import { Field } from "../../organisms/Field";

export const MedicationForm = ({ medication, onUpdate, className, disabled }) => {
  const [name, setName] = useState(medication.name);
  const [description, setDescription] = useState(medication.description);

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeDescription = (e) => {
    setDescription(e.target.value);
  };


  useEffect(() => {
    onUpdate({
      name,
      description
    });
  }, [name, description]);

  return (
    <form className={className || ""}>
      <Field name="name" defaultValue={name} disabled={disabled} onChange={changeName} />
      <Field name="description" defaultValue={description} disabled={disabled} onChange={changeDescription} />
    </form>
  );
};
