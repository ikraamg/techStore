import {
  IonContent,
  IonHeader,
  IonLoading,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
  IonGrid,
  IonRow,
  IonButtons,
  IonMenuButton,
  IonBackButton,
} from "@ionic/react";
import React, { useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { request } from "../helpers/api";
import { toast } from "../helpers/toast";
import { setTeches, setFavourites } from "../redux/actions/dataActions";
import TechItem from "../components/TechItem";

const Tech: React.FC = () => {
  const dispatch = useDispatch();
  const [busy, setBusy] = useState<boolean>(false);
  const user = useSelector((state: RootStateOrAny) => state.auth.userData);
  const { token } = user || "";
  const teches = useSelector((state: RootStateOrAny) => state.data.teches);
  const favourites = useSelector(
    (state: RootStateOrAny) => state.data.favourites
  );
  const { name } = useParams();

  const allData = () => {
    setBusy(true);
    const techReq = request(token, "teches");
    const favReq = request(token, "user_favourites");
    Promise.all([techReq, favReq]).then(data => {
      setBusy(false);
      if (data[0].error || data[1].error) {
        toast("Please check internet connection", 4000);
      } else {
        dispatch(setTeches(data[0]));
        dispatch(setFavourites(data[1]));
      }
    });
  };

  const handleFavourite = (tech_id: number, status: boolean, e: any) => {
    setBusy(true);
    const toggleFavourite = status
      ? request(token, `favourites/${tech_id}`, "DELETE")
      : request(token, "favourites", "POST", { favourite: { tech_id } });

    toggleFavourite.then((data) => {
      if (data.error) {
        setBusy(false);
        toast(data.error, 4000);
      } else {
        allData();
      }
    });

    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
  };

  useIonViewWillEnter(() => {
    allData();
  });

  const addFavourites = () => {
    const out = teches.map((tech: any) => {
      const checkFavourite = favourites.filter(
        (fav: any) => fav.id === tech.id
      );
      checkFavourite.length > 0
        ? Object.assign(tech, { favourite: true })
        : Object.assign(tech, { favourite: false });
      return tech;
    });
    return out;
  };

  const renderTeches = (itemArray: any) => {
    return teches && favourites
      ? itemArray().map((tech: any) => (
          <TechItem
            key={tech.id}
            tech={tech}
            handleFavourite={handleFavourite}
            name={name}
          />
        ))
      : [];
  };

  const techItems = () => renderTeches(addFavourites);
  const techDetails = () =>
    renderTeches(() =>
      addFavourites().filter((tech: any) => tech.title === name)
    );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start" color="primary">
            {name ? <IonBackButton /> : <IonMenuButton />}
          </IonButtons>
          <IonTitle size="large">{name || "Tech"}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name || "Tech"}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonLoading message="Loading ..." isOpen={busy} />
        <IonGrid>
          <IonRow>{name ? techDetails() : techItems()}</IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tech;
