import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import MapView, { Marker } from "react-native-maps";
import axios from "axios";

function Stores() {
    const [stores, setStores] = useState([]);

    const getStoreList = () => {
        let url =
            "https://api.bestbuy.com/v1/stores(region=tx)?format=json&apiKey=g5sdtzjtgpqhb9fdkka5ygcg";
        axios
            .get(url)
            .then((resp) => {
                let storesData = resp.data.stores;
                if (storesData.length > 0) {
                    setStores(storesData);
                } else {
                    alert("No Stores available for this location.");
                }
            })
            .catch((e) => {
                console.error("error in service call --> " + e);
            });
    };

    useEffect(() => {
        getStoreList();
    }, []);

    return (
        <MapView
            style={{ flex: 1 }}
            initialRegion={{
                latitudeDelta: 0.015 * 5,
                longitudeDelta: 0.0121 * 5,
            }}
            showsUserLocation={false}
        >
            {stores.map((store, index) => {
                if (store.lat !== null && store.lng !== null) {
                    return (
                        <Marker
                            key={index}
                            coordinate={{
                                latitude: store.lat,
                                longitude: store.lng,
                            }}
                            title={store.city}
                            description={store.address}
                        />
                    );
                }
            })}
        </MapView>
    );
}

export default Stores;
