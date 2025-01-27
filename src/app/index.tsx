import { Text, View, ScrollView } from "react-native";
import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import Constants from 'expo-constants'
import { Trending } from "../components/trending";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView 
      style={{flex: 1}}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false} 
      >
        <View className="w-full px-4" style={{marginTop: statusBarHeight + 8}}>
          <Header/>

          <Banner/>

          <Search/>

        </View>

        <Section name="comidas em alta" label="veja mais" action={() => console.log("cliclou no veja mais")} size="text-lg"/>
        <Trending/>
        <Section name="Famosos" label="veja mais" action={() => console.log("cliclou no veja mais")} size="text-lg"/>

    </ScrollView>
  );
}
