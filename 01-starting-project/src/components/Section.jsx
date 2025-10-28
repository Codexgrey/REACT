
// using spread operator to pass down props to a component by grouping remaining props in ...props
export default function Section ({title, children, ...props}) {
    return (
        <section {...props}> {/* spreading props to section element */}
            <h2>{title}</h2>
            {children}
        </section>
    );
}

/* 
    ... spread operator collects all remaining props into an object called props i.e {id: 'examples', className: 'my-section'}
*/