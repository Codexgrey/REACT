
export default function TabButton({ children, onSelect, isSelected }) { 
    /*
    function handleClick() {
        console.log(`You clicked on the ${children} tab`);
    };
    */
    console.log('TABBUTTON COMPONENT RENDERED');
    return (
        <li>
            <button 
                onClick={onSelect} 
                className={isSelected ? "active" : undefined} 
            >
                {children} {/* or props.children */}
            </button> 
        </li>
    );
};

/*
    using props.children (component composition) approach after using attributes approach on CoreConcepts.jsx
    - every custom component will receive props
    - special built in prop: children
    - props.children - whatever is between the opening and closing tags of a component
    - e.g. <TabButton>Click me!</TabButton> -> props.children = "Click me!"
    - e.g. <TabButton><strong>Click me!</strong></TabButton> -> props.children = <strong>Click me!</strong>
*/