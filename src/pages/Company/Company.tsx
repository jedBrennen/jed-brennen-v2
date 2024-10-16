import dayjs from 'dayjs';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import type { Company } from '@/types/common';
import { getCompany } from '@/services/company.service';
import BlockSpinner from '@/assets/icons/block-spinner.svg?react';

const Company: React.FC = () => {
  const { companyId } = useParams();
  const [loading, setLoading] = useState(false);
  const [company, setCompany] = useState<Company>();

  useEffect(() => {
    if (companyId) {
      const fetchCompany = async () => {
        setLoading(true);
        const company = await getCompany(companyId);
        setCompany(company);

        setLoading(false);
      };
      fetchCompany();
    }
  }, [companyId]);

  if (loading) {
    return (
      <div className="company__spinner-container">
        <BlockSpinner className="company__spinner" name="loading" />
      </div>
    );
  }
  if (!company) return <div>Company Not Found</div>;

  return (
    <div className="company">
      <h1 className="company__header">{company.name}</h1>
      <section className="company__section company__detail">
        <span dangerouslySetInnerHTML={{ __html: company.summary }}></span>
      </section>
      <section className="company__section company__summary">
        <h5 className="company__summary-header">Summary</h5>
        <ul className="company__roles">
          {company.roles.map((role) => (
            <li key={role.id} className="company__role">
              <span className="company__summary-value jb-typography__label--small-bold">
                {role.title}
              </span>
              <div className="company__role-dates">
                <span className="company__summary-value jb-typography__label--small">
                  {dayjs(role.startDate).format('MMMM YYYY')}
                </span>
                {role.endDate ? (
                  <>
                    <span> - </span>
                    <span className="company__summary-value jb-typography__label--small">
                      {dayjs(role.endDate).format('MMMM YYYY')}
                    </span>
                  </>
                ) : (
                  <span className="company__summary-value jb-typography__label--small">
                    - Present
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
        <ul className="company__locations">
          {company.locations.map((location) => (
            <li key={location} className="company__location">
              <span className="company__summary-value jb-typography__label--small-bold">
                {location}
              </span>
            </li>
          ))}
        </ul>
      </section>
      <img className="company__logo" src={company.logoUrl} />
    </div>
  );
};

Company.displayName = 'Company';
export default Company;
