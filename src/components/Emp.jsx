const Emp = ({title,city,name}) => {
    return ( <section>
        <h1 style={{display:'inline', padding: '5px'}}>{title}</h1>
        <h1 style={{display:'inline', padding: '5px'}}>{city}</h1>
        <h1 style={{display:'inline', padding: '5px'}}>{name}</h1>
    </section> );
}
 
export default Emp;

