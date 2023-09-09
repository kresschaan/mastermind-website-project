export default function scrollToSection(ele) {
    const element = document.getElementById(ele);
    console.log(element);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}
