import * as Styles from './style';
import logo from '../../assets/logo.svg'

export function Header(){
    return(
        <Styles.Container>
            <Styles.Content>
                <img src={logo} alt="" />
                <button>Nova transação</button>
            </Styles.Content>
        </Styles.Container> 
    )
}