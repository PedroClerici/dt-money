import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logo from "../../assets/logo.svg";

export function Header() {
	return (
		<HeaderContainer>
			<HeaderContent>
				<img src={logo} alt="" />
				<NewTransactionButton type="button">
					Nova transação
				</NewTransactionButton>
			</HeaderContent>
		</HeaderContainer>
	);
}
