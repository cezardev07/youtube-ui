import { Container, Value } from "./style"

interface TypeValueProgress{
  valueProgress: number | undefined;
}

export const BarProgress = ({valueProgress} : TypeValueProgress) => {
  const width = valueProgress ? `${valueProgress}%` : "0%";

  return(
    <Container>
      <Value width={width}></Value>
    </Container>
  )
}