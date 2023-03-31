import styles from "./Components.module.css";

import useSWR from "swr";

import TalentList from "./TalentList";

export default function CompanyTalentList({ company }) {
  const fetchTalents = async () => {
    const res = await fetch(
      `http://localhost:8002/user/list?company=${company}&limit=0`
      // `http://localhost:8002/user/list`
    );
    const data = await res.json();
    // console.log(data);
    return data;
  };
  const { data: talents, error: companyError } = useSWR(
    `talents_${company}`,
    fetchTalents
  );

  return (
    <>
      <div>
        <TalentList talents={talents} />
        {/* <TalentList talents={talents} />
        <TalentList talents={talents} />
        <TalentList talents={talents} />
        <TalentList talents={talents} />
        <TalentList talents={talents} />
        <TalentList talents={talents} /> */}
      </div>
    </>
  );
}
