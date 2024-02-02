import React from 'react';
import {
    IonPage, IonHeader, IonToolbar,
    IonTitle, IonContent,
    IonBackButton, IonButtons, IonList,
    IonItem, IonLabel, IonRow, IonGrid, IonCol, IonText, useIonToast
} from '@ionic/react'
import { RouteComponentProps } from 'react-router';

import { useEffect, useState } from "react";

import { DeviceInfo } from 'device-info';

interface HomePageProps extends RouteComponentProps<{

}> { }

const Dashboard: React.FC<HomePageProps> = ({ match, history }) => {
    const [presentToast] = useIonToast();

    const [batteryLevel, setBatteryLevel] = useState('');
    const [isCharging, setIsCharging] = useState(false);

    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');
    const [operatingSystem, setOperatingSystem] = useState('');
    const [osVersion, setOsVersion] = useState('');
    const [platform, setPlatform] = useState('');

    const [id, setId] = useState('');

    const [networkConnect, setNetworkConnect] = useState(false);
    const [networkType, setNetworkType] = useState("-");
    const [networkName, setNetworkName] = useState("");

    const getId = async () => {
        const details = await DeviceInfo.get();
        const serial = details.results['serial'];
        setId(serial ?? '');
        console.log('Device Info');
        console.log(details.results['serial']);

        setBatteryLevel("" + details.results['batteryLevel']);
        console.log(details.results['batteryLevel']);

        setNetworkName(details.results['ssid']??'');
        setNetworkConnect(details.results['networkConnected']??false);
        setNetworkType(details.results['networkType']??'');
        setModel(details.results['model']??'');
        setManufacturer(details.results['manufacturer']??'');
        setOperatingSystem(details.results['operatingSystem']??'');
        setOsVersion(details.results['osVersion']??'')
        setPlatform(details.results['platform']??'');

        setIsCharging(details.results['batteryCharging']??false);
    };


    useEffect(() => {

        getId();

    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>Welcome</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen={true}>
                <div className="fields ion-padding">
                    <IonText color="tertiary">
                        <h3>Battery Level: {batteryLevel}</h3>

                        <h3>Battery Charing: {isCharging ? 'Yes' : 'No'}</h3>
                    </IonText>
                    <br />

                    <IonText color="tertiary">
                        <h3>Manufacturer: {manufacturer}</h3>

                        <h3>Model: {model}</h3>

                        <h3>OperatingSystem: {operatingSystem}</h3>
                        <h3>OS Version: {osVersion}</h3>
                        <h3>Platform: {platform}</h3>
                    </IonText>
                    <IonText color="tertiary">
                        <h3>ID: {id}</h3>
                    </IonText>

                    <br />
                    <IonText color="tertiary">
                        <h3>Network Connected: {networkConnect ? 'True' : 'false'}</h3>
                        <h3>Network Type: {networkType}</h3>
                        <h3>Network: {networkName}</h3>
                    </IonText>

                </div>
            </IonContent>

        </IonPage>
    );
};

export default Dashboard;