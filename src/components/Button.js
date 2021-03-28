import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid var(--mainYellow);
border-color:${props => props.tray ? "var(--mainYellow)" : "var(--lightDark)"};
color:${prop => prop.tray ? "var(--mainYellow)" : "var(--lightDark)"}; 
border-radius: 0.5rem;
padding:0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;

&:hover{

    background: ${prop => prop.tray ? "var(--mainYellow)" : "var(--lightDark)"}; 
    color: var(--mainOrange);
}
&: focus{
    outline:none;
}
`;
