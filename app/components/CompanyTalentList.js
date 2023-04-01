import styles from "./Components.module.css";

import useSWR from "swr";

import TalentList from "./TalentList";

export default function CompanyTalentList({ company }) {
  const fetchTalents = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_USER_API}/user/list?company=${company}&limit=0`
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
      </div>
    </>
  );
}
