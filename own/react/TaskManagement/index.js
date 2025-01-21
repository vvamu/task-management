/*import { AppRegistry, Platform } from "react-native";


AppRegistry.registerComponent("X", () => App);

if (Platform.OS === "web") {
  const rootTag =
    document.getElementById("root") || document.getElementById("X");
  AppRegistry.runApplication("X", { rootTag });
}
*/

import { registerRootComponent } from "expo";
import App from "./src/App";

registerRootComponent(App);