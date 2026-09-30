import logo from "../assets/investment-calculator-logo.png"


export default function  Header()
{
    return (
        <header className="bg-dark text-white text-center py-4 shadow-sm">

        <img src={logo} alt="Logo showing a money bag" className="header-logo mb-3" />
        <h1 className="h2 mb-0">Investment Calculator</h1>
        <p className="text-white-50 mb-0 mt-2">
             Plan your investments and track your returns </p>
    </header>
    );
}


// import logo from "../assets/investment-calculator-logo.png";
// import styles from "./Header.module.css";

// export default function Header() {
//     return (
//         <header className={styles.header}>

//             <img
//                 src={logo}
//                 alt="Investment Calculator Logo"
//                 className={styles.logo}
//             />

//             <h1 className={styles.title}>
//                 Investment Calculator
//             </h1>

//         </header>
//     );
// }