import styles from "./Components.module.css";
import useSWR from "swr";

import TalentSmall from "./TalentSmall";
import Loading from "./Loading";

const fetcher = async () => {
  const res = await fetch("http://localhost:8002/user/list");
  const data = await res.json();
  console.log(data);
  return data;
};

export default function TalentListSmall({}) {
  const { data: talents, error } = useSWR("talents", fetcher);

  if (error) return "An error has occured";

  return (
    <>
      <ul className={styles.talentList}>
        {talents ? (
          talents.data.map((talent) => (
            <TalentSmall
              key={talent.vtuber_id.toString()}
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
