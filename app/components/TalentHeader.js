import styles from "./Components.module.css";

import useSWR from "swr";

import Loading from "./loading";

export default function TalentHeader({ vtuberId }) {
  // const fetchTalent = async () => {
  //   console.log(
  //     `${process.env.NEXT_PUBLIC_USER_API}/user/list?vtuber_id=${vtuberId}`
  //   );
  //   const res = await fetch(
  //     `${process.env.NEXT_PUBLIC_USER_API}/user/list?vtuber_id=${vtuberId}`
  //   );
  //   const data = await res.json();
  //   // console.log(data);
  //   return data;
  // };
  // const { data: talent, error: talentError } = useSWR("talent", fetchTalent, {
  //   onSuccess: (data) => {
  //     console.log(data);
  //   },
  // });

  return (
    <>
      {/* <div>{talent ? talent : <Loading />}</div> */}
      <div>Test</div>
    </>
  );
}
