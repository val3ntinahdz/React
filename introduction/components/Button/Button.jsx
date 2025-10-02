import styled from "styled-components";

// Styled components is a library that enables component encapsulation in the browser
// Each component will have unique values (or classes), avoiding confusion with other elements across the application

const getBgColor = (props) => props.blue ? "blue" : "gray";
const getRoundedBtn = (props) => props.rounded ? "15px" : "10px";

const StyledButton = styled.button`
    background-color: ${ getBgColor };
    border-radius: ${ getRoundedBtn };

`;

const Button = ({ children, blue, rounded }) => {
    return <StyledButton blue={ blue } rounded={ rounded }>{ children }</ StyledButton>
}

export default Button; 