import useLittleRecordForm from "./viewModel";

import FormSection from "../../FormSection";

import Female from "./steps/Female";
import Male from "./steps/Male";
import Litter from "./steps/Litter";
import Little from "./steps/Little";

import { Container } from "./styles";

export default function LittleRecordForm() {
  const {
    male,
    female,
    males,
    females,
    manualMale,
    typeOwnerMale,
    maleCatRegistration,
    handleChangeCat,
    handleChangeTypeOwnerMale,
    handleCatByRegister,
    handleChangeManualCat,
    errors,
    getErrorMessageByFieldName,
  } = useLittleRecordForm();

  console.log(errors);

  return (
    <Container>
      <FormSection label="Dados da Fêmea">
        <Female
          female={female}
          females={females}
          handleChangeCat={handleChangeCat}
          getErrorMessageByFieldName={getErrorMessageByFieldName}
        />
      </FormSection>

      <FormSection label="Dados do Macho">
        <Male
          male={male}
          manualMale={manualMale}
          males={males}
          typeOwnerMale={typeOwnerMale}
          handleChangeTypeOwnerMale={handleChangeTypeOwnerMale}
          maleCatRegistration={maleCatRegistration}
          handleCatByRegister={handleCatByRegister}
          handleChangeCat={handleChangeCat}
          handleChangeManualCat={handleChangeManualCat}
          getErrorMessageByFieldName={getErrorMessageByFieldName}
        />
      </FormSection>

      <FormSection label="Dados da Ninhada">
        <Little female={female} />
      </FormSection>

      <FormSection label="Dados do Filhote">
        <Litter />
      </FormSection>
    </Container>
  );
}
