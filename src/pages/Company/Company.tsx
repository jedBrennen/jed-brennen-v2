import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useParams } from 'react-router';
import Companies from '@/data/companies';

dayjs.extend(relativeTime);

const Company: React.FC = () => {
  const { companyId } = useParams();
  const company = Companies.find(({ id }) => id === companyId);

  if (!company) return <div>Company Not Found</div>;

  const { logo: CompanyLogo } = company;

  return (
    <div className="company">
      <h1 className="company__header">{company.name}</h1>
      <section className="company__section company__detail">
        <p>{company.description}</p>
        {company.additionalPoints?.length && (
          <ul>
            {company.additionalPoints?.map((point) => (
              <li>{point}</li>
            ))}
          </ul>
        )}
      </section>
      <section className="company__section company__summary">
        <h5 className="company__summary-header">Summary</h5>
        <span className="company__summary-label jb-typography__label--small">
          Title
        </span>
        <span className="company__summary-value jb-typography__label--small-bold">
          {company.title}
        </span>
        <span className="company__summary-label jb-typography__label--small">
          Joined
        </span>
        <span className="company__summary-value jb-typography__label--small-bold">
          {dayjs(company.joined).format('MMMM YYYY')}
        </span>
        {company.departed && (
          <>
            <span className="company__summary-label jb-typography__label--small">
              Departed
            </span>
            <span className="company__summary-value jb-typography__label--small-bold">
              {dayjs(company.departed).format('MMMM YYYY')}
            </span>
            <span className="company__summary-label jb-typography__label--small">
              Length
            </span>
            <span className="company__summary-value jb-typography__label--small-bold">
              {dayjs(company.joined).to(company.departed, true)}
            </span>
          </>
        )}
        <span className="company__summary-label jb-typography__label--small">
          Location
        </span>
        <span className="company__summary-value jb-typography__label--small-bold">
          {company.location}
        </span>
      </section>
      <CompanyLogo className="company__logo" />
    </div>
  );
};

Company.displayName = 'Company';
export default Company;
