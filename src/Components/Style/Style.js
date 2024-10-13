import { createUseStyles } from 'react-jss';

const navStyle = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    padding: '0 100px'
};

const ulStyle = {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    padding: '0 100px'
};

// Apply these in JSX


const useStyles = createUseStyles({
    body: {
        fontFamily: 'system-ui',
        margin: 0,
        padding: 0
    },
    
    header: {
        backgroundColor: '#333',
        display: 'flex',
        alignItems: 'center',
        /* justify-content: space-between; Aligns the title and navigation on opposite ends */
        padding: '10px',
        justifyContent: 'center',
        borderBottom: '4px solid white' /* Add a bottom border */
    },
    
    navItem: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '16px',
        padding: '10px 15px',
        display: 'inline-block',
        position: 'relative',
    },
    navItemHoverBefore: {
        content: '""',
        position: 'absolute',
        display: 'block',
        border: '0px solid transparent',
        pointerEvents: 'none',
        width: '90%',
        height: '0%',
        borderLeft: '2px solid #fff',
        borderRight: '2px solid #fff',
        transition: 'all 0.5s ease',
        margin: '10px',
    },
    navItemHoverAfter: {
        content: '""',
        position: 'absolute',
        display: 'block',
        border: '0px solid transparent',
        pointerEvents: 'none',
        width: '0%',
        height: '80%',
        borderTop: '2px solid #fff',
        borderBottom: '2px solid #fff',
        transition: 'all 0.3s ease',
        margin: '10px',
    },
    activeNavItem: {
        border: '2px solid #fff',
        borderWidth: '90%',
    },
    imageScreen: {
        position: 'relative',
        width: '100%',
    },
    imageBackground: {
        width: '100%',
        maxHeight: '500px',
        display: 'block',
    },
    imageLogo: {
        width: '50%',
        height: 'auto',
        position: 'absolute',
        animation: 'flipX 10s infinite',
        top: '5%',
        left: '2%',
        transform: 'translate(-50%, -50%)',
    },
    imgText: {
        position: 'absolute',
        top: '50%',
        left: '65%',
        transform: 'translate(-50%, -50%)',
        color: 'black',
        fontSize: '56px',
        fontWeight: 'bold',
        fontFamily: 'gill sans, sans-serif',
    },
    introduction: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '50px 0 50px 50px',
    },
    introductionImage: {
        maxWidth: '50%',
        height: 'auto',
        marginLeft: '40px',
    },
    containerText: {
        maxWidth: '50%',
    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
        paddingBottom: '20px',
    },
    imageItem: {
        flex: '1',
        textAlign: 'center',
        marginRight: '50px',
    },
    imageItemText: {
        fontSize: '18px',
    },
    advisorImage: {
        maxWidth: '40%',
        margin: '0px',
    },
    mainContent: {
        fontSize: '20px',
    },
    contentContainer: {
        display: 'flex',
        flex: '1',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '20px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        boxSizing: 'border-box',
    },
    heading: {
        backgroundColor: '#333',
        textAlign: 'center',
        margin: '0px',
        color: 'white',
        padding: '30px',
        marginBottom: '20px',
    },
    aboutHeading: {
        backgroundColor: '#333',
        textAlign: 'center',
        margin: '0px',
        color: 'white',
        padding: '30px',
    },
    buttonBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto',
        gap: '80px',
    },
    planButtonBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        gap: '80px',
    },
    extendedButtonBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        gap: '80px',
    },
    planButton: {
        padding: '25px 50px',
        listStyleType: 'none',
        backgroundColor: 'lightgray',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'black',
        textAlign: 'center',
        textDecoration: 'none',
        borderRadius: '5px',
        fontSize: '20px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
        width: '100%',
    },
    planButtonHover: {
        opacity: '0.8',
        backgroundColor: 'black',
        color: 'white',
    },
    card: {
        width: '400px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#fff',
        textAlign: 'center',
        marginBottom: '30px',
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'inherit',
    },
    cardImage: {
        width: '100%',
        height: '300px',
        borderRadius: '5px',
    },
    contactContainer: {
        display: 'flex',
        maxWidth: '800px',
        width: '100%',
        backgroundColor: '#fff',
        boxShadow: '0 100px 100px rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
        overflow: 'hidden',
    },
    contactLeft: {
        flex: '1',
        padding: '30px',
    },
    contactLeftTitle: {
        fontSize: '24px',
        marginBottom: '20px',
        color: '#333',
    },
    contactInputs: {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '16px',
    },
    contactInputFocus: {
        borderColor: '#007BFF',
        outline: 'none',
    },
    button: {
        display: 'inline-flex',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#333',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s ease',
    },
    buttonHover: {
        backgroundColor: 'black',
    },
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '10px 0',
        width: '100%',
    },
    coreFeatureBox: {
        borderRadius: '8px',
    },
    subheading: {
        fontSize: '40px',
    },
});

export default useStyles;
