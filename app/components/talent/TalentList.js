import styles from "@/app/components/Components.module.css";

import TalentButton from "./TalentButton";
import Loading from "../loading";

export default function TalentList({ talents }) {
  return (
    <>
      <ul className={styles.talentList}>
        {talents ? (
          talents.data.map((talent) => (
            <TalentButton
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
