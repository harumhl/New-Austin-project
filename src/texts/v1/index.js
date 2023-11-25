import TabsAndBody from "../../shared/tabs";
import Images from "./images";
import Stipend from "./stipend";
import Apartment from "./apartment";
import Community from "./community";
import Work from "./work";
import Transportation from "./transportation";
import CommunitySharing from "./communitySharing";
import Inclusivity from "./inclusivity";
import Infrastructure from "./infrastructure";
import Walkable from "./walkable.js";
import Safety from "./safety";
import Questions from "./questions";
import Tourism from "./tourism";
import Farm from "./farm";
import Technology from "./technology";
import Legal from "./legal";

function V1() {
  const V1_TAB_ENUM = {
    None: {
      component: () => {},
      name: "-",
    },
    Images: {
      component: Images,
    },
    Stipend: {
      component: Stipend,
    },
    Apartment: {
      component: Apartment,
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
    Technology: {
      component: Technology,
    },
    Legal: {
      component: Legal,
    },
    Tourism: {
      component: Tourism,
    },
    Farm: {
      component: Farm,
    },
    Q: {
      component: Questions,
    }
  };

  return (
    <TabsAndBody
      enums={V1_TAB_ENUM}
      defaultEnum={Object.keys(V1_TAB_ENUM)[0]}
      title="Version 1 (the first few years)"
    />
  );
}

export default V1;
