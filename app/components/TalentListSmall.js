import TalentSmall from "./TalentSmall";

async function getTalentsSidebar() {
  const res = await fetch("http://localhost:8002/user/list");
  const data = await res.json();
  console.log(data);
  return data;
}

export default function TalentListSmall() {
  //   const talents = await getTalentsSidebar();
  return (
    <>
      {/* {talents.map((talent) => (
        // <div>{talent.vtuber_id}</div>
        <TalentSmall
        key={talent.vtuber_id.toString()}
        name={talent.english_name}
        thumbnail={talent.thumbnail}
        />
    ))} */}
      <div>Test</div>
    </>
  );
}
