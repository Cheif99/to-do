import styled from 'styled-components'

const Button = styled.button`

    font: inherit;
    padding: 0.5rem 1.5rem;
    border: 1px solid #6E6C57;
    color: white;
    background: #6E6C57;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
    cursor: pointer;
    position:relative;
    left: 15%;
    margin-top: 20px;
 
  
  &:focus {
    outline: none;
  }
  
  &:hover,
  &active {
    background: #6E6C57;
    border-color: #6E6C57;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
  
` 
    
    

 
export default Button;