import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Medication } from "./Medication";
import { MedsApi } from "../../services/meds-api";

export const MedicationsList = () => {
  const [medications, setMedications] = useState();
  const { state } = useLocation();

  const fetchMedications = async () => {
    // fetch medications from api
    const allMedications = await MedsApi.all();

    // save fetched medications to local state
    setMedications(allMedications);
  };

  const addMedication = (medication) => {
    setMedications((prevState) => [...prevState, medication]);
  };

  const deleteMedication = async (id) => {
    try {
      const { deletedMedicationId } = await MedsApi.delete(id);
      setMedications((prevState) => prevState.filter((medication) => medication.id !== deletedMedicationId));
    } catch (e) {
      console.error(e);
    }
  };

  // fetch medications list on component load
  useEffect(() => {
    fetchMedications();
  }, []);

  // check if medication obj was added, if yes, save it to the array
  useEffect(() => {
    if (!state) return;

    if (state.added) {
      addMedication(state.added);
    }
  }, [state]);

  if (!medications) {
    return <span>loading...</span>;
  }

  //console.log(medications);

  return medications.map((medication) => (
    <Medication
      key={medication.id}
      medicationId={medication.id}
      medication={medication}
      onDelete={() => {
        deleteMedication(medication.id);
      }}
    />
  ));
};
