import { setBrowsers } from "./components/browsers";
import { setSliders } from "./components/sliders";
import { setTabs } from "./components/tabs";
import { setForm } from "./components/form";

if (document.body) {
    setBrowsers();
    setSliders();
    setTabs();
    setForm();
}
