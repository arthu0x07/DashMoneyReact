import * as Styles from "./style";
import logo from "../../assets/logo.svg";

interface HeaderProps {
  OpenModal: () => void;
}

export function Header({ OpenModal }: HeaderProps) {
  return (
    <Styles.Container>
      <Styles.Content>
        <img src={logo} alt="" />
        <button onClick={OpenModal}>Nova transação</button>
      </Styles.Content>
    </Styles.Container>
  );
}
