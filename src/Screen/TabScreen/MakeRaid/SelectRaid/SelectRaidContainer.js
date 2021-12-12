import React from "react";
import SelectRaidPresenter from "./SelectRaidPresenter";

export default ({ navigation }) => {
  const RaidList = [
    { name: "발탄", image: require("../../../../images/baltan.png"), func: () => navigation.navigate({ name: "DetailRaid", params: { raid: "발탄" }})},
    { name: "비아키스", image: require("../../../../images/viakiss.png"), func: () => navigation.navigate({ name: "DetailRaid", params: { raid: "비아키스" }})},
    { name: "쿠크세이튼", image: require("../../../../images/kukosaton.png"), func: () => navigation.navigate({ name: "DetailRaid", params: { raid: "쿠크세이튼" }})},
    { name: "아브렐슈드", image: require("../../../../images/abrellsude.png"), func: () => navigation.navigate({ name: "DetailRaid", params: { raid: "아브렐슈드" }})},
    { name: "아르고스", image: require("../../../../images/argos.png"), func: () => navigation.navigate({ name: "DetailRaid", params: { raid: "아르고스" }})},
    { name: "기타", image: require("../../../../images/etc.png"), func: () => navigation.navigate({ name: "DetailRaid", params: { raid: "기타" }})},
  ]
  return (
    <SelectRaidPresenter 
      data={RaidList}
    />
  )
}