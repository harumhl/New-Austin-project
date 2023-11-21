import TabsAndBody from "../../shared/tabs";
import Stipend from "./stipend";
import Community from "./community";
import Work from "./work";
import Transportation from "./transportation";
import CommunitySharing from "./communitySharing";
import Inclusivity from "./inclusivity";
import Infrastructure from "./infrastructure";
import Walkable from "./walkable.js";
import Safety from "./safety";

function V1() {
  const V1_TAB_ENUM = {
    None: {
      component: () => {},
      name: "-",
    },
    Stipend: {
      component: Stipend,
    },
    Community: {
      component: Community,
    },
    Work: {
      component: Work,
    },
    Transportation: {
      component: Transportation,
    },
    CommunitySharing: {
      component: CommunitySharing,
      name: "Community Sharing",
    },
    Inclusivity: {
      component: Inclusivity,
    },
    Infrastructure: {
      component: Infrastructure,
    },
    Walkable: {
      component: Walkable,
    },
    Safety: {
      component: Safety,
    },
  };

  return (
    <TabsAndBody
      enums={V1_TAB_ENUM}
      defaultEnum={Object.keys(V1_TAB_ENUM)[0]}
      title="Version 1"
    />
  );
}

export default V1;
