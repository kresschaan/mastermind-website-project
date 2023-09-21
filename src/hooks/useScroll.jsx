export default function scrollToSection(ele) {
    const element = document.getElementById(ele);

    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}
