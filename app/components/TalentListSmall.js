import styles from "./Components.module.css";

import TalentSmall from "./TalentSmall";
import Loading from "./Loading";

export default function TalentListSmall({ talents }) {
  return (
    <>
      <ul className={styles.talentList}>
        {talents ? (
          talents.data.map((talent) => (
            <TalentSmall
              key={talent.vtuber_id.toString()}
              id={talent.vtuber_id}
              name={talent.vtuber_name}
              thumbnail={talent.details.photo}
            />
          ))
        ) : (
          <Loading />
        )}
      </ul>
    </>
  );
}
