import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import Layout from "../components/Layout";
import ButtonCustom from "../components/ButtonCustom";
import SelectList from "react-native-dropdown-select-list/index";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { currentUser } from "../data/User";
import { getCurrentLocation, locationToDB } from "../utils/Location";

const UnivesitySelectScreen = () => {
  const [universitiesList, setUniversitiesList] = useState([
    { value: "Universidad de Almería (UAL) (Almería)" },
    { value: "Universidad de Granada (UGR) (Granada)" },
    { value: "Universidad de Málaga (UMA) (Málaga)" },
    { value: "Universidad Internacional de Andalucía (UNIA) (Sevilla)" },
    { value: "Universidad de Sevilla (US) (Sevilla)" },
    { value: "Universidad Pablo de Olavide (UPO) (Sevilla)" },
    {
      value:
        "Universidad Internac. Menéndez Pelayo (UIMP) (Sevilla - Granada - Línea de la Concepción)",
    },
    { value: "Universidad de Cádiz (UCA) (Cádiz)" },
    { value: "Universidad de Córdoba (UCO) (Córdoba)" },
    { value: "Universidad de Jaén (UJAEN) (Jaén)" },
    { value: "Universidad de Huelva (UHU) (Huelva)" },
    { value: "Universidad de Marbella (Málaga)" },
    { value: "Escuela Autónoma de Dirección de Empresas (EADE)" },
    { value: "Escuela de Organización Industrial (EOI) (Sevilla)" },
    {
      value:
        "Esc. Sup. de Gestión Comer. y Marketing (ESIC) (Sevilla, Málaga y Granada)",
    },
    { value: "ETEA Institución Univ. de la Compañía de Jesús (Córdoba)" },
    { value: "IMF Business School (Sevilla)" },
    { value: "Universidad Loyola Andalucía (Sevilla)" },
    { value: "Universidad de Zaragoza (UNIZAR) (Zaragoza)" },
    { value: "Universidad Internac. Menéndez Pelayo (UIMP) (Pirineos)" },
    { value: "Privadas:" },
    { value: "Universidad San Jorge (USJ) (Zaragoza)" },
    { value: "Esc. Sup. de Gestión Comer. y Marketing (ESIC) (Zaragoza)" },
    { value: "Universidad de Oviedo (UNIOVI)" },
    { value: "Universidad de las Islas Baleares (UIB) (Palma de Mallorca)" },
    {
      value:
        "Escola Superior de Disseny de les Illes Balears (Palma de Mallorca)",
    },
    { value: "Universidad de la Laguna (ULL) (Santa Cruz de Tenerife)" },
    {
      value:
        "Universidad Internac. Menéndez Pelayo (UIMP) (Santa Cruz de Tenerife)",
    },
    { value: "Univ. de las Palmas de Gran Canaria (ULPGC) (Las Palmas)" },
    { value: "Universidad de las Hespérides" },
    { value: "Universidad del Atlántico Medio (Las Palmas)" },
    { value: "Universidad Europea de Canarias" },
    { value: "Universidad Fernando Pessoa - Canarias (Las Palmas)" },
    { value: "Universidad de León (UNILEON) (León)" },
    { value: "Universidad de Valladolid (UVA) (Valladolid)" },
    { value: "Universidad de Salamanca (USAL) (Salamanca)" },
    { value: "Universidad de Burgos (UBU) (Burgos)" },
    { value: "Universidad Internacional Isabel I de Castilla (Burgos)" },
    { value: "Universidad Católica de Ávila (UCAV) (Ávila)" },
    { value: "Universidad Pontificia de Salamanca (UPSA) (Salamanca)" },
    { value: "Universidad Europea Miguel de Cervantes (UEMC) (Valladolid)" },
    { value: "Universidad Internac. de Castilla y León (UNICYL) (Valladolid)" },
    { value: "IE University (Segovia)" },
    { value: "Universidad de Cantabria (UNICAN) (Santander)" },
    { value: "Universidad Internac. Menéndez Pelayo (UIMP) (Santander)" },
    { value: "Universidad Europea del Atlántico" },
    {
      value:
        "Centros Extranjeros Autorizados por la Comunidad Autónoma de Cantabria",
    },
    { value: "CESINE (Cantabria)" },
    { value: "Univ. de Castilla la Mancha (UCLM)" },
    { value: "Universidad Internac. Menéndez Pelayo (UIMP) (Cuenca)" },
    { value: "Universidad de Extremadura (UNEX)" },
    { value: "Universidade da Coruña (UDC) (La Coruña)" },
    { value: "Univ. de Santiago de Compostela (USC)" },
    { value: "Universidad Internac. Menéndez Pelayo (UIMP)  (La Coruña)" },
    { value: "Universidade de Vigo (UVIGO)" },
    { value: "Privadas:" },
    { value: "Esc. Sup. de Gestión Comer. y Marketing (ESIC) (Galicia)" },
    { value: "Universitat Autónoma de Barcelona (UAB) (Barcelona)" },
    { value: "Universitat de Barcelona (UB) (Barcelona)" },
    { value: "Universitat Politécnica de Catalunya (UPC) (Barcelona)" },
    { value: "Universitat Pompeu Fabra (UPF) (Barcelona)" },
    { value: "Universidad Internac. Menéndez Pelayo (UIMP) (Barcelona)" },
    { value: "Universitat de Lleida (UDL) (Lérida)" },
    { value: "Universitat de Girona (UDG) (Girona)" },
    { value: "Universitat Rovira i Virgili (URV)" },
    { value: "Escola Sup. de Música de Catalunya (ESMUC) (Barcelona)" },
    { value: "Escola Sup. de Comerç Internacional UPF (ESCI) (Barcelona)" },
    { value: "Universitat Ramon Llull (URL) (Barcelona)" },
    { value: "Universitat Internacional de Catalunya (UIC) (Barcelona)" },
    { value: "Barcelona Technology School (Barcelona)" },
    { value: "Universitat Oberta de Catalunya" },
    { value: "Universidad Blanquerna" },
    { value: "Universidad Euncet" },
    { value: "Universitat de VIC (UVIC)" },
    { value: "Universitat Abat Oliba CEU (UAO)" },
    { value: "EAE Business School" },
    { value: "EADA Esc. de Alta Dirección y Administración" },
    { value: "Fundación IQS" },
    { value: "Escola Superior de Disseny (ESDI)" },
    { value: "Escola Universitària d’Hoteleria i Turisme (CETT)" },
    { value: "Fundació Universitària del Bages (FUB)" },
    { value: "ESADE Law & Business School" },
    { value: "Centro de Estudios Financieros (CEF)" },
    { value: "Escuela Universitaria Politéc. de Mataró (EUPMT)" },
    { value: "Hotel - Escuela de Sant Pol de Mar" },
    { value: "Escuela de Pilotos" },
    { value: "Esc. Sup. de Gestión Comer. y Marketing (ESIC)" },
    { value: "Universidad de Alcalá de Henares (UAH)" },
    { value: "Universidad Autónoma de Madrid (UAM)" },
    { value: "Universidad Complutense de Madrid (UCM)" },
    { value: "Universidad Carlos III de Madrid" },
    { value: "Universidad Rey Juan Carlos (URJC)" },
    { value: "Universidad Politécnica de Madrid (UPM)" },
    { value: "Centros de Nivel Universitario" },
    { value: "Centros Dependientes del Ministerio de Defensa" },
    { value: "Centros Extranjeros Autorizados por la Comunidad de Madrid" },
    { value: "Universidad Alfonso X El Sabio (UAX)" },
    { value: "Universidad Antonio de Nebrija" },
    { value: "Universidad Camilo José Cela (UCJC)" },
    { value: "Universidad de Saint Louis" },
    { value: "Universidad de San Pablo-CEU" },
    { value: "Universidad Europea de Madrid (UEM)" },
    { value: "Universidad Eclesiástica San Dámaso" },
    { value: "Universidad Francisco de Vitoria (UFV)" },
    { value: "Universidad Pontificia de Comillas" },
    { value: "Universidad Tecnología y Empresa" },
    { value: "EAE Business School" },
    { value: "Escuela Europea de Dirección y Empresa (EUDE)" },
    { value: "Escuela Europea de Negocios (EEN)" },
    { value: "Escuela de Organización Industrial (EOI)" },
    { value: "Esc. Sup. de Gestión Comer. y Marketing (ESIC)" },
    { value: "ESADE Law & Business School" },
    { value: "Centro de Estudios Financieros (CEF)" },
    { value: "Centro de Estudios Superiores Felipe II" },
    { value: "Centro de Estudios de Postgrado de Admin. de Empresas CEPADE" },
    { value: "Centro Universitario Villanueva" },
    { value: "UNIR Business School" },
    { value: "IMF Business School" },
    { value: "Escuela de Negocios CISDET" },
    { value: "Colegio Universitario de Estudios Financieros (CUNEF)" },
    { value: "Universidad de Murcia (UM) (Murcia)" },
    { value: "Universidad Politécnica de Cartagena (UPCT) (Murcia)" },
    { value: "Universidad Internac. Menéndez Pelayo (UIMP) (Cartagena)" },
    { value: "Universidad Católica San Antonio (UCAM) (Murcia)" },
    { value: "Universidad del País Vasco (Vizcaya)" },
    { value: "Universidad de Deusto" },
    { value: "Mondragon Unibertsitatea (Guipúzcoa)" },
    { value: "IMF Business School (Vizcaya)" },
    { value: "Esc. Sup. de Gestión Comer. y Marketing (ESIC) (Vizcaya)" },
    { value: "Universidad Pública de Navarra (UNAVARRA)" },
    { value: "Universidad de Navarra (UNAV)" },
    { value: "Esc. Sup. de Gestión Comer. y Marketing (ESIC) (Pamplona)" },
    { value: "Universidad de La Rioja (UNIRIOJA) (Logroño)" },
    { value: "UNIR Business School (Logroño)" },
    { value: "Universidad Internacional de la Rioja (Logroño)" },
    { value: "Universidad de Alicante (UA) (Alicante)" },
    { value: "Universidad Miguel Hernández de Elche (UMH) (Alicante)" },
    { value: "Universitat Jaume I (UJI) (Castellón)" },
    { value: "Universitat Politécnica de Valencia (UPV) (Valencia)" },
    { value: "Universitat de Valencia (UV) (Valencia)" },
    { value: "Universidad Internac. Menéndez Pelayo (UIMP) (Valencia)" },
    { value: "Universidad Cardenal Herrera-CEU (Valencia)" },
    { value: "Universidad Cat. de Valencia S. V. Mártir (UCV) (Valencia)" },
    { value: "Centro de Estudios Financieros (CEF) (Valencia)" },
    { value: "Esc. Sup. de Gestión Comer. y Marketing (ESIC) (Valencia)" },
    { value: "Florida Centro de Formación (Valencia)" },
    { value: "IMF Business School (Valencia)" },
    { value: "Universidad Internacional de Valencia" },
  ]);

  const [university, setUniversity] = useState("");
  const navigation = useNavigation();
  const text = "How old are you? :)";
  const [errorUniversity, setErrorUniversity] = useState(false);

  useLayoutEffect(() => {
    const loadLocation = async () => {
      const response = await getCurrentLocation();

      if (response.status) {
        currentUser.locationPrivacy = true;
        currentUser.location = response.location;
      }
    };

    loadLocation();
  }, []);

  const handleSelectUni = () => {
    if (university != "") {
      currentUser.uni = university;
      navigation.navigate("AgeSelectionScreen");
    } else setErrorUniversity(true);
  };
  console.log(currentUser);

  return (
    <Layout>
      <Ionicons
        name="chevron-back-outline"
        size={30}
        style={{ position: "absolute", top: 60, left: 10 }}
        onPress={() => navigation.goBack()}
      />
      <View className="items-start w-full ml-32 mb-24">
        <Text className="text-3xl" style={{ fontFamily: "Poppins_700Bold" }}>
          Enter your
        </Text>
        <Text className="text-3xl" style={{ fontFamily: "Poppins_700Bold" }}>
          University
        </Text>
      </View>
      <View className="w-3/4 h-10">
        <SelectList
          placeholder="Select University"
          searchPlaceholder="University"
          dropdownStyles={{ backgroundColor: "white", borderWidth: 0 }}
          boxStyles={{ backgroundColor: "white", borderWidth: 0 }}
          inputStyles={{ fontFamily: "Poppins_500Medium" }}
          dropdownItemStyles={{ fontFamily: "Poppins_500Medium" }}
          setSelected={setUniversity}
          data={universitiesList}
        />
      </View>
      {errorUniversity ? <Text>Error university</Text> : <></>}
      <View className="bottom-0 absolute w-full mb-4 items-center">
        <TouchableOpacity
          style={{
            width: "90%",
            height: 40,
            backgroundColor: "white",
          }}
          className="items-center justify-center rounded-lg"
          onPress={() => handleSelectUni()}
        >
          <Text style={{ fontFamily: "Poppins_500Medium" }}>{text}</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default UnivesitySelectScreen;
