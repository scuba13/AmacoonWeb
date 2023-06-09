import LittleRecordForm from "../../components/forms/LittleRecord";
import Title from "../../components/Title";
import { useParams } from 'react-router-dom';
import { Container } from "./styles";

export default function LitterRecord() {
  const { userId } = useParams<{ userId: string }>();
  return (
    <Container>
      <Title>Registro de ninhada</Title>

      <LittleRecordForm userId={Number(userId)} />
    </Container>
  );
}


