function ProgramList(props) {

    const ProgramDescription = props.ProgramDescription
    return (
        <>
            {ProgramDescription.map(element =>
                <div key={element.id}>
                    <h4>{element.title}</h4>
                    <p>{element.description}</p>
                </div>
            )}
        </>
    )
};

export default ProgramList;