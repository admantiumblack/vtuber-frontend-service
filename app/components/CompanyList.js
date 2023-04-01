import styles from "./Components.module.css";

import useSWR from "swr";

import CompanyTalentList from "./CompanyTalentList";
import Loading from "./loading";

const fetchCompanies = async () => {
  const res = await fetch(`${process.env.USER_API}/user/company?limit=0`);
  const data = await res.json();
  // console.log(data);
  return data;
};

export default function CompanyList({ styleContext }) {
  const { data: companies, error: companyError } = useSWR(
    "companies",
    fetchCompanies
  );

  return (
    <>
      <ul
        className={[styles.companyListContainer, styles[styleContext]].join(
          " "
        )}
      >
        {companies ? (
          companies.data.map((company) => (
            <li key={company.company_name} className={styles.companyList}>
              <p className={styles.companyName}>{company.company_name}</p>
              <CompanyTalentList company={company.company_name} />
            </li>
          ))
        ) : (
          <Loading />
        )}
      </ul>
    </>
  );
}
