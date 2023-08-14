type TestProps = {
    test: string;
}

export const Menubar = (props: TestProps) => {
    return (
        <div className="menubar"> 
            <h1>Menubar {props.test}</h1>
        </div>
    )
}

