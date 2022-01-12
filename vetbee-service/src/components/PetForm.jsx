import { useEffect, useState } from "react";
import { Field } from "../organisms/Field";

export const PetForm = ({ pet, onUpdate, className, disabled }) => {
  const [name, setName] = useState(pet.name);
  const [dob, setDob] = useState(pet.dob);
  const [client_email, setEmail] = useState(pet.client_email);

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeDob = (e) => {
    setDob(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    onUpdate({
      name,
      dob,
      client_email,
    });
  }, [name, dob, client_email]);

  return (
    <form className={className || ""}>
      <Field name="name" defaultValue={name} disabled={disabled} onChange={changeName} />
      <Field name="dob" defaultValue={dob} disabled={disabled} onChange={changeDob} />
      <Field name="client_email" disabled={disabled} defaultValue={client_email} max="100" onChange={changeEmail} />
    </form>
  );
};
