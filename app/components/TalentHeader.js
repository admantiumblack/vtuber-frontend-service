import styles from "./Components.module.css";

import useSWR from "swr";

import Loading from "./loading";
import Image from "next/image";
import Link from "next/link";

export default function TalentHeader({ vtuberId }) {
  const fetchTalent = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_USER_API}/user/list?vtuber_id=${vtuberId}`
    );
    const data = await res.json();
    return data.data[0];
  };

  const { data: talent, error: talentError } = useSWR("talent", fetchTalent);

  console.log(talent);
  // console.log(talent.details.banner);
  return (
    <>
      <div
        className={styles.headerBanner}
        style={{
          backgroundImage: talent
            ? `url("${talent.details.banner}=w1920-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj")`
            : null,
        }}
      />
      <div className={styles.headerContainer}>
        {talent ? (
          <>
            <Link
              href={`https://youtube.com/channel/${talent.details.id}`}
              target="_blank"
              className={styles.button}
            >
              <Image
                src={talent.details.photo}
                width={180}
                height={180}
                alt={talent.vtuber_name}
              />
            </Link>
            <div className={styles.headerTextContainer}>
              <h1>{talent.channel[0].channel_name}</h1>
              <h4>
                {parseInt(talent.details.subscriber_count).toLocaleString("en")}{" "}
                subscribers
              </h4>
              <h5 className={styles.companyPill}>
                {talent.companies[0].company.company_name}
              </h5>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}
