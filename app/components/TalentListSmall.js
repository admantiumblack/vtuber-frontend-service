import styles from "./Components.module.css";

import TalentSmall from "./TalentSmall";
import TalentParent from "./TalentParent";
import Loading from "./Loading";

export default function TalentListSmall({ talents, companies }) {
  return (
    <>
      <ul className={styles.talentList}>
        {companies ? (
          companies.data.map((company) => (
            <TalentParent
              key={company.company_name}
              name={company.company_name}
            />
          ))
        ) :      
        talents ? (
          talents.data.map((talent) => (
            <TalentSmall
              key={talent.vtuber_id.toString()}
              id={talent.vtuber_id}
              name={talent.vtuber_name}
              thumbnail={talent.details.photo}
            />
          ))
        )        
        :
        (
          <Loading />
        )}
      </ul>
    </>
  );
}
