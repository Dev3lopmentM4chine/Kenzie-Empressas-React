import iCardCompanyProps from "./interfaces";
import StyledCardCompany from "./style";

const CardCompany = ({ companyName, hours }: iCardCompanyProps) => {
  return (
    <StyledCardCompany>
      <h3>{companyName}</h3>
      <div className="cardCompany-container">
        <p>{hours}</p>
        <div>
          <span>Setor</span>
        </div>
      </div>
    </StyledCardCompany>
  );
};

export default CardCompany;
