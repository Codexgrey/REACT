// using props and object destructuring
 export default function CoreConcept ({title, image, description}) { // props
    return (
        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
 }

 /* 
    const CoreConcept = (props) => {
        return (
            li>
                <img src={props.image} alt={props.title} />
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            <li>
        );
    };

    export default CoreConcept;
 */ 