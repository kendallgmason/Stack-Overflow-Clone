import styled from 'styled-components';


const QuestionStat = styled.div`
  text-align: center;
  display: inline-block;
  font-size: 1.0rem;
  color: #aaa;
  margin-top: 6px;
  
  span {
      font-size: .7rem;
      display: block;
      font-weight: 300;
      margin-top: 4px;
  }
`;

const QuestionTitleArea = styled.div`
padding: 0px 20px;

`;

const QuestionLink = styled.a`
text-decoration: none;
color: #3ca4ff;
font-size: 1.1rem;
display: block;
padding: 0px; 
border-radius: 4px;
margin-bottom: 6px;
`;

const Tag = styled.span`
  display: inline-block;
  margin-right: 8px;
  background-color: #3e4a52;
  color: #9cc3db;
`;

const StyledQuestionRow = styled.div`
  background-color: rgba(255,255,255,.05);
  padding: 10px 15px;
  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, 60px)) 1fr;
  border-top: 1px solid #555;
`;

const WhoAndWhen = styled.div`
   display: inline-block;
   color: #aaa;
   font-size: .8rem;
   float: right;
   margin-bottom: 20px;
`;

const UserLink = styled.a`
   color: #3ca4ff;
`;


function QuestionRow() {
   return (
    <StyledQuestionRow>
    <QuestionStat>0<span>votes</span></QuestionStat>
    <QuestionStat>1<span>answers</span></QuestionStat>
    <QuestionStat>6<span>views</span></QuestionStat>
    <QuestionTitleArea>
        <QuestionLink> Getting string in quotes in Javascript.. </QuestionLink>
        <WhoAndWhen>
            asked 10minutes ago <UserLink>Kendall</UserLink>
        </WhoAndWhen>
        <Tag>javascript</Tag>
        <Tag>parsing</Tag>
        <Tag>quotes</Tag>
        <Tag>literals</Tag>
    </QuestionTitleArea>
    </StyledQuestionRow>
   )
}

export default QuestionRow;

