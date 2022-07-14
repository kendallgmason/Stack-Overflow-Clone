import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';


const StyledHeader = styled.header`
  background-color: #393939;
  box-shadow: 5px 5px 5px rgba(0,0,0,.2);
  display:grid;
  grid-template-columns: 220px 1fr 200px;
  grid-column-gap: 20px;
`;

const LogoLink = styled.a`
 color: #ffffff;
 text-decoration: none;
 display: 'inline-block';
 height: 50px;
 line-height: 50px;
 padding: 0 15px;

 svg {
   margin-top: 6px;
   height: 30px;
   display: inline-block;
   float: left;
 }

span {
  display: 'inline-block';
  padding-left: 5px;
  padding-top: 10px;
  font-size: 1.2rem;
  font-weight: 0px;
}

 b {
  font-weight: normal;
  font-weight: 200px;
 }
`;

const SearchInput = styled.input`
   display: inline-block;
   box-sizing: border-box;
   width: 100%;
   border: 1px solid #777;
   border-radius: 3px;
   background:rgba(0,0,0,.1);
   padding: 8px 10px;
   margin-top: 9px;
`;

const ProfileLink = styled.a`
 color: #ffffff;
 text-decoration: none;
 line-height: 50px;
`;

function Header() {
 return (
    <StyledHeader>
    <LogoLink href="" className="logo">
    <FontAwesomeIcon icon={faStackOverflow} />
    <span>stack<b>overcloned</b></span>
    </LogoLink>
    <form action="" className="search">
    <SearchInput type="text" placeholder="Search.."></SearchInput>
    </form>
    <ProfileLink href="" className="profile">Kendall</ProfileLink>
      </StyledHeader>
 ); 
}

export default Header;